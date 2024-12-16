"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[1716],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),p=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(m,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8898:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},i="Operations",o={unversionedId:"ambari-design/metrics/operations",id:"ambari-design/metrics/operations",title:"Operations",description:"Metrics Collector",source:"@site/docs/ambari-design/metrics/operations.md",sourceDirName:"ambari-design/metrics",slug:"/ambari-design/metrics/operations",permalink:"/docs/next/ambari-design/metrics/operations",draft:!1,editUrl:"https://github.com/vivostar/vivostar.github.io/tree/master/docs/ambari-design/metrics/operations.md",tags:[],version:"current",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Configuration",permalink:"/docs/next/ambari-design/metrics/configuration"},next:{title:"Troubleshooting",permalink:"/docs/next/ambari-design/metrics/troubleshooting"}},m={},p=[{value:"Metrics Collector",id:"metrics-collector",level:2},{value:"Metrics Monitor",id:"metrics-monitor",level:2},{value:"Build Instructions",id:"build-instructions",level:2},{value:"RPM packages",id:"rpm-packages",level:3},{value:"Debian packages",id:"debian-packages",level:3},{value:"Windows msi",id:"windows-msi",level:3},{value:"Command line parameters",id:"command-line-parameters",level:3},{value:"Disk space utilization guidance",id:"disk-space-utilization-guidance",level:2},{value:"Phoenix Schema",id:"phoenix-schema",level:2},{value:"Phoenix Tables",id:"phoenix-tables",level:3},{value:"Connecting to Phoenix",id:"connecting-to-phoenix",level:3}],s={toc:p};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"operations"},"Operations"),(0,r.kt)("h2",{id:"metrics-collector"},"Metrics Collector"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pid file locations")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Daemon"),(0,r.kt)("th",{parentName:"tr",align:null},"Default User"),(0,r.kt)("th",{parentName:"tr",align:null},"Pid File Path"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metrics Collector API"),(0,r.kt)("td",{parentName:"tr",align:null},"ams"),(0,r.kt)("td",{parentName:"tr",align:null},"/var/run/ambari-metrics-collector/ambari-metrics-collector.pid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metrics Collector Hbase"),(0,r.kt)("td",{parentName:"tr",align:null},"ams"),(0,r.kt)("td",{parentName:"tr",align:null},"/var/run/ambari-metrics-collector/hbase-ams-master.pid")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Log file locations")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Daemon"),(0,r.kt)("th",{parentName:"tr",align:null},"Log File Path"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metrics Collector API"),(0,r.kt)("td",{parentName:"tr",align:null},"/var/log/ambari-metrics-collector/ambari-metrics-collector.log",(0,r.kt)("br",null),"/var/log/ambari-metrics-collector/ambari-metrics-collector.out")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metrics Collector HBase"),(0,r.kt)("td",{parentName:"tr",align:null},"/var/log/ambari-metrics-collector/hbase-ams-master-","<","hostname",">",".log",(0,r.kt)("br",null),"/var/log/ambari-metrics-collector/hbase-ams-master-","<","hostname",">",".out")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Manually restart Metrics Collector")),(0,r.kt)("p",null,"Stop command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - ams -c '/usr/sbin/ambari-metrics-collector --config /etc/ambari-metrics-collector/conf/ stop'\n")),(0,r.kt)("p",null,"Start command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - ams -c '/usr/sbin/ambari-metrics-collector --config /etc/ambari-metrics-collector/conf/ start'\n")),(0,r.kt)("h2",{id:"metrics-monitor"},"Metrics Monitor"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pid File location")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/var/run/ambari-metrics-monitor/ambari-metrics-monitor.pid\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Log File location")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/var/log/ambari-metrics-monitor/ambari-metrics-monitor.out\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Manually restart Metrics Monitor"),"\nStop command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - ams -c '/usr/sbin/ambari-metrics-monitor --config /etc/ambari-metrics-monitor/conf stop'\n")),(0,r.kt)("p",null,"Start command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"su - ams -c '/usr/sbin/ambari-metrics-monitor --config /etc/ambari-metrics-monitor/conf start'\n")),(0,r.kt)("h2",{id:"build-instructions"},"Build Instructions"),(0,r.kt)("p",null,"The ambari-metrics-assembly package builds the assemblies (rpm/deb/msi) for various platforms."),(0,r.kt)("p",null,"Following binaries can be found in the ambari-metrics-assembly/target folder after build is successful."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ambari-metrics-collecor-<ambari-version>.<arch>\nambari-metrics-monitor-<ambari-version>.<arch>\nambari-hadoop-sink-<ambari-version>.<arch>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": Ambari Metrics needs to be built before Ambari Server"),(0,r.kt)("h3",{id:"rpm-packages"},"RPM packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ambari-metrics\nmvn clean package -Dbuild-rpm\n")),(0,r.kt)("h3",{id:"debian-packages"},"Debian packages"),(0,r.kt)("p",null,"Same instruction as above, change the maven target to build-deb"),(0,r.kt)("h3",{id:"windows-msi"},"Windows msi"),(0,r.kt)("p",null,"TBU"),(0,r.kt)("h3",{id:"command-line-parameters"},"Command line parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hbase.tar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://public-repo-1.hortonworks.com/HDP/centos6/2.x/updates/2.3.0.0/tars/hbase-1.1.1.2.3.0.0-2557.tar.gz"},"http://public-repo-1.hortonworks.com/HDP/centos6/2.x/updates/2.3.0.0/tars/hbase-1.1.1.2.3.0.0-2557.tar.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"HBase tarball. This is default version for Ambari 2.1.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hbase.folder"),(0,r.kt)("td",{parentName:"tr",align:null},"hbase-1.1.1.2.3.0.0-2557"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hadoop.tar"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://public-repo-1.hortonworks.com/HDP/centos6/2.x/updates/2.3.0.0/tars/hadoop-2.7.1.2.3.0.0-2557.tar.gz"},"http://public-repo-1.hortonworks.com/HDP/centos6/2.x/updates/2.3.0.0/tars/hadoop-2.7.1.2.3.0.0-2557.tar.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"Hadoop tarball, used for native libs. This is default version for Ambari 2.1.2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hadoop.folder"),(0,r.kt)("td",{parentName:"tr",align:null},"hadoop-2.7.1.2.3.0.0-2557"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")),(0,r.kt)("p",null,"After the change introducted by  ",(0,r.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/AMBARI-18915"},"AMBARI-18915")," - Update AMS pom to use Apache hbase,hadoop,phoenix tarballs REOPENED AMS uses hadoop tars downloaded from Apache by default. Since that version of libhadoop is not built with libsnappy, the following config change in ams-site is needed to make AMS start up correctly."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"timeline.metrics.hbase.compression.scheme = None")),(0,r.kt)("h2",{id:"disk-space-utilization-guidance"},"Disk space utilization guidance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Num of Nodes"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_RECORD (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_RECORD_MINUTE (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_RECORD_HOURLY (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_RECORD_DAILY (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_AGGREGATE (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_AGGREGATE_MINUTE (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_AGGREGATE_HOURLY (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_AGGREGATE_DAILY (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"TOTAL (GB)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"5120"),(0,r.kt)("td",{parentName:"tr",align:null},"2700"),(0,r.kt)("td",{parentName:"tr",align:null},"245"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"1500"),(0,r.kt)("td",{parentName:"tr",align:null},"305"),(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"10240"),(0,r.kt)("td",{parentName:"tr",align:null},"5400"),(0,r.kt)("td",{parentName:"tr",align:null},"490"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"1500"),(0,r.kt)("td",{parentName:"tr",align:null},"305"),(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"30720"),(0,r.kt)("td",{parentName:"tr",align:null},"16200"),(0,r.kt)("td",{parentName:"tr",align:null},"1470"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"1500"),(0,r.kt)("td",{parentName:"tr",align:null},"305"),(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"51200"),(0,r.kt)("td",{parentName:"tr",align:null},"27000"),(0,r.kt)("td",{parentName:"tr",align:null},"2450"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"1500"),(0,r.kt)("td",{parentName:"tr",align:null},"305"),(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"81")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"800"),(0,r.kt)("td",{parentName:"tr",align:null},"81920"),(0,r.kt)("td",{parentName:"tr",align:null},"43200"),(0,r.kt)("td",{parentName:"tr",align:null},"3920"),(0,r.kt)("td",{parentName:"tr",align:null},"160"),(0,r.kt)("td",{parentName:"tr",align:null},"1500"),(0,r.kt)("td",{parentName:"tr",align:null},"305"),(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"128")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),":"),(0,r.kt)("p",null,"The above guidance has been derived from looking at AMS disk utilization in actual clusters.\nThe ACTUAL numbers have been obtained by observing an actual cluster with the basic services (HDFS, YARN, HBase) installed along with Storm, Kafka and Flume.\nKafka and Flume generate metrics only while a job is running. If those services are being used heavily, additional disk space is recommended. We ran sample jobs with STORM and KAFKA while deriving these numbers to make sure there is some contribution."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Actual disk utilization data")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Num of Nodes"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_RECORD (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_RECORD_MINUTE (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_RECORD_HOURLY (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_RECORD_DAILY (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_AGGREGATE (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_AGGREGATE_MINUTE (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_AGGREGATE_HOURLY (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"METRIC_AGGREGATE_DAILY (MB)"),(0,r.kt)("th",{parentName:"tr",align:null},"TOTAL (GB)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"120"),(0,r.kt)("td",{parentName:"tr",align:null},"175"),(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"545"),(0,r.kt)("td",{parentName:"tr",align:null},"136"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"294"),(0,r.kt)("td",{parentName:"tr",align:null},"51"),(0,r.kt)("td",{parentName:"tr",align:null},"3.4"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"104"),(0,r.kt)("td",{parentName:"tr",align:null},"26"),(0,r.kt)("td",{parentName:"tr",align:null},"1.8"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"540"),(0,r.kt)("td",{parentName:"tr",align:null},"49"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"1433.6"),(0,r.kt)("td",{parentName:"tr",align:null},"305"),(0,r.kt)("td",{parentName:"tr",align:null},"28"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3")))),(0,r.kt)("h2",{id:"phoenix-schema"},"Phoenix Schema"),(0,r.kt)("h3",{id:"phoenix-tables"},"Phoenix Tables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Table Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Purge Interval(default)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"METRIC_RECORD"),(0,r.kt)("td",{parentName:"tr",align:null},"Data per metric per host at 10 seconds precision with 1 minute aggregates."),(0,r.kt)("td",{parentName:"tr",align:null},"1 day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"METRIC_RECORD_MINUTE"),(0,r.kt)("td",{parentName:"tr",align:null},"Data per metric per host at 5 minute precision"),(0,r.kt)("td",{parentName:"tr",align:null},"1 week")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"METRIC_RECORD_HOURLY"),(0,r.kt)("td",{parentName:"tr",align:null},"Data per metric per host at 1 hour precision"),(0,r.kt)("td",{parentName:"tr",align:null},"30 days")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"METRIC_RECORD_DAILY"),(0,r.kt)("td",{parentName:"tr",align:null},"Data per metric per host at 1 day precision"),(0,r.kt)("td",{parentName:"tr",align:null},"1 year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"METRIC_AGGREGATE"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster wide aggregates per metric at 30 seconds precision"),(0,r.kt)("td",{parentName:"tr",align:null},"1 week")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"METRIC_AGGREGATE_MINUTE"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster wide aggregates per metric at 5 minute precision"),(0,r.kt)("td",{parentName:"tr",align:null},"30 days")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"METRIC_AGGREGATE_HOURLY"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster wide aggregates per metric at 1 hour precision"),(0,r.kt)("td",{parentName:"tr",align:null},"1 year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"METRIC_AGGREGATE_DAILY"),(0,r.kt)("td",{parentName:"tr",align:null},"Cluster wide aggregates per metric at 1 day precision"),(0,r.kt)("td",{parentName:"tr",align:null},"2 years")))),(0,r.kt)("h3",{id:"connecting-to-phoenix"},"Connecting to Phoenix"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unpack Phoenix (4.2.0+) tarball onto the Metric Collector host"),(0,r.kt)("li",{parentName:"ul"},"Change director to phonenix-4.*/bin"),(0,r.kt)("li",{parentName:"ul"},'Edit sqlline.py and search for "java",  replace java with full path to the java executable, example: "/usr/jdk64/jdk1.8.0_40/bin/java" '),(0,r.kt)("li",{parentName:"ul"},"Connect command:\nAmbari versions 2.2.0 and below : ./sqlline.py localhost:61181:/hbase\nAmbari versions > 2.2.0  : ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./sqlline.py localhost:61181:/ams-hbase-unsecure (embedded mode) and <cluster-zookeeper-quorum-host>:<cluster_zookeeper_port>:/ams-hbase-unsecure (distributed mode)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4061).Z,title:"Connect Phoenix",width:"563",height:"176"})))}u.isMDXComponent=!0},4061:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/connect-phoenix-9e9ee4da01440af51806ce2aa4372809.png"}}]);