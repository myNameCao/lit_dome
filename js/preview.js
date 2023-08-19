// LitElement and html are the basic required imports

import {LitElement, html,css} from '../lib/lit-core.js';

class Preview extends LitElement {

  static styles = css`
            .mid_view {
              height: 150px;
              background-color: white;
              border-radius: 8px;
          }
          .topName{
            text-indent: 20px;
            height: 73px;
            line-height: 73px;
            vertical-align: middle;
            font-size: 18px;
            font-weight: 500;
            margin-right: 15px;
            border-bottom: 1px solid #e0e0e0;
            
          }

          .topName span{
              margin-left: 20px;
              padding: 10px 20px;
              font-size: 14px;
              font-weight: 500;
              color:#5F6368;
              background-color:#f1f3f4;
            }
            .action-btn-icon{
              margin-right: 5px;
              display: inline-block;
              vertical-align: middle;
              fill: #5F6368;
            }
          .msg {
            padding:20px;
            font-weight: 500;
            font-size: 15px; color: #5F6368; margin: 0;
          }
        `;
  render() {
    return html`
      <div class='mid_view'> 
        <div>
          <div class='topName'>
            Preview
            <span>
            <svg class="action-btn-icon" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="
                    M11.9997 4.49992H13.6663V1.99992C13.6663 1.08325 12.9163 0.333252 11.9997 0.333252H1.99967C1.08301 0.333252 0.333008 1.08325 0.333008 1.99992V4.49992H1.99967V1.99992H11.9997V4.49992ZM6.16634 6.85825L4.00801 9.00825L2.83301 7.83325L6.99967 3.66659L11.1663 7.83325L9.99134 9.01659L7.83301 6.85825V13.6666H6.16634V6.85825Z
                    "></path>
                </svg>
              Export Model
            </span>
          </div>
          
        </div>
        <div class='msg'>You must train a model on the left before you can preview it here.</div>
      </div>
    `;
  }

}

customElements.define('xy-preview', Preview);