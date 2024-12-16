"use strict";(self.webpackChunkambari_website=self.webpackChunkambari_website||[]).push([[1948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,h=d["".concat(o,".").concat(p)]||d[p]||c[p]||l;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const l={title:"Enhanced Configs"},r=void 0,s={unversionedId:"ambari-design/enhanced-configs/index",id:"version-2.7.5/ambari-design/enhanced-configs/index",title:"Enhanced Configs",description:"Introduced in Ambari-2.1.0, the Enhanced Configs feature makes it possible for service providers to customize their service's configs to a great deal and determine which configs are prominently shown to user without making any UI code changes. Customization includes providing a service friendly layout, better controls (sliders, combos, lists, toggles, spinners, etc.), better validation (minimum, maximum, enums), automatic unit conversion (MB, GB, seconds, milliseconds, etc.), configuration dependencies and improved dynamic recommendations of default values.",source:"@site/versioned_docs/version-2.7.5/ambari-design/enhanced-configs/index.md",sourceDirName:"ambari-design/enhanced-configs",slug:"/ambari-design/enhanced-configs/",permalink:"/docs/2.7.5/ambari-design/enhanced-configs/",draft:!1,editUrl:"https://github.com/vivostar/vivostar.github.io/tree/master/versioned_docs/version-2.7.5/ambari-design/enhanced-configs/index.md",tags:[],version:"2.7.5",frontMatter:{title:"Enhanced Configs"},sidebar:"ambariSidebar",previous:{title:"Blueprint support for Ranger",permalink:"/docs/2.7.5/ambari-design/blueprints/blueprint-ranger"},next:{title:"Enhanced Service Dashboard",permalink:"/docs/2.7.5/ambari-design/service-dashboard/"}},o={},u=[{value:"Features",id:"features",level:2},{value:"Enable Enhanced Configs - Steps",id:"enable-enhanced-configs---steps",level:2},{value:"Step 1 - Create Theme (UI Metadata)",id:"step-1---create-theme-ui-metadata",level:3},{value:"Step 2 - Annotate stack configs (Non-UI Metadata)",id:"step-2---annotate-stack-configs-non-ui-metadata",level:3},{value:"Step 3 - Restart Ambari server",id:"step-3---restart-ambari-server",level:3},{value:"Reference",id:"reference",level:2},{value:"Appendix",id:"appendix",level:2},{value:"Appendix A - Widget Non-UI Metadata",id:"appendix-a---widget-non-ui-metadata",level:3}],m={toc:u};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Introduced in Ambari-2.1.0, the Enhanced Configs feature makes it possible for service providers to customize their service's configs to a great deal and determine which configs are prominently shown to user without making any UI code changes. Customization includes providing a service friendly layout, better controls (sliders, combos, lists, toggles, spinners, etc.), better validation (minimum, maximum, enums), automatic unit conversion (MB, GB, seconds, milliseconds, etc.), configuration dependencies and improved dynamic recommendations of default values."),(0,i.kt)("p",null,"A service provider can accomplish all the above just by changing their service definition in the ",(0,i.kt)("em",{parentName:"p"},"stacks"),"/folder."),(0,i.kt)("p",null,"Example: HBase Enhanced Configs"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5260).Z,title:"Hbase Enhanced Config",width:"1590",height:"1950"})),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Define theme with custom layout of configs"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tabs"),(0,i.kt)("li",{parentName:"ul"},"Sections"),(0,i.kt)("li",{parentName:"ul"},"Sub-sections"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Place selected configs in the layout defined above")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Associate UI widget to use for a config"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Radio Buttons"),(0,i.kt)("li",{parentName:"ul"},"Slider"),(0,i.kt)("li",{parentName:"ul"},"Combo"),(0,i.kt)("li",{parentName:"ul"},"Time Interval Spinner"),(0,i.kt)("li",{parentName:"ul"},"Toggle"),(0,i.kt)("li",{parentName:"ul"},"Directory"),(0,i.kt)("li",{parentName:"ul"},"Directories"),(0,i.kt)("li",{parentName:"ul"},"List"),(0,i.kt)("li",{parentName:"ul"},"Password"),(0,i.kt)("li",{parentName:"ul"},"Text Field"),(0,i.kt)("li",{parentName:"ul"},"Checkbox"),(0,i.kt)("li",{parentName:"ul"},"Text Area"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automatic unit conversion for configs which have to be shown in units different from the units being saved as."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Memory - B, KB, MB, GB, TB, PB"),(0,i.kt)("li",{parentName:"ul"},"Time - milliseconds, seconds, minutes, hours, days, months, years"),(0,i.kt)("li",{parentName:"ul"},"Percentage - float, percentage"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ability to define dependencies between configurations across services (depends-on, depended-by).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ability to dynamically update values of other depended-by configs when a config is changed."))),(0,i.kt)("h2",{id:"enable-enhanced-configs---steps"},"Enable Enhanced Configs - Steps"),(0,i.kt)("h3",{id:"step-1---create-theme-ui-metadata"},"Step 1 - Create Theme (UI Metadata)"),(0,i.kt)("p",null,"The first step is to create a theme for your service in the stack definition folder. A theme provides necessary information of the UI to construct the enhanced configs. UI information like layout (tabs, sections, sub-sections), placement of configs in the sub-sections, and which widgets and units to use for each config"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3017).Z,title:"Apache Ambari > Enhanced Configs > Screen Shot 2015-07-13 at 3.32.59 PM.png",width:"1600",height:"1145"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Modify metainfo.xml to define a theme by including a themes block.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"themes-dir      theme.json    true\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The optional element can be used if the default theme folder of ' ",(0,i.kt)("em",{parentName:"p"},"themes"),"' is not desired, or taken by another service in the same ",(0,i.kt)("em",{parentName:"p"},"metainfo.xml"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Multiple themes can be defined, however only the first _default_theme will be used for the service.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Each theme points to a theme JSON file (via _fileName_element) in the _themes-dir_folder.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The _theme.json_file contains one _configuration_block containing three main keys")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"layouts"),"- specify tabs, sections and sub-section layout")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"placement"),"- specify configurations to place in sub-sections")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"widgets"),"- specify which UI widgets to use for each config"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{  \n  "configuration": {   \n  "layouts": [      ...    ],  \n  "placement": {      ...    },    \n  "widgets": [      ...    ]  \n  }\n}\n')),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Layouts - Multiple layouts can be defined in a theme. Currently only the first layout will be used while rendering. A ",(0,i.kt)("em",{parentName:"li"},"layout")," has following content:"),(0,i.kt)("li",{parentName:"ol"},"Tabs: Multiple tabs can be defined in a layout. Each tab can have its contents laid out using a simple grid-layout using the _tab-columns_and _tab-rows_keys.")),(0,i.kt)("p",null,"In below example the _Settings_tab has a grid of 3 rows and 2 columns in which sections can be placed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"layouts": [  \n  {    \n    "name": "default",   \n     "tabs": [     \n       {        \n        "name": "settings",        \n        "display-name": "Settings",       \n         "layout": {         \n           "tab-columns": "2",          \n           "tab-rows": "3",          \n           "sections": [ ... ]        \n           }      \n      }\n     ] \n    }\n]\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Sections: Each section is defined inside a tab and specifies its location and size inside the tab's grid-layout by using the ",(0,i.kt)("em",{parentName:"li"},"row-index"),", ",(0,i.kt)("em",{parentName:"li"},"column-index"),", _row-span_and _column-span_keys. Being a container itself, it can further define a grid-layout for the sub-sections it contains using the _section-rows_and _section-columns_keys.")),(0,i.kt)("p",null,"In below example the _MapReduce_section occupies the first cell of the _Settings_tab grid, and itself has a grid-layout of 1 row and 3 columns."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"sections": [  {    "name": "section-mr-scheduler",    "display-name": "MapReduce",    "row-index": "0",    "column-index": "0",    "row-span": "1",    "column-span": "1",    "section-columns": "3",    "section-rows": "1",    "subsections": [ ... ]  },  ...]\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Sub-sections: Each sub-section is defined inside a section and specifies its location and size inside the section's grid-layout using the ",(0,i.kt)("em",{parentName:"li"},"row-index"),", ",(0,i.kt)("em",{parentName:"li"},"column-index"),", _row-span_and _column-span_keys. Each section also has an optional _border_boolean key which tells if a border should encapsulate its content.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"subsections": [  {    "name": "subsection-mr-scheduler-row1-col1",    "display-name": "MapReduce Framework",    "row-index": "0",    "column-index": "0",    "row-span": "1",    "column-span": "1"  },  ...]\n')),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Placement: Specifies the order of configurations that are to be placed into each sub-section. Each placement identifies a config, and which sub-section it should appear in. The placement specifies which layout it applies to using the _configuration-layout_key.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"placement": {  "configuration-layout": "default",  "configs": [    {      "config": "mapred-site/mapreduce.map.memory.mb",      "subsection-name": "subsection-mr-scheduler-row1-col1"    },    {      "config": "mapred-site/mapreduce.reduce.memory.mb",      "subsection-name": "subsection-mr-scheduler-row1-col2"    },    ...  ]}\n')),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Wigets: The widgets array specifies which UI widget should be used to show a specific config. It also contains extra UI specific metadata required to show the widget.")),(0,i.kt)("p",null,"In the example below, both configs are using the slider widget. However the unit varies, resulting in one config being shown in bytes and another being shown as percentage. This unit is purely for showing a config - which is different from the units in which it is actually persisted in Ambari. For example, the percent unit below maybe persisted as a ",(0,i.kt)("em",{parentName:"p"},"float"),", while the MB config below can be persisted in B (bytes)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"widgets": [  {    "config": "yarn-site/yarn.nodemanager.resource.memory-mb",    "widget": {      "type": "slider",      "units": [        {          "unit-name": "MB"        }      ]    }  },  {    "config": "yarn-site/yarn.nodemanager.resource.percentage-physical-cpu-limit",    "widget": {      "type": "slider",      "units": [        {          "unit-name": "percent"        }      ]   } }, {   "config": "yarn-site/yarn.node-labels.enabled",   "widget": {     "type": "toggle"   } }, ...]\n')),(0,i.kt)("p",null,"For a complete reference to what UI widgets are available and what metadata can be specified per widget, please refer to ",(0,i.kt)("em",{parentName:"p"},"Appendix A"),"."),(0,i.kt)("h3",{id:"step-2---annotate-stack-configs-non-ui-metadata"},"Step 2 - Annotate stack configs (Non-UI Metadata)"),(0,i.kt)("p",null,"Each configuration that is used by the service's theme has to provide extra metadata about the configuration. The list of available metadata are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"display-name"),(0,i.kt)("li",{parentName:"ul"},"value-attributes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"type",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"string"),(0,i.kt)("li",{parentName:"ul"},"value-list"),(0,i.kt)("li",{parentName:"ul"},"float"),(0,i.kt)("li",{parentName:"ul"},"int"),(0,i.kt)("li",{parentName:"ul"},"boolean"))),(0,i.kt)("li",{parentName:"ul"},"minimum"),(0,i.kt)("li",{parentName:"ul"},"maximum"),(0,i.kt)("li",{parentName:"ul"},"unit"),(0,i.kt)("li",{parentName:"ul"},"increment-step"),(0,i.kt)("li",{parentName:"ul"},"entries",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entry",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"value"),(0,i.kt)("li",{parentName:"ul"},"description"))))))),(0,i.kt)("li",{parentName:"ul"},"depends-on",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"property",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"type"),(0,i.kt)("li",{parentName:"ul"},"name")))))),(0,i.kt)("p",null,"The value-attributes provide meta information about the value that can used as hints by the appropriate widget. For example the slider widget can make use of the minimum and maximum values in its working."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n  <name>namenode_heapsize</name>\n  <value>1024</value>\n  <description>NameNode Java heap size</description>\n  <display-name>NameNode Java heap size</display-name>\n  <value-attributes>\n    <type>int</type>\n    <minimum>0</minimum>\n    <maximum>268435456</maximum>\n    <unit>MB</unit>\n    <increment-step>256</increment-step>\n  </value-attributes>\n  <depends-on>\n    <property>\n      <type>hdfs-site</type>\n      <name>dfs.datanode.data.dir</name>\n    </property>\n  </depends-on>\n</property>\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<property>\n  <name>hive.default.fileformat</name>\n  <value>TextFile</value>\n  <description>Default file format for CREATE TABLE statement.</description>\n  <display-name>Default File Format</display-name>\n  <value-attributes>\n    <type>value-list</type>\n    <entries>\n      <entry>\n        <value>ORC</value>\n        <description>The Optimized Row Columnar (ORC) file format provides a highly efficient way to store Hive data. It was designed to overcome limitations of the other Hive file formats. Using ORC files improves performance when Hive is reading, writing, and processi\n      </entry>\n      <entry>\n        <value>TextFile</value>\n        <description>Text file format saves Hive data as normal text.</description>\n      </entry>\n    </entries>\n  </value-attributes>\n</property>\n")),(0,i.kt)("p",null,"The depends-on is useful in building a dependency graph between different configs in Ambari. Ambari uses these bi-directional relationships (depends-on and depended-by) to automatically update dependent configs using the stack-advisor functionality in Ambari."),(0,i.kt)("p",null,"Dependencies between configurations is a directed-acyclic-graph (DAG). When a configuration is updated, the UI has to determine its effect on other configs in the graph. To determine this, the /recommendations_endpoint should be provided an array of what configurations have been just changed in the changed_configurations field. Based on the provided changed-configs, only its dependencies are updated in the response."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,"Figure below shows some config dependencies - A effects B and C, each of which effects DE and FG respectively."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3e3).Z,title:"Enhanced Configs Dependencies",width:"187",height:"195"})),(0,i.kt)("p",null,"Now assume user changes B to B' - a call to ",(0,i.kt)("em",{parentName:"p"},"/")," _recommendations_will only change D and E to D' and E' respectively (AB'CD'E'FG). No other config will be changed. Now assume that C is changed to C' -/recommendations will only change F and G to F' and G' while still keeping the values of B' D' E' intact (AB'C'D'E'F'G'). Now if you change A to A', it will affect all its children (A'B''C''D''E''F''G''). The user will have chance to pick and choose which he wants to apply."),(0,i.kt)("p",null,"The call to ",(0,i.kt)("em",{parentName:"p"},"/recommendations")," happens whenever a configuration with dependencies is changed. The POST call has the action configuration-dependencies - which will only change the configurations and its dependencies identified by the changed_configurations field."),(0,i.kt)("h3",{id:"step-3---restart-ambari-server"},"Step 3 - Restart Ambari server"),(0,i.kt)("p",null,"Restarting ambari-server is required for any changes in the themes or the stack-definition to be loaded."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HDFS HDP-2.2 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/ambari/blob/branch-2.1.2/ambari-server/src/main/resources/stacks/HDP/2.2/services/HDFS/themes/theme.json"},"theme.json")),(0,i.kt)("li",{parentName:"ul"},"YARN HDP-2.2 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/ambari/blob/branch-2.1.2/ambari-server/src/main/resources/stacks/HDP/2.2/services/YARN/themes/theme.json"},"theme.json")),(0,i.kt)("li",{parentName:"ul"},"HIVE HDP-2.2 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/ambari/blob/branch-2.1.2/ambari-server/src/main/resources/stacks/HDP/2.2/services/HIVE/themes/theme.json"},"theme.json")),(0,i.kt)("li",{parentName:"ul"},"RANGER HDP-2.3 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/ambari/blob/trunk/ambari-server/src/main/resources/stacks/HDP/2.3/services/RANGER/themes/theme_version_2.json"},"theme_version_2.json"))),(0,i.kt)("h2",{id:"appendix"},"Appendix"),(0,i.kt)("h3",{id:"appendix-a---widget-non-ui-metadata"},"Appendix A - Widget Non-UI Metadata"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Widget"),(0,i.kt)("th",null,"Metadata Used")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Slider"),(0,i.kt)("td",null,"<value-attributes>",(0,i.kt)("br",null),"<type>int</type>",(0,i.kt)("br",null),"<minimum>1073741824</minimum>",(0,i.kt)("br",null),"<maximum>17179869184</maximum>",(0,i.kt)("br",null),"<unit>B</unit>",(0,i.kt)("br",null),"<increment-step>1073741824</increment-step>",(0,i.kt)("br",null),"</value-attributes>")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Combo"),(0,i.kt)("td",null,"<value-attributes> ",(0,i.kt)("br",null),"<type>value-list</type>",(0,i.kt)("br",null),"<entries>",(0,i.kt)("br",null),"<entry>",(0,i.kt)("br",null),"<value>2</value>",(0,i.kt)("br",null),"</entry>",(0,i.kt)("br",null),"<entry>",(0,i.kt)("br",null),"<value>4</value>",(0,i.kt)("br",null),"</entry>",(0,i.kt)("br",null),"<entry>",(0,i.kt)("br",null),"<value>8</value>",(0,i.kt)("br",null),"</entry>",(0,i.kt)("br",null),"</entries>",(0,i.kt)("br",null),"<selection-cardinality>1</selection-cardinality>",(0,i.kt)("br",null),"</value-attributes>")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Directory, Directories, Password, Text Field, Text Area"),(0,i.kt)("td",null,"No value-attributes required")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"List"),(0,i.kt)("td",null,"<value-attributes>                                          ",(0,i.kt)("br",null),"<type>value-list</type>",(0,i.kt)("br",null),"<entries>",(0,i.kt)("br",null),"<entry>",(0,i.kt)("br",null),"<value>2</value>",(0,i.kt)("br",null),"</entry>",(0,i.kt)("br",null),"<entry>",(0,i.kt)("br",null),"<value>4</value>",(0,i.kt)("br",null),"</entry>",(0,i.kt)("br",null),"<entry>",(0,i.kt)("br",null),"<value>8</value>",(0,i.kt)("br",null),"</entry>",(0,i.kt)("br",null),"</entries>",(0,i.kt)("br",null),"<selection-cardinality>2+</selection-cardinality>",(0,i.kt)("br",null),"</value-attributes>",(0,i.kt)("br",null))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Radio-Buttons"),(0,i.kt)("td",null,"<value-attributes>                                    ",(0,i.kt)("br",null),"<type>value-list</type>",(0,i.kt)("br",null),"<entries>",(0,i.kt)("br",null),"<entry>",(0,i.kt)("br",null),"<value>1</value>",(0,i.kt)("br",null),"<label>Radio Option 1</label>",(0,i.kt)("br",null),"</entry>",(0,i.kt)("br",null),"<entry>",(0,i.kt)("br",null),"<value>2</value>",(0,i.kt)("br",null),"<label>Radio Option 2</label>",(0,i.kt)("br",null),"</entry>",(0,i.kt)("br",null),"<entry>",(0,i.kt)("br",null),"<value>3</value>",(0,i.kt)("br",null),"<label>Radio Option 3</label>",(0,i.kt)("br",null),"</entry>",(0,i.kt)("br",null),"</entries>",(0,i.kt)("br",null),"<selection-cardinality>1</selection-cardinality>",(0,i.kt)("br",null),"</value-attributes>")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Time Interval Spinner"),(0,i.kt)("td",null,"<value-attributes>                   ",(0,i.kt)("br",null),"<type>int</type>",(0,i.kt)("br",null),"<minimum>0</minimum>",(0,i.kt)("br",null),"<maximum>2592000000</maximum>",(0,i.kt)("br",null),"<unit>milliseconds</unit>",(0,i.kt)("br",null),"</value-attributes>")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Toggle, Checkbox"),(0,i.kt)("td",null,"<value-attributes> <type>value-list</type>",(0,i.kt)("br",null),"<entries>",(0,i.kt)("br",null),"<entry>",(0,i.kt)("br",null),"<value>true</value>",(0,i.kt)("br",null),"<label>Native</label>",(0,i.kt)("br",null),"</entry>",(0,i.kt)("br",null),"<entry>",(0,i.kt)("br",null),"<value>false</value>",(0,i.kt)("br",null),"<label>Off</label>",(0,i.kt)("br",null),"</entry>",(0,i.kt)("br",null),"</entries>",(0,i.kt)("br",null),"<selection-cardinality>1</selection-cardinality>",(0,i.kt)("br",null),"</value-attributes>"))))}c.isMDXComponent=!0},3017:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_theme-f3a6ba28bbaed9515582f768d54d83b2.png"},3e3:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},5260:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enhanced_hbase_configs-a3a2f75292b789421cdd45c4ef7ba3c0.png"}}]);