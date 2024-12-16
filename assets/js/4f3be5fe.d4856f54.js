"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[5295],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,b=c["".concat(u,".").concat(m)]||c[m]||s[m]||o;return r?a.createElement(b,i(i({ref:t},d),{},{components:r})):a.createElement(b,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},i="Development in Docker",l={unversionedId:"ambari-dev/development-in-docker",id:"ambari-dev/development-in-docker",title:"Development in Docker",description:"Overview",source:"@site/docs/ambari-dev/development-in-docker.md",sourceDirName:"ambari-dev",slug:"/ambari-dev/development-in-docker",permalink:"/docs/next/ambari-dev/development-in-docker",draft:!1,editUrl:"https://github.com/vivostar/vivostar.github.io/tree/master/docs/ambari-dev/development-in-docker.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Unit Test Reports",permalink:"/docs/next/ambari-dev/unit-test-reports"},next:{title:"Developer Tools",permalink:"/docs/next/ambari-dev/developer-tools"}},u={},p=[{value:"Overview",id:"overview",level:2},{value:"Source code",id:"source-code",level:3},{value:"Requirements",id:"requirements",level:2},{value:"Create Docker Image",id:"create-docker-image",level:2},{value:"Unit Test",id:"unit-test",level:2},{value:"Deploy Hadoop",id:"deploy-hadoop",level:2}],d={toc:p};function s(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"development-in-docker"},"Development in Docker"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This page describes how to develop, build and test Ambari on Docker. "),(0,n.kt)("p",null,"In order to build Ambari, there are a quite few steps to execute and it is a bit cumbersome. You can build an environment in Docker and are good to go!"),(0,n.kt)("p",null,"This is NOT meant for running production level Ambari in Docker (though you can run Ambari and deploy Hadoop in a single Docker container for testing purpose) "),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(7129).Z,width:"1481",height:"664"})),(0,n.kt)("p",null,"(This is not only about Jenkins slaves but think it is your laptop)"),(0,n.kt)("p",null,"First, we will make a Docker image that has all third party libraries Ambari requires. "),(0,n.kt)("p",null,"Second, prepare your code on Docker host machine. It can be trunk or a branch, or your developing code or with a patch applied. Note that your code does not reside inside of Docker container, but on the Docker host and we link it by Docker volume (like mount)"),(0,n.kt)("p",null,"And you are ready to go!"),(0,n.kt)("h3",{id:"source-code"},"Source code"),(0,n.kt)("p",null,"This code has been migrated to Ambari trunk."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/tree/trunk/dev-support/docker"},"https://github.com/apache/ambari/tree/trunk/dev-support/docker")),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"There are a few system requirements if you want to play with this document."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Docker ",(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/#installation-guides"},"https://docs.docker.com/#installation-guides"))),(0,n.kt)("h2",{id:"create-docker-image"},"Create Docker Image"),(0,n.kt)("p",null,"First thing first, we have to build an Docker image for this solution. This will setup libraries including ones from yum and maven dependencies. In my environment (Centos 6.5 VM with 8GB and 4CPUs) takes 30mins. Good news is this is one time."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/ambari.git\ncd ambari\ndocker build -t ambari/build ./dev-support/docker/docker\n")),(0,n.kt)("p",null,'This is going to build a image named "ambari/build" from configuration files under ./dev-support/docker/docker'),(0,n.kt)("h2",{id:"unit-test"},"Unit Test"),(0,n.kt)("p",null,"For example our unit test Jenkins job on trunk runs on Docker. If you want to replicate the environment, read this section."),(0,n.kt)("p",null,"The basic"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd {ambari_root}\ndocker run --privileged -h node1.mydomain.com -v $(pwd):/tmp/ambari ambari/build /tmp/ambari/dev-support/docker/docker/bin/ambaribuild.py test -b\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"'docker run' is the command to run a container from a image. Which image was run? It is 'ambari/build'"),(0,n.kt)("li",{parentName:"ul"},"-h sets a host name in the container. "),(0,n.kt)("li",{parentName:"ul"},"-v is to mount your Ambari code on the host to the container's /tmp. Make sure you are at the Ambari root directory."),(0,n.kt)("li",{parentName:"ul"},"ambaribuild.py runs some script to eventually run 'mvn test' for ambari. "),(0,n.kt)("li",{parentName:"ul"},"-b option is to rebuild the entire source tree. It runs test as is on your host if omitted. ")),(0,n.kt)("h2",{id:"deploy-hadoop"},"Deploy Hadoop"),(0,n.kt)("p",null,"You want to run Ambari and Hadoop to test your improvements that you have just coded on your host. Here is the way!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd {ambari_root}\ndocker run --privileged -t -p 80:80 -p 5005:5005 -p 8080:8080 -h node1.mydomain.com --name ambari1 -v $(pwd):/tmp/ambari ambari/build /tmp/ambari-build-docker/bin/ambaribuild.py deploy -b\n  \n# once your are done\ndocker kill ambari1 && docker rm ambari1\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"--privileged is important as ambari-server accessing to /proc/??/exe"),(0,n.kt)("li",{parentName:"ul"},"-p 80:80 to ensure you can access to web UI from your host."),(0,n.kt)("li",{parentName:"ul"},"-p 5005 is java debug port"),(0,n.kt)("li",{parentName:"ul"},"'deploy' to build, install rpms and start ambari-server and ambari-agent and deploy Hadoop through blueprint.")),(0,n.kt)("p",null,"You can take a look at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/ambari/tree/trunk/dev-support/docker/docker/blueprints"},"https://github.com/apache/ambari/tree/trunk/dev-support/docker/docker/blueprints")," to see what is actually deployed."),(0,n.kt)("p",null,"There are a few other parameters you can play."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd {ambari_root}\ndocker run --privileged -t -p 80:80 -p 5005:5005 -p 8080:8080 -h node1.mydomain.com --name ambari1 -v ${AMBARI_SRC:-$(pwd)}:/tmp/ambari ambari/build /tmp/ambari-build-docker/bin/ambaribuild.py [test|server|agent|deploy] [-b] [-s [HDP|BIGTOP|PHD]]\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"test: mvn test"),(0,n.kt)("li",{parentName:"ul"},"server: install and run ambari-server"),(0,n.kt)("li",{parentName:"ul"},"agent: install and run ambari-server and ambari-agent"),(0,n.kt)("li",{parentName:"ul"},"deploy: install and run ambari-server and ambari-agent, and deploy a hadoop")))}s.isMDXComponent=!0},7129:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/with-without-docker-83c24ed867bae888a7b3f638b665213f.png"}}]);