"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[282],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7435:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={sidebar_position:2},c="cntb",u={unversionedId:"Object-Storage/Tools/cntb",id:"Object-Storage/Tools/cntb",title:"cntb",description:"cntb is an open source command line interface developed by Contabo to allow easy managing of the products in contabo. This includes the S3 Object Storage. Please follow the intructions to download and install cntb",source:"@site/docs/Object-Storage/Tools/cntb.md",sourceDirName:"Object-Storage/Tools",slug:"/Object-Storage/Tools/cntb",permalink:"/docs/Object-Storage/Tools/cntb",editUrl:"https://github.com/contabo/docs/tree/main/docs/Object-Storage/Tools/cntb.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"General Compatibility",permalink:"/docs/Object-Storage/Tools/compatibility"},next:{title:"aws cli",permalink:"/docs/Object-Storage/Tools/aws-cli"}},p={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Examples",id:"examples",level:2},{value:"Create Bucket",id:"create-bucket",level:3},{value:"Delete Bucket",id:"delete-bucket",level:3},{value:"Upload file(s)",id:"upload-files",level:3},{value:"Delete file",id:"delete-file",level:3}],d={toc:s};function b(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cntb"},"cntb"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/contabo/cntb"},"cntb")," is an open source command line interface developed by Contabo to allow easy managing of the products in contabo. This includes the S3 Object Storage. Please follow the intructions to download and install ",(0,r.kt)("inlineCode",{parentName:"p"},"cntb")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To be able to use ",(0,r.kt)("inlineCode",{parentName:"p"},"cntb")," with your S3 Object Storage all you need is the following data. You get them via the ",(0,r.kt)("a",{parentName:"p",href:"https://my.contabo.com/api/details"},"https://my.contabo.com/api/details")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client-id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client-secret")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"api-password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"api-username"))),(0,r.kt)("p",null,"No need for S3 specific credentials."),(0,r.kt)("p",null,"For configuration of ",(0,r.kt)("inlineCode",{parentName:"p"},"cntb")," please execute once:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cntb config set-credentials --oauth2-clientid=<ClientId from Customer Control Panel> --oauth2-client-secret=<ClientSecret from Customer Control Panel> --oauth2-user=<API User from Customer Control Panel> --oauth2-password=<API Password from Customer Control Panel>\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"create-bucket"},"Create Bucket"),(0,r.kt)("p",null,"The command below will create a bucket called ",(0,r.kt)("inlineCode",{parentName:"p"},"testbucket")," in the region ",(0,r.kt)("inlineCode",{parentName:"p"},"EU"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cntb create bucket EU testbucket\n")),(0,r.kt)("h3",{id:"delete-bucket"},"Delete Bucket"),(0,r.kt)("p",null,"The command below will delete a bucket called ",(0,r.kt)("inlineCode",{parentName:"p"},"testbucket")," in the region ",(0,r.kt)("inlineCode",{parentName:"p"},"EU")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cntb delete bucket EU testbucket\n")),(0,r.kt)("h3",{id:"upload-files"},"Upload file(s)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cntb create object --region EU --bucket testbucket --prefix prefix1/ --path path1\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"region")," is the current region where you have bought your S3 Object Storage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket")," is the bucket name that the files/folders will be uploaded to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prefix")," is the folder name where everything will be uploaded to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path1")," is the local path (from your local machine) where you want to upload files recursively")),(0,r.kt)("h3",{id:"delete-file"},"Delete file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cntb delete object --region EU --bucket bucket123 --path path1/fileName\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"region")," is the current region where you have bought your S3 Object Storage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket")," is the bucket name"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path")," is the path to the file to be deleted")))}b.isMDXComponent=!0}}]);