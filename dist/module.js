/*! For license information please see module.js.LICENSE.txt */
define(["react","emotion","@grafana/ui","@grafana/data"],(function(e,t,n,o){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t,n){"use strict";n.r(t);var o=n(3);Object.create;function r(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}Object.create;var i,a,l,u,s,c=n(0),p=n.n(c),f=n(1),d=n(2),b=Object(d.stylesFactory)((function(){return{wrapper:Object(f.css)(l||(l=r(["\n      position: relative;\n    "],["\n      position: relative;\n    "]))),svg:Object(f.css)(u||(u=r(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "],["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),textBox:Object(f.css)(s||(s=r(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "],["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "])))}}));n.d(t,"plugin",(function(){return m}));var m=new o.PanelPlugin((function(e){var t=e.options,n=e.data,o=e.width,l=e.height,u=Object(d.useTheme)(),s=b();return p.a.createElement("div",{className:Object(f.cx)(s.wrapper,Object(f.css)(i||(i=r(["\n          width: ","px;\n          height: ","px;\n        "],["\n          width: ","px;\n          height: ","px;\n        "])),o,l))},p.a.createElement("svg",{className:s.svg,width:o,height:l,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"-"+o/2+" -"+l/2+" "+o+" "+l},p.a.createElement("g",null,p.a.createElement("circle",{style:{fill:""+(u.isLight?u.palette.greenBase:u.palette.blue95)},r:100}))),p.a.createElement("div",{className:s.textBox},t.showSeriesCount&&p.a.createElement("div",{className:Object(f.css)(a||(a=r(["\n              font-size: ",";\n            "],["\n              font-size: ",";\n            "])),u.typography.size[t.seriesCountSize])},"Number of series: ",n.series.length),p.a.createElement("div",null,"Text option value: ",t.text)))})).setPanelOptions((function(e){return e.addTextInput({path:"text",name:"Simple text option",description:"Description of panel option",defaultValue:"Default value of text input option"}).addBooleanSwitch({path:"showSeriesCount",name:"Show series counter",defaultValue:!1}).addRadio({path:"seriesCountSize",defaultValue:"sm",name:"Series counter size",settings:{options:[{value:"sm",label:"Small"},{value:"md",label:"Medium"},{value:"lg",label:"Large"}]},showIf:function(e){return e.showSeriesCount}})}))}])}));
//# sourceMappingURL=module.js.map