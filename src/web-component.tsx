import ReactDOM from 'react-dom/client'
import App from './App'

class MyApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div')
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(mountPoint)

    ReactDOM.createRoot(mountPoint).render(<App />)
  }
}

customElements.define('my-app', MyApp)
