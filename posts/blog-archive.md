---
image: https://d1wumrtbuo797i.cloudfront.net/thumb-large-Decorative-4783.jpg
---
<head>
    <meta charset="utf-8">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Padauk&display=swap" rel="stylesheet">
</head>

<style>
:root { 
  --hl-color: #666;
  --text-color: #555;
  --bg-color: #eee;
  --link-color: #cb4b16;
}
#outlineContainer{
    position: fixed;
    cursor: grab;
    overflow: auto;
    width: 16em;
    left: 0px;
    top: 0;
    bottom: 0;
    color: var(--text-color);
    font-size: 12px;
}
#outlineContainer a{
    background-color: #ddd;
}
p{
    margin: 0.5em 0em;
    
}
h1,h2,h3,h4,h5,h6{
    font-size: 24px;
    font-family: 'Padauk', sans-serif;
    color:  var(--text-color);
}
#main h3{
    padding: 0.1em 0.3em;
    background-color: #ddd;
    margin: 1em 0em;
    color: var(--text-color);
}
a {
   font-family: sans-serif;
    color:  var(--link-color);
    text-decoration-color:  var(--link-color);
    text-decoration-thickness: 3px;
}

a:hover{
    font-style: oblique;
}

html {
    font-size: 21px;
    line-height: 1.25;
    font-family: 'Padauk', sans-serif;
    color:  var(--hl-color);
    padding-top: 0px;
    min-height: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background: #70bg32;
    background-repeat:no-repeat;
    background: var(--bg-color)
}
body{
    margin-top: 0px;
}
     blockquote {
  background: none;
      font-style: oblique;
     }

#main {
    padding-bottom: 400px;
    background-color: var(--bg-color);
    margin: 0 auto;
    margin-top: 2em;
    width: 31em;
    color:  var(--text-color);
}

#topbar{
    display: absolute;
    left: 5px;
    top: 2px;
    text-align: center;
}

#topbar *{
        vertical-align: top;
}

</style>

<body>
    
<div id="topbar">
    <p style="font-size: 22px; color: #0000ff; position: absolute; right: 0px; top: 0px; margin-top: 0px; z-index: 999; text-align:left;" id="quotes"></p>
    <a href="/" style="text-decoration: none; background-color: #ffff00; color: #000">⤺ go home (!)</a>
    <a href="http://word.golf" style="text-decoration: none; background-color: #ffff00; color: #000">⤺ go word golfing</a>
                <script>
    array = ["I miss the rage", 
    "beneath the pavingstones-- the beach!!",
    "good is dead",
    "we stand on the last promontory of the centuries...",
    "in the caverns of order our hands shall forge bombs",
    "there is no speed limit",
    "my friends are going to save the world",
    "stay changed",
    "the ceiling is the roof"
    ]
    function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
    k = Math.floor(Math.random() * array.length)
    function changeQuote(){
    randomElement = array[k];
    k = k + 1;
    k = k % array.length
    randomElement = randomElement.split("")
    ll = randomElement.length
    console.log(randomElement)
    console.log(ll)
    quoteArray = new Array(ll).fill("□")
    idxidx = 0;
    idxArray = []
    for (let i = 0; i < ll; i++) {
     idxArray.push(i)
    }
    shuffleArray(idxArray)
    }
    function spreadText(){
    if(idxidx < idxArray.length)
    {
        thisIdx = idxArray[idxidx] 
       quoteArray[thisIdx] = randomElement[thisIdx]
       idxidx +=1
       document.getElementById("quotes").innerText = quoteArray.join("")
    }
    }
    changeQuote()
    setInterval(function(){changeQuote()}, 4000)
    setInterval(function(){spreadText()},30)
    </script>
</div>

<div id="main">
    <h1 style="font-size: 64px; display: inline; text-align: center; color: #444">eric's blog ⣪</h1>
<h3>June 12th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p>Reading <em>The Fountainhead</em> again and I still love it. Not taking Roark or his career as role model. I haven't read up on Objectivism and I don't agree with ayn rand's patriotic takes. Undoubtedly this book's promotion of starchitecture was catastrophic for the public psyche. But... the book itself is great. It's not a fairytale; it is however a romanticization which wills itself into becoming true.</p>
<blockquote>Keating did not care so long as his clients were impressed; the clients did not care so long as their guests were impressed, and the guests did not care anyways.</blockquote>
<hr>
<p> So much done today! </p>
<p>Spent the morning getting timestamps working, using a helper utility to scrape git last modified dates for each markdown file. That way when the files are built on the server the date is the correct one.  </p>
<p>Along with some vital UI upgrades I got a skeleton 3D canvas set up within Next.js with three-react/fiber <a href="https://elegant-minsky-b916c9.netlify.app">https://elegant-minsky-b916c9.netlify.app</a></p>
<p>I also finally got around to setting up an SSH key for github, so now I can push changes live really quick.</p>
<br>
<p>Spent the evening on <a href="word.golf">word.golf</a></p>
<p>now there are routes for every english word! Try word.golf/staircase or word.golf/mango </p>
<p>After some deliberation I removed the timer from the main interface. It's distracting and prevents people from exploring. Might reintroduce it for specific modes though.</p>
<p>I also implemented copy to clipboard, connected git to github, and fit more words. </p>
<h3>June 10th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p>I graduated high school today, which should warrant at least a medium amount of self reflection. </p>
<p>First off -- I&#39;m experiencing an increasing amount of friction with the tools I use. This includes</p>
<ul>
<li>Most annoyingly the &quot;f&quot; and backspace key caps on my keyboard have flaked off. This has resulted in an unnecessary rewiring of those key locations in my mind so that I can hit them right on the nub.</li>
<li><p>My Obsidian vault, which has gradually devolved from a well kept garden of school notes to a zoo of different sized thoughts. I will need to go back and categorize my writing and reflections more carefully.</p>
<ul>
<li>I wanted to find a way to immediately publish notes from my vault. Should I pay for Obsidian Publish? ($8/month, $96/ year which is a large expense but not impossible to get). </li>
<li>The thing is, I don&#39;t even use a lot of markdown features. I just want links, lists, and headings to persist. to be honest I&#39;ve gradually stopped using links due to site display prio. RIP zettlekasten</li>
</ul>
</li>
<li><p>My computer is running out of space and frequently overheats or fails to charge.</p>
</li>
<li>My site has gone from a list of projects to an unstable scatter of clickable things and a huge one-page blog. Editing this blog.html file is becoming more and more unsustainable. <ul>
<li>How to solve this?</li>
<li>reimagine the main page to automate pushing objects to a scrollable display without three.js. This scrollable display can be done with css/ tachyons, although to be honest it&#39;s not that interesting. </li>
<li>How do I present primarily visual projects aside primarily textual projects in an engaging way?</li>
<li>The current approach of just taking screenshots of bits of text to paste onto the three.js canvas is terrible. I need to find a way to automate this. I&#39;m reluctant to use / adapt an existing static site generator: maybe I can build one? This is a fun side programming project that would result in a unique sort of website.<ul>
<li>How to present my interests/ organize knowledge efffectively<ul>
<li>What ARE my interests anyways</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>when in doubt, simplify. there are two essential projects for thought-sanity:<pre><code>  - Clean Up Day: spend a few hours cleaning up <span class="hljs-keyword">the</span> obsidian vault. This involves elaborating <span class="hljs-keyword">on</span> past thoughts <span class="hljs-keyword">and</span> getting more recent thoughts <span class="hljs-keyword">in</span> so <span class="hljs-keyword">it</span> <span class="hljs-keyword">isn't</span> all super outdated notes <span class="hljs-keyword">on</span> linear algebra.
  - Using markdowntohtml.com generator works FINE. That <span class="hljs-keyword">isn't</span> actually <span class="hljs-keyword">the</span> <span class="hljs-built_in">real</span> problem. The <span class="hljs-built_in">real</span> problem <span class="hljs-keyword">is</span> <span class="hljs-keyword">the</span> size <span class="hljs-keyword">of</span> <span class="hljs-keyword">the</span> blog.html <span class="hljs-built_in">file</span> <span class="hljs-keyword">and</span> <span class="hljs-keyword">its</span> disjunction <span class="hljs-keyword">from</span> <span class="hljs-keyword">the</span> main navigation. I have a good idea <span class="hljs-keyword">for</span> what <span class="hljs-keyword">my</span> new site should look like actually. Explorer, sparse retrofuturistic details. Keep <span class="hljs-keyword">the</span> omnidirectional navigation. Create groups <span class="hljs-keyword">to</span> display. Ditch <span class="hljs-keyword">the</span> three.js
      - This <span class="hljs-keyword">is</span> a ton <span class="hljs-keyword">of</span> work though
</code></pre></li>
</ul>
<p>Notes to publish / write/ Books to ReAd: Reason and Violence (a condensed summary of jean-paul sartre&#39;s writing), thoughts on Camus&#39;s the Fall, ...</p>
<p>And then we have our word.golf project. I&#39;m going to be pretty busy.</p>
<p>I have never found someone my age doing something more interesting, to me, than the things I work on. Although I'm not comfortable being artist-first, or anything adjacent to "indie game developer", I still have what might be considered a fundamental delusion: my own creative interests lie ready to be picked up by the general public. </p>
<p>But why not -- it&#39;s exciting enough!</p>
<h3>June 7th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p>yeah it was. <a href="http://www.word.golf">word.golf</a></p>
<p>I'm really stupid and decided to spontaneously delete a config file a few days ago. I think that was the problem?</p>
<hr>
<p>First day of summer. I'm burning it all down and starting over</p>
<h3>June 5nd <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p>Something is very, very wrong. I'll have to migrate off of Elastic Beanstalk. Sigh.</p>
<h3>June 3nd <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p>Fishing at Rusty Lake :)</p>
<img src="https://eric-xia.com/images/window.jpg" style="width: 100%">
<img src="https://eric-xia.com/images/IMG_8733.jpg" style="width: 100%">
<img src="https://eric-xia.com/images/IMG_8780.JPG" style="width: 100%">

<h3>June 2nd <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p>switched load balancer so <a href="http://www.word.golf/">http://www.word.golf/</a> redirects to https now.</p>
<p>Still can't connect to the EC2 through SSH</p>

<h3>May 31th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
soon to come: word vector based little alchemy, starting from water, earth, wind, and fire
<pre>
    tidal and dark create sea
tidal and light create water
tidal and gas create water
tidal and fog create winds
tidal and wave create massive
tidal and weather create storms
tidal and oil create water
tidal and air create water
tidal and storm create winds
tidal and earth create ocean
tidal and dry create water
tidal and conditions create water
tidal and flow create stream
tidal and massive create wave
tidal and hard create wind
tidal and ocean create sea
tidal and electricity create water
tidal and winds create storm
tidal and salt create water
tidal and water create drainage
rain and wind create waves
rain and impact create caused
rain and waters create water
rain and soil create moisture
rain and warm create chilly
rain and night create morning
rain and cold create warm
rain and temperature create humidity
rain and explosions create fires
rain and atmosphere create warm
rain and seen create day
rain and heavy create light
rain and fresh create hot
rain and caused create flooding
rain and seas create winds
rain and fire create night
rain and tide create waves
rain and immediately create days
rain and dark create light
rain and light create heavy
rain and gas create water
rain and fog create clouds
rain and wave create wind
rain and weather create conditions
rain and oil create water
rain and air create light
rain and storm create hurricane
rain and earth create dust
rain and dry create wet
rain and conditions create weather
rain and flow create water
rain and massive create caused
rain and hard create rough
rain and ocean create waves
rain and electricity create water
rain and winds create gusts
rain and salt create water
rain and water create dry
wind and impact create effect
wind and waters create ocean
wind and soil create surface
wind and warm create cool
wind and night create coming
wind and cold create dry
wind and temperature create humidity
wind and explosions create waves
wind and atmosphere create climate
wind and seen create much
wind and heavy create rain
wind and fresh create enough
wind and caused create damage
wind and seas create ocean
wind and fire create heavy
wind and tide create waves
wind and immediately create turn
wind and dark create light
wind and light create heavy
wind and gas create electricity
wind and fog create rain
wind and wave create caused
wind and weather create conditions
wind and oil create water
wind and air create light
wind and storm create hurricane
wind and earth create surface
wind and dry create cold
wind and conditions create weather
wind and flow create stream
wind and massive create huge
wind and hard create enough
wind and ocean create seas
wind and electricity create generating
wind and winds create gusts
wind and salt create water
wind and water create dry
impact and waters create far
impact and soil create result
impact and warm create strong
impact and night create coming
impact and cold create especially
impact and temperature create increases
impact and explosions create caused
impact and atmosphere create much
impact and seen create indeed
</pre>
<h3>May 31th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p> 7:03 am got a SSL certificate</p>
<img src="https://eric-xia.com/images/lock.PNG" style="width: 100%">
<p>4:41 am: it's getting light outside</p>
<hr>
<p>Over the moon rn</p>
<img src="https://eric-xia.com/images/runs_1.PNG" style="width: 100%">
<img src="https://eric-xia.com/images/runs_2.PNG" style="width: 100%">
<img src="https://eric-xia.com/images/group.PNG" style="width: 100%">
<h3>May 29th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<img src="https://eric-xia.com/images/wsss.PNG" style="width: 100%">
<p>features todo:</p>
<p>SAVING RUNS (to SQLite)</p>
<ul>
<li>[ ] get login recognition on index page, e.g. &quot;hello Eric!&quot;</li>
<li>[ ] indicate run completion in localstorage</li>
<li>[ ] if logged in and run completed, save the localstorage wordArray to sqlite</li>
<li>[ ] <em>clear localstorage after run exited and saved in sqlite</em></li>
<li>[ ] get sqlite data on profile page</li>
<li>[ ] display words per run</li>
<li>[ ] display average words per run</li>
</ul>
<p>HTML POSTING</p>
<ul>
<li>[ ] return error page for no input to the form (which should never happen)</li>
<li>[ ] Hide the form</li>
<li>[ ] create a SEPARATE page for lookup with the form</li>
</ul>
<p>MISC</p>
<ul>
<li>[ ] experiment with main UI. It&#39;s not cohesive right now. </li>
<li>[ ] experiment with timing. steal from geoguessr</li>
<li>[ ] consider edge cases with page back and refresh</li>
</ul>


<h3>May 29th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p>Another nice chunk of progress made on word.golf tonight. Now stores a "history item" in LocalStorage which has target_word and wordArray properties.</p>
<p>I've also switched from Jinja-based logic to javascript logic; the buttons are now dynamically generated. The side effect of this is that the data passed from python is now in the form of JSON.</p>
<p>Next steps: Completion logic (total time, ↻start again which gets a new target_word). Display words and time as user strings them together, and store time in a timeArray. </p>
<p>This is like 1923821 times more fun than the original idea lol</p>
<h3>May 28th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p><em>Heroes</em> by Franco Bifo Berardi attempts to connect the Internet, nationalist movements, and mass murderers like James Holmes vis a vis <em>Joker</em>. It has promising lines of thought but is ultimately far too academic. The words are muddled ("financial capitalism" and "fractalized time") and the book lacks a real unifying theme.
There is something very important here though to be explored between social spectacle & violent rage.
</p>
<hr>
<p>A compelling claim: the promise of blockchain, more specifically Ethereum, is really in game theory. It allows for the creation of trustworthy contracts which can turn noncooperative games into cooperative ones.
<a href="https://medium.com/@virgilgr/ethereum-is-game-changing-technology-literally-d67e01a01cf8">https://medium.com/@virgilgr/ethereum-is-game-changing-technology-literally-d67e01a01cf8</a>
</p>

<h3>May 24th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p>things I have committed myself to this summer</p>
<ul>
    <li>Spend a week reading an economics textbook THOROUGHLY in monastic solitude. End with basic understanding of economics and set of notes</li>
    <li>Spend two full days doing Physics C mechanics problems. End with assessments, redemption (or not). </li>
    <li>Spend two full days doing Physics E&M problems. Assessments as above. </li>
    <li>Spend one full day reviewing calc, trig, and algebra. </li>
</ul>
<p>This is the more fun option compared to taking summer classes. One single push > inconsistent routine</p>
<hr>
<p>Speedran Asian American Studies paper. Main theme: asian americanness not as cultural identity but existential license. I have no historical image and I'm not about to go looking for one.</p>
<h3>May 23th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p>messing around with the word embeddings and this is so much better than anything I originally planned. No list no game no psychobureacratic dictionary--</p>
<p><b>nighttime</b></p>
<p style="font-size: 13px">daytime  night-time  predawn  daylight  nightly  24-hour  summertime  15-minute  curfew  90-minute  daylong  two-hour  30-minute  late-night  hourlong  routine  noontime  curfews  hour  dusk night  nights  10-minute  10-hour  lull  20-minute  dawn  pre-dawn  rooftop  sweeps  12-hour  three-hour  45-minute  scorching  11-hour  day-time  four-hour  nightime  early-morning  lunchtime weekday  evening  hours  midnight  weeklong  prime-time  frenzied  40-minute  wintry  wintertime  usual  frenetic  thunderstorm  aerial  occasional  18-hour  13-hour  48-hour  six-hour temperatures  sporadic  monthlong  citywide  weather  simulated  simultaneous  overnight  monday-saturday  periodic  balmy  intense  intermittent  50-minute  evenings  50-day  morning frequent  filming  midsummer  raids  snowy  takeoff  searing  unscheduled  patrols  drive-time  lights  75-minute  duration  terrifying  hour-long  year-round  pause  moonless  observing outdoor  chilly  rush-hour  8-hour  sunset  frigid  two-week  steamy  mornings  2-hour  air  springlike  darkness  sleepiness  60-minute  hectic  continuous  interrupt  bombardments  10-day prolonged  weekends  humidity  directional  22-minute  nocturnal  sultry  ferocious  blackout  sunrise  20-hour  bombardment  shipboard  autumnal  80-minute  three-week  summer  fasting 25-hour  afternoon  celebratory  interrupted  blazing  skies  noisy  unannounced  newscasts  chaotic  half-hour  fog  relentless  frantic  taping  viewing  helicopter  respite  intensive pre-invasion  intensity  temperature  midday  spectacular  sweltering  fireworks  four-day  indiscriminate  workday  week-long  rainy  shower  off-peak  rehearsal  restful  incessant  stormy subzero  occurrence  17-hour  bursts  ramadan  quiet  sight  five-hour  periods  one-hour  frequency  normal  fasts  five-day  snowstorm  mock  afternoons  on-location  observe  pre newscast  120-degree  brazen  nonstop  countdown  airstrikes  weekend  round-the-clock  5-minute  inclement  snowfall  violent  uninterrupted  take-off  lighting  25-minute  36-hour  four-week during  day/night  55-minute  matinee  ride  unseasonal  raid  shoot  lockdown  muggy  sleep  35-minute  surveillance  42-day  non-directional  eight-day  saturation  visibility  illumination weeknight  12-week  broadcasts  layover  slow-motion  days  winter  gunfire  sky  climactic  islandwide  100-minute  110-degree  on-orbit  breezy  rainstorm  70-minute  pregame  15-hour daybreak  eight-week  blackouts  80-day  televised  dramatic  intervals  explosions  unrelenting  two-day  day  outbursts  glare  unscripted  conditioning  tranquil  fiery  mid-morning  five-week maneuvers  midwinter  moonlit  calm  all-night  scenes  helicopters  infrequent  drone  broadcast  80-degree  pyrotechnic  holiday  rehearsals  endless  specials  14-hour  sudden  exercise wave  blinding  frightful  underwater  gunship  three-day  grueling  lulls  12-minute  feverish  sabbath  festive  braving  clock  peak  cameras</p>
<p><b>spelunking</b></p>
<p style="font-size: 13px"> sandboarding  antiquing  sight-seeing  backpacking  canyoneering  parkour  scuba-diving  rollerblading  woodturning  abseiling  beserk  sockless  taphonomy  summercamp  rollerskating bowhunting  krump  vlogging  pasifika  nutso  massagers  bonefishing  joyriding  antiquarianism  franktown  intensives  coffeepots  espalier  dhoke  witchery  h.o.r.d.e.  tional  person-centered thorbardin  anti-de  anorthosite  witchu  sobibór  syrtos  paleoclimatology  rhymin  tonalist  cuing  off-trail  freerunning  doorstops  processual  1910-13  horseriding  seigen  pfft  downunder blackcaps  bye-bye  nanophotonics  helicoptering  drumkit  whoring  odinist  sesshin  liberationists  bird-watching  fishtailing  kerplunk  multi-sensory  deep-space  okonomiyaki  womanizers nagauta  skiiing  tipplers  skydiving  couponing  dogsledding  aruga  kremlinology  neuroeconomics  75-87  st.-joseph  soring  tinkertoys  wundagore  bhimashankar  lifecasting  nadezda parachuting  nettlebed  mixed-mode  taufa  windowblinds  anchialine  mountain-biking  urjukashvili  experience-based  freeriding  go-karting  wireshark  gambol  yamunotri  cheapskates  mafiosos ecofeminism  silvicultural  ogof  ludus  kopet  echinoids  off-roading  60-0  hillwalking  electrostimulation  pre-algebra  activity-based  heathenry  daddy-o  healthline  nebulizers  espadrille shugendō  peregrination  cloggers  d?cor  shanidar  mudflat  vanner  wildcatting  whale-watching  philodemus  orthodontia  mitz  scrooges  middle-range  outerspace  terrorvision  102-90 minigolf  herey  turtling  ignatian  pabulum  nyons  perspectival  simpletons  crusting  screwballs  trick-or-treating  paranoids  mixin  syro-palestinian  hellholes  isitingood  polarimetry  parvenus dimpling  plyometric  pronghorns  neosporin  rochestown  dodgems  faeries  single-molecule  nincompoops  cryptids  bushwhacker  kite-flying  whacko  metagenomics  teardowns  www.tucows.com helmetless  trailside  pathobiology  multicity  comping  unremembered  malacology  beasties  ethnoreligious  mocca  blokus  stargazing  bodyboard  sketchers  youthbuild  horsefeathers self-medication  shared-use  gangbusters  hayseeds  perspectivism  roadtrips  openmoko  hide-out  standardbreds  jale  sideris  hang-gliding  papillote  o'donis  zwan  theyyam  gotan  frivolities heechee  headstands  moonwalking  uninor  crozes  astrit  tm-sidhi  microstock  code-breaking  cryoablation  pylea  palaeobiology  cross-national  psytrance  eagleman  cardoons  gunsmithing middle-level  sauntering  non-associative  metalsmithing  clomp  sickos  rehabilitator  handsprings  angelology  nightclubbing  rappelling  polysomnography  swalwell  cesarani  glowworm schwingen  genoise  shortboard  refueler  adhu  berserk  tusked  odontology  pre-engineering  6-28  balgo  pirouetting  fakhoury  zipline  singngat  hellebores  lassos  vlei  thin-skinned globe-trotting  horse-riding  self-exile  firebug  nature-based  nonperson  incarnational  metabolomics  spearfishing  quondam  quickstart  puthuppally  skedaddle  nobelists  boupha  shoehorning space-age  chamfer  backrub  road-trip  jiving  crossbody  behaviourist  speleologist  opah  barnburner  1900-1950  gebregziabher  animality  paleobotany  intellipedia  thalassotherapy  artiness figure-of-eight  meatheads  sneakiness  self-cultivation  death-defying  eiderdown  findsen  chatterbots  pizmonim  bee-keeping  rollerskate  latihan  majura</p>
<p><b>hideaways</b></p>
<p style="font-size: 13px">inlets  bays  lagoons  estuaries  promontories  creeks  beaches  shallows  sandbars  headlands  anchorages  fjords  jetties  peninsulas  outcroppings  ravines  ledges  escarpments  gullies nooks  gulches  bayous  mudflats  swamps  shorelines  cliffs  marshes  sandbanks  marinas  sloughs  ridges  coastline  hillocks  waterfalls  reefs  fringed  mangroves  marshlands  craggy canyons  alcoves  promenades  toolbars  boardwalks  sidestreets  shoreline  precipices  coasts  valleys  dunes  harbours  dotted  overhangs  fast-flowing  shaded  unspoiled  caverns  hilltops basins  verandas  backwaters  eddies  watercourses  bluffs  marshy  outcrops  porticos  vegetated  shores  sheltered  crevices  crannies  vistas  picturesque  sunbathers  sinkholes  causeways riffles  footbridges  campgrounds  interludes  bottoms  gulfs  gazebos  fringing  hillsides  atolls  shallow  gatehouses  riverbank  scrubby  archipelagoes  seabeds  cantinas  seashore  wadis passageways  cove  verdant  landforms  lagoon  ponds  pinnacles  hermitages  panoramas  berms  coastlines  drop-offs  watersheds  boulevards  portholes  tumbledown  harbors  wharves breakwaters  airstrips  outcrop  redoubts  massifs  riverbanks  courtyards  mountainsides  slow-moving  plateaus  archipelagos  alleys  undulations  mountaintops  blockhouses  roadhouses  patios archways  whirlpools  fascias  foyers  camotes  comoro  bungalows  oases  lush  veranda  arrayed  pratas  indented  protrusions  porches  grassy  brackish  embayments  tree-lined  pristine drainages  coulees  buoys  fiords  seagrass  piazzas  alleyways  sprung  foramina  stairways  entryways  verandahs  midocean  skerries  swampy  cirques  plazas  mudflat  weirs  roadsides habitats  mangrove  lighthouses  manitou  zingers  ridgelines  streams  crescent-shaped  balconies  cays  lakes  bunkers  huatulco  staircases  tortugas  campsites  beachfronts  shoals  rivulets uncrowded  rocky  windswept  vents  gravelly  floodplains  riverbeds  intertidal  sullivans  flats  niches  beels  bodices  sandboxes  sanibel  depressions  interspersed  fountains  atriums maisonettes  diked  rooftops  panata  subtexts  waterways  harmonies  shortcuts  ledge  mineral-rich  balustrades  crevasses  overlooks  impoundments  low-lying  pebbled  refuges  crags walkways  enticements  gravels  bogs  slow-flowing  terraces  nestled  bunkhouses  guesthouses  springing  troughs  off-shore  creases  waterholes  secluded  fronting  wharfs  acklins pilasters  scows  kfarshuba  fishable  aquifers  macaronesian  gardiners  waterbodies  esplanades  silences  bushland  fernandina  sunsets  dissonances  kerguelen  smoky  subheadings 888-346-9867  mugsy  spigots  potholed  indentations  thickets  portages  chasms  mediterranean-type  villas  south-facing  sandy  oceanfront  tubercles  tarpon  motorboats  caves  barrooms marshland  cottages  islets  hinterland  blotches  ozekis  gables  tributaries  undulating  outriggers  ditches  inlet  shrubby  buffers  sampans  backdrops  saintes  waterslides  encampments chalices</p>
<em>aquarela do brazil</em>
<iframe src="https://drive.google.com/file/d/1YnXCzgi-HLpgVSWG_s-_EqCStfSeHjyO/preview" width="640" height="480"></iframe>
<hr>
<p>Some serious procrastination of AP Physics studying: </p>
<p><a href="http://word.golf">http://word.golf</a></p>
<p>TODO list</p>
<ul>
<li>[x]  fix was_correct error</li>
<li>[x] connect word.golf domain</li>
<li>[ ] get ssl certificate green lock</li>
<li>[ ] remove fragments from keys</li>
<li>[ ] start screen</li>
</ul>
<ul>
<li>[ ] better fake answers: select from median range</li>
<li>[ ] experiment with progressively harder: fakes get closer to real answers
variable time, fixed length modes
reward fast choices: 9, 18, 90 hole categories with speed</li>
<li>word-specific records. </li>
<li>direction specific records, e.g lerp(word_vec1,word_vec2) for 9 holes</li>
</ul>
<p>
incorrect feedback outcomes should end session, flash red? hmm</p>
<ul>
<li>I think it should end because getting it right is fairly easy</li>
<li>return all words in session</li>
<li>tree visualization of words
<li>user can choose starting word</li>
tSNE visualization (how? not necessarily useful, overly complicated)</li>
</ul>

<h3>May 20th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p>Using <a href="http://tachyons.io/">tachyons.css</a> makes me want to drop everything and just do graphic design</p>
<img src="https://eric-xia.com/images/tachyons.PNG" style="width: 100%">
<hr>
<p>Four runthroughs of the new mechanism. The first word is always taken from a list of 1,000 most common english words. The next word, illustrating the "correct" path, is then a random choice from the 10 nearest neighbors of the last one.</p>
<p>Problems: most noticeably the existence of fragments in the GLOVE vocabulary. To be removed. Also cycling back, and the existence of very similar words e.g. Judge and Judges.  </p>
<p> Otherwise it's quite exciting. The idea is that running through something of this length should take maybe 30 seconds max, as the user makes quick instinctive decisions as to which word is more related. </p>
<img src="https://eric-xia.com/images/word_ex.PNG" style="width: 100%">
<p>Current idea: choose between closest neighbor and random. Choosing correctly takes you on a walk through word-space.</p>
<hr>
<p>Today I will begin to sketch out the new interface and test out some core mechanics. The goal is to reduce friction. </p>

<h3>May 19th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>
<p>hmm</p>
<img src="https://eric-xia.com/images/IMG_8363.jpg" style="width: 100%">
<iframe src="https://drive.google.com/file/d/1ZZIso5glGA1XTeZpMFLYjS7_mJzU6AD7/preview" width="640" height="480"></iframe>

<h3 style="display:inline;">May 18th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> 
<p>DEPLOY SUCCESSFUL WOOOOOOOO</p>
<a href="http://flask-env-golf-round-55.eba-wedtnwmg.us-west-2.elasticbeanstalk.com/golf">http://flask-env-golf-round-55.eba-wedtnwmg.us-west-2.elasticbeanstalk.com/golf</a>
<p>Now for a complete UI overhaul and building functionality. It should be a functional interface to a beautiful thing, a legitimate tool for the mind with no aesthetic friction. System defaults + bootstrap e.g. <a href="https://protobowl.com/">protobowl</a>. Tracking history is not at all important compared to good prompts and features. I most importantly need to prevent people from cheating by entering the same word, plural versions, or "the/and/that/this" which have high averages...</p>
<p></p>
<hr>
Deployed to EB kinda... but it cannot find the entry point. The grind continues
<h3>May 17th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> </h3>

Currently working on hosting app with AWS Elastic Beanstalk. It has been surprisingly smooth so far. I have some kind of requirements.txt error though.
<hr>
<p>Ran around 25 miles yesterday from lynnwood to downtown seattle. I can do maybe 15 miles without serious stopping, the rest was sightseeing. Want to recover quicker / push distance threshold </p>
<h3>May 17th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> links</h3>

<p><a href="https://www.qualiaresearchinstitute.org/research">the qualia research institute is attempting to formulate a mathematical foundation for consciousness</a></p>
<p><a href="https://static1.squarespace.com/static/5d72e78ebe277f3ec4400092/t/5f236514eba06d2ece1f92f5/1596155170305/Principia_Qualia.pdf">see the intriguingly named "Principia Qualia"</a></p>
<hr>
<p><a href="https://applieddivinitystudies.com/pdf/moral_progress.pdf">Applied Divinity Studies defends progress as moral. This addresses the common belief that happiness does not correlate with income beyond $75,000/yr</a></p>
<p><a href="https://www.pnas.org/content/107/38/16489">It turns out that the paper which found the above also found a correlation between income and responses to something called the Cantril Ladder beyond the 75k point</a></p>
<p><a href="https://en.wikipedia.org/wiki/Happiness#Measurement"> The Cantril Ladder asks respondents to imagine the best possible life as a 10, the worst possible life as a 0, and then rank their current lives on that scale. Along this metric, happiness continues to rise even as respondents surpass the famous $75,000 level. </a></p>
<p><a href="https://worldhappiness.report/faq/">Importantly, the World Happiness Report is based on the Cantril Ladder</a></p>
<h3>May 15th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3>
<p>A trick that really works: </p>
<p>Do one easy task and one hard task at the same time. This way, you balance out any momentary frustration with a known reward simply for existing. </p>
<p>ex: doing homework while waiting for something to bake, writing on long car rides, reading while brushing teeth</p>
<p>you can do this everyday by writing in the margins while reading, or recording your screen as you work. Producing something motivates you no matter what.</p>

<h3>May 14th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3>
<p>After 23 successive deployments and 12 hours the app finally got onto heroku (briefly, before crashing out of memory): <a href="http://word-golf.herokuapp.com/golf">http://word-golf.herokuapp.com/golf</a>. I need 1gb RAM which is $50/mo. I am going to look into switching to AWS elastic beanstalk. Either way I am glad i will never have to go through this again.</p>
<p>mistakes I made while deploying:</p>
<ul>
    <li>using backslashes \\ for specifying file path (assume windows specific). forward / worked</li>
    <li>not putting the entry point (wsgi.py) outside of the rest of the application folder. This ends up being necessary because the line ". import routes" in create_app needs to know there exists a parent folder?</li>
    <li>Didn't even have a wsgi.py file for a long time. unfortunately that's the file that actually creates the app.</li>
    <li>specifying the wrong versions of dependencies, and not using a virtual environment from the beginning.</li>
    <li>the Procfile, which specifies the entry point to the app for Heroku, has a really weird format: "web: gunicorn wsgi:app". The variables are on the left side :| </li>
    <li>I kept on setting __init__.py as the entry point, not wsgi.py because it does fine locally with "flask run"</li>
    <li>happily I did not download 6 gb Visual Studio C++ when gensim asked me to. Instead I abandoned my attempt at making a virtual environment  </li>
    <li>dotenv, which lets you configure flask with a .env file, wouldn't install so I removed it </li>
    <li>forgot to specify modules in requirements.txt</li>
    <li>didn't have requirements.txt in the root folder</li>
</ul>
Overall though this was a hard-won victory. I am ready to continue
<hr>
I was so naive.
<hr>
<p>the MVP is deploying to heroku right now! I have saved the login auth work for when I have more than 0 hours of sleep.</p>
<p> wasted some time making fireworks in p5 which don't even look that good. Got a lot of other stuff done though, including writing copy.</p>
<h3>May 13th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3>
<p>Still thinking about this</p>
<img src="https://www.eric-xia.com/images/deweycategories.jpg" style="width: 100%">
<hr>
<p></p>Coding. I have a MVP and it is so fast. This is so exciting
<p>I also decided to put some effort into an artist statement for the senior show. It comes off as overly angsty & dense but who cares. I am listening to Killing in the Name </p>
<h3>Eric's senior year artist statement</h3>
<blockquote>
<p>I want to close the distance between art and daily life, and the three projects I&#39;m proudest of from this year each try to do this.</p>
<br><br>
<img src="https://www.eric-xia.com/images/paperclip real.PNG" style="width: 100%">
<br><br>
<p>The first one visualizes the possible uses for a paperclip. 
Taking 3,001 responses to a research study that asked its participants how many uses of a paperclip they could think of (Guilford&#39;s Alternative Uses Test), I searched a stock icon library and got about 600 unique representations (fishhook, dart, slinky, clothespin...). Collectively, these images are a testament to both human ingenuity and the number of roles a paperclip can take on.</p>
<br><br>
<iframe src="https://drive.google.com/file/d/1y2cadY3IMiVBx3nfaYdANx_uZLNS-nJG/preview" width="640" height="480"></iframe>
<br><br>
<p>The second is a 37-minute long video of me shoveling a pile of gravel in my backyard. It asks the question: What is the nature of work? </p>
<p>In the knowledge economy of today, work is about ideas. You brainstorm projects, create proof of concepts, propose solutions to problems. These ideas are the products of today&#39;s knowledge economy, the proof-of-work for knowledge workers. </p>
<p>Yet our traditional image of work is informed by manual labor. Moving rocks, digging ditches, carting gravel: our mental models for work are based in physical action and incremental progress. It is measurable and quantifiable. By highlighting this video as a creative work, the video frames manual labor as knowledge work. By juxtaposing these two radically different kinds of work, I aim to reduce to absurdity the quantification of creativity in today&#39;s knowledge economy.</p>
<br><br>
<iframe src="https://drive.google.com/file/d/1fGuMgOS7NNiPeiouol7gdxj1l9ochOyN/preview" width="640" height="480"></iframe>
<br><br>
<p>The third and final project is an existential one. It centers around a single mental image:  two Youtube videos playing at the same time, &quot;Lofi hip hop beats to study/relax to&quot; and &quot;15 sorting algorithms in 6 minutes.&quot; The resulting sound is chaotic and unsettling.</p>
<br><br>
<p>The lofi music -- interchangeable, forgettable, soothing -- is a coping mechanism, a dream. It is a distraction from the Sisyphean nature of the sorting algorithm.</p>
<br><br>
<p>The sorting algorithm embodies work, chaos brought to order over and over, representing a life&#39; spent in a fast-moving field, perhaps software programming. Databases, applications, interfaces: they create a temporary semblance of order, but to what end? They will be soon replaced, their replacements replaced. All that is left for the worker is the time itself, living in an uneasy truce between the music and the work.</p>
<br><br>
<p>Adding to this theme is a wilderness survival guide, a wall calendar, The Blind Watchmaker by Richard Dawkins, a potted plant, assorted change, a freshly sliced orange, a wallet, car keys, a statistics textbook -- and the Dewey Decimal System, a system for categorizing the entirety of human knowledge into a series of answers to ten questions we don&#39;t actually have the answers to, namely:</p>
<ul>
<li>How do we organize information?</li>
<li>Who am I?</li>
<li>How did I get here?</li>
<li>Who are the people around me?</li>
<li>How can I communicate with others?</li>
<li>How can I explain the world around me?</li>
<li>How can I control the world around me?</li>
<li>How can I enjoy my free time?</li>
<li>What are the stories of our lives?</li>
<li>What was the world like in the past?</li>
</ul>
<br><br>
</blockquote>
<h3>May 12th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3>

Reading/to read
<ul>
    <li><em>The Sublime Object of Ideology</em></li>
    <li>Franco Berardi's <em>Heroes</em></li>
    <li>Jan Tschichold's <em>the New Typography</em></li>
</ul>

<p>I've run through maybe 10 hours of Flask/Jinja/SQLAlchemy over the past two days and I think I'm in a good place with my app.</p>
The next steps are:
<ul>
    <li>Finish authentication + login flow (can already register users through API) </li>
    <li>Modify the MVP to list four similar words and user enters fifth. This is the most fun and flowy version I can think of. </li>
    <li>this will get words from the model, take the entry back for grading, and finally return the grade. </li>
    <li>(right now, there is a mess of code that grades three entered words)</li>
    <li>Then push this to heroku</li>
</ul>
<h3>May 8th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3>
painting from today:
<img src="https://www.eric-xia.com/images/POWER.jpg" style="width: 100%">
<p><a href="zizeknotes">And here are some notes from the <em>The Sublime Object of Ideology</em></a> by Zizek</p>.
<h3>May 6th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3>
<p> My senior art installation.</p>
<p>Two videos are playing at once, "lofi hip hop indie beats" and "15 sorting algorithms in six minutes". dissonance/mindless sisyphean progression from chaos to order, and the dreamy, detached use of lofi music as a coping mechanism</p>
<img src="https://www.eric-xia.com/images/IMG_7544.jpg" style="width: 100%">
<h3>thought-terminating cliches </h3>
<p><a href="https://en.wikipedia.org/wiki/Thought-terminating_clich%C3%A9">https://en.wikipedia.org/wiki/Thought-terminating_clich%C3%A9</a></p>
<p>something something grad school something</p>
<div style="overflow: hidden"><div id="outlineContainer"></div></div>
<h3>Notes on Consumer Society, Jean Baudrillard (1970)</h3>
<p>More reading notes. From <em>Selected Writings</em>.</p>
<h4 id="the-bad-part">the bad part</h4>
<p>Baudrillard describes consumerism and the modern grocery store (in a section called &quot;profusion and displays&quot;. This part is not good. </p>
<p>He is attempting to criticize the &quot;endless imagery of feast&quot; and the meaningless choice, but in my opinion what he describes are either trivial marketing tricks (&quot;We can observe that objects are never offerred for consumption in an absolute disarray. In certain cases they can mimic disorder to better seduce, but they are always arranged to trace out directive paths.&quot;) or genuinely positive things -- its particularly funny when he says that <blockquote>our markets, our shopping avenues and malls mimic a new-found nature of prodigious fecundity. Those are our Valleys fo Canaan where flows, instad of milk and honey, streams of neon on ketchup and plastic.</blockquote> Baudrillard conveniently omits the fact that supermarkets carry milk and honey. What does he even mean by a stream of neon on ketchup and plastic?</p>
<p>Baudrillard dismisses progressive principles. He says that there is a &quot;fable&quot; of the man who once lived in Scarcity but now lives in the Society of Affluence. However, in economics, &quot;Among all the unknowns of economic science, needs are the most persistently obscure&quot;. This hints that consumerism does not fulfill human needs. This is what skeptics see as the consistent failing of [[Enlightenment Now, Steven Pinker]] type books: the [[hedonic treadmill]].</p>
<h4 id="the-good-part">the good part</h4>
<p>&quot;The beauty of the surroundings is a precondition for a happy life&quot;</p>
<p>Baudrillard says something which I feel is pretty insightful which is that the all-in-one unity of the shopping mall and the futuristic city (think Northgate mall, or Northline Village,  or any ice cream + theater + condos + &quot;market&quot; development) really prioritizes perpetual shopping above all else. This is akin to the casino which opens up a buffet to get gamblers to stay for longer. </p>
<p>The exact aesthetic values of the future which we are raised with are very important. Looking at films like Tomorrowland for guidance, you will find that classic utopian visions have large green open spaces and white organic skyscrapers are at the forefront -- a future which implies reconnecting with our biological nature.</p>
<p>On the other hand, similar &amp; benign-seeming futures advertised on development placards feature the &quot;promenade&quot;, the &quot;commons&quot;: these place consumers at the panoptic center of attention, the eyes of storefronts and in the eyes of others. If there is nature, it is always subservient to man and subservient to consumption.</p>
<p>Baudrillard: Pleasure is now the citizen&#39;s duty. This is the principle of the maximization of existence by the mutliplication of contacts and relations, by the extensive use of signs and objects, and by the systematic exploitation of all the possibilities of pleasure.</p>
<p>Pleasure &amp; desire is equivalent to the traditional Marxist constraint of labor &amp; production. ... <em>[Modern man] will be gently and instantly reminded that he has no right not to be happy.</em></p>
<p>The puritan morality has warped into the FUN morality, whose imperative is enjoyment and the compelete exploitation of all the possibilities of being thrilled experiencing pleasure, and being gratified.</p>
<p>Baudrillard sees credit as &quot;the systematic socioeconomic indotrination of forced economicizing and an economic calculus for generations of consumers who, in a life of subsistence, would have been unexploitable as a force of consumption.&quot;. </p>
<p>Again drawing parallels between traditional marxist theory and consumer theory, Baudrillard claims that the current &quot;indoctrination into systematic and organized consumption is the equivalent and the extension, in the twentieth century, of the great indoctrination of the rural populations into industrial labor, which occurred throughout the nineteenth century.&quot;</p>
<p>Calling progressive thinking the &quot;ideology of consumption&quot;, Baudrillard derides the idea that some decisive &quot;human revolution&quot; separates the Age of Production from the Age of Consumption. Instead, Production and Consumption are one and the same, aiding the expansion of productive forces worldwide. </p>
<p>Citing a quote from Eisenhower on how the government&#39;s role should merely be to encourage consumer spending... Eisenhower implies that consumption, not being directly imposed, could effectively replace taxation as a social levy.</p>
<p>The consumer is consripted and mobilized as a laborer, consumption is social labor, the consumer is the Universal Being at the end of the human species the People are venerated by democracy the same way the Public are venerated by business: given that they do not choose to interfere politically or socially.</p>
<h4 id="thoughts-on-consumer-society">thoughts on consumer society</h4>
<p>I feel that this section falls flat. The power of consumption, of fulfilling material needs such as buying a new TV or car, is far overemphasized. There is a contradiction in that YOLO-- the pleasure morality, the morality which ostensibly fuels spending on material goods -- actually supports saving. Because saving for retirement, for experiences is so necessary and drilled into the minds of millenials/ gen Zrs, and because people would rather buy TIME with money (anti-work movement, four day work weeks) than material improvement, our consumption is not Baudrillard&#39;s.</p>
<p>Instead our consumption seems increasing fueled by cultural affirmation. Lying on the empty floor of an American Room staring into a phone after doing the bare minimum, what we crave is direct validation through affirmation,  infinite and instantaneous X-tok subcultural affirmations as opposed to the friction-laden and socially dubious act of material consumption. </p>
<p>The idea of the &quot;niche internet microcelebrity&quot; and creation as consumption supports this same idea, that what Tiktok is good at doing is creating subcultures, the infrastructure for two-way validations in likes and followers. It blurs the gap between creator and consumer more than any other phenomenon to date.</p>


<h3>May 3rd <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3>
<p> Thinking about this <a href="https://www.lesswrong.com/posts/zbqLuTgTCu365MNu9/your-dog-is-even-smarter-than-you-think">LessWrong post</a> about how dogs are smarter than we think. It looks into the tiktok-famous dog Bunny, who communicates by a button board. She knows her friends by name, understands the time of day, remembers things, is curious about what a "dog" is... It makes a pretty convincing case that we have not seriously explored how much animals can really learn.</p>
<p>More generally the post states that a large amount of fascinating & worthwhile science lies outside of the bounds of traditional academia. </p>

<hr>
<p> Here are the things going into my installation so far:</p>
<ul>
    <li>$20 of spare change in pennies and nickels</li>
    <li><i>The Blind Watchmaker</i> by Richard Dawkins</li>
    <li><i>Special Forces Survival Guide</i></li>
    <li>Stills from my gravel project</li>
    <li>My computer playing "15 sorting algorithms in 6 minutes" and "lofi hip hop radio" simultaneously</li>
    <li>Lawn fertilizer</li>
    <li>potted plant</li>
    <li>A wall calendar with an unreasonable amount of highlighting, or possibly a chess game being played on it, or similar grid-abuse</li>
</ul>
<h3>May 2nd <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3>
<h3>excerpts from the <em>Special Forces Survival Guide</em></h3>
<p> along the same lines <a href="https://www.eric-xia.com/blog#4">as below</a>, two quotes from a wilderness survival book I got when I was eleven:</p>
<blockquote>Shelter is the vital physical barrier between you and a hostile outer world.</blockquote>
<blockquote>A survival diet is about eating everything you need to supply critical energy and nutrition.</blockquote>
The idea of being able to eat whatever you want to survive is at odds with society and our natural empathy towards others. See Simone Weil's "sympathetic starvation" and Chris Kraus's <em>Aliens and Anorexia</em>
<blockquote>After joining the French Resistance in London and toiling tirelessly for the cause, she came down with tuberculosis; in a remarkable gesture of solidarity, despite the doctor’s orders to eat heartily, she consumed only what was rationed to her compatriots under the German Occupation. Most scholars believe that this sympathetic starvation was the cause of Weil’s death. </blockquote>

<h3>May 1st <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> 
<h3 id="ivyleague"> Note on "Break up the Ivy League Cartel"</h3>
<p><a href="https://mattstoller.substack.com/p/break-up-the-ivy-league-cartel">https://mattstoller.substack.com/p/break-up-the-ivy-league-cartel</a>.</p>
<p>BIG is a very well known Substack centered around monopoly power, and they recently had a guest writer write about how the "Ivy League Cartel" threatens American democracy. While it is clear that the selection process at elite universities is flawed, the premise of this article is very wrong. </p>
  The exclusivity of the Ivy League is not wrecking the democratization of education, because what differentiates Ivy League schools is not the quality of education. 
<p>Something that is common knowledge for college applicants is that the quality of education does not differ meaningfully between many schools. The value of elite universities is college experience, connections, and prestige. </p>
This following quote is especially problematic. It implies that the increased selectivity of elite colleges is somehow directly responsible for a decline in the quality of public education:

<blockquote>
There is no way that I know of to have truly democratic elections without widely available and high-quality public education. As everyone knows, the consolidation of wealth by elite, mostly private, schools has gone hand-in-hand with damaging political campaigns that have weakened even the country’s greatest public universities, such the University of Wisconsin- Madison and the University of California-Berkeley, for example.
</blockquote>
<hr>

<h3 id="survival">the simulation of self-sufficiency in survival fiction is an existential plea</h3>
<p>Something not given enough attention is the link between survival literature (boxcart children, my side of the mountain, gary paulsen&#39;s hatchet, bear grylls ... chris mccandles?) and the existential/absurd perspective. To kids growing up who the rules of society didn't seem to make sense, survival fiction provides a welcome escape. </p>
<p>This basic human desire for simplicity (which is the same as confronting the existential, which is the same as denial of death) is reflected in either an attempt for RATIONALIZATION (le corbusier desire for legibility aka <a href="https://www.ribbonfarm.com/2010/07/26/a-big-little-idea-called-legibility/">seeing as a state</a>) or an attempt for IRRATIONALIZATION, fatalistic detachment through an artificial return to wilderness survival. The first is the dismissal of the unexplainable from the world, the second is disassociating the unexplainable from oneself. </p>
<p>Both are pleas for the world to make sense.</p>

<hr>
<p><a href="http://ishimochi.com/">Perfectly Ordinary Stones, carried for 1,300 years</a> is a project where six people carry stones and choose a new person to give them to every five years. 
</p>
<p>The first six carriers are a mayor, buddhist monk, architect, fruit farmer, doctor, and high school student. </p>
<p>The second six carriers are a mayor, buddhist monk, photographer, local official, executive officer, and "association staff member". </p>
<p> This is really sad :( </p>

<hr>
<p>The ethics of pizza-fueled community service are complicated. </p>

<h3>April 30th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br>

<p>(draft)</p>
<h3 id="meaning">A response to "Ultimate Meaning: We Don’t Have It, We Can’t Get It, and We Should Be Very, Very Sad" by Rivka Weinberg</h3>

<p>
View the paper here in the Journal of Controversial Ideas: <a href="https://journalofcontroversialideas.org/article/1/1/132">https://journalofcontroversialideas.org/article/1/1/132</a></p>
<p>Abstract:</p>
<blockquote>
<p>Life is pointless. That’s not okay. I show that. I argue that a point is a valued end and that, as agents, it makes sense for us to want our efforts and enterprises to have a point. Valued ends provide justifying reasons for our acts, efforts, and projects. I further argue that ends lie separate from the acts and enterprises for which they provide a point. Since there can be no end external to one’s entire life since one’s life includes all of one’s ends, leading and living one’s life as a whole cannot have a point. Finally, I argue that since we live our lives and structure our living­a­human­life efforts both in parts and as a whole, it is fitting to be sad to recognize that leading and living a life is pointless. My discussion helps make sense of the literature that frequently talks around this topic but often does so vaguely and indirectly.</p>
</blockquote>
<p>The main argument:</p>
<blockquote>
<p>We cannot possibly have a point to leading a life because valued ends (points) are external to the projects toward which they are directed.</p>
</blockquote>
<p>Some strong arguments, esp. about many abstract/altruistic values as delaying the problem of life having a point. But I don&#39;t agree at all because I don&#39;t think that &quot;having a point&quot; for life is the same as &quot;having a point&quot; for an action within life.</p>
<p>I think Rivka&#39;s response to the category mistake objection is fatally flawed.</p>
<p>This is the category mistake objection:</p>
<blockquote>
<p>We might consider asking for the point of life, or being sad that there isn’t one, to be a category mistake, akin to asking, “When is a potato?” or being sad that your baby has a name but not a number, or that your nose is neither odd nor even.</p>
<p>Seeking the “when” of a potato or the oddness or evenness of a nose is incoherent; potatoes and noses are not the kinds of things that have times or oddness/evenness. It is incoherent to demand that of them and nonsensical to bemoan the fact that your nonsensical demands cannot be met. When we ask what the point of life is and are sad to discover that life can’t have a point, are we making a category mistake? Are we nonsensically bemoaning an incoherence?</p>
</blockquote>
<br>
<p>And this is her defense:</p>
<blockquote>
<p>I don’t think so. Leading a human life is an effort or enterprise we all engage in, just as we engage in many other projects within our human lives. It can then come as a disappointing surprise to note that, unlike many other of our purposeful enterprises, leading life itself cannot have a point. Asking whether life is pointless is not incoherent—we understand the question and are capable of sensibly answering it; we just may not like the answer.</p>
</blockquote>
<p>The strength of the category mistake objection is that it says, NOT finding a point does not make something pointless. The attribute of having a &quot;point&quot; does not apply to life itself when our idea of what a &quot;point&quot; could constitute is informed entirely by the points of actions within life. <br> <br> She never answers this.</p>
<p>Because of this category mistake, I think that &quot;the point&quot; for life as a whole is not its effect, as is &quot;the point&quot; for individual actions, but rather the point is to live stories/ have experiences which are timeless. The ends of life as a whole, to the extent that we engage in life as an effort or enterprise <em>of its own</em> (which, again, is not the same way we engage in individual actions), are timeless.</p>
<p>Stepping back a bit, my own view (which I think is fairly conventional) is that closed loops of value make individual actions intrinsically meaningful, and all of life is composed of these individual actions, meaning that living as a whole is meaningful. This objection, akin to dismissing Zeno&#39;s Paradox (Rivka is saying how can anything move? Of course things can move!!), is also addressed in a section titled &quot;The Fallacy of Composition&quot;. She says:</p>
<blockquote>
<p>One might object that seeking a point to living at all is an instance of the fallacy of composition, i.e., of attributing to the whole what is true of the parts. <b>But, as argued, life is an effort or enterprise that we engage in both in parts and as an effort or enterprise of its own.</b> It therefore makes sense for us to want that effort to have a point because it is the valued ends toward which our efforts are directed that serve to help us justify or makes sense of those efforts.</p>
</blockquote>
<p>Minor objection to the above: Life itself is not an effort of its own. Every effort within life is an action within it. </p>
<p>However, as far as life itself must be construed to have some kind of overarching aim (and I agree that there is some expectation in this sense, although I still don&#39;t think the attribute of &quot;having a point&quot; applies in the same way), the best argument against this that I can think of comes from this quote from <a href="https://thereader.mitpress.mit.edu/stanislaw-lems-reflections-childhood/">Stanislaw Lem&#39;s Reflections on the Objects of His Childhood Home</a>: <em>“Each experience has its weight, its authority, which does not admit of argument and depends only on itself.”</em> </p>
<p><em>The purpose which we extract from our life structure is not due to its effect</em>. It is not causal in the sense of an individual valued end or &quot;point&quot; immediately following it in time. Instead, the value, which Rivka acknowledges as well, comes from what is termed the &quot;narrative trajectory of human life&quot;, or what I will term the story which stands independent of time. While a story takes the form of a cause and an effect, the <em>value of the story</em> is akin to aesthetic/experience, and is detached from time. Timeless fairy tales, archetypal/prototypical figures etc.</p>
<p>The reason that our own expectation-fulfillment drive for life-as-story are not the same kind of goal as eating five tomatoes (a fulfillable drive) is because our own experiences are in the frame of our life as a whole. &quot;I want to be the kind of person who goes skydiving before they die&quot; is a continual, life-long drive which will NOT be fulfilled by going skydiving.</p>
<p>One possible objection to this claim I just made, &quot;that the value of the life is in living stories&quot;, is that striving to appear a certain way is a fundamentally a social phenomenon. In response, I actually think that this value is mostly convincing <em>yourself</em> that you are a certain kind of person or a figure within another narrative. And that you will be until the day you die.</p>
<p>(With this way of thinking of living stories as having timeless value, I am taking the stance that all of this value is human defined. Without the knowledge of life stories this point for life would not exist, perhaps in a hypothetical Edenic paradise)</p>
<p>This idea of timeless story value also answers the defense against the &quot;Everyday Meaning Objection&quot;:</p>
<blockquote>
<p>Recall: if I work as a lawyer fighting for civil rights, for example, the point of my efforts is justice, which is part of my Everyday Meaning. But justice cannot serve as the point of leading my life, even if we think of our overall efforts as necessary conditions for my Everyday Meaningful fight for justice, as I will notice by imagining justice achieved,—then what? What is the point of the rest of my life?</p>
</blockquote>
<p>The continual drive to be someone who fights for justice is the Universal Meaning behind the Everyday Meaning of justice. And that won't stop. Preserving the story of your life requires constant vigilance.</p>
<p>To summarize: Rivka&#39;s whole argument for the pointlessness of life is based on the point being external to the action:</p>
<blockquote>
<p>&quot;The point of building a hut, like all points, will lie outside the hut, as we have noted. But there’s nothing external to your life to serve as the point of leading and living it because your life includes your whole damn life.&quot;</p>
</blockquote>
<p>But there is something external! Externality only involves time (the &quot;after&quot;) when the desired state (of your family, of politics, of the world) in question are themselves subject to time. When the objects themselves, stories/experiences, are independent of time, they can be an external valued end in themselves without being subject to time; without coming &quot;after&quot;. Life can and does have an external point because the point of life is not causal like individual actions in life.</p>


<br>
<h3>April 29th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br>

<p></p>
Reading the <em> The Making of the Prince of Persia</em>, by Jordan Mechner, a Yale filmmaker/game designer who made this insanely popular game for the Apple II straight out of college. Thanks <a href="https://applieddivinitystudies.com/prince-of-persia/">Applied Divinity Studies</a>.
<br><br>
A relevant passage:
<blockquote>
    > This morning I sat in the sun and reread <em>My Side of the Mountain</em>. It got me thinking about how far removed from nature my life is. Staring at a computer screen all day. Fast food, fluorescent lights. I’m only 21; my eyes should be bluish-white, instead they’re bloodshot.
<br><br>
> The yen to wander is still in me. It’s not dead. Thanks, Jean George.
<br><br>
</blockquote>

How important are books like <em>Hatchet</em> and <em>My Side of the Mountain</em> in formulation of identity? Probably more than is given credit. <br><br>

<h3>April 27th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br>

A riddle:

<p>
1:3 <br>
2:3<br>
3:5<br>
4:4<br>
What comes next?
</p>

<p>Thinking about how satisfying it is to sort X by an unrelated measure Y.</p>
<h3>April 26th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br>

<h3 id="tiktok">Response: Kneeling Bus's <a href="https://kneelingbus.substack.com/p/157-this-must-be-the-place">"This Must Be the Place"</a></h3>
<p> When I originally read this piece I was impressed by the way it encapsulated my feelings of disenchantment about the relationship of the Internet to the physical world. </p>
<p>In particular, the following quotes stuck out to me. The first is the recognition that suburbia is not a fleeting circumstance to be transcended, but remains the defining aesthetic in America:</p>
<blockquote> If you grow up in the suburbs, a familiar experience is going over to a friend’s house for the first time and recognizing its layout as identical to that of another friend’s house you’ve already visited, if not your own house...This experience of recurrence mirrors other patterns that predominate in suburban (and increasingly, urban) environments: the ready-made familiarity of chain stores and restaurants that you’ve already encountered elsewhere, only distinguished by slight variations, appearing in similar clusters throughout a metropolitan area. </blockquote>
The second describes what Kneeling Bus calls "post-spatial space" (a term I personally don't like), and is from Paul Ford's <a href="https://medium.com/message/the-american-room-3fce9b2b98c5"> The American Room</a>: </p>
<blockquote> “The people dancing and talking and singing in beige rooms with 8' ceilings are surrounded by standards, physically and online. Technological standards like HTML5 also allow us to view web pages and look at video over the Internet. All of their frolic is bounded by a set of conventions that are essentially invisible yet define our national physical and technological architecture. Their dancing, talking bodies are the only non-standardized things in the videos.
</blockquote>
Finally, this last quote paints a dystopian vision of the future:
<blockquote>Earlier this month a house in Santa Monica, currently on the market for $5 million, became available to TikTok influencers, who can apply to spend two hours filming amid its pool and amenities as long as they help market the house in their videos.The process by which Airbnb transformed shelter into a liquid commodity might similarly transform content creation sites, which is to say that humans and content will soon have to compete for housing.</blockquote>
<p> Here are several (pretty convincing) defenses of Instagram/Tiktok in response, mostly from my friend <a href="https://www.instagram.com/claire._y/">Claire Yang</a>:</p>
<p><em>This hunt for common experience is not a bad thing. Instagrammability results in cute cafes and pink brick walls. Is it really a dystopia when your life resembles a pinterest board?. People use Pinterest as a way to intentionally work towards having their life mimic internet pictures. They explicitly agree to this and enjoy it.</em></p>
<p><em>Fashion isn't frozen. Tiktok content creators understand homogenization better than outsiders and strive to avoid it. They are not trapped into anything. Much of internet culture is making fun of basic and outdated attempts to fit in. </em></p>
<p><em>Saying that "humans and content will soon have to compete for housing" is hyperbole. The interests of rich influencers have always trumped poorer people, and different types of buildings serve different purposes.</em></p>
<p><em>Lastly, caring about something like the American Room is elitist. Beige 8' rooms look rather nice. (the recognition of its existence is good though)</em></p>
<p>I'm not sure if the author meant to come off as negative (he does seem to strive to be impartial). At any rate, I still really like the article for what it brings attention to. </p>
<h3>April 25 <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br>

<a href="https://www.eric-xia.com/nsc">Model UN is fun.</a> <br><br>


    
<h3>April 24th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br>
No profound thoughts, creative energy spent on MUN. <br>
Todo list. None of this is particularly urgent.
<ul>
    <li>Continue <i>Structure of Scientific Revolutions</i></li>
    <li>College blog post, maybe</li>
    <li>Finish the Time Theory section of <i>Bullshit Jobs</i></li>
    <li>Skim the rest of <i>Simulacra and Simulation</i> -- I think I've gotten most of it already</li>
    <li>Refine the synonym game and do boring stuff. Struggling hard with implementing login and leaderboards in Flask. </li>
    <li>At some point I want to optimize the way I display posts on this site. I have an idea of what to do but not how to do it.</li>
    <li>ToC Chapter 3 reading</li>
    <li>Math, Math Review, Integrals</li>
    <li>Chinese HSK Level 2, Spanish, Esperanto. If only...</li>
    <li>Synplifier & similar things. I will not give up.</li>
    <li><i>*kicks next.js + mongodb project*</i> idk, do something</li>
    
</ul>

<br><br>

<h3>April 23rd <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br>
<h3>The Universe is a dream dreamed by a single dreamer where all the dream characters dream too</h3>
The Tumblr crowd is not so different from the Hacker News crowd. Both draw people who are intensely fascinated with the texture of life, mostly introverts. Then I think the (usually) male impulse for self-sacrifice causes the two to diverge. <br><br>

I can't help but see engineers, who are predominately male, as aesthetics altruists. They are the only ones who get to build cities, bridges, to set the scene for human life, but always at the curse of knowledge which makes their creations banal for themselves. That is the irony to their idealism: at the end of the promise of the true realization of their dreams they end up having to sacrifice them, no longer able to see anything other than plumbing and shear loads. <br> <br>

In this sense I guess you cannot really make something for yourself. In the process of making you are inevitably drawn into a different, sadder understanding of your creation than the consumer. The architect of the temple can never be the excited visitor whom he designs for. No one wants to do the work, we all want to live in worlds of other peoples' making, for life to happen to us; but without acts of aesthetic altruism, of self-sacrifice, none of it would ever be real. <br>

<hr>

Richard Wagner saw civilization neutralized by music as lamplight by daylight. In this same way (always) newly acquired adulthood dissolves against childhood dreams.
<hr>
interesting todolist app concept: every time you skip a todo item it breaks it into two smaller tasks. Prevents tasks from getting stale and connects to atomic habits philosophy.<br><br>

basically, if you skip a task or fail to complete it by the deadline <br>
it splits into two smaller, easier to tackle tasks<br>
like instead of "do 10 pages of spanish reading" it would then have "do 5 pages" and "do 5 pages"<br>
<hr>
This look into a present-day "startup society" is fascinating: <a href="https://astralcodexten.substack.com/p/prospectus-on-prospera">Prospectus on Próspera</a>. They have a 3,000 page charter document. Tomorrow's exercise in the New State Convention at KINGMUN pales in comparison... <br>
<br>
Maybe I should compare the ideal society that we come up with with Próspera. I don't want to take all my ideas from this single source though in committee.
<br><br>

<h3>April 22nd <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br>

Published my <a href="https://www.eric-xia.com/simulacranotes">Simulacra and Simulation notes</a> finally (100 pages in). Lots of interesting connections there -- the author is definitely crazy but a very productive kind of crazy. See the book covers newly added, also favorite blogs linked!
    

<br><br>
<h3>April 21st <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br>
<hr>
<h3>seek trivial inconveniences</h3>
A classic idea from the LessWrong archives is "beware trivial inconveniences". Scott Alexander writes about how formidable the Great Firewall of China had always seemed, and then how surprised he was to find, once he visited, that all it took was twenty minutes to set up an internet proxy to get around it. This seemingly minor inconvenience was all it took to prevent the majority of the population from accessing the rest of the web. <br><br>
The natural corollary of this idea, then, is to <i>seek</i> trivial inconveniences. Solving the easy problems probably get you farther than you think.
<br><br>
<hr>
<h3> 75% of internet humor is sarcastic</h3>
Interesting note from a while back. <br>
<a href="https://sci-hub.do/https://ieeexplore.ieee.org/document/7344888">https://sci-hub.do/https://ieeexplore.ieee.org/document/7344888</a>
<blockquote>...The majority of the reviewed proposed approaches are not equipped to cater for traditional limitations, such as negation effects or ironic phenomena in text. <br>
 <br>

: Addresses the automatic detection of sarcasm and irony by introducing an ensemble approach based on Bayesian Model Averaging (BMA), that takes into account several classifiers according to their reliabilities and their marginal probability predictions.  <br>

Results show that not all the features are equally able to characterise sarcasm and irony, whereby sarcasm is better characterised by Part-Of-Speech (POS) tags, and ironic statements by pragmatic particles (such as emoticons and emphatic/onomatopoeic expressions, which represent those linguistic elements typically used in social media to convey a particular message). <br>

The authors found out “that a humorous tweet is 76.7% likely to also be sarcastic”, whereas “sarcastic tweets are only 26.2% likely to be humorous”. Future work is required on the connection between sarcasm and humour.
</blockquote>

<br><br>
<hr>
<h3>April 20th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3><br><br>
Cache Test! <br>

<hr>
I am enjoying online school immensely. I am 200 pages into David Graeber's best known work and have a <a href="https://www.eric-xia.com/graebernotes.html">MONSTER annotation</a> 5000 words long from it here. Connects so well with Ribbonfarm's Seeing as a State, Time-Discipline theory, and Nietzchean will to power<br><br>
<hr>
<a href="https://www.eric-xia.com/gametheoryisnotmorality">A few thoughts</a> on one of my senior elective courses at Lakeside, Game Theory and Geopolitics.<br><br>
<hr>

Idle thoughts
<ul>
    <li>flux as model for college applications: skill, luck, volume</li>
    <li>A computer is a medium. Abstraction is not truly realized more through pixels than paper, but we feel like it is. This is due to the fact that digital mediums have greater freedom of manipulation -- Spinoza's idea of substance? Freedom of substance as essential parameter for a "universe". Gets into diversity metrics (hill numbers?) and the "simple visual universes" from earlier</li>
    <li>I'm really interested in the meaning/nature of work. This should be the focus of my senior art show. </li>
    <li>A useful thinking tool: can you imagine a world in which a statement is still true but the ground reality is actually much worse? </li>
</ul>

<br><br>
<h3>April 19th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3><br>

I realized that the amount of friction involved in making blog posts (selecting an image, uploading etc). even in its current (unoptimized) form should be tiny compared to the amount of time I put into writing the content. So I should write more. <br><br>
<hr>
Put up a draft of <a href="https://www.eric-xia.com/cancer">"high school students and cancer cures"</a>, which I hope to update later when I have the motivation to work on some more. A really interesting cultural waymarker. 
<br><br>
<hr>
Books that I read (partway) over spring break:
<ul>
    <li>Materialism and the Mind/Body Problem // edited by David Rosenthal</li>
    <li>Beyond Good and Evil by Nietzche</li>
</ul>
<br>
<hr>
some interesting ideas from mind/body problem (don't have the book with me): one strong objection I didn't consider to the identification of mental states with brain events is the lack of spatiality; a mental state is disembodied while a brain event clearly happens in space (e.g. in an MRI scan!). It's not clear to me that mental states are necessarily disembodied -- they can have environmental triggers or necessarily involve 3d space (imagining climbing a tree etc.). There are many strange Identity Theories, which reveal how ambiguous "is" really can be. <br><br>

I think I trust philosophy significantly more now though. No one is caught up on the semantics of "is". They are simply saying, if we define "is" as this condition is it true? If we define "is" as this <i>other special</i> condition is it still true? As <a href="http://www.whatisitliketobeaphilosopher.com/#/agnes-callard/">Agnes Callard</a> says
<blockquote>"we never want to hit the point in any conversation where we throw up our hands and say 'isn’t that just a matter of how you use the words'. I think, contra Wittgenstein, that philosophy is what makes it impossible for language to go on holiday."
</blockquote>
<br><br>
Working on a "probability quenching" blog post which is related to my college application process. 
<br><br>
<h3>April 18th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br>
Published <a href="https://www.eric-xia.com/nietzche">some of the notes</a> from Birth of Tragedy and Thus Spoke Zarathustra. <br><br>
March 30th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> <br>

Lots of stuff happening. <br>
<ul>
    <li>TOC problem set 2</li>
    <li>25% thru HSK list 2</li>
    <li>read 100 pages of <em>reamde</em> by neal stephenson, got bored. The story is interesting (palette drift! simulacrum! seattle!) but excessive setup lost me</li>
    <li>(mostly) read the <em>birth of tragedy</em>, thus spoke zarathustra by nietzche. notes to publish</li>
    <li>to read: virtue ethics</li>
    <li>TOC problem set 2</li>
    <li>doomscroll demo in progress in p5.js</li>
    <li>domain registrated for the lateral thinking project</li>
    <li>gravel pile work has been done</li>
    <li>and of course college</li>
</ul>
<br>
What can be said about college admissions and how can it be done without seeming entitled? <br>
Probability quenching, fake college site, quantitative analogies, evolutionary analogies, agent models, boring  boring boring<br>
Must find good project for senior arts show.
<br>
<br> <br>

<h3>March 8th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br>
check out optionality vs. freedom post <br>
<br>



<h3>March 4th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br>
Sorry about accidentally deleting this page!<br><br>
Fixed it by copy pasting all of the entries from Updately. Admittedly there were only 6 but thanks Samson! <br><br>
 <ul>
     <li>20 pages into Society of the Spectacle for fun </li>
     <li> IEP entries: descartes, slavoj zizek. I'm beginning to prepare for a MUN conference </li>
     <li>50 pages into Simulacra and Simulation, will hopefully put up nice notes sometime </li>
 </ul>
 In other news: I graduated from the HSK Level 1 Word List, about 150 chinese characters! Now for Level 2<br><br>
And now by writing this blog post I'm procrastinating on my Sipser Chapter 2 reading, Duolingo, and Physics homework.
<br><br><br><br>

<h3>February 20th <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3><br><br><br><br>
Spent all of today/yesterday on the lateral thinking project and got a working version up on heroku.<br><br>

Nice to get familiar with virtual environments/ git/ flask. Excited to keep developing -- its an interesting niche as accessible interactive NLP. I feel there's potential for a real tool for thinking, not simply an organizational or aesthetic tool. And it's fun and conceptually interesting. Todo is converting the similarity metrics to graphs in JS and adding time limits. And finding additional creative indicators.

<h3>February 17th<span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> Had a nice midwinter break so far.<br><br>

Finished The Unbearable Lightness of Being by Milan Kundera, 5/5 stars. Go read it<br><br>
Read The Dispossessed by Ursula Le Guin aka "anti-ayn rand". Liked it a lot, puts forth a very realistic view of nonauthoritarian communism. 4/5 stars<br><br>
Did Theory of Computation problem set 1<br><br>
Got a skeleton MongoDB + Next.js integration set up for Synplifier! I have a long way to go but all the data is now imported with database. Now I can really get into rewriting my code in React, hurray<br><br>
to read: Against Method & Structure of SR still February 12 <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span> <br><br><br><br> 新年快乐!<br><br>
did homework<br><br>
Fixed the three.js navigation some more, added contacts<br><br>
Read The Atlas of Radical Cartography, a little book of 10 essays. TIL there was quite the extensive mafia trash collection cartel in NYC up until the 1990s.<br><br>
There was one map/essay which took the idea of the water cycle and made it much more detailed which was very interesting. Apparently, wastewater-to-tap water supply does not exists anywhere in the US. Also, many municipal drains just go to the ocean. Theme is that there's clearly a huge disconnect between the abstract manifestation/knowledge of the water cycle and the actual perceived social meaning-- stemming from the idea that Nature is thought of as abstracted from our actual surroundings.
<br><br>
Finished english essay on technopessimism: It's not anything super new, just a personal perspective. Perhaps the most resonant part for me is artificial creation, or creation-as-consumption. + web dev now vs the internet 1990s, how tiktok convinces everyone that they can become creators rather than consumers, selling that dream. +GravelHacks/ pascal's wager, bayesian probabilities/probability quenching. +easily imaginable situations are given more weight
<br><br>
built up a side project which quantifies lateral creative thinking (aka Alternative Uses Test) through use of word vector representations. Should be relatively quick through Gensim + Flask. Flask is amazing btw
<br><br>
<h3>February 7 <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br><br><br>
Today was productive but also quite uninspiring. It was briefly sunny.<br><br>

Finished reading Topeka School. 4/5 stars, probably the most contemporary book I've read in several months.<br><br>

Read and took notes on 1.3 in Theory of Computation. There is a ton of formalism -- I'm worried that I tend to regard the wrong things as trivial: just because I took a ton of notes on syntax early on doesn't mean that I'm going to get a better grasp of concepts. But then again maybe that is what I'm usually missing anyways.
<br><br>
Now I know why regular expressions called regular expressions!<br><br>
I've been recording study /work sessions on OBS and speeding up x16 for fun with ffmpeg, a cool utility which can basically do any kind of file conversion or processing that you need<br><br>

In a typical case of local self-improvement minima, I tried to set up a python script to automate the ffmpeg command line calls today for a long time, messed around with subprocess and gave up.<br><br>

Did content work for synplifier (~20 new properties) and fixed CSS stuff. Did not have the energy to go into depth. I wish I could go to college already.<br><br>

Still haven't looked through mongodb + nextjs integration but plan to soon.

Goals for tomorrow:

Do the homework
<br><br>

<h3>February 6 <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br><br><br>
Finished reading & taking notes to about p. 70 in Theory of Computation. The college application process should be officially over now -- last interview was this week. Applied to a handful of essay-first scholarships in the past two days. Fixed up site a little bit more.
<br><br>
Todos over weekend: <br><br> - Homework <br><br> - content work for synplifier <br><br> - finish ToC chapter 1 <br><br>

<h3>February 4 <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br><br><br>
College interview today, another one tomorrow. No progress on anything except homework, but found a cool library for game theory in Julia.<br><br>


<h3>February 1 <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br><br><br>
Last time I said my Next.js blog needed more customization. Then I realized how stupid that sounded considering there was no content on it.<br><br>

From now on, my Updatelys will go here too: https://www.eric-xia.com/blog<br><br>


<h3>1-31 <span style="font-size: 14px; text-align: right; display: inline;">2021 CE</span></h3> <br><br>
. The amount of serendipity that will occur in your life, your Luck Surface Area, is directly proportional to the degree to which you do something you're passionate about combined with the total number of people to whom this is effectively communicated.
<br><br>
First update :O don't expect this much every time
<br><br>
I've been thinking about whether to do public updates. At first, I thought they might not be necessary; I've been taking zettlekasten notes for about 8 months now, and found Obsidian frictionless and super fun. And I write blog posts on my website to document major projects. Do I really need more writing?
<br><br>
But Obsidian is not a productivity tool. It's a tool for thinking/deep work/residual connections, and doesn't handle daily activities etc very well. Updately can hold me more accountable, and Samson's points about the advantages of learning in public make sense.
<br><br>
And more to the point, I want to increase my luck surface area, and that involves letting other people know what I'm working on in a super direct way. I'm not dropping music, no need to build up hype.

actions<br><br>
(Synplifier is an open source knowledge base making synthetic biology accessible for everyone.) - published new static site yesterday (https://synplifier.com) with AWS amplify (AWS abstractions very poor) - Plan is going from basic dictionary --> hyperlinks between terminology--> directed force graph --> protocols-as-pathways --> programmatic protocol visualization. But the information there has to be accurate first, of course - Working on full-stack with heroku today, to surprising success. Trying very hard to learn mongoDB and nodejs. No need for react here.
<br><br>
This weekend I also spun up a site for an art piece on the nature of work in the knowledge economy. It's a hackathon where I'm the only participant and the only challenge is to move 10 cubic yards of gravel across a football field.
<br><br>
Read like 2 pages from Sipser's Theory of Computation (for independent study)
<br><br>
went for run
<br><br>
minecraft, homework
<br><br>
scheduled driver's test
<br><br>
thoughts
I plan to share interesting links every update: Social networks are proof-of-work mechanisms (Instagram as proof-of-wealth, Strava as proof-of-exertion) Immortality is continuing the "great conversation" (RibbonFarm)
<br><br>
I need a real blog. I built one with Next.js but it needs some more customization. Blog posts in progress:
<br><br>
bayesian probability "quenching" with random number generator
<br><br>
science fiction
<br><br>
an analysis of every high schooler cancer cure claim ever made (good benchmark, and media analysis) Learning chinese, esperanto, spanish on anki/duolingo. Having trouble prioritizing.
To read:
<br><br>

Structure of Scientific Revolutions, Thomas S. Kuhn (plan to publish notes).
Against Method, Feyerabend (advocate for scientific anarchism, i.e. rejection of authority)

<br><br>
</div>

<script>
if(window.innerWidth >= 991){
    staticHTML = document.documentElement.innerHTML
    
    headings = document.getElementsByTagName("h3")
    for(i = 0; i<headings.length; i++)
    {
      headings[i].id = i;
      var p = document.createElement('p');
      var a = document.createElement('a');
      var linkText = document.createTextNode(headings[i].textContent);
      a.appendChild(linkText);
      a.href = "#"+i;
      outlineContainer = document.getElementById("outlineContainer")
      p.appendChild(a);
      outlineContainer.appendChild(p);
    }
}
/*
const ele = document.getElementById('outlineContainer');
let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function(e) {
        // Change the cursor and prevent user from selecting the text
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';
    pos = {
        // The current scroll 
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function() {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
};
*/
//add smooth scrolling when clicking any anchor link


</script>
</body>
