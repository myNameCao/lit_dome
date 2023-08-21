
import {LitElement, html,css} from '../lib/lit-core.js';

class toggle extends LitElement {


  render() {
    return html`
            <style>
                :host {
                    display: block;
                    width: 100%;
                    white-space: nowrap;
                    user-select: none;
                    cursor: pointer;
                    --focus-color: #8AB4F8;
                }

                button {
                    background: transparent;
                    border: none;
                    outline: 0;
                    cursor: pointer;
                    display: inline-block;
                    vertical-align: middle;
                }

                button > * {
                    align-self: center;
                }

                .toggle-status{
                    vertical-align: middle;
                }

                .indicator {
                    width: 50px;
                    display: inline-block;
                    vertical-align: middle;
                }

                :host([disabled]) {
                    pointer-events: none;
                    opacity: 0.25;
                }

                :host([checked]) .indicator {
                    border: none;
                    opacity: 1;
                }

                .accent {
                    transition: fill 3s linear;
                }

                svg{
                    transform: scale(0.8);
                }

                #on-indicator .accent {
                    fill: #5F6368;
                }
                #on-indicator .track {
                    fill: #BDC1C6;
                }

                #off-indicator .accent {
                    fill: white;
                    stroke: #BDC1C6;
                }
                #off-indicator .track {
                    fill: #BDC1C6;
                }

                button:focus .accent,
                button:focus #off-indicator .accent,
                button:focus #on-indicator .accent {
                    stroke: var(--focus-color);
                    stroke-width: 2px;
                }
            </style>
            <span class="title"><!---->Hold to Record<!----></span>
            <button title="Hold to Record, toggled on ">
                <div class="indicator">
                    <svg id="off-indicator" width="50px" height="25px" viewBox="0 0 50 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none">
                        <title><!---->Currently toggled on<!----></title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path class="track" d="M38.3152174,21.25 L12.7717391,21.25 C7.79076087,21.25 3.83152174,17.375 3.83152174,12.5 C3.83152174,7.625 7.79076087,3.75 12.7717391,3.75 L38.3152174,3.75 C43.2961957,3.75 47.2554348,7.625 47.2554348,12.5 C47.2554348,17.375 43.2961957,21.25 38.3152174,21.25 Z"></path>
                            <ellipse class="accent" cx="12.5" cy="12.5" rx="11" ry="11"></ellipse>
                        </g>
                    </svg>

                    <svg id="on-indicator" width="50px" height="25px" viewBox="0 0 50 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block">
                        <title><!---->Currently toggled off<!----></title>
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path class="track" d="M42.2702703,12.5 C42.2702703,17.375 38.4162162,21.25 33.5675676,21.25 L8.7027027,21.25 C3.85405405,21.25 0,17.375 0,12.5 L0,12.5 C0,7.625 3.85405405,3.75 8.7027027,3.75 L33.5675676,3.75 C38.4162162,3.75 42.2702703,7.625 42.2702703,12.5 L42.2702703,12.5 L42.2702703,12.5 Z"></path>
                            <ellipse class="accent" cx="33.5" cy="12.5" rx="11" ry="11"></ellipse>
                        </g>
                    </svg>
                </div>
                <span class="toggle-status"><!---->ON<!----></span>
            </button>
    `

  }
  

}


customElements.define('tm-toggle', toggle);