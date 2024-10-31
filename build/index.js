!function(){var e,t={532:function(e,t,a){"use strict";var r=window.wp.blocks,i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"nelio/compare-images","title":"Compare Images","category":"common","icon":"image-flip-horizontal","description":"Compare two images side by side using a slider.","keywords":["compare","image"],"version":"1.0.0","textdomain":"nelio-compare-images","attributes":{"align":{"type":"string"},"beforeId":{"type":"number"},"beforeUrl":{"type":"string","source":"attribute","selector":".wp-block-nelio-compare-images__before-image img","attribute":"src"},"beforeAlt":{"type":"string","source":"attribute","selector":".wp-block-nelio-compare-images__before-image img","attribute":"alt","default":""},"afterId":{"type":"number"},"afterUrl":{"type":"string","source":"attribute","selector":".wp-block-nelio-compare-images__after-image img","attribute":"src"},"afterAlt":{"type":"string","source":"attribute","selector":".wp-block-nelio-compare-images__after-image img","attribute":"alt","default":""},"dividerLocation":{"type":"number","default":50},"caption":{"type":"string","source":"html","selector":"figcaption"},"isVertical":{"type":"boolean","default":false},"sizeSlug":{"type":"string"}},"supports":{"align":["left","center","right","wide","full"]},"viewScript":"file:view.js","editorScript":"file:index.js","editorStyle":"file:index.css","style":"file:style-index.css"}'),o=window.wp.element,n=window.wp.blockEditor,l=window.wp.i18n,c=a(184),m=a.n(c),s=window.wp.components,p=window.wp.editor,u=function(e){var t=e.attributes,a=t.afterAlt,r=t.beforeAlt,i=t.dividerLocation,n=e.setAttributes;return o.createElement(p.InspectorControls,null,o.createElement(s.PanelBody,{initialOpen:!0,title:(0,l._x)("Settings","text","nelio-compare-images")},o.createElement(s.RangeControl,{label:(0,l._x)("Divider’s Initial Location","text","nelio-compare-images"),initialPosition:i,value:i,onChange:function(e){return n({dividerLocation:e})},min:1,max:99}),o.createElement(s.TextareaControl,{label:(0,l._x)("Before Image - Alt Text (Alternative Text)","text","nelio-compare-images"),value:r||"",onChange:function(e){return n({beforeAlt:e})}}),o.createElement(s.TextareaControl,{label:(0,l._x)("After Image - Alt Text (Alternative Text)","text","nelio-compare-images"),value:a||"",onChange:function(e){return n({afterAlt:e})},help:o.createElement(o.Fragment,null,o.createElement(s.ExternalLink,{href:"https://www.w3.org/WAI/tutorials/images/decision-tree"},(0,l._x)("Describe the purpose of the images","user","nelio-compare-images")),(0,l._x)("Leave empty if they’re purely decorative.","user","nelio-compare-images"))})))},g=function(e){var t=e.attributes,a=t.isVertical,r=t.beforeId,i=t.afterId,n=e.setAttributes;return o.createElement(p.BlockControls,null,o.createElement(s.Toolbar,null,o.createElement(s.ToolbarButton,{icon:"image-flip-vertical",isPressed:a,onClick:function(){return n({isVertical:!a})},label:(0,l._x)("Vertical Comparison","text","nelio-compare-images")}),!!r&&!!i&&o.createElement(o.Fragment,null,o.createElement(f,{icon:"format-image",value:r,onSelect:function(e,t,a){return n({beforeId:e,beforeUrl:t,beforeAlt:a})},label:(0,l._x)("Change before image…","command","nelio-compare-images")}),o.createElement(f,{icon:"format-gallery",value:i,onSelect:function(e,t,a){return n({afterId:e,afterUrl:t,afterAlt:a})},label:(0,l._x)("Change after image…","command","nelio-compare-images")}))))},f=function(e){var t=e.icon,a=e.label,r=e.onSelect,i=e.value;return o.createElement(p.MediaUploadCheck,null,o.createElement(p.MediaUpload,{onSelect:function(e){var t=e.id,a=e.url,i=e.alt;return r(t,a,i)},allowedTypes:["image"],multiple:!1,value:i,render:function(e){var r=e.open;return o.createElement(s.ToolbarButton,{icon:t,onClick:r,label:a})}}))},d=function(){return d=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},d.apply(this,arguments)},b=function(e){var t=e.attributes,a=t.beforeId,r=t.beforeUrl,i=t.afterId,l=t.afterUrl,c=t.isVertical,s=t.dividerLocation,p=t.caption,u=e.className,g=e.isSelected,f=e.setAttributes,b=(0,n.useBlockProps)({className:m()(u,"wp-block-nelio-compare-images")});return o.createElement("div",d({},b),o.createElement("div",{className:m()("wp-block-nelio-compare-images__comparison-wrapper","wp-block-nelio-compare-images__comparison-wrapper--".concat(c?"vertically":"horizontally"),{"wp-block-nelio-compare-images__comparison-wrapper--is-image-missing":!a||!i})},o.createElement(v,{mode:"before",isVertical:c,imageId:a,imageUrl:r,onChange:function(e,t,a){return f({beforeId:e,beforeUrl:t,beforeAlt:a})}}),o.createElement(v,{mode:"after",isVertical:c,dividerLocation:a&&i?s:void 0,imageId:i,imageUrl:l,onChange:function(e,t,a){return f({afterId:e,afterUrl:t,afterAlt:a})}}),!!a&&!!i&&o.createElement(w,{isVertical:c,location:s})),!!a&&!!i&&o.createElement(h,{text:null!=p?p:"",isSelected:g,onChange:function(e){return f({caption:e})}}))},v=function(e){var t=e.mode,a=e.isVertical,r=e.dividerLocation,i=e.imageId,c=e.imageUrl,s=e.onChange;return o.createElement("div",d({className:m()("wp-block-nelio-compare-images__".concat(t,"-image"),"wp-block-nelio-compare-images__".concat(t,"-image--").concat(a?"vertical":"horizontal"))},"after"===t&&{style:{height:a&&void 0!==r?"".concat(100-r,"%"):void 0,width:a||void 0===r?void 0:"".concat(100-r,"%")}}),i?o.createElement("img",{alt:_(t),src:c}):o.createElement(n.MediaPlaceholder,{allowedTypes:["image"],multiple:!1,onSelect:function(e){var t=e.id,a=e.url,r=e.alt;return s(t,a,r)},value:i,labels:{title:_(t),instructions:(0,l._x)("Select an image…","text","nelio-compare-images")}}))},w=function(e){var t=e.isVertical,a=e.location;return o.createElement(o.Fragment,null,o.createElement("div",{className:m()("wp-block-nelio-compare-images__divider","wp-block-nelio-compare-images__divider--".concat(t?"horizontal":"vertical")),style:{top:t?"calc(".concat(a,"% - 0.5em)"):0,left:t?0:"calc(".concat(a,"% - 0.5em)")}}),o.createElement("div",{className:m()("wp-block-nelio-compare-images__handler","wp-block-nelio-compare-images__handler--".concat(t?"horizontal":"vertical")),style:{top:t?"calc(".concat(a,"% - 0.5em)"):void 0,left:t?void 0:"calc(".concat(a,"% - 0.5em)")}}))},h=function(e){var t=e.text,a=e.isSelected,r=e.onChange;return n.RichText.isEmpty(t)&&!a?null:o.createElement(n.RichText,{className:"wp-block-nelio-compare-images__caption",tagName:"figcaption",placeholder:(0,l._x)("Write caption…","user","nelio-compare-images"),value:t,onChange:r,inlineToolbar:!0})},_=function(e){return"before"===e?(0,l._x)("Before Image","text","nelio-compare-images"):(0,l._x)("After Image","text","nelio-compare-images")},y=function(){return y=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},y.apply(this,arguments)};(0,r.registerBlockType)(i,{edit:function(e){return o.createElement(o.Fragment,null,e.isSelected&&o.createElement(u,d({},e)),e.isSelected&&o.createElement(g,d({},e)),o.createElement(b,d({},e)))},save:function(e){var t,a=e.attributes,r=a.afterAlt,i=a.afterId,l=a.afterUrl,c=a.align,s=void 0===c?"":c,p=a.beforeAlt,u=a.beforeId,g=a.beforeUrl,f=a.caption,d=void 0===f?"":f,b=a.isVertical,v=a.dividerLocation,w=e.className,h=n.useBlockProps.save({className:m()("wp-block-nelio-compare-images",w,(t={},t["align".concat(s)]=!!s,t))});return o.createElement("figure",y({},h),!!u&&!i&&o.createElement("img",{className:"wp-image-".concat(u),src:g,alt:p}),!u&&!!i&&o.createElement("img",{className:"wp-image-".concat(i),src:l,alt:r}),!!u&&!!i&&o.createElement("div",{className:m()("wp-block-nelio-compare-images__comparison-wrapper","wp-block-nelio-compare-images__comparison-wrapper--".concat(b?"vertically":"horizontally"),{"wp-block-nelio-compare-images__comparison-wrapper--is-image-missing":!u||!i}),"data-position":v,"data-direction":b?"vertical":"horizontal"},o.createElement("div",{className:m()("wp-block-nelio-compare-images__before-image","wp-block-nelio-compare-images__before-image--".concat(b?"vertical":"horizontal"))},o.createElement("img",{className:"wp-image-".concat(u),src:g,alt:p})),o.createElement("div",{className:m()("wp-block-nelio-compare-images__after-image","wp-block-nelio-compare-images__after-image--".concat(b?"vertical":"horizontal")),style:{height:b?"".concat(100-v,"%"):void 0,width:b?void 0:"".concat(100-v,"%")}},o.createElement("img",{className:"wp-image-".concat(i),src:l,alt:r})),o.createElement("div",{className:m()("wp-block-nelio-compare-images__divider","wp-block-nelio-compare-images__divider--".concat(b?"horizontal":"vertical"))}),o.createElement("div",{className:m()("wp-block-nelio-compare-images__handler","wp-block-nelio-compare-images__handler--".concat(b?"horizontal":"vertical"))})),!!u&&!!i&&!n.RichText.isEmpty(d)&&o.createElement(n.RichText.Content,{tagName:"figcaption",className:"wp-block-nelio-compare-images__caption",value:d}))}})},184:function(e,t){var a;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var n=i.apply(null,a);n&&e.push(n)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var l in a)r.call(a,l)&&a[l]&&e.push(l);else e.push(a.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()}},a={};function r(e){var i=a[e];if(void 0!==i)return i.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,a,i,o){if(!a){var n=1/0;for(s=0;s<e.length;s++){a=e[s][0],i=e[s][1],o=e[s][2];for(var l=!0,c=0;c<a.length;c++)(!1&o||n>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[c])}))?a.splice(c--,1):(l=!1,o<n&&(n=o));if(l){e.splice(s--,1);var m=i();void 0!==m&&(t=m)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[a,i,o]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,n=a[0],l=a[1],c=a[2],m=0;if(n.some((function(t){return 0!==e[t]}))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(c)var s=c(r)}for(t&&t(a);m<n.length;m++)o=n[m],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(s)},a=self.webpackChunknelio_compare_images=self.webpackChunknelio_compare_images||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var i=r.O(void 0,[431],(function(){return r(532)}));i=r.O(i)}();