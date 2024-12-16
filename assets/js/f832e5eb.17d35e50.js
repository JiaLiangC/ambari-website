"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[9431],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(a),c=n,g=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return a?r.createElement(g,l(l({ref:t},d),{},{components:a})):r.createElement(g,l({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},288:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const i={},l="Configuration",o={unversionedId:"ambari-design/metrics/configuration",id:"version-2.7.5/ambari-design/metrics/configuration",title:"Configuration",description:"Metrics Collector",source:"@site/versioned_docs/version-2.7.5/ambari-design/metrics/configuration.mdx",sourceDirName:"ambari-design/metrics",slug:"/ambari-design/metrics/configuration",permalink:"/docs/2.7.5/ambari-design/metrics/configuration",draft:!1,editUrl:"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.5/ambari-design/metrics/configuration.mdx",tags:[],version:"2.7.5",frontMatter:{},sidebar:"ambariSidebar",previous:{title:"Metrics Collector API Specification",permalink:"/docs/2.7.5/ambari-design/metrics/metrics-collector-api-specification"},next:{title:"Operations",permalink:"/docs/2.7.5/ambari-design/metrics/operations"}},s={},m=[{value:"Metrics Collector",id:"metrics-collector",level:2},{value:"Metrics Monitor",id:"metrics-monitor",level:2},{value:"Metric Collector - ams-site - Configuration details",id:"metric-collector---ams-site---configuration-details",level:2},{value:"Configuring Ambari Metrics service in distributed mode",id:"configuring-ambari-metrics-service-in-distributed-mode",level:2},{value:"Migrating data from embedded to distributed mode",id:"migrating-data-from-embedded-to-distributed-mode",level:2},{value:"Enabling HBase Region, User and Table Metrics",id:"enabling-hbase-region-user-and-table-metrics",level:2},{value:"Step-by-step guide",id:"step-by-step-guide",level:3},{value:"Enabling HDFS per-user Metrics",id:"enabling-hdfs-per-user-metrics",level:2},{value:"Step-by-step guide",id:"step-by-step-guide-1",level:3}],d={toc:m};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuration"},"Configuration"),(0,n.kt)("h2",{id:"metrics-collector"},"Metrics Collector"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Configuration Type"),(0,n.kt)("th",{parentName:"tr",align:null},"File Path"),(0,n.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ams-site"),(0,n.kt)("td",{parentName:"tr",align:null},"/etc/ambari-metrics-collector/conf/ams-site.xml"),(0,n.kt)("td",{parentName:"tr",align:null},"Settings that control the API daemon and the aggregator threads.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ams-env"),(0,n.kt)("td",{parentName:"tr",align:null},"/etc/ambari-metrics-collector/conf/ams-env.sh"),(0,n.kt)("td",{parentName:"tr",align:null},"Memory / PATH settings for the API daemon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ams-hbase-site"),(0,n.kt)("td",{parentName:"tr",align:null},"/etc/ams-hbase/conf/hbase-site.xml",(0,n.kt)("br",null),"/etc/ambari-metrics-collector/conf/hbase-site.xml"),(0,n.kt)("td",{parentName:"tr",align:null},"Settings for the HBase storage used for the metrics data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ams-hbase-env"),(0,n.kt)("td",{parentName:"tr",align:null},"/etc/ams-hbase/conf/hbase-env.sh"),(0,n.kt)("td",{parentName:"tr",align:null},"Memory / PATH settings for the HBase storage.",(0,n.kt)("br",null),(0,n.kt)("strong",{parentName:"td"},"Note"),": In embedded more, the heap memory setting for master and regionserver is summed up as total memory for single HBase daemon.")))),(0,n.kt)("h2",{id:"metrics-monitor"},"Metrics Monitor"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Configuration Type"),(0,n.kt)("th",{parentName:"tr",align:null},"File Path"),(0,n.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ams-env"),(0,n.kt)("td",{parentName:"tr",align:null},"/etc/ambari-metrics-monitor/conf/ams-env.sh"),(0,n.kt)("td",{parentName:"tr",align:null},"Used for log and pid dir modifications, this is the same configuration as above, common to both components.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metric_groups"),(0,n.kt)("td",{parentName:"tr",align:null},"/etc/ambari-metrics-monitor/conf/metric_groups.conf"),(0,n.kt)("td",{parentName:"tr",align:null},"Not available in the UI. Used to control what ",(0,n.kt)("strong",{parentName:"td"},"HOST/SYSTEM")," metrics are reported.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metric_monitor"),(0,n.kt)("td",{parentName:"tr",align:null},"/etc/ambari-metrics-monitor/conf/metric_monitor.ini"),(0,n.kt)("td",{parentName:"tr",align:null},"Not available in the UI. Settings for the monitor daemon.")))),(0,n.kt)("h2",{id:"metric-collector---ams-site---configuration-details"},"Metric Collector - ams-site - Configuration details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modifying retention interval for time aggregated data. Refer to Aggregation section for more information on aggregation: API spec\n(Note: In Ambari 2.0 and 2.1, the Phoenix version does not support Alter TTL queries. So these can be modified from the UI, only at install time. Please refer to Known Issues section for workaround.)")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Configuration Type"),(0,n.kt)("th",{parentName:"tr",align:null},"File Path"),(0,n.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.host.aggregator.ttl"),(0,n.kt)("td",{parentName:"tr",align:null},"86400"),(0,n.kt)("td",{parentName:"tr",align:null},"1 minute resolution data purge interval. Default is 1 day.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.host.aggregator.minute.ttl"),(0,n.kt)("td",{parentName:"tr",align:null},"604800"),(0,n.kt)("td",{parentName:"tr",align:null},"Host based X minutes resolution data purge interval. Default is 7 days.",(0,n.kt)("br",null),"(X = configurable interval, default interval is 2 minutes)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.host.aggregator.hourly.ttl"),(0,n.kt)("td",{parentName:"tr",align:null},"2592000"),(0,n.kt)("td",{parentName:"tr",align:null},"Host based hourly resolution data purge interval. Default is 30 days.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.host.aggregator.daily.ttl"),(0,n.kt)("td",{parentName:"tr",align:null},"31536000"),(0,n.kt)("td",{parentName:"tr",align:null},"Host based daily resolution data purge interval. Default is 1 year.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.cluster.aggregator.minute.ttl"),(0,n.kt)("td",{parentName:"tr",align:null},"2592000"),(0,n.kt)("td",{parentName:"tr",align:null},"Cluster wide minute resolution data purge interval. Default is 30 days.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.cluster.aggregator.hourly.ttl"),(0,n.kt)("td",{parentName:"tr",align:null},"31536000"),(0,n.kt)("td",{parentName:"tr",align:null},"Cluster wide hourly resolution data purge interval. Default is 1 year.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.cluster.aggregator.daily.ttl"),(0,n.kt)("td",{parentName:"tr",align:null},"63072000"),(0,n.kt)("td",{parentName:"tr",align:null},"Cluster wide daily resolution data purge interval. Default is 2 years.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": The precision table at 1 minute resolution stores raw precision data for 1 day, when user queries for past 1 hour of data, the AMS API returns raw precision data."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modifying the aggregation intervals for HOST and CLUSTER aggregators.\nOn wake up the aggregator threads resume from (last run time + interval) as long as last run time is not too old.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value Path"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.host.aggregator.minute.interval"),(0,n.kt)("td",{parentName:"tr",align:null},"120"),(0,n.kt)("td",{parentName:"tr",align:null},"Time in seconds to sleep for the minute resolution host based aggregator. Default resolution is 2 minutes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.host.aggregator.hourly.interval"),(0,n.kt)("td",{parentName:"tr",align:null},"3600"),(0,n.kt)("td",{parentName:"tr",align:null},"Time in seconds to sleep for the hourly resolution host based aggregator. Default resolution is 1 hour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.host.aggregator.daily.interval"),(0,n.kt)("td",{parentName:"tr",align:null},"86400"),(0,n.kt)("td",{parentName:"tr",align:null},"Time in seconds to sleep for the day resolution host based aggregator. Default resolution is 24 hours.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.cluster.aggregator.minute.interval"),(0,n.kt)("td",{parentName:"tr",align:null},"120"),(0,n.kt)("td",{parentName:"tr",align:null},"Time in seconds to sleep for the minute resolution cluster wide aggregator. Default resolution is 2 minutes.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.cluster.aggregator.hourly.interval"),(0,n.kt)("td",{parentName:"tr",align:null},"3600"),(0,n.kt)("td",{parentName:"tr",align:null},"Time in seconds to sleep for the hourly resolution cluster wide aggregator. Default is 1 hour.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.cluster.aggregator.daily.interval"),(0,n.kt)("td",{parentName:"tr",align:null},"86400"),(0,n.kt)("td",{parentName:"tr",align:null},"Time in seconds to sleep for the day resolution cluster wide aggregator. Default is 24 hours.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modifying checkpoint information. The aggregators store the timestamp or last run time on local FS.\nAfter reading last run time, the aggregator thread decides to aggregate as long as the (currentTime - lastRunTime) < multipler * aggregation_interval.\nThe multiplier is configurable for each aggregator.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.host.aggregator.minute.checkpointCutOffMultiplier"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"Multiplier value * interval = Max allowed checkpoint lag. Effectively if aggregator checkpoint is greater than max allowed checkpoint delay,the checkpoint will be discarded by the aggregator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.host.aggregator.hourly.checkpointCutOffMultiplier"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"Same as above")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.host.aggregator.daily.checkpointCutOffMultiplier"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Same as above")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.cluster.aggregator.minute.checkpointCutOffMultiplier"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"Same as above")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.cluster.aggregator.hourly.checkpointCutOffMultiplier"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"Same as above")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.cluster.aggregator.daily.checkpointCutOffMultiplier"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Same as above")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.aggregator.checkpoint.dir"),(0,n.kt)("td",{parentName:"tr",align:null},"/var/lib/ambari-metrics-collector/checkpoint"),(0,n.kt)("td",{parentName:"tr",align:null},"Directory to store aggregator checkpoints. Change to a permanent location so that checkpoint are not lost.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Other important configuration properties")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.host.aggregator.*.disabled"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Disable host based ",(0,n.kt)("em",{parentName:"td"}," aggregations. ( ")," => minute/hourly/daily)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.cluster.aggregator.*.disabled"),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"Disable cluster based ",(0,n.kt)("em",{parentName:"td"}," aggregations. ( ")," => minute/hourly/daily)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.cluster.aggregator.minute.timeslice.interval"),(0,n.kt)("td",{parentName:"tr",align:null},"30"),(0,n.kt)("td",{parentName:"tr",align:null},"Lowest resolution of desired data for cluster level minute aggregates.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.hbase.data.block.encoding"),(0,n.kt)("td",{parentName:"tr",align:null},"FAST_DIFF"),(0,n.kt)("td",{parentName:"tr",align:null},"Codecs are enabled on a table by setting the DATA_BLOCK_ENCODING property. Default encoding is FAST_DIFF. This can be changed only before creating tables.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.hbase.compression.scheme"),(0,n.kt)("td",{parentName:"tr",align:null},"SNAPPY"),(0,n.kt)("td",{parentName:"tr",align:null},"Compression codes need to be installed and available before setting the scheme. Default compression is SNAPPY. Disable by setting to None. This can be changed only before creating tables.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.service.default.result.limit"),(0,n.kt)("td",{parentName:"tr",align:null},"5760"),(0,n.kt)("td",{parentName:"tr",align:null},"Max result limit on number of rows returned. Calculated as follows: 4 aggregate metrics/min ",(0,n.kt)("em",{parentName:"td"}," 60 ")," 24: Retrieve aggregate data for 1 day.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.service.checkpointDelay"),(0,n.kt)("td",{parentName:"tr",align:null},"60"),(0,n.kt)("td",{parentName:"tr",align:null},"Time in seconds to sleep on the first run or when the checkpoint is too old.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.service.resultset.fetchSize"),(0,n.kt)("td",{parentName:"tr",align:null},"2000"),(0,n.kt)("td",{parentName:"tr",align:null},"JDBC resultset prefect size for aggregator queries.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeline.metrics.service.cluster.aggregator.appIds"),(0,n.kt)("td",{parentName:"tr",align:null},"datanode,nodemanager,hbase"),(0,n.kt)("td",{parentName:"tr",align:null},"List of application ids to use for aggregating host level metrics for an application. Example: bytes_read across Yarn Nodemanagers.")))),(0,n.kt)("h2",{id:"configuring-ambari-metrics-service-in-distributed-mode"},"Configuring Ambari Metrics service in distributed mode"),(0,n.kt)("p",null,"In distributed mode, Metric Collector writes go to HDFS of the cluster. Currently distributed mode does not support multi-mode Metric Collector, however the plan is to allow Metric Collector to scale horizontally to allow a multi-node HBase storage layer."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": Make sure there is a local Datanode hosted with the Collector, it provides AMS HBase the distinct advantage of write and reads sharded across the data volumes available to the DN."),(0,n.kt)("p",null,"Following steps need to be performed either at install time or after deploy to configure Metric Collector in distributed mode. Note: If configuring after install, the data will not be automatically copied over to HDFS."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Edit ams-site, Set timeline.metrics.service.operation.mode = distributed"),(0,n.kt)("li",{parentName:"ol"},"Edit ams-hbase-site,",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Set hbase.rootdir = hdfs://namenode-host;:8020/user/ams/hbase ","[ If NN HA is enabled,     hdfs://nameservice-id/user/ams/hbase ]","\n(Note: /user/ams/hbase here is the directory where metric data will be stored in HDFS)"),(0,n.kt)("li",{parentName:"ul"},"Set hbase.cluster.distributed = true"),(0,n.kt)("li",{parentName:"ul"},"Add dfs.client.read.shortcircuit = true (This is an optimization with a local DN present)"))),(0,n.kt)("li",{parentName:"ol"},"Restart Metrics Collector")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": In Ambari 2.0.x, there is a bug in deploying AMS in distributed mode, if Namenode HA is enabled. Please follow the instruction listed in this JIRA as workaround steps: (",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/AMBARI-10707"},"AMBARI-10707"),")"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": In Ambari 2.2.1, stack advisor changes the dependent configs for distributed mode automatically through recommendations. Ideally, the only config that needs to be changed is timeline.metrics.service.operation.mode = distributed. The other configs - hbase.rootdir, hbase.cluster.distributed and dfs.client.read.shortcircuit will be changed automatically."),(0,n.kt)("h2",{id:"migrating-data-from-embedded-to-distributed-mode"},"Migrating data from embedded to distributed mode"),(0,n.kt)("p",null,"Steps to migrate existing metric data to HDFS and starting AMS in distributed mode:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stop AMS Metric Collector")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create hdfs directory for ams user, Example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"su - hdfs -c 'hdfs dfs -mkdir /user/ams'\nsu - hdfs -c 'hdfs dfs -chown ams:hadoop /user/ams'\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Copy the metric data from the AMS local directory (existing value of hbase.rootdir in ams-hbase-site) to HDFS directory. Example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/lib/ambari-metrics-collector/\nsu - hdfs -c 'hdfs dfs -copyFromLocal hbase hdfs://    <namnode-http-address>:8020/user/ams/'\nsu - hdfs -c 'hdfs dfs -chown -R ams:hadoop /user/ams/hbase'\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Start the Metric Collector after making the changes needed for distributed mode."))),(0,n.kt)("h2",{id:"enabling-hbase-region-user-and-table-metrics"},"Enabling HBase Region, User and Table Metrics"),(0,n.kt)("p",null,"Ambari disables HBase metrics (per region, per user and per table) by default. HBase metrics can be numerous and can cause performance issues. HBase RegionServer metrics are available by default."),(0,n.kt)("p",null,"If you want HBase (per region, per user and per table) metrics to be collected by Ambari, you can do the following. It is ",(0,n.kt)("strong",{parentName:"p"},"highly recommended")," that you test turning on this option and confirm that your AMS performance is acceptable."),(0,n.kt)("h3",{id:"step-by-step-guide"},"Step-by-step guide"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Ambari Server, browse to:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"var/lib/ambari-server/resources/stacks/HDP/3.0/services/HBASE/     package/templates\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When Ambari is older than 2.7.0, on the Ambari Server, browse to:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"var/lib/ambari-server/resources/common-services/HBASE/     $VERSION/package/templates\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit the following template files:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"hadoop-metrics2-hbase.properties-GANGLIA-MASTER.j2\nhadoop-metrics2-hbase.properties-GANGLIA-RS.j2 \n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Comment out (or remove) the following lines:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"*.source.filter.class=org.apache.hadoop.metrics2.filter.     RegexFilter\nhbase.*.source.filter.exclude=.*(Regions|Users|Tables).*\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Save the template files and restart Ambari Server and then HBase for the changes to take effect."))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you upgrade Ambari to a newer version, you will need to re-apply this change to the template file.")),(0,n.kt)("h2",{id:"enabling-hdfs-per-user-metrics"},"Enabling HDFS per-user Metrics"),(0,n.kt)("p",null,"HDFS per-user Metrics aren't emitted by default. Kindly exercise caution before enabling them and make sure to refer to the details of client and service port numbers."),(0,n.kt)("p",null,"To be able to use the HDFS - Users dashboard in your Grafana instance as well as to view metrics for HDFS per user, you will need to add these custom properties to your configuration."),(0,n.kt)("h3",{id:"step-by-step-guide-1"},"Step-by-step guide"),(0,n.kt)("p",null,"In Ambari, HDFS > Configs > Advanced >  Custom hdfs-site, Add the following properties."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"dfs.namenode.servicerpc-address=<namenodehost>:8021\n\nipc.8020.callqueue.impl=org.apache.hadoop.ipc.FairCallQueue\n\nipc.8020.backoff.enable=true\n\nipc.8020.scheduler.impl=org.apache.hadoop.ipc.DecayRpcScheduler\n\nipc.8020.scheduler.priority.levels=3\n\nipc.8020.decay-scheduler.backoff.responsetime.enable=true\n\nipc.8020.decay-scheduler.backoff.responsetime.thresholds=10,20,30\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Things to Consider"),"\nclient port : 8020 (if different, replace it with appropriate port in all keys)Things to consider:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"service port: 8021 (if different, replace it with appropriate port in first value)"),(0,n.kt)("li",{parentName:"ul"},"namenodehost: needs to be a FQDN.\nOnce these properties are added, it should look like this.\n",(0,n.kt)("img",{src:a(4627).Z,title:"Enabling Hdfs User Metrics",width:"2002",height:"998"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Restart HDFS & you should see the metrics being emitted. You should now also be able to use the HDFS - Users Dashboard in Grafana.")))}p.isMDXComponent=!0},4627:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/enabling-hdfs-user-metrics-42982ec96b46e9d429089590bec0fb01.png"}}]);