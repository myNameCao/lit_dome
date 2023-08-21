
import {LitElement, html,css} from '../lib/lit-core.js';

class camSettings extends LitElement {

  static styles = css`

  

:host {
                    position: relative;
                    top: 0;
                    left: 0;
                    /* height: 352px; */
                    height: 100%;
                    overflow: hidden;
                    color: #185ABC;
                    box-sizing: border-box;
                    font-weight: 600;
                    /* padding-bottom: 5px; */
                    --focus-color: #4285F4;
                }
                :host([open]) {
                    display: block;
                }

                :host([disabled]) {
                    pointer-events: none;
                    filter: var(--disabled-filter, grayscale(100%));
                }

                input[type="number"] {
                    border: 0;
                    border-bottom: 1px solid #185ABC;
                    color: #185ABC;
                    margin: 8px;
                    padding: 4px;
                    width: 36px;
                }

                #container {
                    /* height: 300px; */
                    height: 100%;
                    display: flex;
                    align-items: center;
                }

                #webcam {
                    border-radius: 5px;
                    /* background-color: var(--preview-background, white); */ /*#CCD9EF;*/
                    background: none;
                }

                button:not([disabled]) {
                    background-color: #3474E0;
                    border-radius: 5px;
                    color: white;
                    width: 142px;
                    height: 36px;
                    border: 0;
                    outline: 0;
                    padding: 4px;
                    cursor: pointer;
                }

                :host([showRecord]) #show-record {
                    display: flex;
                }


                .show-throttle, #show-record {
                    display: none;
                }

                #show-record, #crop-btn {
                    display: flex;
                    margin-top: 25px;
                    margin-right: 2px;
                }
                #crop-btn {
                    width: 100%;
                }

                #show-record button, #show-record tm-timed-button {
                    flex-grow: 1;
                    cursor: pointer;
                }

                .disabled {
                    opacity: 0.35;
                    pointer-events: none;
                }

                .record-button {
                    width: 232px;
                }

                .input-holder{
                    display: inline-block;
                }

                .input-holder input{
                    border: 2px solid transparent;
                    border-radius: 3px;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    border-bottom: 2px solid #4285F4;
                    width: 50px;
                    padding: 4px;
                    margin: 0 5px;
                    text-align: center;
                    font-size: inherit;
                    color: inherit;
                    font-family: 'Google Sans', Helvetica, Arial, sans-serif;
                }
                .input-holder input:focus {
                    outline: 0;
                    border: 2px solid #1967D2;
                }


                #settings{
                    padding: 20px;
                    position: relative;
                    /* height: 355px; */
                    height: 100%;
                    font-size: 14px;
                    box-sizing: border-box;
                }

                #settings .setting-option{
                    margin-bottom: 12px;
                }

                #webcam-error {
                    height: 320px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                #webcam-error-text {
                    font-size: 14px;
                    color: #1967D2;
                    text-align: center;
                    width: 240px;
                }

                .save-settings-btn{
                    font-weight: 600;
                    font-size: 14px;
                }

                input[type="number"] {
                    width: 30px;
                }

                button:not([disabled]).settings-button,
                .settings-button {
                    outline: 0;
                    border: none;
                    margin: 0 0 0 14px;
                    padding: 0;
                    width: auto;
                    background-color: transparent;
                }

                .settings-button svg {
                    padding: 0;
                }

                .settings-button:focus {
                    outline: initial;
                }

                .settings-button:focus svg {
                    outline: 2px #8AB4F8 solid !important;
                }

                .settings__button-container {
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .settings__button_cancel {
                    width: auto !important;
                    height: auto !important;
                    padding: 0 25px !important;
                    background: none !important;
                    color: #1967D2 !important;
                    font-family: Google Sans, sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    position: relative;
                    outline: none !important;
                    border: none !important;
                }

                .settings__button--cancel:focus:after {
                    content: '';
                    position: absolute;
                    top: -1px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: 2px solid #8AB4F8;
                }

                #hold-to-record {
                    white-space: normal;
                }

            
   

    
  `

cancel(){
    this.dispatchEvent(new CustomEvent('closeSetings', {
        composed: true, // 允许跨 Shadow DOM 边界触发事件
    }));
  }
  render() {

    return html`
        <div id="settings" >
                    <div class="setting-option"><!---->Settings<!----></div>

                    <div class="setting-option">
                        <label for="fps"><!---->FPS:<!----></label>
                        <div class="input-holder">
                            <input id="fps" type="number" min="1" max="60" value="24">
                        </div>
                    </div>

                    <div class="setting-option">
                        <tm-toggle id="hold-to-record" checked="" label="Hold to Record">
                        </tm-toggle>
                    </div>

                    <div id="hold-to-record-settings" class="disabled">
                        <div class="setting-option">
                            <label for="delay"><!---->Delay:<!----></label>
                            <div class="input-holder">
                                <input id="delay" type="number" min="0" value="2">
                                seconds
                            </div>
                        </div>

                        <div class="setting-option">
                            <label for="duration"><!---->Duration:<!----></label>
                            <div class="input-holder">
                                <input id="duration" type="number" min="0" value="6">
                                seconds
                            </div>
                        </div>
                    </div>
                    <div class="settings__button-container">
                        <button class="settings__button_cancel"   @click=${this.cancel}>
                            Cancel
                        </button>
                        <button   @click=${this.cancel} class="save-settings-btn" id="return" style="width: 150px;" label="Save Settings">
                            Save Settings
                        </button>
                    </div>
                </div>
                
    `

  }
  

}


customElements.define('cam-settings', camSettings);