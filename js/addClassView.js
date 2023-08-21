// LitElement and html are the basic required imports

import {LitElement, html,css} from '../lib/lit-core.js';
import './classItem.js';

let common ={
  paintStyle: { stroke: '#ccc', strokeWidth: 2 },
  anchors: ['Right', 'Left'],
  connector: ['Bezier', { curviness: 30 }],
  endpoint: 'Blank'
}
const targetElement = document.getElementById('mid_view');
const right_view = document.getElementById('right_view');
class Preview extends LitElement {
  static styles = css`
           .add-classes{
              height: 80px;
              border-radius: 8px;
              line-height: 80px;
              text-align: center;
              font-size: 18px;
              border: 2px dashed #a9a9a9;
              border-spacing: 50px;
              color:#5F6368;
              cursor: pointer;
          }
          .add-classes:hover {
              color: #1967D2;
              border-color: #1967D2;
          }
        `;
  static properties = {
    classList: { type: Array },
  };
 
  constructor() {
    super();
    this.addEventListener('delItem', this.delItem);
    this.classList = [{name: 'Class 1', id: 'item_1',edite:false }];
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateComplete.then(() => {
      const sourceElement = this.shadowRoot.querySelector('#item_1');
      jsPlumb.ready(()=>{
        let connection= jsPlumb.connect({
          source: sourceElement,
          target: targetElement,
        },common);
        this.classList[0].connection = connection;
      })
    });
 
  }
  delItem(item){
    let {connection,id} = item.detail;
    let connections = jsPlumb.getConnections({  target: 'mid_view' });
    console.log(connections);
    jsPlumb.deleteEveryEndpoint();
    this.classList = this.classList.filter((e) => e.id != id);
    this.requestUpdate();
    this.updateComplete.then(() => {
        this.classList.forEach((item) => {
            item.connection = jsPlumb.connect({
              source: this.shadowRoot.querySelector('#'+item.id),
              target: targetElement,  
            },common);
        })

        item.connection = jsPlumb.connect({
          source: targetElement,
          target: right_view,  
        },Object.assign({},common,{connector: 'Straight'}));
      
    })
  }
  addItme(){
    let id =new Date().getTime();
    let value = this.classList.length+1;
    let  item=  {
      name: `Class ${value}`,
      id: 'item_'+id,
      edite:false
    }
    this.classList.push(item);
    this.requestUpdate(); 
    this.updateComplete.then(() => {
      jsPlumb.repaintEverything();
      const sourceElement = this.shadowRoot.querySelector('#'+item.id);
      item.connectio=jsPlumb.connect({
        source: sourceElement,
        target: targetElement,
      },common);

    });

    
    
    
  }
 
  render() {
    return html`
      <div class='class_view' > 
        ${this.classList.map((item) => html`<xy-classitem id=${item.id} .message=${item}></xy-classitem>`)}
        <div  class='add-classes' @click=${this.addItme}>
          <svg style="margin-right: 5px;" width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9961 0.25H2.33376C1.48838 0.25 0.810562 0.925 0.810562 1.75V12.25C0.810562 13.075 1.48838 13.75 2.33376 13.75H12.9961C13.8339 13.75 14.5193 13.075 14.5193 12.25V1.75C14.5193 0.925 13.8339 0.25 12.9961 0.25ZM12.9961 12.25H2.33376V1.75H12.9961V12.25ZM8.42654 10.75H6.90335V7.75H3.85695V6.25H6.90335V3.25H8.42654V6.25H11.4729V7.75H8.42654V10.75Z" fill="#80868B"></path>
          </svg>
            Add a class
        </div>
      </div>
    `;
  }

}

customElements.define('xy-classview', Preview);