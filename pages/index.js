import Head from 'next/head'
import algs from '../cubealgorithms'
import Algorithm from '../components/Algorithm'

const Home = () => (
  <div className="container">
    <Head>
      <title>Cube algorithms</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {Object.values(algs).map((group) => (
        <div key={group.name}>
          <h2>{group.name}</h2>
          <div>
            {group.algorithms.map((algorithm) => (
              <Algorithm key={algorithm.name} algorithm={algorithm} />
            ))}
          </div>
        </div>
      ))}
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
