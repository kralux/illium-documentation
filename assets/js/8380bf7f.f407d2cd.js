"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[2550],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,h=p["".concat(l,".").concat(u)]||p[u]||f[u]||r;return t?i.createElement(h,a(a({ref:n},c),{},{components:t})):i.createElement(h,a({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<r;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(7462),o=(t(7294),t(3905));const r={sidebar_position:2},a="Config File",s={unversionedId:"node/config_file",id:"node/config_file",title:"Config File",description:"As an alternative to using the command line options flags when running ilxd, you can set the same options in a config file.",source:"@site/docs/node/config_file.md",sourceDirName:"node",slug:"/node/config_file",permalink:"/docs/node/config_file",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/node/config_file.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"nodeSidebar",previous:{title:"Running a node",permalink:"/docs/node/running_a_node"},next:{title:"Command Line Interface",permalink:"/docs/node/cli"}},l={},d=[],c={toc:d},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"config-file"},"Config File"),(0,o.kt)("p",null,"As an alternative to using the command line options flags when running ilxd, you can set the same options in a config file.\nBy default, ilxd will look for a config file named ",(0,o.kt)("inlineCode",{parentName:"p"},"ilxd.conf")," in the default application directory. "),(0,o.kt)("p",null,"You can tell ilxd to use a config file in a different directory with the following command line option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ilxd --configfile=/path/to/ilxd.conf\n")),(0,o.kt)("p",null,"If the command line options conflict with the config file options, the command line options will take precedence and the\nconfig file options will be overridden with the command line options."),(0,o.kt)("p",null,"A sample config file is as follows:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": the ",(0,o.kt)("inlineCode",{parentName:"p"},";")," in the config file denotes a comment line. Thus the following config file contains only  comments.\nIf you want to set any of the options remove the ",(0,o.kt)("inlineCode",{parentName:"p"},";")," from the start of the line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"; The directory to store data such as the obx database.\n; The default is ~/.obx on POSIX OSes, $LOCALAPPDATA/obx on Windows,\n; ~/Library/Application Support/obx on Mac OS, and $home/obx on\n; Plan9.  Environment variables are expanded so they may be used.  NOTE: Windows\n; environment variables are typically %VARIABLE%, but they must be accessed with\n; $VARIABLE here.  Also, ~ is expanded to $LOCALAPPDATA on Windows.\n; datadir=~/.ilxd\n\n; Use testnet.\n; testnet=1\n\n; Use regtest.\n; regtest=1\n\n; If this option is used on first startup when using regtest mode then node\n; will use the regtest genesis validator network key and wallet keys.\n; Otherwise it will use random keys.\n; regtestval=1\n\n;; Set the node to use mock proofs instead of full proofs. This option is only available for regtest.\n;; mock=1\n\n; Universal Plug and Play (UPnP) automatically opens the listen port obtains\n; the external IP address from supported devices. This option disables it.\n; noupnp=1\n\n; Seed addresses are used to join the network. On start the node will make\n; outgoing connections to the bootstrap peers and use them to discover other\n; peers in the network.\n; seedaddr=/ip4/x.x.x.x/tcp/9001/p2p/12D3KooWPZ3xBNRGx4fhRbfYAcXUhcZhTZ2LCkJ74kJXGfz9TVLT\n\n; Listen addresses are the addresses and protocols used to listen for incoming\n; network connections.\n; listenaddr=/ip4/0.0.0.0/tcp/9001\n; listenaddr=/ip6/::/tcp/9001\n; listenaddr=/ip4/0.0.0.0/udp/9001/quic\n; listenaddr=/ip6/::/udp/9001/quic\n\n; Set a custom user agent string\n; useragent=Custom_User_Agent\n\n; Debug logging level.\n; Valid levels are [trace, debug, info, warning, error, fatal]\n; loglevel=info\n\n; The directory to store log files\n; logdir=~/.ilxd/logs\n\n; The directory to store the wallet db\n; walletdir=~/.ilxd/wallet\n\n; Write libp2p logs to the terminal\n; debug=1\n\n; Delete the blockchain from disk.\n; The node will store just the date needed to validate new blocks.\n; prune=1\n\n; Disable the transaction index\n; notxindex=1\n\n; Delete the tx index\n; droptxindex=1\n\n; Enable the wallet server index to serve lite wallets\n; wsindex=1\n\n; Delete the wallet server index from the database\n; dropwsindex=1\n\n; The max ban threshold. Overwhich nodes will be banned.\n; maxbanscore=100\n\n; A mnemonic seed to use for this node. This option must be used on first startup.\n; Both the network key and wallet keys will be derived from this seed.\n; walletseed=machine owner oval voyage hero pride index rack doll planet route unaware survey canyon search million embrace power thumb goat design rich grab rhythm\n\n; A network private key to use for this node. This will change the node's peer ID.\n; networkkey=08011240dcd8b19d2cc66f0ec613d4b08b7d73682e2e11122c09959a2cc000b99a525acbb562e48ca118db0f24a53cfbae9f6a3a67f863e6031595d643b7d891621ac280\n\n; The amount of time to ban nodes for\n; banduration=24h\n\n; Minimum fee per kilobyte for relaying transactions and block preference\n; minfeeperkilobyte=10000\n\n; Minimum stake amount for relaying transactions stake transactions and block preference\n; minstake=1000000\n\n; An address to send coinbase rewards to. If this option is not used\n; an interal wallet address will be used by default.\n; coinbaseaddr=reg1pvuxrsstxqcye5pzau9w27h42gukqjmpv8qeze88nadnqf4xx84aursjg6qd608vlxkcrda7zyzmuhwyzxu5q6j5s48htc60q065fu5cdvhnq9\n\n; Treasury transactions to whitelist\n; treasurywhitelist=bdb237bf8c5de6b60ba1e2dcfe364fc24f583e568d1682f851a9d0f11a45c78d\n; treasurywhitelist=e01838e6d01aca517a7f853b49cd23d004592b6681613d58a6a9a66dc630703c\n\n; The default blocksize soft limit\n; blocksizesoftlimit=1048576\n\n; The default maximum size for network messages\n; maxmessagesize=8388608\n\n; Specify the gRPC interface and port to listen on if you want to use the gRPC API.\n; grpclisten=/ip4/0.0.0.0/tcp/5001\n\n; An authentication token for the gRPC API to authenticate clients.\n; grpcauthtoken=<token>\n\n; File containing the certificate file\n; rpccert=~/.ilxd/rpc.cert\n\n; File containing the certificate key\n; rpckey=~/.ilxd/rpc.key\n\n; This option should be used to specify the external IP address if using the auto-generated SSL certificate.\n; If this option is not used when the cert is generated it will likely be treated as invalid.\n; externalip=127.0.0.1\n\n; Disable the node rpc service\n; disablenodeservice=1\n\n; Disable the wallet rpc service\n; disablewalletservice=1\n\n; Disable the wallet server RPC service. This will automatically be disable if wsindex is disabled.\n; disablewalletserverservic\n")))}f.isMDXComponent=!0}}]);