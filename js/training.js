// LitElement and html are the basic required imports

import {LitElement, html,css} from '../lib/lit-core.js';

class Training extends LitElement {

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

 .adv span{
  float: right;
  margin-right:10px;
  margin-top: 4px;
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
  
`;
  render() {
    return html`
      <div class='mid_view'> 
        <div  class='name'>Training</div>
        <div class='tr_model'>
          <span>Train Model</span>
        </div>
        <div class='adv'>
        Advanced
        <span>
        <svg id="down-arrow-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                <path fill="#9AA0A6" d="M1.41 0.590088L0 2.00009L8 10.0001L16 2.00009L14.59 0.590088L8 7.170093"></path>
                            </svg>
        </span>
        </div>
      </div>
    `;
  }

}

customElements.define('xy-training', Training);