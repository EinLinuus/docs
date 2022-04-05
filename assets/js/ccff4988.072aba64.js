"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[319],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6907:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:10},c="BucketAnywhere",s={unversionedId:"Object-Storage/Tools/bucketanywhere",id:"Object-Storage/Tools/bucketanywhere",title:"BucketAnywhere",description:"Using BucketAnywhere is a Android App which allows to access S3 Object Storage on your cell phone.",source:"@site/docs/Object-Storage/Tools/bucketanywhere.md",sourceDirName:"Object-Storage/Tools",slug:"/Object-Storage/Tools/bucketanywhere",permalink:"/docs/Object-Storage/Tools/bucketanywhere",editUrl:"https://github.com/contabo/docs/tree/main/docs/Object-Storage/Tools/bucketanywhere.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Cloudberry Explorer",permalink:"/docs/Object-Storage/Tools/cloudberry-explorer"},next:{title:"Virtualmin",permalink:"/docs/Object-Storage/Tools/virtualmin"}},p={},u=[{value:"Example data",id:"example-data",level:2},{value:"Setup",id:"setup",level:2}],m={toc:u};function k(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bucketanywhere"},"BucketAnywhere"),(0,o.kt)("p",null,"Using ",(0,o.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=lysesoft.s3anywhere&hl=de&gl=US"},"BucketAnywhere")," is a Android App which allows to access S3 Object Storage on your cell phone."),(0,o.kt)("p",null,"Here the way to mount a bucket which is not reboot safe is shown. All you will need is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"access_key")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secret_key")),(0,o.kt)("li",{parentName:"ul"},"Contabo's S3 URL"),(0,o.kt)("li",{parentName:"ul"},"your bucket name"),(0,o.kt)("li",{parentName:"ul"},"folder (mount point) where you want make your bucket contents available")),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"access_key"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"secret_key")," and the S3 URL please check ",(0,o.kt)("a",{parentName:"p",href:"/docs/Object-Storage/s3-connection-settings"},"here"),"."),(0,o.kt)("h2",{id:"example-data"},"Example data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"access_key")," = 82046e8110804a43bf29c1ae426a724d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"secret_key")," = 82e69bd7a52076c527154297a76c2233"),(0,o.kt)("li",{parentName:"ul"},"S3 URL = ",(0,o.kt)("a",{parentName:"li",href:"https://eu2.contabostorage.com"},"https://eu2.contabostorage.com")),(0,o.kt)("li",{parentName:"ul"},"bucket name = foo")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start ",(0,o.kt)("inlineCode",{parentName:"li"},"BucketAnywhere"),". It should show the following screen ",(0,o.kt)("img",{alt:"bucketanywhere-start",src:n(9460).Z,width:"1080",height:"2246"})),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Add"),". The following screen should appear ",(0,o.kt)("img",{alt:"bucketanywhere-settings",src:n(8010).Z,width:"1080",height:"2246"})),(0,o.kt)("li",{parentName:"ol"},"Please specify the following values",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"S3 URL")," please specify the S3 URL, e.g. ",(0,o.kt)("a",{parentName:"li",href:"https://eu2.contabostorage.com"},"https://eu2.contabostorage.com")),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"KeyId")," please speify he ",(0,o.kt)("inlineCode",{parentName:"li"},"access_key")," , e.g. 82046e8110804a43bf29c1ae426a724d"),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"SecretKey")," please speify he ",(0,o.kt)("inlineCode",{parentName:"li"},"secret_key")," , e.g. 82e69bd7a52076c527154297a76c2233"),(0,o.kt)("li",{parentName:"ul"},"For ",(0,o.kt)("inlineCode",{parentName:"li"},"Bucket")," please specify your bucket name, e.g. foo"))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Save")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Connect")," then you should see the files.")))}k.isMDXComponent=!0},8010:function(e,t,n){t.Z=n.p+"assets/images/bucketanywhere-settings-4feeed56b104756b1bf4aeb69202a449.jpg"},9460:function(e,t,n){t.Z=n.p+"assets/images/bucketanywhere-start-81688d295db76b8727d1ecb9059654c0.jpg"}}]);