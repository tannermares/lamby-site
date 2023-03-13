"use strict";(self.webpackChunklamby=self.webpackChunklamby||[]).push([[780],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},304:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const n={anatomy:"How Lamby Works",cpu:"CPU Architecture",environment:"ENV Variables & Secrets",assets:"JavaScript & Assets",deploy:"Build & Deploy","custom-domain":"Custom Domain Names",activejob:"ActiveJob & Background Processing",observability:"Logging & Observability",database:"Database & VPCs",webservers:"Web Proxy Integrations"};function o(e){let{id:t,name:r,anchor:o}=e;const i=r||n[t]||t.replace(/(_|-)/g," ").split(" ").map((e=>e.charAt(0).toUpperCase()+e.toLowerCase().slice(1))).join(" ");return o?a.createElement("a",{href:`/docs/${t}#${o}`},i):a.createElement("a",{href:`/docs/${t}`},i)}},5387:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905)),o=r(304);const i={id:"cpu",title:"CPU Architecture",toc_max_heading_level:2},c="CPU Architecture",l={unversionedId:"cpu",id:"cpu",title:"CPU Architecture",description:"Our cookiecutter project defaults to building a Linux container image targeting the arm64 architecture vs the traditional x8664 cpu type. Applications that use arm64 (AWS Graviton2 processor) can achieve significantly better price and performance than the equivalent workloads running an on x8664 architecture.",source:"@site/docs/cpu-architecture.mdx",sourceDirName:".",slug:"/cpu",permalink:"/docs/cpu",draft:!1,editUrl:"https://github.com/customink/lamby-site/tree/master/docs/cpu-architecture.mdx",tags:[],version:"current",frontMatter:{id:"cpu",title:"CPU Architecture",toc_max_heading_level:2},sidebar:"docsSidebar",previous:{title:"How Lamby Works",permalink:"/docs/anatomy"},next:{title:"ENV Variables & Secrets",permalink:"/docs/environment"}},s={},u=[{value:"Docker Images",id:"docker-images",level:2},{value:"Deployment Gotchas",id:"deployment-gotchas",level:2},{value:"Switching to x86_64",id:"switching-to-x86_64",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"cpu-architecture"},"CPU Architecture"),(0,n.kt)("p",null,"Our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/customink/lamby-cookiecutter"},"cookiecutter")," project defaults to building a Linux container image targeting the ",(0,n.kt)("inlineCode",{parentName:"p"},"arm64")," architecture vs the traditional ",(0,n.kt)("inlineCode",{parentName:"p"},"x86_64")," cpu type. Applications that use arm64 (AWS Graviton2 processor) can achieve significantly better price and performance than the equivalent workloads running an on x86_64 architecture."),(0,n.kt)("p",null,"Deploying arm64 applications is still a relatively new process and requires a few special considerations from local development to your CI/CD tooling. AWS Lambda makes this easy using the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html#cfn-lambda-function-architectures"},"Architectures")," setting of the ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS::Lambda::Function")," CloudFormation resource. However, here are a few things you should know."),(0,n.kt)("h2",{id:"docker-images"},"Docker Images"),(0,n.kt)("p",null,"Most base Docker images are now build for ",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/blog/faster-multi-platform-builds-dockerfile-cross-compilation-guide/"},"multiple platforms"),". Consider the following ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM ruby:3.2-bullseye\n")),(0,n.kt)("p",null,"How does Docker know which platform to use? The anwser is to use the default platform of the host. If you are on a M1 or M2 Mac, arm64 would be the platform used. Which platforms are in a specific base image? We can find out using the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker manifest")," command. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'$ docker manifest inspect ruby:3.2 | grep arch\n            "architecture": "amd64",\n            "architecture": "arm64",\n$ docker manifest inspect  | grep arch\n            "architecture": "amd64",\n            "architecture": "arm64",\n')),(0,n.kt)("p",null,"All the images in our starter project are multi-platform. This means any host can be used for development. Your computer, Codespaces, etc will use the proper platform image variants."),(0,n.kt)("h2",{id:"deployment-gotchas"},"Deployment Gotchas"),(0,n.kt)("p",null,"Though there are numerous ways to deploy containers using techniques such as emulation. However, we recommend you following one simple rule. Matching your \u201cDevelopment Host OS/Arch\u201d to that of your target \u201cDeployment Host OS/Arch\u201d provides the least development friction. Use a CI/CD platform that matches your deployment target."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Currently GitHub Actions does not support native arm64 runners. They are ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/actions/runner-images/issues/5631"},"working to add")," this feature.")),(0,n.kt)("p",null,"Our ",(0,n.kt)(o.Z,{id:"quick-start",mdxType:"DocLink"})," guide has your first deploy happening from your local machine. Since we default to ",(0,n.kt)("inlineCode",{parentName:"p"},"arm64")," this should work fine if you are on a Mac with Apple Silicon. But what if you are on a Windows or Linux system with an ",(0,n.kt)("inlineCode",{parentName:"p"},"x86_64")," architecture? Your function will not work since your application's system dependences (like mysq2) will be compiled for the wrong architecture. Depending on your needs, you may have to switch back to ",(0,n.kt)("inlineCode",{parentName:"p"},"x86_64")," as described below."),(0,n.kt)("p",null,"For more information on deployments, see our ",(0,n.kt)(o.Z,{id:"anatomy",mdxType:"DocLink"})," guide."),(0,n.kt)("h2",{id:"switching-to-x86_64"},"Switching to x86_64"),(0,n.kt)("p",null,"Based off the current state of our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/customink/lamby-cookiecutter"},"cookiecutter")," project, here are the changes required to switch to a ",(0,n.kt)("inlineCode",{parentName:"p"},"x86_64")," deployment target. First, change your CircleCI workflows default machine from `arm.large`` to a standard large."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title=".circleci/config.yml"',title:'".circleci/config.yml"'},"default-machine: &default-machine\n   machine:\n     image: ubuntu-2204:current\n     docker_layer_caching: true\n-  resource_class: arm.large\n+  resource_class: large\n")),(0,n.kt)("p",null,"Now open up your AWS SAM serverless ",(0,n.kt)("inlineCode",{parentName:"p"},"template.yaml")," file, find the ",(0,n.kt)("inlineCode",{parentName:"p"},"Globals")," section and change your Architecture property from ",(0,n.kt)("inlineCode",{parentName:"p"},"arm64")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"x86_64"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="template.yaml"',title:'"template.yaml"'},"Globals:\n  Function:\n    Architectures:\n-     - arm64\n+     - x86_64\n")))}m.isMDXComponent=!0}}]);