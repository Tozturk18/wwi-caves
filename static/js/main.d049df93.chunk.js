(this["webpackJsonp2wwi-caves"]=this["webpackJsonp2wwi-caves"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n.n(r),o=n(7),i=n.n(o),c=(n(13),n(2)),l=n(3),d=n(5),h=n(4);n(14);function u(e){return e*(100/window.innerHeight)}var v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).scrollHandle=function(t,n,a){var r=e.state,s=r.scrollIndex,o=r.windowHeight,i=r.gridSize;e.setState({scrollIndex:s+u(Math.round(t/2)),scrollPos:Math.sign(n),windowHeight:a}),o-2*i<o+s&&o+s<=o-i?e.setState({relativePos:[7*i,0,0,0,0,0]}):o-3*i<o+s&&o+s<=o-2*i?e.setState({relativePos:[7*i,7*i,0,0,0,0]}):o-4*i<o+s&&o+s<=o-3*i?e.setState({relativePos:[7*i,7*i,7*i,0,0,0]}):o-5*i<o+s&&o+s<=o-4*i?e.setState({relativePos:[7*i,7*i,7*i,7*i,0,0]}):o-6*i<o+s&&o+s<=o-5*i?e.setState({relativePos:[7*i,7*i,7*i,7*i,7*i,0]}):o-7*i<o+s&&o+s<=o-6*i?e.setState({relativePos:[7*i,7*i,7*i,7*i,7*i,7*i]}):o+i<o+s&&o+s<=o+2*i?e.setState({relativePos:[0,0,0,0,0,7*-i]}):o+2*i<o+s&&o+s<=o+3*i?e.setState({relativePos:[0,0,0,0,7*-i,7*-i]}):o+3*i<o+s&&o+s<=o+4*i?e.setState({relativePos:[0,0,0,7*-i,7*-i,7*-i]}):o+4*i<o+s&&o+s<=o+5*i?e.setState({relativePos:[0,0,7*-i,7*-i,7*-i,7*-i]}):o+5*i<o+s&&o+s<=o+6*i?e.setState({relativePos:[0,7*-i,7*-i,7*-i,7*-i,7*-i]}):o+6*i<o+s&&o+s<=o+7*i?e.setState({relativePos:[7*-i,7*-i,7*-i,7*-i,7*-i,7*-i]}):o-7*i>o+s||o+s>o+7*i?e.setState({relativePos:[0,0,0,0,0,0],scrollIndex:0}):e.setState({relativePos:[0,0,0,0,0,0]})},e.state={links:["#","#","https://wwi-underground.org/panoramas","https://wwi-underground.org/downloads/WWI%20Underground%20Desktop%20Viewer%20[2019-12-11].zip","#","#"],windowHeight:0,scrollIndex:0,scrollPos:0,relativePos:[0,0,0,0,0,0],gridSize:100/6,styles:{container:{width:"gridSize*7%",height:"gridSize*7vh",overflow:"hidden",display:"grid",fontSize:"3vw"},background:{opacity:"100%",position:"absolute",width:"100vw",height:"100vh",top:"0",left:"0",padding:"0",margin:"0",filter:"brightness(50%)",zIndex:"-1"}}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=u(window.innerHeight);document.querySelector(".container").addEventListener("wheel",(function(n){e.scrollHandle(n.wheelDelta,n.deltaY,t)}))}},{key:"componentWillUnmount",value:function(){var e=this,t=u(window.innerHeight);document.querySelector(".container").addEventListener("wheel",(function(n){e.scrollHandle(n.wheelDelta,n.deltaY,t)}))}},{key:"render",value:function(){var e=this.state,t=e.scrollIndex,n=e.styles,r=e.relativePos,s=e.links;return Object(a.jsxs)("div",{className:"container",style:n.container,children:[Object(a.jsx)("a",{id:"home",className:"home",href:s[0],style:{transform:"translateY(".concat(t+r[0],"vh)")},children:"HOME"},"0"),Object(a.jsx)("a",{id:"about",href:s[1],style:{transform:"translateY(".concat(t+r[1],"vh)")},children:"ABOUT US"},"1"),Object(a.jsx)("a",{id:"pano",href:s[2],style:{transform:"translateY(".concat(t+r[2],"vh)")},children:"PANORAMAS"},"2"),Object(a.jsx)("a",{id:"desktop",href:s[3],style:{transform:"translateY(".concat(t+r[3],"vh)")},children:"DESKTOP VIEWER"},"3"),Object(a.jsx)("a",{id:"stories",href:s[4],style:{transform:"translateY(".concat(t+r[4],"vh)")},children:"UNTOLD STORIES"},"4"),Object(a.jsx)("a",{id:"contact",href:s[5],style:{transform:"translateY(".concat(t+r[5],"vh)")},children:"CONTACT"},"5"),Object(a.jsx)("img",{id:"backImg",src:"http://placekitten.com/g/1890/1000",alt:"background",style:n.background})]})}}]),n}(s.a.Component),j=(n(15),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={showingLoader:!0,loaderBack:!1,loader:Object(a.jsx)("span",{class:"loader",children:Object(a.jsx)("span",{class:"loader-inner"})}),key:0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({showingLoader:!1})}),2e3),setTimeout((function(){e.setState({loaderBack:!0})}),2450)}},{key:"render",value:function(){return Object(a.jsx)("div",{id:"loader-wrapper",style:{opacity:this.state.showingLoader?"100%":"0%",transition:"opacity 0.5s ease-out",zIndex:this.state.loaderBack?"-1":"1"},children:this.state.loader},this.state.key)}}]),n}(s.a.Component));i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("loader")),i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d049df93.chunk.js.map