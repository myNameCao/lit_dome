// LitElement and html are the basic required imports

import {LitElement, html,css} from './lib/lit-core.js';

class Preview extends LitElement {

  static styles = css`
            .mid_view {
              height: 150px;
              background-color: white;
              border-radius: 8px;
              color: red;
          }
        `;
  render() {
    return html`
      <div class='mid_view'> 
        <div>123323232</div>
        <div></div>
      </div>
    `;
  }

}

customElements.define('xy-preview', Preview);