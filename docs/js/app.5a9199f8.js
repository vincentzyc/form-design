(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e95df":"0d1768ed","chunk-3a41e683":"659cd4a1","chunk-ac2cdfa8":"71f7998c","chunk-2d0c1d92":"364f5dc5"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-3a41e683":1,"chunk-ac2cdfa8":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0e95df":"31d6cfe0","chunk-3a41e683":"28158c78","chunk-ac2cdfa8":"74f2c008","chunk-2d0c1d92":"31d6cfe0"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){l=p[s],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],d.parentNode.removeChild(d),a(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"18d9":function(e,t){e.exports=VueQuillEditor},2293:function(e,t,a){},"285d":function(e,t){e.exports=Compressor},"289a":function(e,t){e.exports=vuedraggable},"3aff":function(e,t,a){},5579:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("8bbf"),r=a.n(n),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"move",mode:"out-in"}},[a("router-view")],1)],1)},i=[],s={name:"app"},c=s,l=a("2877"),u=Object(l["a"])(c,o,i,!1,null,null,null),p=u.exports,d=a("6c81"),f=a.n(d),h=a("18d9"),m=a.n(h),g=a("d4ec"),v=a("bee2"),b=a("45eb"),w=a("7e84"),y=a("262e"),x=a("2caf"),U=f.a.import("parchment"),C=function(e){Object(y["a"])(a,e);var t=Object(x["a"])(a);function a(){return Object(g["a"])(this,a),t.apply(this,arguments)}return Object(v["a"])(a,[{key:"value",value:function(e){var t=Object(b["a"])(Object(w["a"])(a.prototype),"value",this).call(this,e);return t}},{key:"add",value:function(e){return e.style.fontWeight="bold",!0}},{key:"remove",value:function(e){e.style.fontWeight="normal"}}]),a}(U.Attributor.Style),S=new C("bold","font-weight",{scope:U.Scope.INLINE,whitelist:[!0,!1]}),k=S,O=f.a.import("parchment"),j=function(e){Object(y["a"])(a,e);var t=Object(x["a"])(a);function a(){return Object(g["a"])(this,a),t.apply(this,arguments)}return Object(v["a"])(a,[{key:"value",value:function(e){var t=Object(b["a"])(Object(w["a"])(a.prototype),"value",this).call(this,e);return t}},{key:"add",value:function(e,t){return e.style.textIndent=t,!0}},{key:"remove",value:function(e){e.style.textIndent=""}}]),a}(O.Attributor.Style),_=new j("textIndent","text-indent",{scope:O.Scope.BLOCK,whitelist:["0em","1em","2em","3em","4em","5em"]}),$=_,P=f.a.import("attributors/style/size"),L=f.a.import("attributors/style/align");P.whitelist=["12px","14px","16px","18px","20px","24px","36px","48px","64px"],f.a.register(P,!0),f.a.register(L,!0),f.a.register("formats/bold",k,!0),f.a.register("formats/textIndent",$,!0),r.a.use(m.a);a("0fb7"),a("450d");var T=a("f529"),I=a.n(T),F=(a("9e1f"),a("6ed5")),E=a.n(F),A=(a("be4f"),a("896a")),z=a.n(A),B=(a("bdc7"),a("aa2f")),N=a.n(B),q=(a("de31"),a("c69e")),R=a.n(q),W=(a("a769"),a("5cc3")),D=a.n(W),M=(a("a673"),a("7b31")),V=a.n(M),K=(a("adec"),a("3d2d")),J=a.n(K),H=(a("acb6"),a("c673")),Q=a.n(H),G=(a("0fb4"),a("9944")),X=a.n(G),Y=(a("a586"),a("7464")),Z=a.n(Y),ee=(a("b0ee"),a("d180")),te=a.n(ee),ae=(a("a335"),a("c0bb")),ne=a.n(ae),re=(a("186a"),a("301f")),oe=a.n(re),ie=(a("96dc"),a("9cea")),se=a.n(ie),ce=(a("6b30"),a("c284")),le=a.n(ce),ue=(a("f225"),a("89a9")),pe=a.n(ue),de=(a("f4f9"),a("c2cc")),fe=a.n(de),he=(a("7a0f"),a("0f6c")),me=a.n(he),ge=(a("b5c2"),a("20cf")),ve=a.n(ge),be=(a("eca7"),a("3787")),we=a.n(be),ye=(a("425f"),a("4105")),xe=a.n(ye),Ue=(a("0c67"),a("299c")),Ce=a.n(Ue),Se=(a("ae26"),a("845f")),ke=a.n(Se),Oe=(a("1951"),a("eedf")),je=a.n(Oe),_e=(a("016f"),a("486c")),$e=a.n(_e),Pe=(a("6611"),a("e772")),Le=a.n(Pe),Te=(a("1f1a"),a("4e4b")),Ie=a.n(Te),Fe=(a("e960"),a("b35b")),Ee=a.n(Fe),Ae=(a("d4df"),a("7fc1")),ze=a.n(Ae),Be=(a("c526"),a("1599")),Ne=a.n(Be),qe=(a("560b"),a("dcdc")),Re=a.n(qe),We=(a("3c52"),a("0d7b")),De=a.n(We),Me=(a("fe07"),a("6ac5")),Ve=a.n(Me),Ke=(a("b5d8"),a("f494")),Je=a.n(Ke),He=(a("9d4c"),a("e450")),Qe=a.n(He),Ge=(a("10cb"),a("f3ad")),Xe=a.n(Ge),Ye=(a("bd49"),a("18ff")),Ze=a.n(Ye),et=(a("960d"),a("defb")),tt=a.n(et),at=(a("cb70"),a("b370")),nt=a.n(at),rt=(a("a7cc"),a("df33")),ot=a.n(rt);r.a.use(ot.a),r.a.use(nt.a),r.a.use(tt.a),r.a.use(Ze.a),r.a.use(Xe.a),r.a.use(Qe.a),r.a.use(Je.a),r.a.use(Ve.a),r.a.use(De.a),r.a.use(Re.a),r.a.use(Ne.a),r.a.use(ze.a),r.a.use(Ee.a),r.a.use(Ie.a),r.a.use(Le.a),r.a.use($e.a),r.a.use(je.a),r.a.use(ke.a),r.a.use(Ce.a),r.a.use(xe.a),r.a.use(we.a),r.a.use(ve.a),r.a.use(me.a),r.a.use(fe.a),r.a.use(pe.a),r.a.use(le.a),r.a.use(se.a),r.a.use(oe.a),r.a.use(ne.a),r.a.use(te.a),r.a.use(Z.a),r.a.use(X.a),r.a.use(Q.a),r.a.use(J.a),r.a.use(V.a),r.a.use(D.a),r.a.use(R.a),r.a.use(N.a),r.a.use(z.a.directive),r.a.prototype.$loading=z.a.service,r.a.prototype.$msgbox=E.a,r.a.prototype.$alert=E.a.alert,r.a.prototype.$confirm=E.a.confirm,r.a.prototype.$prompt=E.a.prompt,r.a.prototype.$message=I.a;a("99af"),a("ac1f"),a("1276");var it={env:function(){return"production"},previewUrl:function(){if("development"===this.env()){var e=window.location.origin.split(":");return"".concat(e[0],":").concat(e[1],":9010")}return window.location.origin+"/form-design-h5"},previewOrigin:function(){if("development"===this.env()){var e=window.location.origin.split(":");return"".concat(e[0],":").concat(e[1],":9010")}return window.location.origin},apiUrl:function(){return"http://xxx.com/"}},st=(a("c975"),a("fb6a"),a("d3b7"),a("4d63"),a("25f0"),a("466d"),a("53ca")),ct=new r.a,lt={hasKey:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},getType:function(e){return Object.prototype.toString.call(e).slice(8,-1)},getUrlParam:function(e){var t=new RegExp("(^|/?|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.href,n=a.indexOf("?");if(n<0)return null;var r=a.slice(n+1,a.length);if(r){var o=r.match(t);if(o)return unescape(o[2])}return null},setCookie:function(e,t,a){var n=new Date;n.setTime(n.getTime()+24*a*3600*1e3),document.cookie=e+"="+encodeURIComponent(t)+";expires="+(a?n.toGMTString():"")},getCookie:function(e){var t=document.cookie,a=t.indexOf(e+"=");if(a>-1){a=a+e.length+1;var n=t.indexOf(";",a);return n=n<0?t.length:n,decodeURIComponent(t.substring(a,n))}return""},delCookie:function(e){var t=this.getCookie(e);!1!==t&&this.setCookie(e,t,-1)},setSStorage:function(e,t){var a=window.JSON.stringify(t);window.sessionStorage.setItem(e,a)},getSStorage:function(e){var t="";if(t=window.sessionStorage.getItem(e),!t)return"";try{return window.JSON.parse(t)}catch(a){window.sessionStorage.removeItem(e),window.location.reload()}},setLStorage:function(e,t){var a=window.JSON.stringify(t);window.localStorage.setItem(e,a)},getLStorage:function(e){var t="";if(t=window.localStorage.getItem(e),!t)return"";try{return window.JSON.parse(t)}catch(a){window.localStorage.removeItem(e),window.location.reload()}},checkMobile:function(e){return/^1[0-9]{10}$/.test(e)},isNumber:function(e){var t=/^[1-9]{1}\d*$/g,a=t.test(e);return a},isLink:function(e){var t=/^(?:(?:https?|ftp):\/\/)?(?:[\da-z.-]+)\.(?:[a-z.]{2,6})(?:\/\w\.-]*)*\/?/,a=t.test(e);return a},checkLink:function(e){var t=this.isLink(e);t||ct.$message.error("请输入正确的网址")},easeout:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,n=e.scrollTop;if(n===t||"number"!==typeof t||0===a)return!1;window.requestAnimationFrame||(window.requestAnimationFrame=function(e){return setTimeout(e,17)});var r=function r(){n+=(t-n)/a,Math.abs(t-n)<1?e.scrollTop=t:(e.scrollTop=n,requestAnimationFrame(r))};r()},deepClone:function(e){var t=Array.isArray(e)?[]:{};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&("object"===Object(st["a"])(e[a])?t[a]=this.deepClone(e[a]):t[a]=e[a]);return t}},ut=(a("3aff"),a("b0c0"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"file-upload-wrapper"},[a("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{"before-upload":e.beforeAvatarUpload,data:e.uploadData,"on-error":e.uploadError,"on-progress":e.handleProgress,"on-success":e.handleAvatarSuccess,"show-file-list":!1,action:"https://jsonplaceholder.typicode.com/posts/"}},[e.showImg?a("img",{staticClass:"avatar",style:{height:e.height,width:e.width},attrs:{src:e.value}}):e.showVideo?a("video",{staticClass:"avatar",style:{height:e.height,width:e.width},attrs:{src:e.value}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),a("i",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"el-icon-close avatar-close-icon",on:{click:function(t){return t.stopPropagation(),e.removeFile()}}})]),e.showCompressor?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.drawer=!0}}},[e._v("压缩上传")]):e._e(),a("ImgUpload",{on:{fail:e.compressFail,success:e.compressSuccess},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}}),e.uploading?a("transition",{attrs:{name:"el-fade-in-linear"}},[a("div",{staticClass:"flex flex-column flex-center uploader-progress"},[a("el-progress",{staticClass:"progress",attrs:{percentage:e.uploadPercentage,width:100,type:"circle"}}),a("el-button",{staticClass:"mg-t10",attrs:{type:"text"},on:{click:function(t){return t.stopPropagation(),e.cancelUpload()}}},[e._v("取消上传")])],1)]):e._e()],1)}),pt=[],dt=(a("caad"),a("2532"),a("3ca3"),a("ddb0"),a("2b3d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-drawer",{attrs:{visible:e.model,"with-header":!1,direction:"ltr",size:"36%"},on:{"update:visible":function(t){e.model=t}}},[a("div",{staticClass:"drawer-content"},[a("el-upload",{ref:"upload",attrs:{"auto-upload":!1,"before-upload":e.beforeUpload,multiple:!1,"on-change":e.changeFile,"on-error":e.uploadError,"on-progress":e.handleProgress,"on-success":e.handleSuccess,"show-file-list":!1,action:"https://jsonplaceholder.typicode.com/posts/",drag:""}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v(" 将图片拖到此处，或 "),a("em",[e._v("点击上传")])])]),a("div",{staticStyle:{width:"100%",height:"80px"}},[a("div",{staticClass:"flex"},[a("span",[e._v("压缩率："+e._s(e.quality)+"%")]),a("div",{staticClass:"flex-auto mg-l20"},[a("el-slider",{on:{change:e.compressorFile},model:{value:e.quality,callback:function(t){e.quality=t},expression:"quality"}})],1)]),e.file?a("div",{staticClass:"flex"},[a("span",{staticClass:"flex-auto"},[e._v(" 源文件大小： "),a("span",{staticClass:"cred"},[e._v(e._s(e.fileSize.before))])]),a("span",{staticClass:"flex-auto"},[e._v(" 压缩后大小： "),a("span",{staticClass:"cgreen"},[e._v(e._s(e.fileSize.after))])])]):e._e()]),a("div",{staticClass:"preview-body"},[e.file?a("div",[a("p",[e._v(" 压缩后 "),a("i",{staticClass:"el-icon-bottom"})]),e.compressUrl?a("el-image",{staticStyle:{width:"100%"},attrs:{"preview-src-list":e.srcList,src:e.compressUrl}}):e._e(),a("hr"),a("p",[e._v(" 源文件 "),a("i",{staticClass:"el-icon-bottom"})]),e.sourceUrl?a("el-image",{staticStyle:{width:"100%"},attrs:{"preview-src-list":e.srcList,src:e.sourceUrl}}):e._e()],1):e._e()]),a("div",{staticClass:"drawer-footer flex"},[a("el-button",{staticClass:"flex-auto",on:{click:function(t){e.model=!1}}},[e._v("取 消")]),a("el-button",{staticClass:"flex-auto",attrs:{disabled:!this.file,type:"danger"},on:{click:function(t){return e.submitUpload(!0)}}},[e._v("上传源文件")]),a("el-button",{staticClass:"flex-auto",attrs:{disabled:!this.compressFile,type:"primary"},on:{click:function(t){return e.submitUpload(!1)}}},[e._v("上传压缩文件")])],1)],1),e.uploading?a("transition",{attrs:{name:"el-fade-in-linear"}},[a("div",{staticClass:"flex flex-column flex-center uploader-progress"},[a("el-progress",{staticClass:"progress",attrs:{percentage:e.uploadPercentage,width:100,type:"circle"}}),a("el-button",{staticClass:"mg-t10",attrs:{type:"text"},on:{click:function(t){return t.stopPropagation(),e.cancelUpload()}}},[e._v("取消上传")])],1)]):e._e()],1)}),ft=[],ht=a("285d"),mt=a.n(ht),gt={props:{value:Boolean},data:function(){return{imgTypeList:["image/jpg","image/jpeg","image/png","image/gif"],file:null,compressFile:null,compressUrl:"",sourceUrl:"",quality:80,uploading:!1,isUploadSource:!1,srcList:[],fileSize:{before:0,after:0},uploadPercentage:0}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{resetUpload:function(){var e=this;this.$refs.upload.clearFiles(),setTimeout((function(){Object.assign(e.$data,e.$options.data())}),300)},startUpload:function(){this.uploading=!0},submitUpload:function(e){if(this.file&&this.compressFile){this.isUploadSource=e;var t=this.isUploadSource?this.file.raw:this.compressFile,a=this.imgTypeList.includes(t.type),n=t.size/1024<=50;return a?n?void this.$refs.upload.submit():(this.$message.error("上传图片大小不能超过 50 K !"),!1):(this.$message.error("请上传图片"),!1)}},changeFile:function(e){this.file=e,this.compressorFile(this.quality)},uploadError:function(){this.resetUpload(),this.$alert("网络繁忙，请稍后重试")},handleProgress:function(e,t){this.uploadPercentage=parseInt(t.percentage,10)},handleSuccess:function(){this.$emit("success",this.compressUrl),100!==this.uploadPercentage&&(this.uploadPercentage=100),this.resetUpload(),this.model=!1},cancelUpload:function(){if(this.uploading)return this.$refs.upload.abort(),this.$message({message:"已取消上传",type:"warning"}),this.resetUpload()},compressorFile:function(e){var t=this;this.file&&(this.srcList=[],this.fileSize.before=Math.round(this.file.size/1024*10)/10+"KB",this.sourceUrl=URL.createObjectURL(this.file.raw),new mt.a(this.file.raw,{quality:e/100,convertSize:51200,success:function(e){t.compressFile=e,t.compressUrl=URL.createObjectURL(e),t.fileSize.after=Math.round(e.size/1024*10)/10+"KB",t.srcList=[t.compressUrl,t.sourceUrl]},error:function(e){t.compressUrl="",t.compressFile=null,t.fileSize.after=0,t.$emit("fail",e),console.log(e.message)}}))},beforeUpload:function(){if(this.file&&this.compressFile){var e=this.isUploadSource?this.file.raw:this.compressFile;return this.startUpload(),new Promise((function(t){t(e)}))}}}},vt=gt,bt=(a("c775"),Object(l["a"])(vt,dt,ft,!1,null,"0d194325",null)),wt=bt.exports,yt="img",xt="video",Ut={name:"FileUpload",components:{ImgUpload:wt},props:{value:String,height:String,width:String,type:{type:String,default:yt}},data:function(){return{drawer:!1,videoTypeList:["video/mp4"],imgTypeList:["image/jpg","image/jpeg","image/png","image/gif"],uploading:!1,uploadPercentage:0,uploadData:{yourData:"yunyi"}}},computed:{showCompressor:function(){return this.type===yt},showImg:function(){return this.value&&this.type===yt},showVideo:function(){return this.value&&this.type===xt}},methods:{compressSuccess:function(e){this.$emit("update:value",e)},compressFail:function(e){console.log(e)},resetUpload:function(){this.uploading=!1,this.uploadPercentage=0},startUpload:function(){this.uploading=!0},cancelUpload:function(){if(this.uploading)return this.$refs.upload.abort(),this.$message({message:"已取消上传",type:"warning"}),this.resetUpload()},removeFile:function(){this.$emit("update:value","")},handleAvatarSuccess:function(e,t){var a=this;this.$emit("update:value",URL.createObjectURL(t.raw)),100!==this.uploadPercentage&&(this.uploadPercentage=100),setTimeout((function(){a.resetUpload()}),500)},uploadError:function(){this.resetUpload(),this.$alert("网络繁忙，请稍后重试")},beforeAvatarUpload:function(e){return this.type===yt?this.imgUpload(e):this.type===xt&&this.videoUpload(e)},handleProgress:function(e,t){this.uploadPercentage=parseInt(t.percentage,10)},imgUpload:function(e){var t=this.imgTypeList.includes(e.type),a=e.size/1024<=50;return t?a?(this.startUpload(),!0):(this.$message.error("上传图片大小不能超过 50 K !"),!1):(this.$message.error("请上传图片"),!1)},videoUpload:function(e){var t=this.videoTypeList.includes(e.type),a=e.size/1024/1024<=100;return t?a?(this.startUpload(),!0):(this.$message.error("上传视频大小不能超过 100 M !"),!1):(this.$message.error("请上传视频文件"),!1)}}},Ct=Ut,St=(a("d3b73"),Object(l["a"])(Ct,ut,pt,!1,null,null,null)),kt=St.exports,Ot={install:function(e){this.installed||e.component(kt.name,kt)}};"undefined"!==typeof window&&window.Vue&&Ot.install(window.Vue),r.a.use(Ot);var jt=a("5880"),_t=a.n(jt),$t={pageData:{list:[],title:"云忆网络",statsCode:"",theme:"theme1",fixedTop:[],fixedBottom:[],fixedCustom:[],style:{backgroundColor:"#fff",backgroundImage:""}},dragWg:{},selectWg:{},selectWgIndex:null,selectWginList:[],configTab:"page",wgCollapse:"base",predefineColors:["#000000","#666666","#cccccc","#ffffff","rgba(255, 255, 255, 0)","#ff0000","#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585"]},Pt={setDragWg:function(e,t){e.dragWg=t},setPageData:function(e,t){t.fixedBottom||(t.fixedBottom=[]),t.fixedCustom||(t.fixedCustom=[]),t.fixedTop||(t.fixedTop=[]),t.hijackBack||(t.hijackBack={isHijack:!1,alertImg:"",alertLink:""}),e.pageData=t},setSelectWg:function(e,t){e.selectWg=t},setConfigTab:function(e,t){e.configTab=t},setWgCollapse:function(e,t){e.wgCollapse=t}},Lt={state:$t,mutations:Pt};r.a.use(_t.a);var Tt=new _t.a.Store({modules:{common:Lt}}),It=a("6389"),Ft=a.n(It);r.a.use(Ft.a);var Et=function(){return"/home"},At=new Ft.a({routes:[{path:"/",redirect:Et()},{path:"/login",name:"login",component:function(){return a.e("chunk-3a41e683").then(a.bind(null,"dd7b"))}},{path:"/home",name:"home",component:function(){return a.e("chunk-ac2cdfa8").then(a.bind(null,"6511"))}},{path:"*",name:"404",component:function(){return a.e("chunk-2d0e95df").then(a.bind(null,"8cdb"))}}]}),zt=At;r.a.prototype.$api=it,r.a.prototype.$util=lt,r.a.config.productionTip=!1,r.a.prototype.BASE_URL="",new r.a({router:zt,store:Tt,render:function(e){return e(p)}}).$mount("#app")},5880:function(e,t){e.exports=Vuex},6389:function(e,t){e.exports=VueRouter},"6c81":function(e,t){e.exports=Quill},"8bbf":function(e,t){e.exports=Vue},c775:function(e,t,a){"use strict";var n=a("2293"),r=a.n(n);r.a},d3b73:function(e,t,a){"use strict";var n=a("5579"),r=a.n(n);r.a}});