
import {LitElement, html,css} from '../lib/lit-core.js';
import '../webComponts/tm-snippet.js'

class infoIcon extends LitElement {


  static properties = {
    host: {type: String}
  }
  constructor(){
    super();
    this.host = 'cloud';
  }

  close(){
    const event = new CustomEvent('closeDiloag', {
      bubbles: true, // 允许事件冒泡到父级组件
      composed: true, // 允许事件穿越 Shadow DOM 边界
    });

    this.dispatchEvent(event);
  }

  handleChange(event) {
    const selectedOption = event.target.value; // 获取单选按钮的值
    this.host = selectedOption;
  }
  render() {

    return html` 
                <style>
                    .model_modal{
                        position: fixed;
                        font-weight: 500;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                        background-color: rgba(0,0,0,0.3);
                        z-index: 99998;
                        overflow: auto;
                        padding:30px;
                    }
                    .contetn{
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%, -50%);
                      z-index: 100000;
                      border-radius: 10px;
                      background-color: #fff;
                      box-shadow: 0px 2px 5px rgba(0, 0,0, 0.3);
                      overflow: hidden;
                      width: 820px;
                    }

                    .modal-header{
                      position: relative;
                      border-bottom: 1px solid #669DF6;
                      background-color: #E8F0FE;
                      color: #1967D2;
                    }
                    .modal-title{
                      line-height: 30px;
                      
                      font-size: 18px;
                      padding: 24px;
                    }
                    .modal-close-btn{
                      position: absolute;
                      top: 24px;
                      right: 24px;
                      cursor: pointer;
                      fill:  #1967D2;;
                      

                    }
                    .modal-header-tabs{
                      list-style: none;
                      position: relative;
                      margin: 0;
                      padding-left: 24px;
                    }

                    .export-option{
                      color: #1967D2;
                      background-color: #D2E3FC;
                      border-bottom: 2px solid #1967D2;
                      position: relative;
                      padding: 14px 20px;
                      cursor: pointer;
                      margin-bottom: -1px;

                    }
                   .option-name{
                    line-height: 20px;
                    }

                    .option-name svg{
                      margin-left: 2px;
                      vertical-align: middle;
                    }
                    .modal-header-tabs li {
                      display: inline-block;
                      border-radius: 10px 10px 0 0;
                    }
                .modal-body{
                    /* display: flex; */
                    height: 500px;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    padding: 20px;
                    font-size: 14px;
                }

                .export-modal-body p:first-child {
                    margin-top: 0;
                }

                .option-name{
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 5px;
                    font-size: 16px;
                }

           
                #convert-option-holder{
                    display: inline-block;
                    margin-bottom: 32px;
                }

                #host-option-holder{
                    display: inline-block;
                    margin-bottom:15px;
                }

                .radio-container {
                    display: inline-block;
                    position: relative;
                    padding-left: 30px;
                    margin-right: 20px;
                    cursor: pointer;
                    user-select: none;
                }

                .radio-container input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                }

                .radio-container input:checked {
                    color: #80868B;
                }

                .radio-container input ~ * {
                    color:#80868B;
                }

                .radio-container input:checked ~ * {
                    color: #1967D2;
                }

                .checkmark {
                    position: absolute;
                    top: -2px;
                    left: 0;
                    height: 18px;
                    width: 18px;
                    border-radius: 50%;
                    border: 2px solid #80868B;
                }

                .radio-container input:checked ~ .checkmark {
                    border: 2px solid #1A73E8;
                }

                .checkmark:after {
                    content: "";
                    position: absolute;
                    display: none;
                }

                .radio-container input:checked ~ .checkmark:after {
                    display: block;
                }
                .radio-container .checkmark:after {
                    top: 3px;
                    left: 3px;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: #1A73E8;
                }

                .button-container {
                    display: inline-block;
                }

                .action_btn{
                  padding: 8px 16px;
                  border-radius: 4px;
                  color: #5F6368;
                  background-color: #F1F3F4;
                  pointer-events: none;
                  border-radius: 4px;
                  font-weight:500;
                  letter-spacing: 0.3px;
                  cursor: pointer;
                  font-size: 14px;
                  font-family: 'Google Sans', Helvetica, Arial, sans-serif;
                  border: 2px solid transparent;
                }

                .action_btn svg{
                  margin-right: 5px;
                  display: inline-block;
                  vertical-align: middle;
                  fill: #5F6368;
                }
                
                #hosted-url.disabled {
                    background-color: #f1f3f4;
                    color: #80868B;
                    font-size: 13px;
                    line-height: 14px;
                    letter-spacing: 2px;
                    font-weight: 300;
                    padding: 8px 10px;
                    user-select: text;
                    font-family: 'Roboto Mono, monospace';
                }

                #export-info{
                      color: #80868B;
                      fill: #80868B;
                      margin-top: 12px;
                      margin-bottom: 16px;

                }

                a{
                  color: #80868B;

                }

                #code-snippet-tabs{
                  list-style: none;
                  position: relative;
                  white-space: nowrap;
                  margin: 0;
                  padding-left: 0;
                  border-bottom: 1px solid #80868B;
                  color:#80868B;

                }

                #code-snippet-tabs li.selected {
                    color: #1967D2;
                    border-bottom: 2px solid #1967D2;
                }

                #code-snippet-tabs li {
                    display: inline-block;
                    min-width: 120px;
                    padding: 0px 10px;
                    text-align: center;
                    cursor: pointer;
                }

                .code-snippet-holder{
                  margin-top: 2px;
                  padding-bottom: 20px;

                }
                                            

                </style>
                <div class="model_modal">
                  <div class="contetn">
                      <div class="modal-header">
                        <div class="modal-title"><!---->Export your model to use it in projects.<!----></div>
                        <span class="modal-close-btn"  @click=${this.close}>
                            <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                            </svg>
                        </span>

                        <ul class="modal-header-tabs">
                                <li class="export-option active">
                                    <div class="option-name"><!---->Tensorflow.js 
                                    <svg xmlns="http://wwoption-namehost-option-holderw.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#1967D2">
                                           <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.48 4.48 0 10 0C15.52 0 20 4.48 20 10C20 15.52 15.52 20 10 20C4.48 20 0 15.52 0 10ZM11 9V15H9V9H11ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM11 5V7H9V5H11Z"></path>
                                     </svg>
                                  </div>
                                </li>
                        </ul>
                    </div>

                    <div class="modal-body">
                        <p><!---->Export your model:<!----></p>
                        <div id="host-option-holder">
                                <label class="radio-container">
                                    <input type="radio" name="host" value="cloud" checked="" @change=${this.handleChange}>
                                    <span><!---->Upload (shareable link)<!----></span>
                                    <span class="checkmark"></span>
                                </label>
                                <label class="radio-container">
                                    <input type="radio" name="host" value="local"  @change=${this.handleChange}>
                                    <span><!---->Download<!----></span>
                                    <span class="checkmark"></span>
                                </label>
                                ${this.host == 'cloud' ? html`
                                 <button class='action_btn'>
                                 <svg class="action-btn-icon" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M13.9337 4.35008C13.542 1.98342 11.4753 0.166748 9.00033 0.166748C7.18366 0.166748 5.52533 1.15008 4.65033 2.71675C2.40866 3.00841 0.666992 4.95008 0.666992 7.25008C0.666992 9.77508 2.72533 11.8334 5.25033 11.8334H13.5837C15.6503 11.8334 17.3337 10.1501 17.3337 8.08342C17.3337 6.13342 15.842 4.52508 13.9337 4.35008ZM13.5837 10.1667H5.25033C3.64199 10.1667 2.33366 8.85841 2.33366 7.25008C2.33366 5.67508 3.61699 4.36675 5.20033 4.34175L5.73366 4.33341L5.95033 3.84175C6.47533 2.61675 7.67532 1.83341 9.00033 1.83341C10.842 1.83341 12.3337 3.32508 12.3337 5.16675V6.00008H13.5837C14.7337 6.00008 15.667 6.93341 15.667 8.08341C15.667 9.23341 14.7337 10.1667 13.5837 10.1667ZM11.917 6.41675L9.59199 4.09175L9.00033 3.50008L8.40866 4.09175L6.08366 6.41675L7.25866 7.60008L8.16699 6.69175V8.91675H9.83366V6.69175L10.742 7.59175L11.917 6.41675Z"></path>
                                 </svg>
                                 Upload my model
                                 </button>
                                 `: html`
                                 <button class='action_btn'>
                                  <svg class="action-btn-icon" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M7.83301 7.14159L9.99134 4.99159L11.1663 6.16658L6.99967 10.3333L2.83301 6.16658L4.00801 4.99159L6.16634 7.14159V0.333252H7.83301V7.14159ZM1.99967 9.49992H0.333008V11.9999C0.333008 12.9166 1.08301 13.6666 1.99967 13.6666H11.9997C12.9163 13.6666 13.6663 12.9166 13.6663 11.9999V9.49992H11.9997V11.9999H1.99967V9.49992Z"></path>
                                  </svg>
                                    Download my model
                                 </button>
                                 `}
                        </div>

                        ${this.host == 'cloud' ? html`
                        <p>Your sharable link:</p>
                        <div id="hosted-url" class="disabled">
                                <span id="hosted-url-text"><!---->https://teachablemachine.withgoogle.com/models/[...]<!----></span>
                        </div>
                        <div id="export-info">
                                When you upload your model, Teachable Machine hosts it at this link. (FAQ: <a target="_blank" href="https://teachablemachine.withgoogle.com/faq#Saving-&amp;-Exporting">Who can use my model?</a>)
                        </div>
                        `:''}
                        <p>Code snippets to use your model:</p>
                        <ul id="code-snippet-tabs">
                                    <li class="selected">
                                        Javascript
                                    </li>
                        </ul>

                        <div class='code-snippet-holder'>

                         <tm-snippet></tm-snippet>
                            
                        </div>
                    </div>
                  </div>
                    
                </div>
    `

  }
  

}


customElements.define('model-modal', infoIcon);