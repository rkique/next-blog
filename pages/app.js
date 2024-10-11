
export default function Home() {
    return (
      <div>
  
        {/* Main content */}
        <main>
          <h1>Welcome to My Next.js App</h1>
          <p>This is the homepage of a simple Next.js application.</p>
          <div>
            <Link href="/about">
              <a>Go to About Page</a>
            </Link>
          </div>
        </main>
  
        {/* Footer */}
        <footer>
          <p>Powered by Next.js</p>
        </footer>
  
        {/* Global CSS could be applied here or in a CSS file */}
        <style jsx>{`
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          h1 {
            font-size: 2.5rem;
            margin: 0;
          }
          footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
            padding: 1rem;
          }
        `}</style>
      </div>
    );
  }
