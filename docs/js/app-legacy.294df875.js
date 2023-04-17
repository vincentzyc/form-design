(function(){"use strict";var e={1633:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var i=n(311),r=n.n(i),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"move",mode:"out-in"}},[t("router-view")],1)],1)},s=[],a={name:"app"},l=a,u=n(1001),c=(0,u.Z)(l,o,s,!1,null,null,null),p=c.exports,d=Quill,f=n.n(d),h=VueQuillEditor,g=n.n(h),m=n(3087),v=n(2833),w=n(6334),y=n(2040),b=n(3806),x=n(9998),C=f()["import"]("parchment"),S=function(e){(0,b.Z)(n,e);var t=(0,x.Z)(n);function n(){return(0,m.Z)(this,n),t.apply(this,arguments)}return(0,v.Z)(n,[{key:"value",value:function(e){var t=(0,w.Z)((0,y.Z)(n.prototype),"value",this).call(this,e);return t}},{key:"add",value:function(e){return e.style.fontWeight="bold",!0}},{key:"remove",value:function(e){e.style.fontWeight="normal"}}]),n}(C.Attributor.Style),U=new S("bold","font-weight",{scope:C.Scope.INLINE,whitelist:[!0,!1]}),k=U,_=f()["import"]("parchment"),L=function(e){(0,b.Z)(n,e);var t=(0,x.Z)(n);function n(){return(0,m.Z)(this,n),t.apply(this,arguments)}return(0,v.Z)(n,[{key:"value",value:function(e){var t=(0,w.Z)((0,y.Z)(n.prototype),"value",this).call(this,e);return t}},{key:"add",value:function(e,t){return e.style.textIndent=t,!0}},{key:"remove",value:function(e){e.style.textIndent=""}}]),n}(_.Attributor.Style),O=new L("textIndent","text-indent",{scope:_.Scope.BLOCK,whitelist:["0em","1em","2em","3em","4em","5em"]}),T=O,P=f()["import"]("attributors/style/size"),$=f()["import"]("attributors/style/align");P.whitelist=["8px","10px","12px","14px","16px","18px","20px","24px","36px","48px","64px"],f().register(P,!0),f().register($,!0),f().register("formats/bold",k,!0),f().register("formats/textIndent",T,!0),r().use(g());var j=ELEMENT,F=n.n(j),I=(n(2222),{env:function(){return"production"},previewUrl:function(){if("development"===this.env()){var e=window.location.origin.split(":");return"".concat(e[0],":").concat(e[1],":9010")}return window.location.origin+"/form-design-h5"},previewOrigin:function(){if("development"===this.env()){var e=window.location.origin.split(":");return"".concat(e[0],":").concat(e[1],":9010")}return window.location.origin},apiUrl:function(){return"http://xxx.com/"}}),E=n(3336),A=(n(7042),n(1539),n(4603),n(8450),n(4916),n(8386),n(9714),n(4723),n(7601),n(9653),n(691)),N=new(r()),z={hasKey:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},getType:function(e){return Object.prototype.toString.call(e).slice(8,-1)},getUrlParam:function(e){var t=new RegExp("(^|/?|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.href,i=n.indexOf("?");if(i<0)return null;var r=n.slice(i+1,n.length);if(r){var o=r.match(t);if(o)return unescape(o[2])}return null},setCookie:function(e,t,n){var i=new Date;i.setTime(i.getTime()+24*n*3600*1e3),document.cookie=e+"="+encodeURIComponent(t)+";expires="+(n?i.toGMTString():"")},getCookie:function(e){var t=document.cookie,n=t.indexOf(e+"=");if(n>-1){n=n+e.length+1;var i=t.indexOf(";",n);return i=i<0?t.length:i,decodeURIComponent(t.substring(n,i))}return""},delCookie:function(e){var t=this.getCookie(e);!1!==t&&this.setCookie(e,t,-1)},setSStorage:function(e,t){var n=window.JSON.stringify(t);window.sessionStorage.setItem(e,n)},getSStorage:function(e){var t="";if(t=window.sessionStorage.getItem(e),!t)return"";try{return window.JSON.parse(t)}catch(n){window.sessionStorage.removeItem(e),window.location.reload()}},setLStorage:function(e,t){var n=window.JSON.stringify(t);window.localStorage.setItem(e,n)},getLStorage:function(e){var t="";if(t=window.localStorage.getItem(e),!t)return"";try{return window.JSON.parse(t)}catch(n){window.localStorage.removeItem(e),window.location.reload()}},checkMobile:function(e){return/^1[0-9]{10}$/.test(e)},isNumber:function(e){var t=/^[1-9]{1}\d*$/g,n=t.test(e);return n},isLink:function(e){var t=/^(?:(?:https?|ftp):\/\/)?(?:[\da-z.-]+)\.(?:[a-z.]{2,6})(?:\/\w\.-]*)*\/?/,n=t.test(e);return n},checkLink:function(e){var t=this.isLink(e);t||N.$message.error("请输入正确的网址")},easeout:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,i=e.scrollTop;if(i===t||"number"!==typeof t||0===n)return!1;window.requestAnimationFrame||(window.requestAnimationFrame=function(e){return setTimeout(e,17)});var r=function r(){i+=(t-i)/n,Math.abs(t-i)<1?e.scrollTop=t:(e.scrollTop=i,requestAnimationFrame(r))};r()},deepClone:function(e){var t=Array.isArray(e)?[]:{};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&("object"===(0,E.Z)(e[n])?t[n]=this.deepClone(e[n]):t[n]=e[n]);return t},getUuid:function(){var e=Number(Math.random().toString().slice(2,-1))+Date.now();return e.toString(36)},getNanoid:function(){return(0,A.x0)()}},Z=(n(8309),function(){var e=this,t=e._self._c;return t("div",{staticClass:"file-upload-wrapper"},[t("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{"before-upload":e.beforeAvatarUpload,data:e.uploadData,"on-error":e.uploadError,"on-progress":e.handleProgress,"on-success":e.handleAvatarSuccess,"show-file-list":!1,action:"https://jsonplaceholder.typicode.com/posts/"}},[e.showImg?t("img",{staticClass:"avatar",style:{height:e.height,width:e.width},attrs:{src:e.value}}):e.showVideo?t("video",{staticClass:"avatar",style:{height:e.height,width:e.width},attrs:{src:e.value}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),t("i",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"el-icon-close avatar-close-icon",on:{click:function(t){return t.stopPropagation(),e.removeFile()}}})]),e.showCompressor?t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.drawer=!0}}},[e._v("压缩上传")]):e._e(),t("ImgUpload",{on:{fail:e.compressFail,success:e.compressSuccess},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),e.uploading?t("transition",{attrs:{name:"el-fade-in-linear"}},[t("div",{staticClass:"flex flex-column flex-center uploader-progress"},[t("el-progress",{staticClass:"progress",attrs:{percentage:e.uploadPercentage,width:100,type:"circle"}}),t("el-button",{staticClass:"mg-t10",attrs:{type:"text"},on:{click:function(t){return t.stopPropagation(),e.cancelUpload()}}},[e._v("取消上传")])],1)]):e._e()],1)}),B=[],q=(n(8783),n(3948),n(285),n(1637),n(6699),n(2023),function(){var e=this,t=e._self._c;return t("el-drawer",{attrs:{visible:e.model,"with-header":!1,direction:"ltr",size:"36%"},on:{"update:visible":function(t){e.model=t}}},[t("div",{staticClass:"drawer-content"},[t("el-upload",{ref:"upload",attrs:{"auto-upload":!1,"before-upload":e.beforeUpload,multiple:!1,"on-change":e.changeFile,"on-error":e.uploadError,"on-progress":e.handleProgress,"on-success":e.handleSuccess,"show-file-list":!1,action:"https://jsonplaceholder.typicode.com/posts/",drag:""}},[t("i",{staticClass:"el-icon-upload"}),t("div",{staticClass:"el-upload__text"},[e._v(" 将图片拖到此处，或 "),t("em",[e._v("点击上传")])])]),t("div",{staticStyle:{width:"100%",height:"80px"}},[t("div",{staticClass:"flex"},[t("span",[e._v("压缩率："+e._s(e.quality)+"%")]),t("div",{staticClass:"flex-auto mg-l20"},[t("el-slider",{on:{change:e.compressorFile},model:{value:e.quality,callback:function(t){e.quality=t},expression:"quality"}})],1)]),e.file?t("div",{staticClass:"flex"},[t("span",{staticClass:"flex-auto"},[e._v(" 源文件大小： "),t("span",{staticClass:"cred"},[e._v(e._s(e.fileSize.before))])]),t("span",{staticClass:"flex-auto"},[e._v(" 压缩后大小： "),t("span",{staticClass:"cgreen"},[e._v(e._s(e.fileSize.after))])])]):e._e()]),t("div",{staticClass:"preview-body"},[e.file?t("div",[t("p",[e._v(" 压缩后 "),t("i",{staticClass:"el-icon-bottom"})]),e.compressUrl?t("el-image",{staticStyle:{width:"100%"},attrs:{"preview-src-list":e.srcList,src:e.compressUrl}}):e._e(),t("hr"),t("p",[e._v(" 源文件 "),t("i",{staticClass:"el-icon-bottom"})]),e.sourceUrl?t("el-image",{staticStyle:{width:"100%"},attrs:{"preview-src-list":e.srcList,src:e.sourceUrl}}):e._e()],1):e._e()]),t("div",{staticClass:"drawer-footer flex"},[t("el-button",{staticClass:"flex-auto",on:{click:function(t){e.model=!1}}},[e._v("取 消")]),t("el-button",{staticClass:"flex-auto",attrs:{disabled:!this.file,type:"danger"},on:{click:function(t){return e.submitUpload(!0)}}},[e._v("上传源文件")]),t("el-button",{staticClass:"flex-auto",attrs:{disabled:!this.compressFile,type:"primary"},on:{click:function(t){return e.submitUpload(!1)}}},[e._v("上传压缩文件")])],1)],1),e.uploading?t("transition",{attrs:{name:"el-fade-in-linear"}},[t("div",{staticClass:"flex flex-column flex-center uploader-progress"},[t("el-progress",{staticClass:"progress",attrs:{percentage:e.uploadPercentage,width:100,type:"circle"}}),t("el-button",{staticClass:"mg-t10",attrs:{type:"text"},on:{click:function(t){return t.stopPropagation(),e.cancelUpload()}}},[e._v("取消上传")])],1)]):e._e()],1)}),D=[],M=Compressor,R=n.n(M),W={props:{value:Boolean},data:function(){return{imgTypeList:["image/jpg","image/jpeg","image/png","image/gif"],file:null,compressFile:null,compressUrl:"",sourceUrl:"",quality:80,uploading:!1,isUploadSource:!1,srcList:[],fileSize:{before:0,after:0},uploadPercentage:0}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{resetUpload:function(){var e=this;this.$refs.upload.clearFiles(),setTimeout((function(){Object.assign(e.$data,e.$options.data())}),300)},startUpload:function(){this.uploading=!0},submitUpload:function(e){if(this.file&&this.compressFile){this.isUploadSource=e;var t=this.isUploadSource?this.file.raw:this.compressFile,n=this.imgTypeList.includes(t.type),i=t.size/1024<=50;return n?i?void this.$refs.upload.submit():(this.$message.error("上传图片大小不能超过 50 K !"),!1):(this.$message.error("请上传图片"),!1)}},changeFile:function(e){this.file=e,this.compressorFile(this.quality)},uploadError:function(){this.resetUpload(),this.$alert("网络繁忙，请稍后重试")},handleProgress:function(e,t){this.uploadPercentage=parseInt(t.percentage,10)},handleSuccess:function(){this.$emit("success",this.compressUrl),100!==this.uploadPercentage&&(this.uploadPercentage=100),this.resetUpload(),this.model=!1},cancelUpload:function(){if(this.uploading)return this.$refs.upload.abort(),this.$message({message:"已取消上传",type:"warning"}),this.resetUpload()},compressorFile:function(e){var t=this;this.file&&(this.srcList=[],this.fileSize.before=Math.round(this.file.size/1024*10)/10+"KB",this.sourceUrl=URL.createObjectURL(this.file.raw),new(R())(this.file.raw,{quality:e/100,convertSize:51200,success:function(e){t.compressFile=e,t.compressUrl=URL.createObjectURL(e),t.fileSize.after=Math.round(e.size/1024*10)/10+"KB",t.srcList=[t.compressUrl,t.sourceUrl]},error:function(e){t.compressUrl="",t.compressFile=null,t.fileSize.after=0,t.$emit("fail",e)}}))},beforeUpload:function(){if(this.file&&this.compressFile){var e=this.isUploadSource?this.file.raw:this.compressFile;return this.startUpload(),new Promise((function(t){t(e)}))}}}},V=W,K=(0,u.Z)(V,q,D,!1,null,"6ba37da2",null),J=K.exports,H="img",Q="video",G={name:"FileUpload",components:{ImgUpload:J},props:{value:String,height:String,width:String,type:{type:String,default:H}},data:function(){return{drawer:!1,videoTypeList:["video/mp4"],imgTypeList:["image/jpg","image/jpeg","image/png","image/gif"],uploading:!1,uploadPercentage:0,uploadData:{yourData:"yunyi"}}},computed:{showCompressor:function(){return this.type===H},showImg:function(){return this.value&&this.type===H},showVideo:function(){return this.value&&this.type===Q}},methods:{compressSuccess:function(e){this.$emit("update:value",e)},compressFail:function(){this.$message({message:"压缩出错啦~",type:"error"})},resetUpload:function(){this.uploading=!1,this.uploadPercentage=0},startUpload:function(){this.uploading=!0},cancelUpload:function(){if(this.uploading)return this.$refs.upload.abort(),this.$message({message:"已取消上传",type:"warning"}),this.resetUpload()},removeFile:function(){this.$emit("update:value","")},handleAvatarSuccess:function(e,t){var n=this;this.$emit("update:value",URL.createObjectURL(t.raw)),100!==this.uploadPercentage&&(this.uploadPercentage=100),setTimeout((function(){n.resetUpload()}),500)},uploadError:function(){this.resetUpload(),this.$alert("网络繁忙，请稍后重试")},beforeAvatarUpload:function(e){return this.type===H?this.imgUpload(e):this.type===Q&&this.videoUpload(e)},handleProgress:function(e,t){this.uploadPercentage=parseInt(t.percentage,10)},imgUpload:function(e){var t=this.imgTypeList.includes(e.type),n=e.size/1024<=50;return t?n?(this.startUpload(),!0):(this.$message.error("上传图片大小不能超过 50 K !"),!1):(this.$message.error("请上传图片"),!1)},videoUpload:function(e){var t=this.videoTypeList.includes(e.type),n=e.size/1024/1024<=100;return t?n?(this.startUpload(),!0):(this.$message.error("上传视频大小不能超过 100 M !"),!1):(this.$message.error("请上传视频文件"),!1)}}},X=G,Y=(0,u.Z)(X,Z,B,!1,null,null,null),ee=Y.exports,te={install:function(e){this.installed||e.component(ee.name,ee)}};"undefined"!==typeof window&&window.Vue&&te.install(window.Vue),r().use(te);var ne=n(6250),ie=n.n(ne),re={pageData:{list:[],title:"云忆网络",statsCode:"",theme:"theme1",fixedTop:[],fixedBottom:[],fixedCustom:[],style:{backgroundColor:"#fff",backgroundImage:""}},dragWg:{},selectWg:{},selectWgIndex:null,selectWginList:[],configTab:"page",wgCollapse:"base",predefineColors:["#000000","#666666","#cccccc","#ffffff","rgba(255, 255, 255, 0)","#ff0000","#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585"]},oe={setDragWg:function(e,t){e.dragWg=t},setPageData:function(e,t){t.fixedBottom||(t.fixedBottom=[]),t.fixedCustom||(t.fixedCustom=[]),t.fixedTop||(t.fixedTop=[]),t.hijackBack||(t.hijackBack={isHijack:!1,alertImg:"",alertLink:""}),e.pageData=t},setSelectWg:function(e,t){e.selectWg=t},setConfigTab:function(e,t){e.configTab=t},setWgCollapse:function(e,t){e.wgCollapse=t}},se={state:re,mutations:oe};r().use(ie());var ae=new(ie().Store)({modules:{common:se}}),le=VueRouter,ue=n.n(le);r().use(ue());var ce=function(){return"/home"},pe=new(ue())({routes:[{path:"/",redirect:ce()},{path:"/login",name:"login",component:function(){return n.e(691).then(n.bind(n,2718))}},{path:"/home",name:"home",component:function(){return n.e(302).then(n.bind(n,2302))}},{path:"*",name:"404",component:function(){return n.e(64).then(n.bind(n,8064))}}]}),de=pe;r().prototype.$api=I,r().prototype.$util=z,r().config.productionTip=!1,r().prototype.BASE_URL="",r().use(F()),new(r())({router:de,store:ae,render:function(e){return e(p)}}).$mount("#app")},311:function(e){e.exports=Vue},6250:function(e){e.exports=Vuex},782:function(e){e.exports=vuedraggable}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,o){if(!i){var s=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],o=e[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(a=!1,o<s&&(s=o));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[i,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{64:"e0350414",249:"e8502593",302:"316c3024",691:"a1f98532"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{302:"1e11b8a3",691:"1c407cce"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="form-design:";n.l=function(i,r,o,s){if(e[i])e[i].push(r);else{var a,l;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==i||p.getAttribute("data-webpack")==t+o){a=p;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+o),a.src=i),e[i]=[r];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(f);var r=e[i];if(delete e[i],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,i,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var s=function(n){if(o.onerror=o.onload=null,"load"===n.type)i();else{var s=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,o.parentNode&&o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=s,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var r=n[i],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){r=s[i],o=r.getAttribute("data-href");if(o===e||o===t)return r}},i=function(i){return new Promise((function(r,o){var s=n.miniCssF(i),a=n.p+s;if(t(s,a))return r();e(i,a,null,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={302:1,691:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=i(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,i){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var o=new Promise((function(n,i){r=e[t]=[n,i]}));i.push(r[2]=o);var s=n.p+n.u(t),a=new Error,l=function(i){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,r[1](a)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,o,s=i[0],a=i[1],l=i[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var c=l(n)}for(t&&t(i);u<s.length;u++)o=s[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},i=self["webpackChunkform_design"]=self["webpackChunkform_design"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1633)}));i=n.O(i)})();