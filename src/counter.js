export function createCounter(root) {
  let count = 0

  root.innerHTML = `
    <div class="counter">
      <button type="button" class="counter-decrease" aria-label="Decrease">−</button>
      <span class="value">0</span>
      <button type="button" class="counter-increase" aria-label="Increase">+</button>
    </div>
  `

  const value = root.querySelector('.value')
  const [minus, plus] = root.querySelectorAll('button')

  const render = () => {
    value.textContent = String(count)
  }

  minus.addEventListener('click', () => {
    count -= 1
    render()
  })

  plus.addEventListener('click', () => {
    count += 1
    render()
  })
}
