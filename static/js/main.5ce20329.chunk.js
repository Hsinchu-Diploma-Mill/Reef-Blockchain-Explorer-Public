(this["webpackJsonpreef-blockchain-explorer"]=this["webpackJsonpreef-blockchain-explorer"]||[]).push([[0],{297:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"fileName","type":"string"},{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"addExcel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"excelMap","outputs":[{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"folderArray","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"last","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getExcel","outputs":[{"components":[{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"internalType":"struct StoreTree.excelData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"getExcelLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"uint256","name":"excelIdx","type":"uint256"}],"name":"getFolderExcel","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getFolderExcelLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"uint256","name":"queryIdx","type":"uint256"}],"name":"getFolderList","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getFolderListLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"getFolderName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"isAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"string","name":"fileName","type":"string"},{"internalType":"string","name":"cid","type":"string"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"size","type":"uint256"}],"name":"newExcel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"idx","type":"uint256"},{"internalType":"string","name":"name","type":"string"}],"name":"newFolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"removeExcel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"folderIdx","type":"uint256"},{"internalType":"uint256","name":"idx","type":"uint256"}],"name":"removeFolder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"bool","name":"_type","type":"bool"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},392:function(e,t,n){},409:function(e,t){},412:function(e,t){},415:function(e,t){},419:function(e,t){},420:function(e,t){},446:function(e,t){},448:function(e,t){},457:function(e,t){},459:function(e,t){},470:function(e,t){},472:function(e,t){},486:function(e,t){},514:function(e,t){},515:function(e,t){},589:function(e,t){},591:function(e,t){},598:function(e,t){},599:function(e,t){},745:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(293),r=n.n(a),s=(n(392),n(60)),u=n(129),l=n(12),o=n(10),p=n(294),c=n.n(p),y=n(297),d=n(298),m=n.n(d),h=function(){function e(){Object(l.a)(this,e),this.contractAddr="0x5308132eb6826ef1fcc8b1f1f31f0675bc8fc646",this.web3=void 0,this.contract=void 0,this.nameResult=[],this.nameLength=0,this.detail={},this.detailLength={},this.web3=new c.a("wss://eth-goerli.g.alchemy.com/v2/1EUEe6ifJGvzlvwhRRhla2d0nAg5ZIvu"),this.contract=new this.web3.eth.Contract(y,this.contractAddr)}return Object(o.a)(e,[{key:"listFolders",value:function(){var e=Object(u.a)(Object(s.a)().mark((function e(){var t,n,i,a,r,u,l,o;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.nameLength=0,e.next=3,this.contract.methods.getExcelArrayLength().call();case 3:for(t=e.sent,n=[],i=this.nameLength;i<=t-1;i++)n.push(this.contract.methods.getExcelArrayItem(i).call());return e.next=8,Promise.all(n);case 8:for(a=e.sent,n=[],r=this.nameLength;r<=t-1;r++)n.push(this.contract.methods.getExcelMapItem(a[r].name,0).call());return e.next=13,Promise.all(n);case 13:for(u=e.sent,l=this.nameLength;l<=t-1;l++)o={path:a[l-this.nameLength].path,name:a[l-this.nameLength].name,size:+u[l-this.nameLength].size,lastModified:new Date(1e3*+u[l-this.nameLength].time)},this.nameResult.push(o);return this.nameLength=t,e.abrupt("return",this.nameResult);case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"listFiles",value:function(){var e=Object(u.a)(Object(s.a)().mark((function e(t){var n,i,a,r,u,l;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.detailLength[t]=0,e.next=3,this.contract.methods.getexcelMapLength(t).call();case 3:for(n=e.sent,i=[],a=this.detailLength[t];a<=n-1;a++)i.push(this.contract.methods.getExcelMapItem(t,a).call());return e.next=8,Promise.all(i);case 8:for(r=e.sent,u=this.detailLength[t];u<=n-1;u++)l={uuid:r[u-this.detailLength[t]].cid,name:t,size:+r[u-this.detailLength[t]].size,lastModified:new Date(1e3*+r[u-this.detailLength[t]].time)},0===this.detailLength[t]&&(this.detail[t]=[]),this.detail[t].push(l);return this.detailLength[t]=n,e.abrupt("return",this.detail[t]);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"downloadFile",value:function(){var e=Object(u.a)(Object(s.a)().mark((function e(t,n){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m()({url:"https://ipfs.io/ipfs/"+t,method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),i=document.createElement("a");i.href=t,i.setAttribute("download",n),document.body.appendChild(i),i.click(),document.body.removeChild(i)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),f=n(818),b=n(819),g=n(820),x=n(813),v=n(821),j=n(372),T=n.n(j),O=n(24),w=n(814),L=n(815),M=n(7),I=n(128),E=n(5);Object(M.h)({iconComponent:I.a});var F={"/":{id:"/",name:"Root",isDir:!0}},R=function(e){var t=Object(i.useState)(null),n=Object(O.a)(t,2),a=n[0],r=n[1],s=Object(i.useState)("/"),u=Object(O.a)(s,2),l=u[0],o=u[1],p=Object(i.useState)(null),c=Object(O.a)(p,2),y=c[0],d=c[1],m=Object(i.useState)(F),h=Object(O.a)(m,2),f=h[0],b=h[1];Object(i.useEffect)((function(){!function(e,t,n){e.listFolders().then((function(e){var n={"/":{id:"/",name:"Root",isDir:!0,children:[]}};e.forEach((function(e){for(var t,i=0;i<=e.path.length;++i)if(i===e.path.length||"/"===e.path.charAt(i)){var a,r=e.path.slice(0,i),s=r.slice(r.lastIndexOf("/")+1),u=0===r.lastIndexOf("/")?"/":r.slice(0,r.lastIndexOf("/"));r.length>0&&(null===(a=n[u].children)||void 0===a||a.push(r),n[r]={id:r,name:s,children:[],isDir:!0})}var l=e.path+"/"+e.name;null===(t=n[e.path].children)||void 0===t||t.push(l),n[l]={id:l,name:e.name,modDate:e.lastModified,size:e.size,isDir:!1}})),t(n)})).catch((function(e){n({message:e,severity:"error"})}))}(e.reefRepository,b,r)}),[e.reefRepository]);var g=function(e,t){return Object(i.useMemo)((function(){var n=t[e];return n.children?n.children.map((function(e){return t[e]})):"/"===e?[null]:[]}),[e,t])}(l,f),x=Object(i.useState)(null),v=Object(O.a)(x,2),j=v[0],T=v[1];Object(i.useEffect)((function(){!function(e,t,n,i){null==t?n(null):(n([null]),e.listFiles(t).then((function(e){var t=e.map((function(e){return{id:e.uuid,name:e.name,modDate:e.lastModified,size:e.size,isDir:!1}}));n(t)})).catch((function(e){i({message:e,severity:"error"})})))}(e.reefRepository,y,T,r)}),[y,e.reefRepository]);var I=function(e,t,n){return Object(i.useMemo)((function(){var i=["/"];if("/"!==e)for(var a=1;a<=e.length;++a)a!==e.length&&"/"!==e.charAt(a)||i.push(e.slice(0,a));var r=i.map((function(e){return n[e]}));return null!=t&&r.push({id:e+"/"+t,name:t+" (Multiple Versions)"}),r}),[e,t,n])}(l,y,f),R=function(e,t,n,a,r){return Object(i.useCallback)((function(i){if(i.id===M.a.OpenFiles.id){var s=i.payload,u=s.targetFile,l=s.files,o=null!==u&&void 0!==u?u:l[0];o&&(o.isDir?(a(o.id),r(null)):t?(n({message:"The file is now downloading...",severity:"info"}),e.downloadFile(o.id,o.name)):r(o.name))}console.log(i)}),[a,r,t,e,n])}(e.reefRepository,null!=y,r,o,d);return Object(E.jsxs)("div",{style:{height:"80vh"},children:[Object(E.jsxs)(M.c,{instanceId:e.instanceId,files:null!==j&&void 0!==j?j:g,folderChain:I,onFileAction:R,defaultFileViewActionId:M.a.EnableListView.id,children:[Object(E.jsx)(M.f,{}),Object(E.jsx)(M.g,{}),Object(E.jsx)(M.e,{}),Object(E.jsx)(M.d,{})]}),Object(E.jsx)(w.a,{open:null!==a,autoHideDuration:3e3,onClose:function(){r(null)},ClickAwayListenerProps:{onClickAway:function(){}},children:Object(E.jsx)(L.a,{onClose:function(){r(null)},severity:null===a||void 0===a?void 0:a.severity,sx:{width:"100%"},children:null===a||void 0===a?void 0:a.message})})]})};var k=function(){var e=new h;return Object(E.jsxs)(f.a,{sx:{flexGrow:1},children:[Object(E.jsx)(b.a,{position:"static",children:Object(E.jsxs)(g.a,{children:[Object(E.jsx)(x.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(E.jsx)(T.a,{})}),Object(E.jsx)(v.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Reef Blockchain Explorer"})]})}),Object(E.jsx)("div",{style:{padding:32},children:Object(E.jsx)(R,{instanceId:"reef-browser",reefRepository:e})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,824)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),r(e),s(e)}))};Object(M.h)({iconComponent:I.a}),r.a.createRoot(document.getElementById("root")).render(Object(E.jsx)(k,{})),A()}},[[745,1,2]]]);
//# sourceMappingURL=main.5ce20329.chunk.js.map