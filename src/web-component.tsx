import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import App from './App'
import './index.css'

class CustomReactForm extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div')
    this.appendChild(mountPoint)

    ReactDOM.createRoot(mountPoint).render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    )
  }
}

customElements.define('custom-react-form', CustomReactForm)
