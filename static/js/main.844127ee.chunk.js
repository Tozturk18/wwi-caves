(this["webpackJsonp2wwi-caves"]=this["webpackJsonp2wwi-caves"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),l=n.n(i),s=n(6),c=n.n(s),o=(n(13),n(2)),d=n(3),A=n(5),g=n(4),r=(n(14),n.p+"static/media/background.3551c6be.jpg"),m=n.p+"static/media/Yankee_Division.2a2ee4f1.svg",b=n.p+"static/media/pilgrimageToken.c14b3f03.png",I=n.p+"static/media/about.11ec37fd.svg",E=n.p+"static/media/IDcard.8006fff7.svg";function j(e){return e*(100/window.innerHeight)}var u=function(e){Object(A.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).scrollHandle=function(t,n,a){var i=e.state,l=i.scrollIndex,s=i.windowHeight,c=i.gridSize;e.setState({scrollIndex:l+j(Math.round(t/2)),scrollPos:Math.sign(n),windowHeight:a}),s-2*c<s+l&&s+l<=s-c?e.setState({relativePos:[7*c,0,0,0,0,0]}):s-3*c<s+l&&s+l<=s-2*c?e.setState({relativePos:[7*c,7*c,0,0,0,0]}):s-4*c<s+l&&s+l<=s-3*c?e.setState({relativePos:[7*c,7*c,7*c,0,0,0]}):s-5*c<s+l&&s+l<=s-4*c?e.setState({relativePos:[7*c,7*c,7*c,7*c,0,0]}):s-6*c<s+l&&s+l<=s-5*c?e.setState({relativePos:[7*c,7*c,7*c,7*c,7*c,0]}):s-7*c<s+l&&s+l<=s-6*c?e.setState({relativePos:[7*c,7*c,7*c,7*c,7*c,7*c]}):s+c<s+l&&s+l<=s+2*c?e.setState({relativePos:[0,0,0,0,0,7*-c]}):s+2*c<s+l&&s+l<=s+3*c?e.setState({relativePos:[0,0,0,0,7*-c,7*-c]}):s+3*c<s+l&&s+l<=s+4*c?e.setState({relativePos:[0,0,0,7*-c,7*-c,7*-c]}):s+4*c<s+l&&s+l<=s+5*c?e.setState({relativePos:[0,0,7*-c,7*-c,7*-c,7*-c]}):s+5*c<s+l&&s+l<=s+6*c?e.setState({relativePos:[0,7*-c,7*-c,7*-c,7*-c,7*-c]}):s+6*c<s+l&&s+l<=s+7*c?e.setState({relativePos:[7*-c,7*-c,7*-c,7*-c,7*-c,7*-c]}):s-7*c>s+l||s+l>s+7*c?e.setState({relativePos:[0,0,0,0,0,0],scrollIndex:0}):e.setState({relativePos:[0,0,0,0,0,0]})},e.state={links:["#","#","#","#"],images:[m,b,I,E],texts:["THE 26TH YANKEE DIVISION","VIRTUAL PILGRIMAGE","ABOUT US","CONTACT US"],windowHeight:0,scrollIndex:0,scrollPos:0,relativePos:[0,0,0,0,0,0],gridSize:100/6,styles:{container:{width:"100vw",height:"100vh",overflow:"hidden",display:"grid",fontSize:"3vw"},menuImg1:{zIndex:"0",transition:"opacity 0.3s ease-in-out 0.1s",opacity:"0",width:"10vw",paddingLeft:"2vw"},menuImg2:{zIndex:"0",transition:"opacity 0.3s ease-in-out 0.1s",opacity:"0",width:"10vw",paddingLeft:"2vw",transform:"rotateY(180deg)"},background:{opacity:"100%",position:"absolute",width:"100vw",height:"100vh",top:"0",left:"0",padding:"0",margin:"0",filter:"brightness(50%)",zIndex:"-1"}}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=j(window.innerHeight);document.querySelector(".container").addEventListener("wheel",(function(n){e.scrollHandle(n.wheelDelta,n.deltaY,t)}),{passive:!0})}},{key:"componentWillUnmount",value:function(){var e=this,t=j(window.innerHeight);document.querySelector(".container").addEventListener("wheel",(function(n){e.scrollHandle(n.wheelDelta,n.deltaY,t)}),{passive:!0})}},{key:"render",value:function(){var e=this.state,t=e.scrollIndex,n=e.styles,i=e.relativePos,l=e.links,s=e.texts,c=e.images;return Object(a.jsxs)("div",{className:"container",style:n.container,children:[Object(a.jsx)("a",{href:l[0],style:{transform:"translate(-2vw,".concat(t+i[0],"vh)")},children:Object(a.jsxs)("span",{children:[Object(a.jsx)("p",{id:"yankee",children:s[0]}),Object(a.jsx)("img",{src:c[0],alt:"menuImg",style:n.menuImg1})]})},"0"),Object(a.jsx)("a",{href:l[1],style:{transform:"translate(4vw,".concat(t+i[1],"vh)")},children:Object(a.jsxs)("span",{children:[Object(a.jsx)("img",{src:c[1],alt:"menuImg",style:n.menuImg2}),Object(a.jsx)("p",{id:"pilgrimage",children:s[1]})]})},"1"),Object(a.jsx)("a",{href:l[2],style:{transform:"translate(-4.5vw,".concat(t+i[2],"vh)")},children:Object(a.jsxs)("span",{children:[Object(a.jsx)("p",{id:"about",children:s[2]}),Object(a.jsx)("img",{src:c[2],alt:"menuImg",style:n.menuImg1})]})},"2"),Object(a.jsx)("a",{href:l[3],style:{transform:"translate(7vw,".concat(t+i[3],"vh)")},children:Object(a.jsxs)("span",{children:[Object(a.jsx)("img",{src:c[3],alt:"menuImg",style:n.menuImg2}),Object(a.jsx)("p",{id:"contact",children:s[3]})]})},"3"),Object(a.jsx)("img",{id:"backImg",src:r,alt:"background",style:n.background})]})}}]),n}(l.a.Component),h=(n(15),function(e){Object(A.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={showingLoader:!0,loaderBack:!1,loader:Object(a.jsx)("span",{className:"loader",children:Object(a.jsx)("span",{className:"loader-inner"})}),key:0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({showingLoader:!1})}),2e3),setTimeout((function(){e.setState({loaderBack:!0})}),2450)}},{key:"render",value:function(){return Object(a.jsx)("div",{id:"loader-wrapper",style:{opacity:this.state.showingLoader?"100%":"0%",transition:"opacity 0.5s ease-out",zIndex:this.state.loaderBack?"-1":"1"},children:this.state.loader},this.state.key)}}]),n}(l.a.Component)),B=(n(16),function(e){Object(A.a)(n,e);var t=Object(g.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).getStyle=function(){return e.state.styles},e.langOpen=function(){var t=e.state.styles;document.getElementById("langs").style.opacity="1",document.getElementById("langs").style.display="grid",e.setState({langButtons:Object(a.jsx)("button",{id:"langButton",style:t.langButton,onClick:e.langClose,children:Object(a.jsx)("i",{className:"fas fa-language fa-3x",style:{padding:"0"}})})})},e.langClose=function(){var t=e.state.styles;document.getElementById("langs").style.opacity="0",document.getElementById("langs").style.display="none",e.setState({langButtons:Object(a.jsx)("button",{id:"langButton",style:t.langButton,onClick:e.langOpen,children:Object(a.jsx)("i",{className:"fas fa-language fa-3x",style:{padding:"0"}})})})},e.languageHandleEng=function(){var t=e.state.textENG,n=document.getElementById("yankee"),a=document.getElementById("pilgrimage"),i=document.getElementById("about"),l=document.getElementById("contact");console.log(n.textContent),n.textContent=t[0],a.textContent=t[1],i.textContent=t[2],l.textContent=t[3]},e.languageHandleFra=function(){var t=e.state.textFRA,n=document.getElementById("yankee"),a=document.getElementById("pilgrimage"),i=document.getElementById("about"),l=document.getElementById("contact");n.textContent=t[0],a.textContent=t[1],i.textContent=t[2],l.textContent=t[3]},e.languageHandleGer=function(){var t=e.state.textGER,n=document.getElementById("yankee"),a=document.getElementById("pilgrimage"),i=document.getElementById("about"),l=document.getElementById("contact");n.textContent=t[0],a.textContent=t[1],i.textContent=t[2],l.textContent=t[3]},e.state={clicked:!1,textENG:["THE 26TH YANKEE DIVISION","VIRTUAL PILGRIMAGE","ABOUT US","CONTACT US"],textFRA:["LA 26E DIVISION YANKEE","P\xc8LERINAGE VIRTUEL","\xc0 PROPOS DE NOUS","CONTACTEZ NOUS"],textGER:["DIE 26. YANKEE-ABTEILUNG","VIRTUELLE PILGERFAHRT","\xdcBER UNS","KONTAKTIERE UNS"],styles:{navBar:{backgroundColor:"rgba(0, 0, 0, 0.5)",width:"100%",height:"5vh",position:"static",zIndex:"2"},langButton:{float:"right",width:"4.5vw",height:"4.5vh",marginRight:"3vw",padding:"0",background:"transparent",border:"none"}},langButtons:Object(a.jsx)("button",{id:"langButton",onClick:e.langOpen,children:Object(a.jsx)("i",{className:"fas fa-language fa-3x",style:{padding:"0"}})})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.styles,n=e.langButtons;return Object(a.jsx)("div",{className:"navBar",style:t.navBar,children:Object(a.jsxs)("div",{className:"languages",style:{display:"grid",float:"right"},children:[n,Object(a.jsxs)("div",{id:"langs",style:{display:"none",backgroundColor:"rgba(92, 92, 92, 0.5)",opacity:"0"},children:[Object(a.jsx)("button",{className:"eng",style:t.langButton,onClick:this.languageHandleEng,children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxQUYwNzdCMEQyRDExRTZBNjQwRjEwOURFMUQ2NjJBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxQUYwNzdDMEQyRDExRTZBNjQwRjEwOURFMUQ2NjJBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDFBRjA3NzkwRDJEMTFFNkE2NDBGMTA5REUxRDY2MkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDFBRjA3N0EwRDJEMTFFNkE2NDBGMTA5REUxRDY2MkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4lSWMNAAAJ2UlEQVR42uRb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",alt:"britain icon",style:{width:"50%"}})}),Object(a.jsx)("button",{className:"fra",style:t.langButton,onClick:this.languageHandleFra,children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE3OTVBNjJEMEM3MDExRTY5NzFCQUU3NEE2MUI1MTRFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE3OTVBNjJFMEM3MDExRTY5NzFCQUU3NEE2MUI1MTRFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTc5NUE2MkIwQzcwMTFFNjk3MUJBRTc0QTYxQjUxNEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTc5NUE2MkMwQzcwMTFFNjk3MUJBRTc0QTYxQjUxNEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz55/fp3AAAD9klEQVR42uSbW0hUURSGl5MXBA3FruZTpRWVUT4VZaRvYSBEoRAVlVkRlBUFReFDRWQZFUbZTYswIkqoh8AoK3oI0i7SRaWn7EI3CctqRqX/5+xD06TNOHMc55z9w4cM4zkz+5999l5777WiZFyFWKpOj9RUzpeCvHS+coHxYDqYCjJAGkgBiSBWXeUG38Bn0AZaQBN4BFpBj7uuXjpWl0hUfLylXzdarBfvORssADlgEogL8Np0n9e/wEtwG1wD94AnUg0YBZYopll0zzh1L7JR9YoL4Dx4a8UHuCy4x0iwBzwGZRY2vjfxMdqnHg3+HT2YBvDadaABbFdGhEsjwDbwEKwPpScHa8AUUAc4go6RwVMqOApugsxwGbBMDUY5Ejmaq77TyoE0IAocAFUgSSJPQ8EpcAgMsdqAODX6bpbIF2eLGhBvlQFs/EVQKPbRInApEBNcAbzPLp8v9lMeqPbXRn8G7AcFYl+xJ5QHa8BSmzzz/rQBrOivARPV/OoUHVaxS0AGcAo5oaYVpyhBtSkmEAOKQLY4T7PAGn8GDAOl4lzt8l2z+BpQEuZFTbjFH3hLXwYMB8XifK1Sexf/GMBFTooGBiR5T4umARwdl4s+YowT623ATDBZIwMmgDneBuSLfso3DWDgk6uhAdzQiaYBY1Xoq5t4RpFOA2bInwMKncSN1CwakCn6KtOluoKuyqABaRobkOrSJPrrS8k0IFFjAxJcms4ApmJdorlogFvj9rtpQIfGBnynAV80NqCdBrzW2IA3NKBFYwNaaECTxgY00YBGTWeCLtBAA16BZg0NYP5hKw3oBrc0NIC5hx4zEqzV0IBaMxKk7oPnmnX/u94GMP20WiMDzomRhvvXyVCVJlHhV3DaezFk6gM4qYEBZ8C73gygmE/z0cGNZzp+me9yWHx6QamDDdjt/ev3ZgBVqWYFp+mBGLnN4s8AhojFDtsn6FRt8gRiAPVMjPQyp4iZL096e+N/e4JnxUgvs7uOqcda+msAxUTJyzZu/FV/PdmfAVwoMZviug0bf0OM+qWuUAygfoDFYmRf20VXwEI1+EmoBpgmFNpkTKhQP1hnIP/cn4ORHjGKEYoidIpk4eVaMYqougO9KJiTIZalZJvLyQgRAzfWDR3v74XBHo2xRjBXjbDvB7HhDN03iZHv0xjMDUI5G+ToegRkqQXGpzAvasrVZ7NIKuhNXSsOR1nCulWMAukdKoocKL0AO9VnMUZpC/WGVtYO88vsBQfVGMHi6XliJCXGhNDLuGNdL0bx9B3w00pHB6J6nFtNdQrenzlIzEQzy+dZaZosRhGDaYxHjeLtqkfxtOqpGDXCzf6CmVD0W4ABAOUKtUp7AyDoAAAAAElFTkSuQmCCMTkyNg==",alt:"france icon",style:{width:"50%"}})}),Object(a.jsx)("button",{className:"ger",style:t.langButton,onClick:this.languageHandleGer,children:Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4Q0E4Q0U0MEM3MjExRTZBOEJEQkU3MzI2QkI4MkFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4Q0E4Q0U1MEM3MjExRTZBOEJEQkU3MzI2QkI4MkFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NThDQThDRTIwQzcyMTFFNkE4QkRCRTczMjZCQjgyQUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NThDQThDRTMwQzcyMTFFNkE4QkRCRTczMjZCQjgyQUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4JjLrbAAADuUlEQVR42uSbS0hUURjHz51uSqCQpT3MVZQ9FbJlZA/bBoIQFJFURA+KntC2RUGBUS2MqChqYRCRQi3aVBa0aJFW9lJplaY9TMI039P/m/udmm4zzcz13pl7z/ngB/Nm/v977nl85zuG8DZCYB5YBkpAMSgC00EuyOLPDYMfoAd0gDbQAppBOxgXAQoTrAanWcAgCDuEvvscnAFrwWQ/C58FjvAfDnvES3AUFPpJ+ExwAnR7KNzOJ3ASzM6kcLq/9/A9G84QnWAv33ZpjaXgfgaF22kEpekSXw16fSRe8h1s91K4AWp8KNwOjRiT3BafDeoCIF5yE0xxU3x9gMRL7rhhAvX0NwIoProlhCZiQE2AxUvOOhW/RQHxkm2pil/Iw4oqBvTx3CWpoCHkkULiJU+SXUztUlC8ZF8i8flpXtSkmy+8ePtrmIuOg/YPKBb5vGSPGQXgq8JXX9LLuYt/WkA1p6pUj6mxhkXqHV9pcPUl72Q+0qi1Xikfs4Y+nWId5TTMKutJpSG0i8qIAf3WxKdCP/2RLLNJneBcnvrqFrRHMZ8MKIvaoNApKJG6PJTOZKIPozTETUHXKCYDijQ2oDCkyewvXuSRAbkaG5AT0nQEkJEVEpoHGTCssf5hMqBPYwP6yYBvGhvQSwZ80NiATjKgTWMD2siAFo0NaCEDmjQdCUbBMzLgPWjV0ACqP2w3x4UYw4MHwipk1CkeghEzp1xQ8UuDYYr9OqkPj4oGygYb4TcRAygtTgWOizVq/iUwYMiMFKOiKYBr4JQmBlwHQ/TACDf9fnEGeAumKS6e6h4WgS65GJLxGVzS4OpfkeLtLUC2AtoiK1BUfA+Pdl3Ry2FhawXHFL76x6PFx2oBFJQvbwQrFBP/FKzkDl/EawFyirhTsTzBAGsasb8RLyX2Gqg0MaLKlxex3vhfTvAqOKeA+PPgYrw3EyVFD4NbARZfn6glJzKAFkpUMXo3gOLvgc3cpzk2gOIn2CCswuOgxG1QxZ2fmKgB0oSNAekTavmCDSTz4VQ2Rujw4gGww6dDJB283C2sQ1RjyX7Jyc7QZUBZhMc+Ek91wKvAhVS/6HRrjHIHFdzDdmdQOE3dDwmr3qfJyQ/EmgqnGoV8a2wVVilquhY1lL+gA1IdE/khNwyQUcRD5iawxCPhlK+oY/GubOi4aYCMbO4j1oM1YIFwfuiZxvBWXpzRISgq5hx08896YYB9ZUk1SGXiz/H5OSAP5EQZM8K9OBUyfxTWbhUdlG5mA0a9+oO/BBgA4YGn5f1hXvQAAAAASUVORK5CYIIxODY1",alt:"germany icon",style:{width:"50%"}})})]})]})})}}]),n}(l.a.Component));c.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("loader")),c.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(u,{})}),document.getElementById("root")),c.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("header"))}],[[17,1,2]]]);
//# sourceMappingURL=main.844127ee.chunk.js.map