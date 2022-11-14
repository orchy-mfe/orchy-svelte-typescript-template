import './app.css'
import App from './App.svelte'

import OrchyBaseMfe from '@orchy-mfe/spa-adapter'
import type {MicroFrontendProperties} from '@orchy-mfe/models'
export class SvelteMfeTypeScript extends OrchyBaseMfe {
  private app: App
  async mount(microFrontendProperties: MicroFrontendProperties) {
    this.app = new App({
      target: this.getContainer(),
      props: microFrontendProperties
    })
  }

  async unmount() {
    this.app.$destroy()
  }
}

customElements.define('svelte-mfe-typescript', SvelteMfeTypeScript)