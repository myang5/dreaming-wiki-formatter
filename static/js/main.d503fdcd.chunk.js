(this["webpackJsonpdreaming-story-formatter"]=this["webpackJsonpdreaming-story-formatter"]||[]).push([[0],{173:function(e,t,a){e.exports=a(234)},178:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a.n(n),i=a(170),o=a.n(i),c=(a(178),a(1)),l=a(2),s=a(21),u=a(5),p=a(4);var d=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("a",{href:"index.html"},"DREAM!ing STORY FORMATTER")),r.a.createElement("div",{className:"horizontal"},r.a.createElement("p",null,"A website to more easily upload event/gacha stories from the mobile idol game DREAM!ing to the fandom wiki.",r.a.createElement("br",null),'It takes formats your story chapter into text that can be pasted directly into the "source" section of the page.',r.a.createElement("br",null),"Developed by ",r.a.createElement("a",{target:"_blank",href:"https://twitter.com/gayandasleep"},"midori"),"."),r.a.createElement("ul",{id:"navbar"},r.a.createElement("li",null,r.a.createElement("a",{href:"./howto.html"},"HOW TO USE")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://goo.gl/forms/Xu42LLAgWKxVYV873"},"FEEDBACK")))))},h=a(159),m=a.n(h),f=a(161),E=a(165),v=a(166),b=a(162),g=a(172),y=a(164),O=a(163),C=a(126),k=["YUMA","YANAGI","TOUJI","SHION","SHINYA","SHIGURE","ISSEI","MIKAGE","SENRI","TAKAOMI","JIN","CHIZURU","KASUKA","MINATO","YUNI","RINTARO","KIRITANI","SARUWATARI","INOH","MAMORU","DYLAN","JUDAH"];function N(e){return(new DOMParser).parseFromString(e,"text/html")}function A(e){return e.slice(e.indexOf(":")+1).trim()}function T(e){return e.querySelectorAll("strong").forEach((function(e){e.replaceWith("'''".concat(e.innerText,"'''"))})),e.querySelectorAll("i").forEach((function(e){e.replaceWith("''".concat(e.innerText,"''"))})),e.querySelectorAll("a").forEach((function(e){e.replaceWith("[".concat(e.href," ").concat(e.innerText,"]"))})),e}var j=function(){var e="{{Story Header\n|Title=".concat(this.state.details.title[2],"        \n|Image=").concat(this.state.details.image[2],"        \n|Source=").concat(this.state.details.source[2],"        \n|TranslatorURL=").concat(this.state.details.tlCredit[2]," \n|TranslatorName=").concat(this.state.details.tlName[2],"\n|Chapter=").concat(this.state.details.chapter[2],"       \n\n"),t="{{Story Footer\n|Prev=".concat(this.state.details.prev[2],"          \n|Next=").concat(this.state.details.next[2],"          \n}}"),a=function(e){var t=e.querySelectorAll("p"),a=[];return t.forEach((function(e){a.push(e.innerHTML.replace(/&nbsp;/g,""))})),a}(T(N(this.state.input))),n=e,r="";a.forEach((function(e){if(""!=e)if(function(e){for(var t=[".png",".gif",".jpg",".jpeg",".ico",".pdf",".svg"],a=0;a<t.length;a++)if(e.toLowerCase().endsWith(t[a]))return!0;return!1}(e))n+="}}{{Story Image|Image=VALUE\n\n".replace("VALUE",function(e){e=e.trim();for(var t=[".png",".gif",".jpg",".jpeg",".ico",".pdf",".svg"],a=0;a<t.length;a++)if(e.toLowerCase().endsWith(t[a]))return e.replace(t[a],"");return e}(e)),r="";else{var t=e.split(" ")[0];if(t.includes(":"))if("LOCATION"===(t=t.slice(0,-1)).toUpperCase())n+="}}{{Location|Location=VALUE\n\n".replace("VALUE",A(e)),r="";else if("CHAPTER"===t.toUpperCase())n+="}}{{Chapter Divider|Chapter=VALUE\n      \n".replace("VALUE",A(e)),r="";else{if(t!=r){var a=k.includes(t.toUpperCase())?"}}{{VALUE|Dialogue=":"}}{{NPC\n|Name=VALUE\n|Dialogue=";n+=a.replace("VALUE",(i=t)[0].toUpperCase()+i.slice(1,i.length)),r=t}e=A(e),n+=e+"\n\n"}else n+=e+"\n\n"}var i})),n+="}}\n";var i=function(e){if(e.includes("<ol>")&&e.includes("<p>")){var t=N(e).querySelector("p").innerText;return t=t.replace(" ","")}}(this.state.tlNotes);n=function(e,t){var a=/\[\d+\]/g;if(-1!=e.search(a)&&void 0!=t){var n="<span id='".concat(t,"RefNUM'>[[#").concat(t,"NoteNUM|<sup>[NUM]</sup>]]</span>");e.match(a).forEach((function(t){var a=t.substring(t.indexOf("[")+1,t.indexOf("]")),r=n.replace(/NUM/g,a);e=e.replace(t,r)}))}return e}(n,i),n+=function(e,t){if(void 0!=t){var a=T(N(e)),n=[];a.querySelectorAll("li").forEach((function(e){n.push(e.innerHTML.replace(/&nbsp;/g,""))}));for(var r='|-\n| colspan="2"|',i="<span id='".concat(t,"NoteNUM'>NUM.[[#").concat(t,"RefNUM|\u2191]] TEXT</span><br />"),o=0;o<n.length;o++){var c=i.replace(/NUM/g,o+1);r+=c.replace("TEXT",n[o])}return r=r.replace(/<br \/>$/m,"\n")}return""}(this.state.tlNotes,i),n+=t,this.setState({output:n})},S={plugins:[E.a,v.a,b.a,y.a,O.a,C.a],toolbar:["bold","italic","link","|","undo","redo"]},x={plugins:[E.a,v.a,b.a,g.a,y.a,O.a,C.a],toolbar:["bold","italic","link","numberedList","|","undo","redo"]};var U=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).convertText=j.bind(Object(s.a)(n)),n.onDetailChange=n.onDetailChange.bind(Object(s.a)(n)),n.state={input:"<p>If this is your first time using the formatter, please check the <a href='./howto.html'>Text Guidelines</a> to make sure your text is ready.</p>",details:{title:["Title","",""],image:["Header Image","",""],source:["Source Story","",""],tlName:["Translator","",""],tlCredit:["Translator Credit","",""],chapter:["Chapter","",""],prev:["Previous Chapter Link","(optional)",""],next:["Next Chapter Link","(optional)",""]},tlNotes:"<p>If this is your first time using the formatter, please check the <a href='./howto.html#tlNotesSection'>Text Guidelines</a> for how to add translation notes.</p>",output:""},n.inputEditor=r.a.createElement(m.a,{editor:f.a,config:S,data:n.state.input,id:"inputEditor",spellcheck:"false",onChange:function(e,t){var a=t.getData();n.setState({input:a})}}),n.tlNotesEditor=r.a.createElement(m.a,{editor:f.a,config:x,data:n.state.tlNotes,id:"tlEditor",spellcheck:!1,onChange:function(e,t){var a=t.getData();n.setState({tlNotes:a})}}),n}return Object(l.a)(a,[{key:"onDetailChange",value:function(e,t){this.setState((function(a,n){var r=a.details;return r[e][2]=t,{details:r}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(I,{inputEditor:this.inputEditor,details:this.state.details,onDetailChange:this.onDetailChange,tlNotesEditor:this.tlNotesEditor}),r.a.createElement(q,{convert:this.convertText}),r.a.createElement(F,{value:this.state.output}))}}]),a}(r.a.Component),I=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).openTab=n.openTab.bind(Object(s.a)(n)),n.state={tabLinks:{Text:"inputArea",Details:"detailArea","TL Notes":"tlArea"},clicked:""},n}return Object(l.a)(a,[{key:"openTab",value:function(e){for(var t="#"+this.state.tabLinks[e],a=document.querySelectorAll(".tabcontent"),n=0;n<a.length;n++)a[n].style.display="none";document.querySelector(t).style.display="block",this.setState({clicked:e})}},{key:"render",value:function(){return r.a.createElement("div",{id:"input"},r.a.createElement(L,{tabs:Object.keys(this.state.tabLinks),clicked:this.state.clicked,openTab:this.openTab}),r.a.createElement(M,{inputEditor:this.props.inputEditor}),r.a.createElement(R,{details:this.props.details,onDetailChange:this.props.onDetailChange}),r.a.createElement(H,{tlNotesEditor:this.props.tlNotesEditor}))}}]),a}(r.a.Component),L=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={defaultOpen:"Text"},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){document.querySelector("[value='".concat(this.state.defaultOpen,"']")).click()}},{key:"render",value:function(){var e=this,t=this.props.tabs.map((function(t){return r.a.createElement(D,{key:t,value:t,className:"tablink"+(e.props.clicked===t?" active":""),text:t,onClick:function(){return e.props.openTab(t)}})}));return r.a.createElement("div",{className:"tabMenu"},t)}}]),a}(r.a.Component);function D(e){return r.a.createElement("button",{className:e.className,value:e.value,onClick:e.onClick},e.text)}var w=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,className:"tabcontent"},this.props.content)}}]),a}(r.a.Component),M=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(w,{id:"inputArea",content:this.props.inputEditor})}}]),a}(r.a.Component),R=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.details).map((function(t){return r.a.createElement(V,{key:t,name:t,label:e.props.details[t][0],placeholder:e.props.details[t][1],value:e.props.details[t][2],onDetailChange:e.props.onDetailChange})})),a=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"For more explanation on what each text field does, check the wiki's ",r.a.createElement("a",{href:"https://dreaminglive.fandom.com/wiki/Story_Formatting_Guide"},"Story Formatting Guide"),".")),t);return r.a.createElement(w,{id:"detailArea",content:a})}}]),a}(r.a.Component);function V(e){return r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"spacer"},e.label),r.a.createElement("input",{type:"text",placeholder:e.placeholder,value:e.value,onChange:function(t){return e.onDetailChange(e.name,t.target.value)}}))}var H=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(w,{id:"tlArea",content:this.props.tlNotesEditor})}}]),a}(r.a.Component),q=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).copyToClip=n.copyToClip.bind(Object(s.a)(n)),n.state={copied:!1},n}return Object(l.a)(a,[{key:"copyToClip",value:function(){document.querySelector("#output").select(),document.execCommand("copy"),this.setState({copied:!0})}},{key:"render",value:function(){return r.a.createElement("div",{id:"btnArea"},r.a.createElement(W,{onClick:this.props.convert,id:"convertBtn",text:"CONVERT"}),r.a.createElement(W,{onClick:this.copyToClip,id:"copyBtn",text:this.state.copied?"Copied":"Copy Output"}))}}]),a}(r.a.Component);function W(e){return r.a.createElement("button",{onClick:e.onClick,id:e.id},e.text)}function F(e){return r.a.createElement("textarea",{spellCheck:"false",id:"output",defaultValue:e.value})}var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(U,null))};a(232),a(233);var K=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[173,1,2]]]);
//# sourceMappingURL=main.d503fdcd.chunk.js.map