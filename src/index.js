import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

const App = () => (<div className='App'>
  <header><h1>Johann Learning</h1></header>

  <main>
    <article>
      <header>Article 1</header>
      <main>
        Uhm, at the start, she was a cook good, her vazhïn work well, and she strong on plow. But after three years, when she was 15, then she become weak. Her voice become a deep. "Borat, Borat!" She a receive hair on her chest and her vazhïn hang like sleeve of wizard.
      </main>
      <footer>Mon Nov  6 14:41:01 2017</footer>
    </article>
  </main>

  <footer>Made with ❤ by konsumer & johann</footer>
</div>)

ReactDOM.render(<App />, document.getElementById('root'))
