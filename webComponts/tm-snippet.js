
import {LitElement, html,css} from '../lib/lit-core.js';

import '../webComponts/tm-copy.js';

class snippet extends LitElement {

  static styles = css`
            :host {
                display: block;
                height: 100%;
            }
            #snippet-container {
                width: 100%;
                height: 100%;
                margin: 0;
                /* max-height: 500px; */
                /* overflow: scroll; */
           
            }

            pre {
              background-color: #E8F0FE;
              padding: 10px;
              user-select: text;
              position: relative;
            }

            code {
              white-space: pre-wrap;
              font-family: 'Roboto Mono';
              font-size: 12px;
              line-height: 14px;
              letter-spacing: 0px;
              font-weight: normal;
              font-style: normal;
              color: #2E79B9;
            }

            .hljs {
              display: block;
              overflow-x: auto;
              padding: 0.5em;
              color: #333;
            }

            .hljs-comment,
            .hljs-quote {
              color: #61abea;
              font-style: italic;
            }

            .hljs-keyword,
            .hljs-selector-tag,
            .hljs-subst {
              color: #2E79B9;
              font-weight: bold;
            }

            .hljs-number,
            .hljs-literal,
            .hljs-variable,
            .hljs-template-variable,
            .hljs-tag .hljs-attr {
              color: #BB7C00;
            }

            .hljs-string,
            .hljs-doctag {
              color: #D84C4C;
            }

            .hljs-title,
            .hljs-section,
            .hljs-selector-id {
              color: #D84C4C;
              font-weight: bold;
            }

            .hljs-subst {
              font-weight: normal;
            }

            .hljs-type,
            .hljs-class .hljs-title {
              color: #2E79B9;
              font-weight: bold;
            }

            .hljs-tag,
            .hljs-name,
            .hljs-attribute {
              color: #BB7C00;
              font-weight: normal;
            }

            .hljs-regexp,
            .hljs-link {
              color: #009926;
            }

            .hljs-symbol,
            .hljs-bullet {
              color: #4D0DCE;
            }

            .hljs-built_in,
            .hljs-builtin-name {
              color: #2E79B9;
              font-weight: bold;
            }

            .hljs-meta {
              color: #999;
              font-weight: bold;
            }

            .hljs-deletion {
              background: #fdd;
            }

            .hljs-addition {
              background: #dfd;
            }

            .hljs-emphasis {
              font-style: italic;
            }

            .hljs-strong {
              font-weight: bold;
            }

            tm-copy {
              position: absolute;
              right: 0;
              top: 0;
              white-space: normal;
            }
    
     `
  render() {

    return html`

<pre><code class="language-html" id="copy-0"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>Teachable Machine Pose Model<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">onclick</span>=<span class="hljs-string">"init()"</span>&gt;</span>Start<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">canvas</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"canvas"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">canvas</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"label-container"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/npm/@teachablemachine/pose@0.8/dist/teachablemachine-pose.min.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span>&gt;</span><span class="javascript">
    <span class="hljs-comment">// More API functions here:</span>
    <span class="hljs-comment">// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/pose</span>

    <span class="hljs-comment">// the link to your model provided by Teachable Machine export panel</span>
    <span class="hljs-keyword">const</span> URL = <span class="hljs-string">"./my_model/"</span>;
    <span class="hljs-keyword">let</span> model, webcam, ctx, labelContainer, maxPredictions;

    <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">init</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">const</span> modelURL = URL + <span class="hljs-string">"model.json"</span>;
        <span class="hljs-keyword">const</span> metadataURL = URL + <span class="hljs-string">"metadata.json"</span>;

        <span class="hljs-comment">// load the model and metadata</span>
        <span class="hljs-comment">// Refer to tmImage.loadFromFiles() in the API to support files from a file picker</span>
        <span class="hljs-comment">// Note: the pose library adds a tmPose object to your window (window.tmPose)</span>
        model = <span class="hljs-keyword">await</span> tmPose.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        <span class="hljs-comment">// Convenience function to setup a webcam</span>
        <span class="hljs-keyword">const</span> size = <span class="hljs-number">200</span>;
        <span class="hljs-keyword">const</span> flip = <span class="hljs-literal">true</span>; <span class="hljs-comment">// whether to flip the webcam</span>
        webcam = <span class="hljs-keyword">new</span> tmPose.Webcam(size, size, flip); <span class="hljs-comment">// width, height, flip</span>
        <span class="hljs-keyword">await</span> webcam.setup(); <span class="hljs-comment">// request access to the webcam</span>
        <span class="hljs-keyword">await</span> webcam.play();
        <span class="hljs-built_in">window</span>.requestAnimationFrame(loop);

        <span class="hljs-comment">// append/get elements to the DOM</span>
        <span class="hljs-keyword">const</span> canvas = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"canvas"</span>);
        canvas.width = size; canvas.height = size;
        ctx = canvas.getContext(<span class="hljs-string">"2d"</span>);
        labelContainer = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"label-container"</span>);
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; maxPredictions; i++) { <span class="hljs-comment">// and class labels</span>
            labelContainer.appendChild(<span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">"div"</span>));
        }
    }

    <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">loop</span>(<span class="hljs-params">timestamp</span>) </span>{
        webcam.update(); <span class="hljs-comment">// update the webcam frame</span>
        <span class="hljs-keyword">await</span> predict();
        <span class="hljs-built_in">window</span>.requestAnimationFrame(loop);
    }

    <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">predict</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-comment">// Prediction #1: run input through posenet</span>
        <span class="hljs-comment">// estimatePose can take in an image, video or canvas html element</span>
        <span class="hljs-keyword">const</span> { pose, posenetOutput } = <span class="hljs-keyword">await</span> model.estimatePose(webcam.canvas);
        <span class="hljs-comment">// Prediction 2: run input through teachable machine classification model</span>
        <span class="hljs-keyword">const</span> prediction = <span class="hljs-keyword">await</span> model.predict(posenetOutput);

        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; maxPredictions; i++) {
            <span class="hljs-keyword">const</span> classPrediction =
                prediction[i].className + <span class="hljs-string">": "</span> + prediction[i].probability.toFixed(<span class="hljs-number">2</span>);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }

        <span class="hljs-comment">// finally draw the poses</span>
        drawPose(pose);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">drawPose</span>(<span class="hljs-params">pose</span>) </span>{
        <span class="hljs-keyword">if</span> (webcam.canvas) {
            ctx.drawImage(webcam.canvas, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
            <span class="hljs-comment">// draw the keypoints and skeleton</span>
            <span class="hljs-keyword">if</span> (pose) {
                <span class="hljs-keyword">const</span> minPartConfidence = <span class="hljs-number">0.5</span>;
                tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
            }
        }
    }
   </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  </code>
  
  <tm-copy  .textContent=${'测试复制'} for="copy-0"></tm-copy>

</pre>
                
    `

  }
  

}


customElements.define('tm-snippet', snippet);