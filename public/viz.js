var scene = new THREE.Scene();
var fieldOfView = 75;

var initLinkColor = "#88b826"
var hoverLinkColor = "#fbf1c7"

var aspectRatio = window.innerWidth / window.innerHeight;

//render planes
var nearPlane = 0.01;
var farPlane = 40000
var camera = new THREE.PerspectiveCamera(
fieldOfView, aspectRatio, nearPlane, farPlane
);
//-200, 0, 1800
camera.position.set(100,350,1370);
var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setClearColor( 0x000000, 0 );
var wWidth = window.innerWidth;
var wHeight = window.innerHeight;
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(wWidth, wHeight );
var firstDiv = document.getElementById("firstDiv")
firstDiv.append(renderer.domElement)
renderer.domElement.style.position = "absolute";
var controls = new THREE.PanControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(450, 350, -500)

var loadedPosts = 0;
const interaction = new THREE.Interaction(renderer, scene, camera);



function addPost(x,y,sf, img, link, description, description2, z=0){
    var pdown = false;
  var loader = new THREE.TextureLoader(); 
    var texture = loader.load( "./images/"+img, function ( tex ) {
      const width = tex.image.width;
      const height =  tex.image.height;
        
      const newPost = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(width*sf,height*sf),
        new THREE.MeshBasicMaterial({map: tex})
      )
      newPost.position.set(x,y,z);
      scene.add(newPost);
      
      newPost.cursor = 'pointer';
      clicks = 0;
      newPost.on('pointerdown', function(ev) {
          pdown = true;
          console.log(pdown)
          setTimeout(function(){ pdown = false}, 200);
      });
      //create text overlay
      newPost.on('pointerup', function(ev) {
                   console.log(pdown)
        if(!link.includes(".com") && pdown === true){
            window.location.href = link
            /*
            document.getElementById("browser").src = link
            //for visibility
            document.getElementById("browser").style.backgroundColor = "white"
            document.getElementById("iframeContainer").style.zIndex = "1000"
            */
        }
        else if(link != "" && pdown === true){
            window.location.href = link
        }
      });
      newPost.on('mouseover', function(ev) {
      var id = link.split(".")[0]
      document.getElementById(id).style.color = hoverLinkColor;
      })
      newPost.on('mouseout', function(ev) {
        var id = link.split(".")[0]
      document.getElementById(id).style.color = initLinkColor;
      })
    });
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    loadedPosts++;
  }

  function addVideo(x,y,sf, video, link, description, description2, z=0){
    var vid = document.getElementById('GAN');
    vid.play();
    var texture = new THREE.VideoTexture(vid);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBFormat;
    const width = vid.width;
    const height =  vid.height;
    const newPost = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(200*sf,200*sf),
      new THREE.MeshBasicMaterial({map: texture})
    )
    newPost.position.set(x,y,z);
    scene.add(newPost);
    newPost.cursor = 'pointer';
    clicks = 0;
    
    //create text overlay
    newPost.on('click', function(ev) {
        if(link !== ""){
    window.location.href = link
        }
    });
    
    newPost.on('mouseover', function(ev) {
        //hover
    var id = link.split(".")[0]
    document.getElementById(id).style.color = hoverLinkColor;
    })
    
    newPost.on('mouseout', function(ev) {
    var id = link.split(".")[0]
    document.getElementById(id).style.color = initLinkColor;
    })
     texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    loadedPosts++;
    }

let coords = [
    [900,100],
    [-800,900],
    [-1050, 100],
    [-700, -100],
    [400, -400],
    [800, -450],
    [-200, -500],
    //city
    [-1600, 1800],
    [700, -1800]
    ]

addPost(0, 0, 0.5, "icon.png","blog.html","Eric Xia","Hello, I'm Eric! This is my portfolio. Contact me at ericpingxia@gmail.com",-20)
setTimeout(function(){
    
  addPost(coords[0][0],coords[0][1],1.3, "syn.png", "synplifier.html", "Synplifier",  "making synthetic biology more accessible, summer 2020");
  
  addPost(coords[1][0],coords[1][1], 0.12, "g1045.png", "arrow", "Illustrated Proof of Arrow's Theorem", "why all democracies can fail, fall 2020", 20);
  
  addPost(coords[2][0], coords[2][1], 1.2, "tiling.png", "bmapping.html" , "brightness calibrated collages", "art + machine learning independent study, fall 2019", -90);
  addVideo(coords[3][0],coords[3][1],1.4,"GAN", "GANs.html", "Imaginary Landscapes", "art + machine learning independent study, fall 2019 ", 0);
  
  
  //addPost(coords[4][0],coords[4][1],0.55,"esperantocover.png", "esperanto1.html",  "", "", 120);
  
  //addPost(480, -120, 0.055, "conch.png", "superficial.html", "Superficial Signifiers of the Profound", "On vocab parasites. 1,662 words", -10);
  //addPost(coords[5][0], coords[5][1], 0.17, "brickuses.png", "brickuses.html", "eric's uses for a brick","",230);
  
addPost(coords[6][0]-150, coords[6][1], 0.5, "pclip.png", "paperclip.html", "'How many uses can you think of for a paperclip?'","2021", 240);

addPost(2100,-700, 0.15, "linkedin.png", "https://www.linkedin.com/in/eric-q-xia/", "","", -20);

addPost(2500,-700, 0.8, "gmail.PNG", "mailto:eriq.xia@gmail.com", "","", -20);
//addPost(-2900, 1000, 1, "polaroids.png", "GANs.html", "art", "'Rarely does the eye light on a thing, and then only when it has recognized that thing as the sign of another thing: a print in the sand indicates the tiger's passage; a marsh announces a vein of water; the hibiscus flower, the end of winter. All the rest is silent and interchangeable; trees and stones are only what they are.'", 0);
//addPost(-900*xs,550, 0.3, "paintsketch4.PNG", "images/paintsketch4.PNG", "quick sketch", "MSPaint copybashing",  -60);
//addPost(coords[7][0], coords[7][1], 0.8, "sophomore.png", "", "", "", -20);
addPost(coords[6][0]+500, coords[6][1]-300, 0.3, "tsne.png", "esperanto1.html", "Relationships Between Words", "language + machine learning independent study, spring 2020", -20);
addPost(300, 800, 0.8, "payoff.PNG", "crisis.html", "experiments in diplomacy", "designing a crisis committee format for PACMUN 2020", -20);
addPost(1400, 2100, 2.5, "o_f.PNG", "freedom.html", "optionality vs freedom", "", 30);
addPost(-1000, -1600, 1.3, "lowtech.png", "https://emreed.net/LowTech_Directory.html", "", "", 30);
addPost(-720, -1700, 0.1, "faviconright.png", "https://umabreakdown.neocities.org/", "", "", 30);
addPost(-1280, -1700, 0.15, "faviconleft.png", "https://purplehello98.neocities.org/", "", "", 30);
addPost(1300, 2000, 2, "cancerimg.PNG", "cancer.html", "", "", 50);
addPost(1100, 1870, 1, "zarathustra.jpg", "zarathustra.html", "", "", -20);
addPost(1640, 1930, 1, "simulacra.jpg", "simulacranotes.html", "", "", -40);
addPost(1900, 2000, 1, "bullshitjobs.jpg", "graebernotes.html", "", "", -80);
addPost(1500,-1800, 1.2, "blogstag.PNG", "", "", "", -50);
addPost(1900,-2200, 1.4, "applieddivinitystudies.PNG", "https://applieddivinitystudies.com", "", "", 30);
addPost(1350,-2100, 1.8, "gwern.PNG", "https://gwern.net", "", "", 20);
addPost(1250,-2300, 1.4, "nintil.PNG", "https://nintil.com", "", "", -40);
addPost(1300,-2500, 1.8, "ribbonfarm.PNG", "https://ribbonfarm.com", "", "", 30);
addPost(1200,-2800, 1.8, "jsomers.PNG", "http://jsomers.net/", "", "", 30);
addPost(0,-6000, 3, "wrld-11 (2).png", "nsc.html", "", "", 30);

},20)




window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
  controls.handleResize();
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render( scene, camera );
  controls.update();
}
animate();
