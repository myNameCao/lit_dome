
import {LitElement, html,css} from '../lib/lit-core.js';

class copy extends LitElement {

  static get properties() {
    return {
      textContent: { type: String }
    };
  }

  static properties = {
    copy: {type: Boolean},
  };
  constructor() {
    super();
    this.copy = false;
  }
  toCopy(){
    this.copy = true;
    let input = this.shadowRoot.querySelector('input');
    input.value = this.textContent;
    input.select();
    navigator.clipboard.writeText(input.value);
    setTimeout(()=>{
      this.copy = false;
    },1000)
  }
  render() {

    return html`
            <style>
                .copy-btn {
                    color: #202124;
                    font-family: 'Google Sans', Helvetica, Arial, sans-serif;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: 0.1px;
                    cursor: pointer;
                    margin: 3px 5px 0 0;
                    white-space: normal;
                }
                svg {
                    position: relative;
                    vertical-align: middle;
                }
                input {
                    display: none;
                }
            </style>
            <div class="copy-btn"  @click=${this.toCopy}>
                <input type="text" value="" />
                <span>
                    ${this.copy?'Copied':'Copy'}
                </span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 12.75V2.25C15.75 1.425 15.075 0.75 14.25 0.75H6C5.175 0.75 4.5 1.425 4.5 2.25V12.75C4.5 13.575 5.175 14.25 6 14.25H14.25C15.075 14.25 15.75 13.575 15.75 12.75ZM13.5 15.75H3V5.25H1.5V15.75C1.5 16.575 2.175 17.25 3 17.25H13.5V15.75ZM6 12.75H14.25V2.25H6V12.75Z" fill="#202124"></path>
                </svg>
            </div>
    `

  }
  

}


customElements.define('tm-copy', copy);