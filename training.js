// LitElement and html are the basic required imports

import {LitElement, html} from './lib/lit-core.js';

class Training extends LitElement {

//   static styles = css`
//   .mid_view {
//     color: red;
//     font-size: 16px;
//   }
  
// `;
  render() {
    return html`
      <style>
        .mid_view{
          color:red
        }
      </style>
      <div class='mid_view'> 
      training
      </div>
    `;
  }

}

customElements.define('xy-training', Training);