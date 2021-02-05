(this["webpackJsonppsychology-neuron"]=this["webpackJsonppsychology-neuron"]||[]).push([[0],{23:function(e,n,s){},24:function(e,n,s){},31:function(e,n,s){},34:function(e,n,s){"use strict";s.r(n);var t=s(9),o=s.n(t),a=s(14),r=s.n(a),i=(s(23),s.p,s(24),s(0)),c=s(1),l=s(8),h=s(4),d=s(5),p=s(15),m=s.n(p),u=s(16),b=s.n(u),f=(s(33),s(17)),g=s.n(f),j=s(18),y=(s(31),s(7)),x=function(e){Object(h.a)(s,e);var n=Object(d.a)(s);function s(){var e;return Object(i.a)(this,s),(e=n.call(this)).state={checked:!1},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e.TwoDText="2D",e.ThreeDText="3D",e.spanText=e.TwoDText,e.MAP={name:"my-map",areas:[{name:"Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.",shape:"poly",coords:[796,439,915,433,918,448,796,453]},{name:"Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.",shape:"poly",coords:[790,420,885,353,898,367,796,428]},{name:"Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.",shape:"poly",coords:[710,367,756,339,768,348,716,375]},{name:"Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.",shape:"poly",coords:[688,355,689,310,699,304,700,353]},{name:"Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.",shape:"poly",coords:[590,338,591,293,605,291,602,342]},{name:"Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.",shape:"poly",coords:[561,351,531,316,540,302,573,343]},{name:"Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.",shape:"poly",coords:[865,693,815,600,824,586,853,646,877,692]},{name:"Dendrite - Responsible for recieving chemical signals from the axon termini of other neurons.",shape:"poly",coords:[781,735,782,633,810,588,794,664,792,734]},{name:"Axon - Long fibers that conduct electrical signals between neurons, muscles, and glands.",shape:"poly",coords:[459,523,345,543,348,569,391,561,475,550]},{name:"Myelin Sheath - insulating layer that increases the speed of the electrical impulses.",shape:"poly",coords:[591,498,544,497,555,525,597,526]},{name:"Myelin Sheath - insulating layer that increases the speed of the electrical impulses.",shape:"poly",coords:[537,507,505,517,516,545,557,529]},{name:"Myelin Sheath - insulating layer that increases the speed of the electrical impulses.",shape:"poly",coords:[504,517,472,527,475,553,518,545]},{name:"Terminal Button - Responsible for sending signals to other neurons.",shape:"poly",coords:[139,592,153,636,172,631,171,598,156,583]},{name:"Terminal Button - Responsible for sending signals to other neurons.",shape:"poly",coords:[265,723,247,734,265,759,296,756,296,729]},{name:"Terminal Button - Responsible for sending signals to other neurons.",shape:"poly",coords:[170,345,145,361,143,382,144,388,172,376,178,357]},{name:"Syanptic Cleft - The space that seperates two neurons, a junction that helps nerve impulses pass.",shape:"poly",coords:[390,65,415,137,418,188,409,246,421,235,420,148,413,56,402,64]},{name:"Neurotransmitter - Molecules that transmit messages between neurons and/or muscles.",shape:"poly",coords:[432,116,422,114,418,87,444,95]},{name:"Neurotransmitter - Molecules that transmit messages between neurons and/or muscles.",shape:"circle",coords:[429,211,11]},{name:"Soma (Cell Body) - The cell body, supports the chemical processing of a neuron.",shape:"poly",coords:[662,439,623,452,608,468,612,496,636,513,659,522,687,516,704,500,706,465,688,447]}]},e}return Object(c.a)(s,[{key:"handleChange",value:function(e){this.setState({checked:e}),1==e?this.spanText=this.ThreeDText:0==e&&(this.spanText=this.TwoDText),this.forceUpdate()}},{key:"enterArea",value:function(e){this.setState({hoveredArea:e}),j.a.rebuild()}},{key:"leaveArea",value:function(e){this.setState({hoveredArea:null})}},{key:"render",value:function(){var e=this;return Object(y.jsxs)("div",{className:"containerDiv",children:[Object(y.jsxs)("label",{children:[Object(y.jsx)("span",{className:"switchLabel",children:this.spanText},this.handleChange),Object(y.jsx)(m.a,{onChange:this.handleChange,checked:this.state.checked})]}),Object(y.jsx)("div",{className:"modelRender",children:this.state.checked?Object(y.jsx)("model-viewer",{src:"/3dmodel/braincell.glb","shadow-intensity":"1","camera-controls":!0,"auto-rotate":!0,ar:!0}):Object(y.jsx)(b.a,{children:Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)(g.a,{src:"/2dimagemap/2DImage.png",map:this.MAP,onMouseEnter:function(n){return e.enterArea(n)},onMouseLeave:function(n){return e.leaveArea(n)}}),this.state.hoveredArea&&Object(y.jsx)("div",{children:Object(y.jsx)("span",{className:"tooltip",children:this.state.hoveredArea.name})})]})})})]})}}]),s}(t.Component);var v=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)("header",{className:"App-header",children:[Object(y.jsx)("h2",{className:"header",children:"Psychology Creative Project by Rasool Abbas"}),Object(y.jsx)("br",{}),Object(y.jsx)(x,{})]})})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(n){var s=n.getCLS,t=n.getFID,o=n.getFCP,a=n.getLCP,r=n.getTTFB;s(e),t(e),o(e),a(e),r(e)}))};r.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(v,{})}),document.getElementById("root")),O()}},[[34,1,2]]]);
//# sourceMappingURL=main.16eedc8f.chunk.js.map