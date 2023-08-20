// LitElement and html are the basic required imports

import {LitElement, html,css} from '../lib/lit-core.js';
class classItem extends LitElement {
  static get properties() {
    return {
      message: { type: Object }
    };
  }
  static styles = css`
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
            /* border:1px solid #e0e0e0; */
            /* outline: none; */
          }
          #edit-icon-container{
            margin-left: 10px;
          }
          .dropdown-menu-holder{
            float: right;
            margin-right: 10px;
            outline: none;

          }

          #closed-samples-label-row{
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
          

          }
        `;
  editeName(){
    this.message.edite = !this.message.edite;
    this.requestUpdate();
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
            <span  @click=${this.del} id="edit-icon-container" style="display: inline;">
                <svg id="edit-icon" role="button" tabindex="0" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Edit class name">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.06 0.590005L17.41 1.94C18.2 2.72 18.2 3.99 17.41 4.77L14.64 7.54L4.18 18H0V13.82L10.4 3.41L13.23 0.590005C14.01 -0.189995 15.28 -0.189995 16.06 0.590005ZM2 16L3.41 16.06L13.23 6.23005L11.82 4.82005L2 14.64V16Z" fill="#BDC1C6"></path>
                </svg>
            </span>
            <div class="dropdown-menu-holder" role="menu">
                  <svg id="dropdown-dots" role="button" tabindex="0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Open menu">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM10 18C10 16.9 10.9 16 12 16C13.1 16 14 16.9 14 18C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18Z" fill="#BDC1C6"></path>
                  </svg>
                  <div id="dropdown-menu">
                       
                  </div>
            </div>
          
        </div>
        <div id="closed-samples-label-row" class="section" >
              <div class="samples-label">Add Pose Samples:</div>
        </div>
        <div class='action_btn'>
          <button role="button" class="sample-source-btn" title="Add sample: Webcam">
              <svg class="sample-source-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#1967D2" fill-rule="evenodd" clip-rule="evenodd" d="M18 6V10.48L22 6.5V17.5L18 13.52V14.52V18C18 19.1 17.1 20 16 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H16C17.1 4 18 4.9 18 6ZM16 14.52V9.69V6H4V18H16V14.52Z"></path>
              </svg>
              <span class="sample-source-label"><!---->Webcam<!----></span>
          </button>

        </div>
        
      </div>
    `;
  }

}

customElements.define('xy-classitem', classItem);