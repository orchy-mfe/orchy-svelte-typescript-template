import {renderWithQiankun, qiankunWindow, QiankunProps} from 'vite-plugin-qiankun/dist/helper'
import './app.css'
import App from './App.svelte'

let app

const retrieveContainer = (props?: QiankunProps) => (props?.container || document).querySelector('#app')

const render = (props?: QiankunProps) => {
  app = new App({
    target: retrieveContainer(props),
    props
  })
}

renderWithQiankun({
  mount(props) {
    render(props)
  },
  bootstrap() { },
  unmount() {
    app.$destroy()
  },
  update() {}
})

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render()
}

export default app
