(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),r=a.n(o),c=(a(16),a(6)),i=a(1),s=a(2),m=a(4),u=a(3),d=a(5),p=(a(7),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.props,t=e.centerCircleOptions,a=e.handleColorReset,n=e.handleColorStain,o=e.handleMenuClick,r=e.handleImage,c=e.handleInputChange;return l.a.createElement("li",{className:"centerCircleOptions"},l.a.createElement("section",null,l.a.createElement("span",null,"Center Circle"),l.a.createElement("a",{className:"menuOptionsLink",href:"#centerCircleOptions",onClick:o},l.a.createElement("i",{className:"fas fa-caret-down"}))),t?l.a.createElement("section",{className:"expandedMenu"},l.a.createElement("label",null,"Center Circle Paint Color:",l.a.createElement("input",{className:"centerCircleColor",name:"centerCircleColor",onChange:c,type:"color"})),l.a.createElement("label",null,"Stain:",l.a.createElement("input",{className:"centerCircleStain",min:"0.1",max:"1.0",step:"0.1",name:"centerCircleColor",onChange:n,type:"number"})),l.a.createElement("label",{className:"centerCirlceImageInput"}," Upload File",l.a.createElement("input",{onChange:r,name:"centerCirlceImage",type:"file",accept:"image/*"})),l.a.createElement("button",{className:"centerCirlceResetColor",name:"centerCirlceResetColor",type:"button",onClick:a},"Reset")):null)}}]),t}(n.Component)),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.props,t=e.borderOptions,a=e.handleColorReset,n=e.handleColorStain,o=e.handleMenuClick,r=e.handleInputChange;return l.a.createElement("li",{className:"borderOptions"},l.a.createElement("section",null,l.a.createElement("span",null,"Border"),l.a.createElement("a",{className:"menuOptionsLink",href:"#borderOptions",onClick:o},l.a.createElement("i",{className:"fas fa-caret-down"}))),t?l.a.createElement("section",{className:"expandedMenu"},l.a.createElement("label",null,"Border Color:",l.a.createElement("input",{className:"borderColor",name:"borderColor",onChange:r,type:"color"})),l.a.createElement("label",null,"Stain:",l.a.createElement("input",{className:"borderColorOpacity",min:"0.1",max:"1.0",step:"0.1",name:"borderColor",onChange:n,type:"number"})),l.a.createElement("button",{className:"borderResetColor",name:"borderResetColor",type:"button",onClick:a},"Reset"),l.a.createElement("label",null,"End Border Size:",l.a.createElement("input",{className:"borderEndSize",min:"0",max:"120",name:"borderEndSize",onChange:r,type:"number"}),"(inches)"),l.a.createElement("label",null,"Side Border Size:",l.a.createElement("input",{className:"borderSideSize",min:"0",max:"72",name:"borderSideSize",onChange:r,type:"number"}),"(inches)"),l.a.createElement("label",null,"Left End Border Lettering:",l.a.createElement("input",{className:"leftEndBorderText",name:"leftEndBorderText",onChange:r,type:"text"})),l.a.createElement("label",null,"Right End Border Lettering:",l.a.createElement("input",{className:"rightEndBorderText",name:"rightEndBorderText",onChange:r,type:"text"})),l.a.createElement("label",null,"End Border Text Color:",l.a.createElement("input",{className:"endBorderTextColor",name:"endBorderTextColor",onChange:r,type:"color"})),l.a.createElement("label",null,"Stain:",l.a.createElement("input",{className:"endBorderTextColorOpacity",min:"0.1",max:"1.0",step:"0.1",name:"endBorderTextColor",onChange:n,type:"number"})),l.a.createElement("label",null,"End Border Text Size:",l.a.createElement("input",{className:"endBorderTextSize",min:"12",max:"60",name:"endBorderTextSize",onChange:r,type:"number"}),"(inches)"),l.a.createElement("label",null,"End Border Letter Spacing:",l.a.createElement("input",{className:"endBorderLetterSpacing",min:"0",name:"endBorderLetterSpacing",onChange:r,type:"number"}),"(inches)")):null)}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.props,t=e.gamelineOptions,a=e.handleColorReset,n=e.handleColorStain,o=e.handleMenuClick,r=e.handleInputChange;return l.a.createElement("li",{className:"gamelineOptions"},l.a.createElement("section",null,l.a.createElement("span",null,"Game lines"),l.a.createElement("a",{className:"menuOptionsLink",href:"#gamelineOptions",onClick:o},l.a.createElement("i",{className:"fas fa-caret-down"}))),t?l.a.createElement("section",{className:"expandedMenu"},l.a.createElement("label",null,"Main Gameline:",l.a.createElement("input",{className:"mainGamelineColor",name:"mainGamelineColor",onChange:r,type:"color"})),l.a.createElement("label",null,"Stain:",l.a.createElement("input",{className:"mainGamelineStain",min:"0.1",max:"1.0",step:"0.1",name:"mainGamelineColor",onChange:n,type:"number"})),l.a.createElement("button",{className:"mainGameLineResetColor",name:"mainGameLineResetColor",type:"button",onClick:a},"Reset")):null)}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.props,t=e.threePointOptions,a=e.handleColorReset,n=e.handleColorStain,o=e.handleMenuClick,r=e.handleInputChange;return l.a.createElement("li",{className:"threePointOptions"},l.a.createElement("section",null,l.a.createElement("span",null,"3 Point Area"),l.a.createElement("a",{className:"menuOptionsLink",href:"#threePointOptions",onClick:o},l.a.createElement("i",{className:"fas fa-caret-down"}))),t?l.a.createElement("section",{className:"expandedMenu"},l.a.createElement("label",null,"3 Point Area Color:",l.a.createElement("input",{className:"threePointAreaColor",name:"threePointAreaColor",onChange:r,type:"color"})),l.a.createElement("label",null,"Stain:",l.a.createElement("input",{className:"threePointStain",min:"0.1",max:"1.0",step:"0.1",name:"threePointAreaColor",onChange:n,type:"number"})),l.a.createElement("button",{className:"threePointAreaResetColor",name:"threePointAreaResetColor",type:"button",onClick:a},"Reset")):null)}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.props,t=e.keyOptions,a=e.handleColorReset,n=e.handleColorStain,o=e.handleMenuClick,r=e.handleInputChange,c=e.handleImage;return l.a.createElement("li",{className:"keyOptions"},l.a.createElement("section",null,l.a.createElement("span",null,"Keys"),l.a.createElement("a",{className:"menuOptionsLink",href:"#keyOptions",onClick:o},l.a.createElement("i",{className:"fas fa-caret-down"}))),t?l.a.createElement("section",{className:"expandedMenu"},l.a.createElement("label",null,"Key Color:",l.a.createElement("input",{className:"keyColor",name:"keyColor",onChange:r,type:"color"})),l.a.createElement("label",null,"Stain:",l.a.createElement("input",{className:"keyStain",min:"0.1",max:"1.0",step:"0.1",name:"keyColor",onChange:n,type:"number"})),l.a.createElement("label",{className:"keyImageInput"}," Upload File",l.a.createElement("input",{onChange:c,name:"keyImage",type:"file",accept:"image/*"})),l.a.createElement("button",{className:"keyResetColor",name:"keyResetColor",type:"button",onClick:a},"Reset")):null)}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.props,t=e.laneOptions,a=e.handleColorReset,n=e.handleColorStain,o=e.handleMenuClick,r=e.handleInputChange;return l.a.createElement("li",{className:"laneOptions"},l.a.createElement("section",null,l.a.createElement("span",null,"Lanes"),l.a.createElement("a",{className:"menuOptionsLink",href:"#laneOptions",onClick:o},l.a.createElement("i",{className:"fas fa-caret-down"}))),t?l.a.createElement("section",{className:"expandedMenu"},l.a.createElement("label",null,"Lane Color:",l.a.createElement("input",{className:"laneColor",name:"laneColor",onChange:r,type:"color"})),l.a.createElement("label",null,"Stain:",l.a.createElement("input",{className:"laneColorOpacity",min:"0.1",max:"1.0",step:"0.1",name:"laneColor",onChange:n,type:"number"})),l.a.createElement("button",{className:"laneResetColor",name:"laneResetColor",type:"button",onClick:a},"Reset")):null)}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.props,t=e.handleImage,a=e.handleMenuClick,n=e.sideCourtOptions;return l.a.createElement("li",{className:"sideCourtOptions"},l.a.createElement("section",null,l.a.createElement("span",null,"Side Courts"),l.a.createElement("a",{className:"menuOptionsLink",href:"#sideCourtOptions",onClick:a},l.a.createElement("i",{className:"fas fa-caret-down"}))),n?l.a.createElement("section",{className:"expandedMenu",id:"sideCourtMenu"},l.a.createElement("label",{className:"leftTopSideCourtImageInput"}," Left Top Side Court",l.a.createElement("input",{onChange:t,name:"leftTopSideCourtImage",type:"file",accept:"image/*"})),l.a.createElement("label",{className:"leftBottomSideCourtImageInput"}," Left Bottom Side Court",l.a.createElement("input",{onChange:t,name:"leftBottomSideCourtImage",type:"file",accept:"image/*"})),l.a.createElement("label",{className:"rightTopSideCourtImageInput"}," Right Top Side Court",l.a.createElement("input",{onChange:t,name:"rightTopSideCourtImage",type:"file",accept:"image/*"})),l.a.createElement("label",{className:"rightBottomSideCourtImageInput"}," Right Bottom Side Court",l.a.createElement("input",{onChange:t,name:"rightBottomSideCourtImage",type:"file",accept:"image/*"}))):null)}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.props,t=e.handleInputChange,a=e.handleMenuClick,n=e.handleShow,o=e.practiceCourtOptions;return l.a.createElement("li",{className:"practiceCourtOptions"},l.a.createElement("section",null,l.a.createElement("span",null,"Practice Courts"),l.a.createElement("a",{className:"menuOptionsLink",href:"#practiceCourtOptions",onClick:a},l.a.createElement("i",{className:"fas fa-caret-down"}))),o?l.a.createElement("section",{className:"expandedMenu",id:"practiceCourtMenu"},l.a.createElement("label",{class:"volleyballSideCourt"},"Volleyball Line Color:",l.a.createElement("input",{className:"volleyballLineColor",name:"volleyballLineColor",onChange:t,type:"color"})),l.a.createElement("label",null,"Show",l.a.createElement("input",{className:"volleyballShown",type:"checkbox",onChange:n}))):null)}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleMenuClick=function(e){var t=e.target.parentElement.parentElement.parentElement.className;a.setState(function(e){return Object(c.a)({},t,!e[t])})},a.state={borderOptions:!1,centerCircleOptions:!1,gamelineOptions:!1,keyOptions:!1,laneOptions:!1,sideCourtOptions:!1,threePointOptions:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.props,t=e.handleColorReset,a=e.handleColorStain,n=e.handleImage,o=e.handleInputChange,r=e.handleShow,c=this.state,i=c.borderOptions,s=c.centerCircleOptions,m=c.gamelineOptions,u=c.keyOptions,d=c.laneOptions,O=c.practiceCourtOptions,k=c.sideCourtOptions,N=c.threePointOptions;return l.a.createElement("section",{className:"menuContainer"},l.a.createElement("section",{className:"menu"},l.a.createElement("nav",{className:"nav"},l.a.createElement("ul",{className:"menuNavList"},l.a.createElement(p,{centerCircleOptions:s,handleColorReset:t,handleColorStain:a,handleMenuClick:this.handleMenuClick,handleImage:n,handleInputChange:o}),l.a.createElement(C,{borderOptions:i,handleColorReset:t,handleColorStain:a,handleMenuClick:this.handleMenuClick,handleInputChange:o}),l.a.createElement(h,{gamelineOptions:m,handleColorReset:t,handleColorStain:a,handleMenuClick:this.handleMenuClick,handleInputChange:o}),l.a.createElement(g,{handleColorReset:t,handleColorStain:a,handleMenuClick:this.handleMenuClick,handleInputChange:o,threePointOptions:N}),l.a.createElement(E,{handleColorReset:t,handleColorStain:a,handleMenuClick:this.handleMenuClick,handleImage:n,handleInputChange:o,keyOptions:u}),l.a.createElement(b,{handleColorReset:t,handleColorStain:a,handleMenuClick:this.handleMenuClick,handleImage:n,handleInputChange:o,laneOptions:d}),l.a.createElement(y,{handleImage:n,handleMenuClick:this.handleMenuClick,sideCourtOptions:k}),l.a.createElement(f,{handleInputChange:o,handleMenuClick:this.handleMenuClick,handleShow:r,practiceCourtOptions:O})))))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.borderColor,a=e.borderColorOpacity,n=e.borderEndSize,o=e.borderSideSize,r=e.centerCircleColor,c=e.centerCircleColorOpacity,i=e.centerCirlceImage,s=e.endBorderLetterSpacing,m=e.endBorderTextColor,u=e.endBorderTextColorOpacity,d=e.endBorderTextSize,p=e.keyColor,C=e.keyColorOpacity,h=e.keyImage,g=e.laneColor,E=e.laneColorOpacity,b=e.leftTopSideCourtImage,y=e.leftBottomSideCourtImage,f=e.leftEndBorderText,O=e.mainGamelineColor,k=e.mainGamelineColorOpacity,N=e.rightEndBorderText,S=e.rightTopSideCourtImage,B=e.rightBottomSideCourtImage,v=e.threePointAreaColor,I=e.threePointAreaColorOpacity,L=e.volleyballLineColor,j=e.volleyballShown;return l.a.createElement("section",{className:"courtContainer center"},l.a.createElement("section",{className:"gym center"},l.a.createElement("section",{className:"courtBorderLine center"},l.a.createElement("section",{className:"courtBorderLineInner",style:{borderColor:t,opacity:a,borderTop:"".concat(o,"px solid ").concat(t),borderBottom:"".concat(o,"px solid ").concat(t),borderLeft:"".concat(n,"px solid ").concat(t),borderRight:"".concat(n,"px solid ").concat(t)}}),l.a.createElement("section",{className:"leftEndBorderLettering center"},l.a.createElement("span",{style:{color:m,fontSize:"".concat(d,"px"),letterSpacing:"".concat(s,"px"),opacity:u}},f)),l.a.createElement("section",{className:"rightEndBorderLettering center"},l.a.createElement("span",{style:{color:m,fontSize:"".concat(d,"px"),letterSpacing:"".concat(s,"px"),opacity:u}},N)),l.a.createElement("section",{className:"courtOuterGameLine center",style:{boxShadow:"inset 0 0 0 0.25rem ".concat(O),opacity:k}},l.a.createElement("section",{className:"courtFloor"},j?l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"mainVolleyball",style:{borderColor:L}}),l.a.createElement("section",{className:"mainVolleyballAttackLines",style:{borderColor:L}}),l.a.createElement("section",{className:"mainVolleyballCenterLine",style:{borderColor:L}})):null,l.a.createElement("section",{className:"leftCourtArea center",style:{borderColor:O,width:"calc(378px + ".concat(n,")")}},l.a.createElement("section",{className:"leftLaneArea",style:{borderColor:O}},l.a.createElement("section",{className:"leftLaneAreaInner",style:{backgroundColor:g,opacity:E}}),l.a.createElement("ul",{className:"leftLaneMarkingContainer"},l.a.createElement("li",{className:"leftLaneTopMarkings",style:{background:O}}),l.a.createElement("li",{className:"leftLaneTopMarkings",style:{background:O}}),l.a.createElement("li",{className:"leftLaneTopMarkings",style:{background:O}}),l.a.createElement("li",{className:"leftLaneTopMarkings",style:{background:O}})),l.a.createElement("ul",{className:"leftLaneMarkingContainer"},l.a.createElement("li",{className:"leftLaneBottomMarkings",style:{background:O}}),l.a.createElement("li",{className:"leftLaneBottomMarkings",style:{background:O}}),l.a.createElement("li",{className:"leftLaneBottomMarkings",style:{background:O}}),l.a.createElement("li",{className:"leftLaneBottomMarkings",style:{background:O}})),l.a.createElement("section",{className:"leftGoalContainer"},l.a.createElement("section",{className:"leftGoalBackboard"}),l.a.createElement("section",{className:"leftGoalMount"}),l.a.createElement("section",{className:"leftGoalRim"}))),l.a.createElement("section",{className:"leftKeyArea",style:{borderColor:O}},l.a.createElement("section",{className:"leftKeyAreaInner",style:{backgroundColor:p,opacity:C}},h?l.a.createElement("img",{className:"keyImage",src:h,alt:"Left Key Graphic"}):null)),l.a.createElement("section",{className:"leftThreePointArea",style:{borderColor:O}},l.a.createElement("section",{className:"leftThreePointAreaInner",style:{backgroundColor:v,opacity:I}})),l.a.createElement("section",{className:"leftTopSideCourt"},b?l.a.createElement("img",{className:"leftTopSideCourtImage",src:b,alt:"Left Top Side Court Graphic"}):null),l.a.createElement("section",{className:"leftBottomSideCourt"},y?l.a.createElement("img",{className:"leftBottomSideCourtImage",src:y,alt:"Left Bottom Side Court Graphic"}):null)),l.a.createElement("section",{className:"centerCourtLine center",style:{background:O}},l.a.createElement("section",{className:"centerCircle center",style:{borderColor:O}},l.a.createElement("section",{className:"centerCirlceInner",style:{background:r,opacity:c}},i?l.a.createElement("img",{className:"centerCirlceImage",src:i,alt:"Center Graphic"}):null))),l.a.createElement("section",{className:"rightCourtArea center",style:{borderColor:O,width:"calc(378px + ".concat(n,")")}},l.a.createElement("section",{className:"rightThreePointArea",style:{borderColor:O}},l.a.createElement("section",{className:"rightThreePointAreaInner",style:{backgroundColor:v,opacity:I}})),l.a.createElement("section",{className:"rightKeyArea",style:{borderColor:O}},l.a.createElement("section",{className:"rightKeyAreaInner",style:{backgroundColor:p,opacity:C}},h?l.a.createElement("img",{className:"keyImage",src:h,alt:"Left Key Graphic"}):null)),l.a.createElement("section",{className:"rightLaneArea",style:{borderColor:O}},l.a.createElement("section",{className:"rightLaneAreaInner",style:{backgroundColor:g,opacity:E}}),l.a.createElement("ul",{className:"rightLaneMarkingContainer"},l.a.createElement("li",{className:"rightLaneTopMarkings",style:{background:O}}),l.a.createElement("li",{className:"rightLaneTopMarkings",style:{background:O}}),l.a.createElement("li",{className:"rightLaneTopMarkings",style:{background:O}}),l.a.createElement("li",{className:"rightLaneTopMarkings",style:{background:O}})),l.a.createElement("ul",{className:"rightLaneMarkingContainer"},l.a.createElement("li",{className:"rightLaneBottomMarkings",style:{background:O}}),l.a.createElement("li",{className:"rightLaneBottomMarkings",style:{background:O}}),l.a.createElement("li",{className:"rightLaneBottomMarkings",style:{background:O}}),l.a.createElement("li",{className:"rightLaneBottomMarkings",style:{background:O}})),l.a.createElement("section",{className:"rightGoalContainer"},l.a.createElement("section",{className:"rightGoalRim"}),l.a.createElement("section",{className:"rightGoalMount"}),l.a.createElement("section",{className:"rightGoalBackboard"}))),l.a.createElement("section",{className:"rightTopSideCourt"},S?l.a.createElement("img",{className:"rightTopSideCourtImage",src:S,alt:"Right Top Side Court Graphic"}):null),l.a.createElement("section",{className:"rightBottomSideCourt"},B?l.a.createElement("img",{className:"rightBottomSideCourtImage",src:B,alt:"Right Bottom Side Court Graphic"}):null)))))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.handleColorReset=function(e){var t,n=e.target.parentElement.firstElementChild.firstElementChild.name,l="".concat(e.target.parentElement.firstElementChild.firstElementChild.name,"Opacity");if(console.log(n),"borderColor"===n||"mainGamelineColor"===n)a.setState((t={},Object(c.a)(t,n,"black"),Object(c.a)(t,l,1),t));else if("endBorderTextColor"===n){var o;a.setState((o={},Object(c.a)(o,n,"white"),Object(c.a)(o,l,1),o))}else if("centerCircleColor"===n||"threePointAreaColor"===n){var r;a.setState((r={},Object(c.a)(r,n,"transparent"),Object(c.a)(r,l,1),Object(c.a)(r,"centerCirlceImage",null),r))}else{if("keyColor"!==n&&"laneColor"!==n)return null;var i;a.setState((i={},Object(c.a)(i,n,"#DFBB85"),Object(c.a)(i,l,1),Object(c.a)(i,"keyImage",null),i))}},a.handleColorStain=function(e){var t="".concat(e.target.parentElement.firstElementChild.name,"Opacity");a.setState(Object(c.a)({},t,e.target.value))},a.handleImage=function(e){var t,n=e.target.files[0];a.setState((t={},Object(c.a)(t,e.target.name,window.URL.createObjectURL(n)),Object(c.a)(t,"image",n),t),function(e){return window.URL.revokeObjectURL(n)}),console.log(e.target.name),console.log(n)},a.handleShow=function(e){a.setState({volleyballShown:!a.state.volleyballShown})},a.state={borderColor:"black",borderColorOpacity:1,borderEndSize:48,borderSideSize:36,centerCircleColor:"transparent",centerCircleColorOpacity:1,centerCirlceImage:null,endBorderLetterSpacing:0,endBorderTextColor:"white",endBorderTextColorOpacity:1,endBorderTextSize:48,image:null,laneColor:"#DFBB85",laneColorOpacity:1,leftEndBorderText:"Fairmont",leftTopSideCourtImage:null,leftBottomSideCourtImage:null,keyColor:"#DFBB85",keyColorOpacity:1,mainGamelineColor:"black",mainGamelineColorOpacity:1,keyImage:null,mainGamelineOpacity:1,rightEndBorderText:"Falcons",rightTopSideCourtImage:null,rightBottomSideCourtImage:null,threePointAreaColor:"#DFBB85",threePointAreaColorOpacity:1,volleyballLineColor:"white",volleyballShown:!1},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e=this.state,t=e.borderColor,a=e.borderColorOpacity,n=e.borderEndSize,o=e.borderSideSize,r=e.centerCircleColor,c=e.centerCircleColorOpacity,i=e.centerCirlceImage,s=e.endBorderLetterSpacing,m=e.endBorderTextColor,u=e.endBorderTextColorOpacity,d=e.endBorderTextSize,p=e.laneColor,C=e.laneColorOpacity,h=e.leftEndBorderText,g=e.leftTopSideCourtImage,E=e.leftBottomSideCourtImage,b=e.keyColor,y=e.keyColorOpacity,f=e.keyImage,N=e.mainGamelineColor,S=e.mainGamelineColorOpacity,B=e.rightEndBorderText,v=e.rightTopSideCourtImage,I=e.rightBottomSideCourtImage,L=e.threePointAreaColor,j=e.threePointAreaColorOpacity,M=e.volleyballLineColor,T=e.volleyballShown;return l.a.createElement("section",{className:"appContainer"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",{className:"title"},"Court Designer"),l.a.createElement("p",{className:"headline"},"Design your own basketball court")),l.a.createElement(O,{handleColorReset:this.handleColorReset,handleColorStain:this.handleColorStain,handleImage:this.handleImage,handleInputChange:this.handleInputChange,handleShow:this.handleShow}),l.a.createElement(k,{borderColor:t,borderColorOpacity:a,borderEndSize:n,borderSideSize:o,centerCircleColor:r,centerCircleColorOpacity:c,centerCirlceImage:i,endBorderLetterSpacing:s,endBorderTextColor:m,endBorderTextColorOpacity:u,endBorderTextSize:d,laneColor:p,laneColorOpacity:C,leftEndBorderText:h,leftTopSideCourtImage:g,leftBottomSideCourtImage:E,rightTopSideCourtImage:v,rightBottomSideCourtImage:I,keyColor:b,keyColorOpacity:y,keyImage:f,mainGamelineColor:N,mainGamelineColorOpacity:S,rightEndBorderText:B,threePointAreaColor:L,threePointAreaColorOpacity:j,volleyballLineColor:M,volleyballShown:T}),l.a.createElement("footer",null,l.a.createElement("p",null,"Court Designer 2019"),l.a.createElement("p",null,"Built with React"),l.a.createElement("p",null,"Powered by Github")))}}]),t}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(l.a.createElement(N,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/court-designer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/court-designer","/service-worker.js");S?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):B(t,e)})}}()},7:function(e,t,a){}},[[10,2,1]]]);
//# sourceMappingURL=main.41c9d06e.chunk.js.map