(this["webpackJsonpdreaming-story-formatter"]=this["webpackJsonpdreaming-story-formatter"]||[]).push([[0],{186:function(e,t,a){e.exports=a.p+"static/media/list.9e85d7a5.png"},188:function(e,t,a){e.exports=a(252)},193:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),l=a(182),i=a.n(l),o=(a(193),a(129));function c(){return r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(o.b,{to:"/"},"DREAM!ing STORY FORMATTER")),r.a.createElement("div",{className:"horizontal"},r.a.createElement("p",null,"A website to more easily upload event/gacha stories from the mobile idol game DREAM!ing to the fandom wiki.",r.a.createElement("br",null),"It takes formats your story chapter into text that can be pasted directly into the 'source' section of the page.",r.a.createElement("br",null),"Developed by ",r.a.createElement("a",{target:"_blank",href:"https://twitter.com/gayandasleep"},"midori"),"."),r.a.createElement("ul",{id:"navbar"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/howto"},"HOW TO USE")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://goo.gl/forms/Xu42LLAgWKxVYV873"},"FEEDBACK")))))}var s=a(1),u=a(2),h=a(21),p=a(5),m=a(4),d=a(171),f=a.n(d),E=a(173),b=a(177),g=a(178),v=a(174),y=a(187),k=a(176),C=a(175),T=a(134),w=["YUMA","YANAGI","TOUJI","SHION","SHINYA","SHIGURE","ISSEI","MIKAGE","SENRI","TAKAOMI","JIN","CHIZURU","KASUKA","MINATO","YUNI","RINTARO","KIRITANI","SARUWATARI","INOH","MAMORU","DYLAN","JUDAH"];function N(e){return(new DOMParser).parseFromString(e,"text/html")}function A(e){return e.slice(e.indexOf(":")+1).trim()}function O(e){return e.querySelectorAll("strong").forEach((function(e){e.replaceWith("'''".concat(e.innerText,"'''"))})),e.querySelectorAll("i").forEach((function(e){e.replaceWith("''".concat(e.innerText,"''"))})),e.querySelectorAll("a").forEach((function(e){e.replaceWith("[".concat(e.href," ").concat(e.innerText,"]"))})),e}var S=function(){var e="{{Story Header\n|Title=".concat(this.state.details.title[2],"        \n|Image=").concat(this.state.details.image[2],"        \n|Source=").concat(this.state.details.source[2],"        \n|TranslatorURL=").concat(this.state.details.tlCredit[2]," \n|TranslatorName=").concat(this.state.details.tlName[2],"\n|Chapter=").concat(this.state.details.chapter[2],"       \n\n"),t="{{Story Footer\n|Prev=".concat(this.state.details.prev[2],"          \n|Next=").concat(this.state.details.next[2],"          \n}}"),a=function(e){var t=e.querySelectorAll("p"),a=[];return t.forEach((function(e){a.push(e.innerHTML.replace(/&nbsp;/g,""))})),a}(O(N(this.state.input))),n=e,r="";a.forEach((function(e){if(""!=e)if(function(e){for(var t=[".png",".gif",".jpg",".jpeg",".ico",".pdf",".svg"],a=0;a<t.length;a++)if(e.toLowerCase().endsWith(t[a]))return!0;return!1}(e))n+="}}{{Story Image|Image=VALUE\n\n".replace("VALUE",function(e){e=e.trim();for(var t=[".png",".gif",".jpg",".jpeg",".ico",".pdf",".svg"],a=0;a<t.length;a++)if(e.toLowerCase().endsWith(t[a]))return e.replace(t[a],"");return e}(e)),r="";else{var t=e.slice(0,e.indexOf(":")).split(" ");if(t.length>3)n+=e+"\n\n";else{var a=t[0];if("LOCATION"===a.toUpperCase())n+="}}{{Location|Location=VALUE\n\n".replace("VALUE",A(e)),r="";else if("CHAPTER"===a.toUpperCase())n+="}}{{Chapter Divider|Chapter=VALUE\n      \n".replace("VALUE",A(e)),r="";else{if((t=t.join(" "))!=r){var l=w.includes(t.toUpperCase())?"}}{{VALUE|Dialogue=":"}}{{NPC\n|Name=VALUE\n|Dialogue=";n+=l.replace("VALUE",(i=t)[0].toUpperCase()+i.slice(1,i.length)),r=t}n+=A(e)+"\n\n"}}}var i})),n+="}}\n";var l=function(e){if(e.includes("<ol>")&&e.includes("<p>")){var t=N(e).querySelector("p").innerText;return t=t.replace(" ","")}}(this.state.tlNotes);n=function(e,t){var a=/\[\d+\]/g;if(-1!=e.search(a)&&void 0!=t){var n="<span id='".concat(t,"RefNUM'>[[#").concat(t,"NoteNUM|<sup>[NUM]</sup>]]</span>");e.match(a).forEach((function(t){var a=t.substring(t.indexOf("[")+1,t.indexOf("]")),r=n.replace(/NUM/g,a);e=e.replace(t,r)}))}return e}(n,l),n+=function(e,t){if(void 0!=t){var a=O(N(e)),n=[];a.querySelectorAll("li").forEach((function(e){n.push(e.innerHTML.replace(/&nbsp;/g,""))}));for(var r='|-\n| colspan="2"|',l="<span id='".concat(t,"NoteNUM'>NUM.[[#").concat(t,"RefNUM|\u2191]] TEXT</span><br />"),i=0;i<n.length;i++){var o=l.replace(/NUM/g,i+1);r+=o.replace("TEXT",n[i])}return r=r.replace(/<br \/>$/m,"\n")}return""}(this.state.tlNotes,l),n+=t,this.setState({output:n})},x={plugins:[b.a,g.a,v.a,k.a,C.a,T.a],toolbar:["bold","italic","link","|","undo","redo"]},j={plugins:[b.a,g.a,v.a,y.a,k.a,C.a,T.a],toolbar:["bold","italic","link","numberedList","|","undo","redo"]},L=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).convertText=S.bind(Object(h.a)(n)),n.onDetailChange=n.onDetailChange.bind(Object(h.a)(n)),n.state={input:"<p>If this is your first time using the formatter, please check the <a href='#/howto'>Text Guidelines</a> to make sure your text is ready.</p>",details:{title:["Title","",""],image:["Header Image","",""],source:["Source Story","",""],tlName:["Translator","",""],tlCredit:["Translator Credit","",""],chapter:["Chapter","",""],prev:["Previous Chapter Link","(optional)",""],next:["Next Chapter Link","(optional)",""]},tlNotes:"<p>If this is your first time using the formatter, please check the <a href='#/howto#tlNotesSection'>Text Guidelines</a> for how to add translation notes.</p>",output:""},n.inputEditor=r.a.createElement(f.a,{editor:E.a,config:x,data:n.state.input,id:"inputEditor",spellcheck:"false",onChange:function(e,t){var a=t.getData();n.setState({input:a})}}),n.tlNotesEditor=r.a.createElement(f.a,{editor:E.a,config:j,data:n.state.tlNotes,id:"tlEditor",spellcheck:!1,onChange:function(e,t){var a=t.getData();n.setState({tlNotes:a})}}),n}return Object(u.a)(a,[{key:"onDetailChange",value:function(e,t){this.setState((function(a,n){var r=a.details;return r[e][2]=t,{details:r}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(I,{inputEditor:this.inputEditor,details:this.state.details,onDetailChange:this.onDetailChange,tlNotesEditor:this.tlNotesEditor}),r.a.createElement(q,{convert:this.convertText}),r.a.createElement(G,{value:this.state.output}))}}]),a}(r.a.Component),I=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).openTab=n.openTab.bind(Object(h.a)(n)),n.state={tabLinks:{Text:"inputArea",Details:"detailArea","TL Notes":"tlArea"},clicked:""},n}return Object(u.a)(a,[{key:"openTab",value:function(e){for(var t="#"+this.state.tabLinks[e],a=document.querySelectorAll(".tabcontent"),n=0;n<a.length;n++)a[n].style.display="none";document.querySelector(t).style.display="block",this.setState({clicked:e})}},{key:"render",value:function(){return r.a.createElement("div",{id:"input"},r.a.createElement(U,{tabs:Object.keys(this.state.tabLinks),clicked:this.state.clicked,openTab:this.openTab}),r.a.createElement(R,{inputEditor:this.props.inputEditor}),r.a.createElement(H,{details:this.props.details,onDetailChange:this.props.onDetailChange}),r.a.createElement(F,{tlNotesEditor:this.props.tlNotesEditor}))}}]),a}(r.a.Component),U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={defaultOpen:"Text"},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){document.querySelector("[value='".concat(this.state.defaultOpen,"']")).click()}},{key:"render",value:function(){var e=this,t=this.props.tabs.map((function(t){return r.a.createElement(D,{key:t,value:t,className:"tablink"+(e.props.clicked===t?" active":""),text:t,onClick:function(){return e.props.openTab(t)}})}));return r.a.createElement("div",{className:"tabMenu"},t)}}]),a}(r.a.Component);function D(e){return r.a.createElement("button",{className:e.className,value:e.value,onClick:e.onClick},e.text)}var M=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:this.props.id,className:"tabcontent"},this.props.content)}}]),a}(r.a.Component),R=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(M,{id:"inputArea",content:this.props.inputEditor})}}]),a}(r.a.Component),H=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.details).map((function(t){return r.a.createElement(P,{key:t,name:t,label:e.props.details[t][0],placeholder:e.props.details[t][1],value:e.props.details[t][2],onDetailChange:e.props.onDetailChange})})),a=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"For more explanation on what each text field does, check the wiki's ",r.a.createElement("a",{href:"https://dreaminglive.fandom.com/wiki/Story_Formatting_Guide"},"Story Formatting Guide"),".")),t);return r.a.createElement(M,{id:"detailArea",content:a})}}]),a}(r.a.Component);function P(e){return r.a.createElement("div",{className:"row"},r.a.createElement("label",{className:"spacer"},e.label),r.a.createElement("input",{type:"text",placeholder:e.placeholder,value:e.value,onChange:function(t){return e.onDetailChange(e.name,t.target.value)}}))}var F=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(M,{id:"tlArea",content:this.props.tlNotesEditor})}}]),a}(r.a.Component),q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).copyToClip=n.copyToClip.bind(Object(h.a)(n)),n.state={copied:!1},n}return Object(u.a)(a,[{key:"copyToClip",value:function(){document.querySelector("#output").select(),document.execCommand("copy"),this.setState({copied:!0})}},{key:"render",value:function(){return r.a.createElement("div",{id:"btnArea"},r.a.createElement(B,{onClick:this.props.convert,id:"convertBtn",text:"CONVERT"}),r.a.createElement(B,{onClick:this.copyToClip,id:"copyBtn",text:this.state.copied?"Copied":"Copy Output"}))}}]),a}(r.a.Component);function B(e){return r.a.createElement("button",{onClick:e.onClick,id:e.id},e.text)}function G(e){return r.a.createElement("textarea",{spellCheck:"false",id:"output",defaultValue:e.value})}var V=a(186),W=a.n(V);function Y(){return r.a.createElement("div",{id:"container"},r.a.createElement("h2",null,"TEXT GUIDELINES"),r.a.createElement("h3",null,"Text Tab"),r.a.createElement("p",null,"Copy and paste your translated chapter into the text box."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Names")," - Names follow the same rules as described in the ",r.a.createElement("a",{href:"https://dreaminglive.fandom.com/wiki/Story_Formatting_Guide#Story_Body"},"Story Formatting Guide"),". The formatter identifies which character is speaking and fills in the relevant template. This means narration lines should begin with 'Narration: ', and names that do not have their own templates will be formatted with the NPC template."),r.a.createElement("li",null,r.a.createElement("strong",null,"Images")," - You can include whole row-images such as games screenshots or CGs by inserting the EXACT file name (ex. Friends in Tokyo 2 - 5.png) into the dialogue on its own line. Including the file extension is necessary for the formatter to recognize that it's being given a file."),r.a.createElement("li",null,r.a.createElement("strong",null,"Headings for location changes/new chapters")," - You can indicate scene changes by including a line that starts with 'Location: ' or 'Chapter: ' in the dialogue. "),r.a.createElement("li",null,r.a.createElement("strong",null,"Bold and italic text")," - Bold and italic text will be formatted, and should be preserved when pasted in from a Word/Google document."),r.a.createElement("li",null,r.a.createElement("strong",null,"Links")," - Links should also be preserved when pasted in. For now, internal wiki links are not supported so make sure every link is like an external one (i.e. with the https:// in front).")),r.a.createElement("p",null,"Here's an example of a short dialogue:"),r.a.createElement("blockquote",null,r.a.createElement("strong",null,"Person A:")," This is a line said by Person A! Their line starts with their name followed by a colon.",r.a.createElement("br",null),r.a.createElement("strong",null,"Person B:")," This is a line said by another person!",r.a.createElement("br",null),"Chapter: Chapter 2 (heading will say 'Chapter 2')",r.a.createElement("br",null),"Location: Hallway (heading will say 'Hallway')",r.a.createElement("br",null),"A screenshot of the game.jpeg",r.a.createElement("br",null),r.a.createElement("strong",null,"Person A:")," This is a third line from Person A."),r.a.createElement("p",null,"When characters have multiple lines at once, the following dialogue formats are accepted:"),r.a.createElement("blockquote",null,r.a.createElement("strong",null,"Person A:")," Line by person A",r.a.createElement("br",null),"Second line by person A (line doesn't begin with name)",r.a.createElement("br",null),r.a.createElement("strong",null,"Person B:")," Line by person B",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",null,"Person A:")," Line by person A",r.a.createElement("br",null),r.a.createElement("strong",null,"Person A:")," Second line by person A (line begins with name)",r.a.createElement("br",null),r.a.createElement("strong",null,"Person B:")," Line by person B"),r.a.createElement("h3",null,"Details Tab"),r.a.createElement("p",null,"Fill in information about the chapter and its appearance on the wiki. These are based on the fields in the Header and Footer templates in the ",r.a.createElement("a",{href:"https://dreaminglive.fandom.com/wiki/Story_Formatting_Guide"},"Story Formatting Guide"),", so reading the guide will help you understand what should go into each text field."),r.a.createElement("h3",{id:"tlNotesSection"},"TL Notes Tab"),r.a.createElement("p",null,"In the dialogue, you can mark the place the translation note refers to with a marker like this:"),r.a.createElement("blockquote",null,"Senri: It says I\u2019m Black Dorm![1] Yumapi, what about you?"),r.a.createElement("p",null,"You can have markers in the middle or end of the line, or even multiple markers in one line if needed."),r.a.createElement("p",null,"In the TL Notes tab, here's an example of how the notes should be formatted:"),r.a.createElement("blockquote",null,"Chapter 1",r.a.createElement("ol",null,r.a.createElement("li",null,"Place translator notes in a numbered list like this."),r.a.createElement("li",null,"Make sure the numbers correspond to each marker!"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"The first line should be a chapter title")," that's UNIQUE within the story (needed for citations to work with the wiki's tab view)"),r.a.createElement("li",null,r.a.createElement("strong",null,"The TL notes should be in an actual numbered list")," as opposed to paragraphs/lines with numbers in front. You can use the editor to format the list:"),r.a.createElement("img",{src:W.a,alt:"Numbered list"})))}var _=a(97);a(251);function K(){return r.a.createElement(o.a,{basename:"/"},r.a.createElement(c,null),r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/howto"},r.a.createElement(Y,null)),r.a.createElement(_.a,{exact:!0,path:"/"},r.a.createElement(L,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[188,1,2]]]);
//# sourceMappingURL=main.dee966a2.chunk.js.map