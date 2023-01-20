(this["webpackJsonpreef-blockchain-explorer"]=this["webpackJsonpreef-blockchain-explorer"]||[]).push([[0],{340:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"string","name":"fileName","type":"string"},{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"addExcel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"excelMap","outputs":[{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"folderArray","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"last","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getExcel","outputs":[{"components":[{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"internalType":"struct StoreTree.excelData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"getExcelLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"uint256","name":"excelIdx","type":"uint256"}],"name":"getFolderExcel","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"}],"name":"getFolderExcelLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"uint256","name":"queryIdx","type":"uint256"}],"name":"getFolderList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"}],"name":"getFolderListLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"}],"name":"getFolderName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"string","name":"fileName","type":"string"},{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"newExcel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"newFolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"removeExcel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"removeFolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"bool","name":"_type","type":"bool"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},456:function(e,t,n){},473:function(e,t){},476:function(e,t){},479:function(e,t){},483:function(e,t){},484:function(e,t){},510:function(e,t){},512:function(e,t){},521:function(e,t){},523:function(e,t){},534:function(e,t){},536:function(e,t){},550:function(e,t){},578:function(e,t){},579:function(e,t){},653:function(e,t){},655:function(e,t){},662:function(e,t){},663:function(e,t){},810:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(334),r=n.n(i),o=(n(456),n(3)),s=n(9),c=n(18),u=n(8),l=n(7),d=n(337),p=n.n(d),f=n(340),b=n(95),m=n.n(b),y=function(){function e(){Object(u.a)(this,e),this.contractAddr="0x5308132EB6826ef1FCC8B1F1f31f0675bC8Fc646",this.web3=void 0,this.contract=void 0,this.base="https://quorum-blockchain.yikuo.dev/api/",this.rpc="https://rpc.quorum-blockchain.yikuo.dev/",this.web3=new p.a(this.rpc),this.contract=new this.web3.eth.Contract(f,this.contractAddr)}return Object(l.a)(e,[{key:"listFolders",value:function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var n,a,i,r,s,c,u,l,d;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contract.methods.getFolderListLength(t).call();case 2:for(n=e.sent,a=[],i=0;i<n;i++)a.push(this.contract.methods.getFolderList(t,i).call());return e.next=7,Promise.all(a);case 7:for(r=e.sent,a=[],s=0;s<r.length;s++)a.push(this.contract.methods.getFolderName(r[s]).call());return e.next=12,Promise.all(a);case 12:for(c=e.sent,u=[],l=0;l<r.length;l++)d={folderIdx:r[l],name:c[l]},u.push(d);return e.abrupt("return",u);case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"listFolderFiles",value:function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var n,a,i,r,s,c,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contract.methods.getFolderExcelLength(t).call();case 2:for(n=e.sent,a=[],i=0;i<n;i++)a.push(this.contract.methods.getFolderExcel(t,i).call());return e.next=7,Promise.all(a);case 7:for(r=e.sent,s=[],c=0;c<r.length;c++)u={folderIdx:t,name:r[c]},s.push(u);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"listFiles",value:function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var n,a,i,r,s,c,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.folderIdx),console.log(t.name),e.next=4,this.contract.methods.getExcelLength(t.folderIdx,t.name).call();case 4:for(n=e.sent,console.log("TEST:",n),a=[],i=0;i<n;i++)a.push(this.contract.methods.getExcel(t.folderIdx,t.name,i).call());return e.next=10,Promise.all(a);case 10:for(r=e.sent,s=[],c=0;c<r.length;c++)u={uuid:r[c].cid,name:t.name,size:+r[c].size,lastModified:new Date(+r[c].time)},s.push(u);return e.abrupt("return",s);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"downloadFile",value:function(){var e=Object(s.a)(Object(o.a)().mark((function e(t,n){var a,i,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()({url:this.base+"data/".concat(t,"/download"),method:"GET",responseType:"blob"});case 2:a=e.sent,i=window.URL.createObjectURL(new Blob([a.data])),(r=document.createElement("a")).href=i,r.setAttribute("download",n),document.body.appendChild(r),r.click(),document.body.removeChild(r);case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"createFolder",value:function(){var e=Object(s.a)(Object(o.a)().mark((function e(t,n,a){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post(this.base+"folders",{parent:t,name:n},{headers:{Authorization:"Bearer ".concat(a)}});case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(t,n,a){return e.apply(this,arguments)}}()}]),e}(),h=n(917),j=n(918),O=n(919),x=n(916),v=n(819),g=n(909),w=n(420),T=n(907),k=n(415),F=n.n(k),C=n(416),I=n.n(C),S=n(19),M=n(30),E=n(906),L=n(904),A=n(910),R=n(898),D=n(913),N=n(914),z=n(915),P=n(21),B=n(166),q=n(902),U=n(97),W=n(5),_=function(e){var t=e.doCreateFolder,n=e.open,i=e.setOpen,r=e.refresh,u=Object(a.useState)(""),l=Object(c.a)(u,2),d=l[0],p=l[1],f=Object(a.useState)(!1),b=Object(c.a)(f,2),m=b[0],y=b[1],h=Object(a.useState)(null),j=Object(c.a)(h,2),O=j[0],x=j[1],v=function(){i(!1)},w=function(){var e=Object(s.a)(Object(o.a)().mark((function e(){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,t(d);case 3:null!==(n=e.sent)?x(n):(i(!1),setTimeout(r,3e3),p("")),y(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(W.jsx)("div",{children:Object(W.jsxs)(A.a,{open:n,onClose:v,children:[Object(W.jsx)(R.a,{children:"New Folder"}),Object(W.jsxs)(D.a,{children:[Object(W.jsx)(q.a,{autoFocus:!0,margin:"dense",label:"Folder Name",fullWidth:!0,variant:"standard",value:d,onChange:function(e){return p(e.target.value)}}),O&&Object(W.jsx)(N.a,{color:U.a.A400,children:O})]}),Object(W.jsxs)(z.a,{children:[Object(W.jsx)(g.a,{onClick:v,children:"Close"}),Object(W.jsx)(g.a,{variant:"contained",onClick:w,disabled:m,type:"submit",children:"Create"})]})]})})},H=n(43),J=n(418),G=n(417),V=(n(807),n(808),new H.c({restrictions:{maxNumberOfFiles:1}}).use(J.a,{endpoint:"https://quorum-blockchain.yikuo.dev/api/data",allowedMetaFields:["meta"],headers:function(e){return{Authorization:"Bearer ".concat(e.meta.accessToken)}}}));V.on("upload-error",(function(e,t,n){n&&V.info(n.body,"error")}));var Y=function(e){var t=e.open,n=e.setOpen,i=e.folder,r=e.folderFiles,o=e.file,s=e.accessToken,c=e.refresh;Object(a.useEffect)((function(){var e=function(e){var t=null===o,n=e.name;t?r.find((function(t){return(null===t||void 0===t?void 0:t.name)===e.name}))&&(V.removeFile(e.id),V.info("Same file exists!","error")):e.name!==o.name&&(V.info("Renamed as ".concat(o.name),"warning"),n=o.name),V.setFileMeta(e.id,{name:n,meta:JSON.stringify({tag:0,name:n,folderNode:i.index,isNew:t}),accessToken:s})};return V.on("file-added",e),function(){V.off("file-added",e)}}),[i,r,o,s]),Object(a.useEffect)((function(){var e=function(e,t){var n=t.body;V.info("File uploading...\nTx hash: ".concat(n.txHash)),setTimeout(c,3e3)};return V.on("upload-success",e),function(){V.off("upload-success",e)}}),[c]);return Object(W.jsx)("div",{children:Object(W.jsx)(G.a,{uppy:V,closeModalOnClickOutside:!0,open:t,onRequestClose:function(){n(!1)}})})};Object(P.i)({iconComponent:B.a,disableDragAndDrop:!0});var K=Object(P.h)({id:"Refresh",hotkeys:["ctrl+r"],button:{name:"Refresh",toolbar:!0,contextMenu:!0,icon:P.b.loading}}),Q=function(e,t,n,a){n([null]);var i=e.listFolders(t.index),r=e.listFolderFiles(t.index);Promise.all([i,r]).then((function(e){var t=e[0],a=e[1],i=t.map((function(e){return{id:e.folderIdx.toString(),name:e.name,isDir:!0}})),r=a.map((function(e){return{id:"".concat(e.folderIdx,"/").concat(e.name),name:e.name,isDir:!1}}));console.log(i.concat(r)),n(i.concat(r))})).catch((function(e){console.log(e),a({message:"".concat(e),severity:"error"})}))},X=function(e,t,n,a){null==t?n(null):(n([null]),e.listFiles(t).then((function(e){var t=e.map((function(e,t){return{id:"".concat(t,":").concat(e.uuid),name:e.name,modDate:e.lastModified,size:e.size,isDir:!1}}));n(t)})).catch((function(e){console.log(e),a({message:"".concat(e),severity:"error"})})))},Z=function(e){var t,n=Object(a.useState)(null),i=Object(c.a)(n,2),r=i[0],u=i[1],l=Object(a.useState)(null),d=Object(c.a)(l,2),p=d[0],f=d[1],b=Object(a.useState)(!1),m=Object(c.a)(b,2),y=m[0],h=m[1],j=Object(a.useState)(!1),O=Object(c.a)(j,2),x=O[0],v=O[1],w=Object(a.useState)({path:[{index:0,name:"Root"}],index:0}),T=Object(c.a)(w,2),k=T[0],F=T[1],C=Object(a.useState)(null),I=Object(c.a)(C,2),B=I[0],q=I[1],U=function(){B?X(e.reefRepository,B,ne,u):Q(e.reefRepository,k,Z,u)},H=function(){var t=Object(s.a)(Object(o.a)().mark((function t(n){var a;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==n.length){t.next=2;break}return t.abrupt("return","Empty name not allowed!");case 2:if(!V.find((function(e){return(null===e||void 0===e?void 0:e.name)===n}))){t.next=4;break}return t.abrupt("return","Name already exists!");case 4:return t.prev=4,t.next=7,e.reefRepository.createFolder(k.index,n,null===(a=e.loginState)||void 0===a?void 0:a.accessToken);case 7:return t.abrupt("return",null);case 10:return t.prev=10,t.t0=t.catch(4),t.abrupt("return","".concat(t.t0));case 13:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}(),J=Object(a.useState)([null]),G=Object(c.a)(J,2),V=G[0],Z=G[1];Object(a.useEffect)((function(){Q(e.reefRepository,k,Z,u)}),[k,e.reefRepository]);var $=Object(a.useState)(null),ee=Object(c.a)($,2),te=ee[0],ne=ee[1];Object(a.useEffect)((function(){X(e.reefRepository,B,ne,u)}),[B,e.reefRepository]);var ae=function(e,t){return Object(a.useMemo)((function(){var n=e.path.map((function(e){return{id:e.index.toString(),name:e.name,isDir:!0}}));return null!=t&&n.push({id:"".concat(t.folderIdx,"/").concat(t.name),name:t.name+" (History)",isDir:!1}),console.log(n),n}),[e,t])}(k,B),ie=function(e,t,n,i,r,o,s,u,l,d){return Object(a.useCallback)((function(a){if(a.id===P.a.OpenFiles.id){var p=a.payload,f=p.targetFile,b=p.files,m=null!==f&&void 0!==f?f:b[0];if(console.log(m),m)if(m.isDir){var y,h=!1,j=Object(M.a)(n.path.entries());try{for(j.s();!(y=j.n()).done;){var O=Object(c.a)(y.value,2),x=O[0];if(O[1].index.toString()===m.id){h=!0,r({path:n.path.slice(0,x+1),index:parseInt(m.id)}),o(null);break}}}catch(k){j.e(k)}finally{j.f()}h||(r({path:[].concat(Object(S.a)(n.path),[{index:parseInt(m.id),name:m.name}]),index:parseInt(m.id)}),o(null))}else if(t){i({message:"The file is now downloading...",severity:"info"});var v=m.id.split(":",2)[1];s({downloaded:!1,filename:m.name,hash:v}),e.downloadFile(v,m.name).then((function(){s({downloaded:!0,filename:m.name,hash:v}),i({message:"The file is downloaded.",severity:"success"})})).catch((function(e){console.log(e),s(null),i({message:"Download failed: ".concat(e),severity:"error"})}))}else{var g=m.id.split("/",1),w=Object(c.a)(g,1)[0],T=m.name;o({folderIdx:parseInt(w),name:T})}}else a.id===P.a.UploadFiles.id?u(!0):a.id===P.a.CreateFolder.id?l(!0):a.id===K.id&&d();console.log(a)}),[n.path,r,o,t,i,s,e,u,l,d])}(e.reefRepository,null!=B,k,u,F,q,f,h,v,U),re=[K];return e.loginState&&e.loginState.isAdmin&&(re.push(P.a.UploadFiles),B||re.push(P.a.CreateFolder)),Object(W.jsxs)("div",{style:{height:"80vh"},children:[Object(W.jsxs)(P.c,{instanceId:e.instanceId,files:null!==te&&void 0!==te?te:V,folderChain:ae,fileActions:re,onFileAction:ie,defaultFileViewActionId:P.a.EnableListView.id,children:[Object(W.jsx)(P.f,{}),Object(W.jsx)(P.g,{}),Object(W.jsx)(P.e,{}),Object(W.jsx)(P.d,{})]}),Object(W.jsx)(E.a,{open:null!==r,autoHideDuration:5e3,onClose:function(){u(null)},ClickAwayListenerProps:{onClickAway:function(){}},children:Object(W.jsx)(L.a,{onClose:function(){u(null)},severity:null===r||void 0===r?void 0:r.severity,sx:{width:"100%"},children:null===r||void 0===r?void 0:r.message})}),Object(W.jsx)(Y,{open:y,setOpen:h,folder:k,folderFiles:V,file:B,accessToken:null===(t=e.loginState)||void 0===t?void 0:t.accessToken,refresh:function(){return U()}}),Object(W.jsx)(_,{doCreateFolder:function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",H(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),open:x,setOpen:v,refresh:function(){return U()}}),Object(W.jsxs)(A.a,{open:null!==p,maxWidth:!1,onClose:function(){return f(null)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(W.jsx)(R.a,{children:"Hash Digest"}),Object(W.jsxs)(D.a,{children:[Object(W.jsxs)(N.a,{children:["The file ",Object(W.jsx)("b",{children:null===p||void 0===p?void 0:p.filename})," is ",null!==p&&void 0!==p&&p.downloaded?"downloaded":"now downloading...","."]}),Object(W.jsxs)(N.a,{children:["The integrity of the file could be checked by comparing the ",Object(W.jsx)("code",{children:"sha256"})," digest."]}),Object(W.jsx)("br",{}),Object(W.jsx)(N.a,{children:Object(W.jsx)("b",{children:Object(W.jsx)("code",{children:null===p||void 0===p?void 0:p.hash})})}),Object(W.jsx)("br",{}),Object(W.jsxs)(N.a,{children:["You can use ",Object(W.jsx)("a",{href:"https://emn178.github.io/online-tools/sha256_checksum.html",target:"_blank",rel:"noreferrer",children:"this online tool"})," to compute the hash digest."]})]}),Object(W.jsx)(z.a,{children:Object(W.jsx)(g.a,{disabled:!(null!==p&&void 0!==p&&p.downloaded),onClick:function(){return f(null)},autoFocus:!0,children:"Close"})})]})]})},$=function(e){var t=e.doLogin,n=e.open,i=e.setOpen,r=Object(a.useState)(""),u=Object(c.a)(r,2),l=u[0],d=u[1],p=Object(a.useState)(""),f=Object(c.a)(p,2),b=f[0],m=f[1],y=Object(a.useState)(!1),h=Object(c.a)(y,2),j=h[0],O=h[1],x=Object(a.useState)(null),v=Object(c.a)(x,2),w=v[0],T=v[1],k=function(){i(!1)},F=function(){var e=Object(s.a)(Object(o.a)().mark((function e(){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,t(l,b);case 3:"string"===typeof(n=e.sent)?T(n):i(!1),O(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(W.jsx)("div",{children:Object(W.jsxs)(A.a,{open:n,onClose:k,children:[Object(W.jsx)(R.a,{children:"Login"}),Object(W.jsxs)(D.a,{children:[Object(W.jsx)(q.a,{autoFocus:!0,margin:"dense",label:"Username",type:"email",fullWidth:!0,variant:"standard",value:l,onChange:function(e){return d(e.target.value)}}),Object(W.jsx)(q.a,{margin:"dense",label:"Password",type:"password",fullWidth:!0,variant:"standard",value:b,onChange:function(e){return m(e.target.value)}}),w&&Object(W.jsx)(N.a,{color:U.a.A400,children:w})]}),Object(W.jsxs)(z.a,{children:[Object(W.jsx)(g.a,{onClick:k,children:"Close"}),Object(W.jsx)(g.a,{variant:"contained",onClick:F,disabled:j,type:"submit",children:"Login"})]})]})})},ee=function(){function e(){Object(u.a)(this,e),this.base="https://quorum-blockchain.yikuo.dev/api/"}return Object(l.a)(e,[{key:"login",value:function(){var e=Object(s.a)(Object(o.a)().mark((function e(t,n){var a;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.post(this.base+"auth/login",{username:t,password:n});case 3:return a=e.sent,e.abrupt("return",a.data.accessToken);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),te=n(218),ne=new y,ae=new ee;var ie=function(){var e=Object(a.useState)(null),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(!1),u=Object(c.a)(r,2),l=u[0],d=u[1],p=Object(a.useState)(!1),f=Object(c.a)(p,2),b=f[0],y=f[1],k=Object(a.useRef)(null),C=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t,n){var a,r,s,c,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.login(t,n);case 3:return a=e.sent,r=te.a(a),s=r.user,c=r.isAdmin,sessionStorage.setItem("accessToken",a),i(u={accessToken:a,username:s,isAdmin:c}),e.abrupt("return",u);case 11:if(e.prev=11,e.t0=e.catch(0),!m.a.isAxiosError(e.t0)){e.next=22;break}if(console.log(e.t0),"Network Error"!==e.t0.message){e.next=19;break}return e.abrupt("return",e.t0.message);case 19:return e.abrupt("return",e.t0.response.data.message);case 20:e.next=23;break;case 22:return e.abrupt("return","".concat(e.t0));case 23:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(){var e=sessionStorage.getItem("accessToken");if(null===e)return null;var t=te.a(e);return{accessToken:e,username:t.user,isAdmin:t.isAdmin}}();null!==e&&i(e)}),[]),Object(W.jsxs)(h.a,{sx:{flexGrow:1},children:[Object(W.jsx)(j.a,{position:"static",children:Object(W.jsxs)(O.a,{children:[Object(W.jsx)(x.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(W.jsx)(F.a,{})}),Object(W.jsx)(v.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Reef Blockchain Explorer"}),Object(W.jsx)(g.a,{variant:"outlined",endIcon:Object(W.jsx)(I.a,{}),onClick:function(){null===n?d(!0):y(!0)},ref:k,style:{color:"white",borderColor:"white",lightingColor:"red"},children:n?"Welcome, ".concat(n.username,"!"):"Login"}),Object(W.jsx)(w.a,{id:"basic-menu",anchorEl:k.current,open:b,MenuListProps:{"aria-labelledby":"basic-button"},onClose:function(){return y(!1)},children:Object(W.jsx)(T.a,{onClick:function(){return i(null),sessionStorage.removeItem("accessToken"),void y(!1)},children:"Logout"})})]})}),Object(W.jsx)("div",{style:{padding:32},children:Object(W.jsx)(Z,{instanceId:"reef-browser",reefRepository:ne,loginState:n})}),Object(W.jsx)($,{doLogin:C,open:l,setOpen:d})]})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,921)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))};Object(P.i)({iconComponent:B.a}),r.a.createRoot(document.getElementById("root")).render(Object(W.jsx)(ie,{})),re()}},[[810,1,2]]]);
//# sourceMappingURL=main.4a5e5a71.chunk.js.map