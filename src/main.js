import './style.css'
import { createCounter } from './counter.js'
import { greet } from './greet.js'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page">
    <p class="eyebrow">cursor-playground</p>
    <h1>${greet('learner')}</h1>
    <p class="lede">
      A small Vite app for practicing Cursor, git, and GitHub.
      Dev server runs on <code>3001</code>; preview uses <code>3002</code>.
    </p>
    <div id="counter"></div>
    <section class="instructions" aria-labelledby="instructions-heading">
      <h2 id="instructions-heading">How to use this app</h2>
      <ol>
        <li>Start the app with <code>npm run dev</code> (port <code>3001</code>).</li>
        <li>Use the orange <strong>−</strong> button to decrease the count.</li>
        <li>Use the blue <strong>+</strong> button to increase the count.</li>
        <li>Try editing files in Cursor, then commit and push changes on a branch.</li>
      </ol>
    </section>
    <section class="vision" aria-labelledby="vision-heading">
      <h2 id="vision-heading">Vision</h2>
      <p>
        A calm practice space for learning Cursor, git, and GitHub—small changes,
        clear feedback, and confidence to ship.
      </p>
    </section>
  </main>
`

createCounter(document.querySelector('#counter'))
