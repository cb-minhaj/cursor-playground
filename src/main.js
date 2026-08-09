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
  </main>
`

createCounter(document.querySelector('#counter'))
