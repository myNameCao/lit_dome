// LitElement and html are the basic required imports

import {LitElement, html,css} from '../lib/lit-core.js';

import './settings.js';

class classItem extends LitElement {
  static get properties() {
    return {
      message: { type: Object }
    };
  }
  static properties = {
    data: { type: Object },
    showCameraSeting: { type: Boolean },
  };

  constructor() {
    super();
    this.addEventListener('closeSetings', this.cameraSeting_toshow);
    this.data = {TowebCam: false };
    this.showCameraSeting=false;
    this.msg = '';
  } 
 
  static styles = css`

          .button{
            border: none !important;
          }
          .classItem{
            background-color: white;
            margin-bottom:20px;
            border-radius: 8px;
            box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15);
          }
          .name{
           padding:18px;
           font-size: 18px;
           font-weight: bold;
           border-bottom: 1px solid #e0e0e0;
           cursor: pointer;
          }
          .name input{
            font-size: 18px;
            font-weight: bold;
            width: 80px;
            border: none;
          }
          #edit-icon-container{
            margin-left: 10px;
          }
          .dropdown-menu-holder{
            float: right;
            margin-right: 10px;
            outline: none;
            width:10px;
            overflow: visible


          }

          .dropdown-menu-holder:hover .dropdown_menu{
           display: block;

          }

          .dropdown_menu{
            width: 200px;
            padding:20px;
            margin-left: -200px;
            margin-top:-25px;
            display: none;
          }
          .menu{
            width: 200px;
            background-color: white;
            border: 1px solid #dadce0;
            border-radius: 8px;
            box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15);
            z-index:999;

          }
           .menu_item{
            font-weight:400;
            font-size: 15px;
            height: 40px;
            line-height: 40px;
            text-indent:20px
          }
          .disabled{
            color: #9fa0a1;
          }

          .menu_item:hover{
            background-color: rgb(0 0 0 / 5%);
          }

          .samples-label{
            height: 50px;
            line-height: 50px;
            font-size: 15px;
            text-indent: 20px;
            color: #3C4043;
            font-weight: 500;

          }
          .action_btn{
            margin-bottom: 20px;
            min-height: 80px;
          }
          .sample-source-btn{
            margin-left: 20px;
            height: 60px;
            width: 70px;
            text-align: center;
            background-color: #f1f3f4;
            color:#1967D2;
            background-color: #E8F0FE;
            border-radius: 4px;
            border:none;
            cursor: pointer;
          

          }

          .webcam{
            width: 100%;
            height: 430px
          }

          .webcamView{
            width: 50%;
            height: 100%;
            float: left;
            border-radius: 0 0 0 8px;
            background-color: #E8F0FE;
           
          }
          .settings{
            width: 50%;
            height: 100%;
            float: left;
            border-radius: 0 0 0 8px;
            background-color: #E8F0FE;
          }

          .webcamView_title{
            height: 55px;
            line-height: 55px;
            text-indent: 20px;
            font-size: 14px;
            font-weight: 500;
            color: #1967D2;

          }

          .closeBtn{
            float: right;
            margin-right: 20px;
            margin-top:20px;
            background:none;
            border:none;
            cursor: pointer;
          }
          .Camera{
            width:265px;
            height: 265px;
            margin: 0 auto;
            border: 1px solid #1967D2;
            border-radius: 4px;
            margin-bottom: 20px;

          }
          .webcamView_btn{
            height: 50px;

          }
          .webcamView_btn span{
            float: left;
            background:#1967D2;
            padding: 10px 60px;
            border-radius: 4px;
            color: white;
            margin-left: 15px;
            font-size:14px;
            font-weight:500;
            cursor: pointer;

          }

          .webcamView_btn .settings-button{
            background: none;
            float: right;
            margin-right: 15px;
            margin-top:8px;
            border:none;
            cursor: pointer;
          }
          .imagesView{
            width: 50%;
            float: left;
          }



        `;
  editeName(){
    this.message.edite = !this.message.edite;
    this.requestUpdate();
  }
  showMent(){
    let {showMent} = this.data;
    this.data.showMent = !showMent;
    let element= this.shadowRoot.querySelector('.dropdown_menu')
    if(showMent){
      element.style.display = 'block';
    }else{
      element.style.display = 'none';
    }
  }
  showCamera(state){
    this.data.TowebCam=state
    this.requestUpdate();
  }
  cameraSeting_toshow(){
    this.showCameraSeting = !this.showCameraSeting;
  }
  webcamBtn(){

    return html`
         <div id="closed-samples-label-row" class="section" >
              <div class="samples-label">Add Pose Samples:</div>
        </div>
        <div class='action_btn'>
          <button role="button"  @click=${()=>this.showCamera(true)} class="sample-source-btn" title="Add sample: Webcam">
              <svg class="sample-source-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#1967D2" fill-rule="evenodd" clip-rule="evenodd" d="M18 6V10.48L22 6.5V17.5L18 13.52V14.52V18C18 19.1 17.1 20 16 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H16C17.1 4 18 4.9 18 6ZM16 14.52V9.69V6H4V18H16V14.52Z"></path>
              </svg>
              <span class="sample-source-label"><!---->Webcam<!----></span>
          </button>
        </div>
    `

  }
  webCam(){
    return html`
      <div class='webcam'>
        <div class='webcamView' style=${this.showCameraSeting?'display:none':''}>
          <div class='webcamView_title'>
            Webcam
            <button class="closeBtn"  @click=${()=>this.showCamera(false)} >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#185ABC"></path>
              </svg>
            </button>
          </div>
          <div class='Camera'></div>
          <div class='webcamView_btn'>
              <span>Hold to Record</span>
              <button class="settings-button"  @click=${this.cameraSeting_toshow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3102 21.03C15.2102 21.71 14.5902 22.25 13.8502 22.25H10.1502C9.41023 22.25 8.79023 21.71 8.70023 20.98L8.43023 19.09C8.16023 18.95 7.90023 18.8 7.64023 18.63L5.84023 19.35C5.14023 19.61 4.37023 19.32 4.03023 18.7L2.20023 15.53C1.85023 14.87 2.00023 14.09 2.56023 13.65L4.09023 12.46C4.08023 12.31 4.07023 12.16 4.07023 12C4.07023 11.85 4.08023 11.69 4.09023 11.54L2.57023 10.35C1.98023 9.9 1.83023 9.09 2.20023 8.47L4.05023 5.28C4.39023 4.66 5.16023 4.38 5.84023 4.65L7.65023 5.38C7.91023 5.21 8.17023 5.06 8.43023 4.92L8.70023 3.01C8.79023 2.31 9.41023 1.76 10.1402 1.76H13.8402C14.5802 1.76 15.2002 2.3 15.2902 3.03L15.5602 4.92C15.8302 5.06 16.0902 5.21 16.3502 5.38L18.1502 4.66C18.8602 4.4 19.6302 4.69 19.9702 5.31L21.8102 8.49C22.1702 9.15 22.0102 9.93 21.4502 10.37L19.9302 11.56C19.9402 11.71 19.9502 11.86 19.9502 12.02C19.9502 12.18 19.9402 12.33 19.9302 12.48L21.4502 13.67C22.0102 14.12 22.1702 14.9 21.8202 15.53L19.9602 18.75C19.6202 19.37 18.8502 19.65 18.1602 19.38L16.3602 18.66C16.1002 18.83 15.8402 18.98 15.5802 19.12L15.3102 21.03ZM10.6202 20.25H13.3802L13.7502 17.7L14.2802 17.48C14.7202 17.3 15.1602 17.04 15.6202 16.7L16.0702 16.36L18.4502 17.32L19.8302 14.92L17.8002 13.34L17.8702 12.78L17.8733 12.7531V12.7531C17.9023 12.5027 17.9302 12.2607 17.9302 12C17.9302 11.73 17.9002 11.47 17.8702 11.22L17.8002 10.66L19.8302 9.08L18.4402 6.68L16.0502 7.64L15.6002 7.29C15.1802 6.97 14.7302 6.71 14.2702 6.52L13.7502 6.3L13.3802 3.75H10.6202L10.2502 6.3L9.72023 6.51C9.28023 6.7 8.84023 6.95 8.38023 7.3L7.93023 7.63L5.55023 6.68L4.16023 9.07L6.19023 10.65L6.12023 11.21C6.09023 11.47 6.06023 11.74 6.06023 12C6.06023 12.26 6.08023 12.53 6.12023 12.78L6.19023 13.34L4.16023 14.92L5.54023 17.32L7.93023 16.36L8.38023 16.71C8.81023 17.04 9.24023 17.29 9.71023 17.48L10.2402 17.7L10.6202 20.25ZM15.5002 12C15.5002 13.933 13.9332 15.5 12.0002 15.5C10.0672 15.5 8.50023 13.933 8.50023 12C8.50023 10.067 10.0672 8.5 12.0002 8.5C13.9332 8.5 15.5002 10.067 15.5002 12Z" fill="#185ABC"></path>
                  </svg>
              </button>
          </div>
        </div>
        <cam-settings class='settings'  style=${this.showCameraSeting?'':'display:none'}></cam-settings>
        <div class='imagesView'>
          <div class="samples-label">Add Pose Samples:</div>
        </div>
        
      </div>
        

    `
  }
  del(){
    let message = this.message;
    this.dispatchEvent(new CustomEvent('delItem', {
      composed: true, // 允许跨 Shadow DOM 边界触发事件
      detail:message
       }));
  }
  render() {
    return html`
      <div class='classItem'> 
        <div  class='name' >
            ${this.message.edite?html`<input type="text"
              @input="${(event)=>this.message.name=event.target.value}" 
              @blur="${this.editeName}"
             .value=${this.message.name}>`:html`<span  @click=${this.editeName}>${this.message.name}</span>`}
            <span   id="edit-icon-container" style="display: inline;">
                <svg id="edit-icon" role="button" tabindex="0" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Edit class name">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.06 0.590005L17.41 1.94C18.2 2.72 18.2 3.99 17.41 4.77L14.64 7.54L4.18 18H0V13.82L10.4 3.41L13.23 0.590005C14.01 -0.189995 15.28 -0.189995 16.06 0.590005ZM2 16L3.41 16.06L13.23 6.23005L11.82 4.82005L2 14.64V16Z" fill="#BDC1C6"></path>
                </svg>
            </span>
            <div class="dropdown-menu-holder" role="menu" >
                  <svg id="dropdown-dots"   role="button" tabindex="0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Open menu">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM10 18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18Z" fill="#BDC1C6"></path>
                  </svg>
                  <div class="dropdown_menu">
                    <div class='menu'>
                          <div class='menu_item'  @click=${this.del}><!---->Delete Class<!----></div>
                          <div class='menu_item'><!---->Disable Class<!----></div>
                          <div  class='menu_item disabled'><!---->Remove All Samples<!----></div>
                          <div  class='menu_item disabled'><!---->Download Samples<!----></div>
                          <div  class='menu_item disabled'><!---->Save Samples to Drive<!----></div>
                    </div>
                         
                  </div>
                  
            </div>
          
        </div>
        ${this.data.TowebCam?this.webCam():this.webcamBtn()}
      </div>
    `;
  }

}

customElements.define('xy-classitem', classItem);