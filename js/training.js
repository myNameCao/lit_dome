// LitElement and html are the basic required imports

import {LitElement, html,css} from '../lib/lit-core.js';

import './info-icon.js';

class Training extends LitElement {

  static properties = {
    showSeting: { type: Boolean }, 
    settingOption:{type:Object}
  };

  constructor() {
    super();
    this.showSeting = false;
    this.settingOption = {  
      epochs: 50,
      batchSize: 16,
      learningRate: 0.0001
  }
 }

  static styles = css`
  .mid_view {
    background-color: white;
    border-radius: 8px;
  }
  .name{
  
    font-size: 18px;
    font-weight: bold;
    line-height: 50px;
    text-indent: 20px;
  }
  .adv{
    height: 60px;
    line-height: 60px;
    text-indent: 20px;
    font-size: 14px;
    color:#9AA0A6;
    font-weight: 500;
    border-top: 1px solid #e0e0e0;
    cursor: pointer;
  }
  .adv_active{
     background-color:#E8F0FE;
     color:#1967D2;
  }

  .adv:hover{
     background-color:#E8F0FE;
     color:#1967D2;
  }

 .adv span{
  float: right;
  margin-right:15px;
 }

  .tr_model{
    height: 50px;
    
  }
  .tr_model span{
    display:inline-block;
    margin-left: 20px;
    padding: 10px 50px;
    font-size: 14px;
    font-weight: 500;
    color:#5F6368;
    background-color:#f1f3f4;
    border-radius: 4px;
  }

  .setting-row{
    height: 50px;
    line-height: 50px;
    padding-left:10px;
    border-bottom: 1px solid #eaeaea;
    position: relative;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }

 .input-holder {
    display: inline-block;
  }

  .input-holder input[type='text']{
      background-color: #e8f0fe;
      border: 0;
      outline: 0;
      border-radius: 3px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: 2px solid #1967D2;
      width: 50px;
      padding: 4px;
      margin: 0 5px;
      text-align: center;
      font-size: inherit;
      color: #1967D2;
      font-size: 14px;
      font-weight: 500;
      font-family: 'Google Sans', Helvetica, Arial, sans-serif;
  }

  .input-holder input[type='number'] {
      position: relative;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 42px;
      padding: 4px 6px;
      margin: 0 5px;
      border: 0;
      outline: 0;
      border-radius: 3px;
      background-color: #E8F0FE;
      color: #1967D2;
      font-size: 14px;
      letter-spacing: 0.3px;
      font-weight: 500;
      font-family: 'Google Sans', Helvetica, Arial, sans-serif;
  }

  .input-holder input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      cursor: pointer;
      display: block;
      position: relative;
  }
  .input-holder input[type="number"]::-webkit-outer-spin-button,
  .input-holder input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      opacity: 1;
      width: 19px;
      height: 26px;
      background-image: url("data:image/svg+xml,%3Csvg width='19' height='24' viewBox='0 0 19 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M0 0H17C18.1046 0 19 0.895431 19 2V22C19 23.1046 18.1046 24 17 24H0V0Z' fill='%231967D2'/%3E %3Cpath d='M9.5 20L5.60289 14.75L13.3971 14.75L9.5 20Z' fill='%23FFFFFF'/%3E %3Cpath d='M9.5 4L13.3971 9.25H5.60289L9.5 4Z' fill='%23FFFFFF'/%3E %3C/svg%3E%0A");
      background-repeat: no-repeat, repeat;
      background-position: right 0 top 50%, 0 0;
      background-size: cover;
      position: absolute;
      top: 0;
      right: 0;
  }

  .input-holder select {
      position: relative;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 62px;
      padding: 4px 8px;
      margin: 0 5px;
      border: 0;
      outline: 0;
      background-color: #E8F0FE;
      color: #1967D2;
      font-size: 14px;
      letter-spacing: 0.3px;
      font-weight: 500;
      font-family: 'Google Sans', Helvetica, Arial, sans-serif;

      background-image: url("data:image/svg+xml,%3Csvg width='19' height='24' viewBox='0 0 19 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H17C18.1046 0 19 0.895431 19 2V22C19 23.1046 18.1046 24 17 24H0V0Z' fill='%231967D2'/%3E%3Cpath d='M9.5 15L5.60289 9.75L13.3971 9.75L9.5 15Z' fill='%23FFFFFF'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat, repeat;
      background-position: right 0 top 50%, 0 0;
      background-size: 1.75em auto, 100%;
  }

  .input-holder select[disabled] {
      background-image: url("data:image/svg+xml,%3Csvg width='19' height='24' viewBox='0 0 19 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H17C18.1046 0 19 0.895431 19 2V22C19 23.1046 18.1046 24 17 24H0V0Z' fill='%23F1F3F4'/%3E%3Cpath d='M9.5 15L5.60289 9.75L13.3971 9.75L9.5 15Z' fill='%23FFFFFF'/%3E%3C/svg%3E%0A");
      background-color: #F1F3F4;
      color: #BDC1C6;
  }

  .input-holder input[type="number"][disabled] {
      background-color: #F1F3F4;
      color: #BDC1C6;
  }

  .input-holder input[type="number"][disabled]::-webkit-outer-spin-button,
  .input-holder input[type="number"][disabled]::-webkit-inner-spin-button {
      background-image: url("data:image/svg+xml,%3Csvg width='19' height='24' viewBox='0 0 19 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M0 0H17C18.1046 0 19 0.895431 19 2V22C19 23.1046 18.1046 24 17 24H0V0Z' fill='%23F1F3F4'/%3E %3Cpath d='M9.5 20L5.60289 14.75L13.3971 14.75L9.5 20Z' fill='%23FFFFFF'/%3E %3Cpath d='M9.5 4L13.3971 9.25H5.60289L9.5 4Z' fill='%23FFFFFF'/%3E %3C/svg%3E%0A");
  }

  .input-holder input:focus,
  .input-holder select:focus {
      outline: 2px solid var(--focus-color);
  }
  .icons{
    position: absolute;
    right: 10px;
    top: 5px;
  }
  .icons:hover{
    cursor: pointer;
    z-index: 9999;

  }
  .text_msg{
    color:#9AA0A6;

  }
  .setting-box{
    padding-top: 10px;
    padding-left:10px;
    border-bottom: 1px solid #eaeaea;
    font-weight: 500;
  }
    
  
`;

setSeting(){
  this.showSeting = !this.showSeting;
}
handleInput(event){
  event.target.value

}


resetdefaults(){

  let input = this.shadowRoot.querySelectorAll('input');
  let  select = this.shadowRoot.querySelectorAll('select');

  input[0].value = 50;
  input[1].value = 0.0001;
  select[0].value =16;
}
  render() {
    return html`
      <div class='mid_view'> 
        <div  class='name'>Training</div>
        <div class='tr_model'>
          <span>Train Model</span>
        </div>
        <div class=${this.showSeting?'adv adv_active': 'adv'}  @click=${this.setSeting}>
          Advanced
          <span>
            <svg id="down-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path  fill=${this.showSeting?'#1967D2':'#9AA0A6'}  d="M1.41 0.590088L0 2.00009L8 10.0001L16 2.00009L14.59 0.590088L8 7.170093"></path>
            </svg>
          </span>
        </div>
        ${this.showSeting?html`
          <div class='setIng'>
              <div class="setting-row">
                      <span>
                           Epochs:
                          <div class="input-holder">
                              <input type="number" min="1" maxlength="4" style="width: 54px;" max="9999" value=${this.settingOption.epochs} >
                          </div>
                      </span>
                      <info-icon  class='icons' >
                        <div class="tooltip-title">
                            Epochs
                        </div>
                        <div class="tooltip-text">
                            <p><!---->One epoch means that each and every sample in the training dataset has been fed through the training model at least once. If your epochs are set to 50, for example, it means that the model you are training will work through the entire training dataset 50 times. Generally the larger the number, the better your model will learn to predict the data.<!----></p>
                            <p><!---->You probably want to tweak (usually increase) this number until you get good predictive results with your model.<!----></p>
                        </div>
                      </info-icon>
              </div>
              <div class="setting-row">
                      <span>
                          Batch Size:
                          <div class="input-holder">
                              <select id="select-input" name="batch-size" value=${this.settingOption.batchSize}>
                                  <!---->
                                          <option value="16" selected="">
                                              16
                                          </option>
                                      <!---->
                                          <option value="32">
                                              32
                                          </option>
                                      <!---->
                                          <option value="64">
                                              64
                                          </option>
                                      <!---->
                                          <option value="128">
                                              128
                                          </option>
                                      <!---->
                                          <option value="256">
                                              256
                                          </option>
                                      <!---->
                                          <option value="512">
                                              512
                                          </option>
                                      <!---->
                              </select>
                          </div>
                      </span>
                      <info-icon class='icons'>
                          <div class="tooltip-title">
                              Batch Size:
                          </div>
                          <div class="tooltip-text">
                              <p><!---->A batch is a set of samples used in one iteration of training. For example, let's say that you have 80 images and you choose a batch size of 16. This means the data will be split into 80 / 16 = 5 batches. Once all 5 batches have been fed through the model, exactly one epoch will be complete.<!----></p>
                              <p><!---->You probably won't need to tweak this number to get good training results.<!----></p>
                          </div>
                      </info-icon>
              </div>

              <div class="setting-box">
                    Learning Rate:
                    <div class="setting-row" style='border:none;padding:0'>
                        <div class="input-holder">
                            <input type="number" id="learning-rate-input" maxlength="6" style="width: 80px; margin-left: 0px;" min="0.00001" max="0.1" step="0.00001" value=${this.settingOption.learningRate}>
                        </div>
                        <info-icon class='icons'>
                            <div class="tooltip-title">
                                Learning Rate
                            </div>
                            <div class="tooltip-text">
                                Be careful tweaking this number! Even small differences can have huge effects on how well your model learns.
                            </div>
                        </info-icon>
                    </div>
              </div>
              <div class="setting-row"  @click=${()=>this.resetdefaults()}>
                    <span class='text_msg'>Reset Defaults</span>
                    <span class="icons" style="height: 22px; width: 22px">
                            <svg class="sub-option-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.01V4H2V10H8V8H5.09C6.47 5.61 9.04 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12H2C2 17.52 6.48 22 12.01 22C17.53 22 22 17.52 22 12C22 6.48 17.53 2 12.01 2C8.73 2 5.83 3.58 4 6.01ZM13 6V12L17.23 14.94L15.97 16.49L11 13V6H12H13Z" fill="#9AA0A6"></path>
                            </svg>
                  
                    </span>
              </div>
            </div>
             
          </div>
        `:''}
      </div>
    `;
  }

}

customElements.define('xy-training', Training);