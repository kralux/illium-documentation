"use strict";(self.webpackChunkillium_documentation=self.webpackChunkillium_documentation||[]).push([[2055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=s,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return n?o.createElement(m,a(a({ref:t},h),{},{components:n})):o.createElement(m,a({ref:t},h))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:s,a[1]=i;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7462),s=(n(7294),n(3905));const r={sidebar_position:2},a="Blockchain Service",i={unversionedId:"api/blockchain_service",id:"api/blockchain_service",title:"Blockchain Service",description:"RPC Messages",source:"@site/docs/api/blockchain_service.md",sourceDirName:"api",slug:"/api/blockchain_service",permalink:"/docs/api/blockchain_service",draft:!1,editUrl:"https://github.com/project-illium/illium-documentation/docs/api/blockchain_service.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"apiSidebar",previous:{title:"Overview",permalink:"/docs/api/overview"},next:{title:"Node Service",permalink:"/docs/api/node_service"}},c={},l=[{value:"RPC Messages",id:"rpc-messages",level:3}],h={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"blockchain-service"},"Blockchain Service"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"service BlockchainService {\n    // GetMempoolInfo returns the state of the current mempool\n    rpc GetMempoolInfo(GetMempoolInfoRequest) returns (GetMempoolInfoResponse) {}\n\n    // GetMempool returns all the transactions in the mempool\n    rpc GetMempool(GetMempoolRequest) returns (GetMempoolResponse) {}\n\n    // GetBlockchainInfo returns data about the blockchain including the most recent\n    // block hash and height.\n    rpc GetBlockchainInfo(GetBlockchainInfoRequest) returns (GetBlockchainInfoResponse) {}\n\n    // GetBlockInfo returns a BlockHeader plus some extra metadata.\n    rpc GetBlockInfo(GetBlockInfoRequest)returns (GetBlockInfoResponse) {}\n\n    // GetBlock returns the detailed data for a block.\n    rpc GetBlock(GetBlockRequest) returns (GetBlockResponse) {}\n\n    // GetCompressedBlock returns a block that is stripped down to just the outputs.\n    // It is the bare minimum information a client side wallet needs to compute its internal\n    // state.\n    rpc GetCompressedBlock(GetCompressedBlockRequest) returns (GetCompressedBlockResponse) {}\n\n    // GetHeaders returns a batch of headers according to the request parameters.\n    rpc GetHeaders(GetHeadersRequest) returns (GetHeadersResponse) {}\n\n    // GetCompressedBlocks returns a batch of CompressedBlocks according to the request parameters.\n    rpc GetCompressedBlocks(GetCompressedBlocksRequest) returns (GetCompressedBlocksResponse) {}\n\n    // GetTransaction returns the transaction for the given transaction ID.\n    //\n    // **Requires TxIndex**\n    rpc GetTransaction(GetTransactionRequest) returns (GetTransactionResponse) {}\n\n    // GetMerkleProof returns a Merkle (SPV) proof for a specific transaction\n    // in the provided block.\n    //\n    // **Requires TxIndex**\n    rpc GetMerkleProof(GetMerkleProofRequest) returns (GetMerkleProofResponse) {}\n\n    // GetValidator returns all the information about the given validator including number\n    // of staked coins.\n    rpc GetValidator(GetValidatorRequest) returns (GetValidatorResponse) {}\n\n    // GetValidatorSetInfo returns information about the validator set.\n    rpc GetValidatorSetInfo(GetValidatorSetInfoRequest) returns (GetValidatorSetInfoResponse) {}\n\n    // GetValidatorSet returns all the validators in the current validator set.\n    rpc GetValidatorSet(GetValidatorSetRequest) returns (GetValidatorSetResponse) {}\n\n    // GetAccumulatorCheckpoint returns the accumulator at the requested height.\n    // If there is no checkpoint at that height, the *prior* checkpoint found in the\n    // chain will be returned. If there is no prior checkpoint (as is prior to the first)\n    // an error will be returned.\n    rpc GetAccumulatorCheckpoint(GetAccumulatorCheckpointRequest) returns (GetAccumulatorCheckpointResponse) {}\n\n    // SubmitTransaction validates a transaction and submits it to the network. An error will be returned\n    // if it fails validation.\n    rpc SubmitTransaction(SubmitTransactionRequest) returns (SubmitTransactionResponse) {}\n\n    // SubscribeBlocks returns a stream of notifications when new blocks are finalized and\n    // connected to the chain.\n    rpc SubscribeBlocks(SubscribeBlocksRequest) returns (stream BlockNotification) {}\n\n    // SubscribeCompressedBlocks returns a stream of CompressedBlock notifications when new\n    // blocks are finalized and connected to the chain.\n    rpc SubscribeCompressedBlocks(SubscribeCompressedBlocksRequest) returns (stream CompressedBlockNotification) {}\n}\n")),(0,s.kt)("h3",{id:"rpc-messages"},"RPC Messages"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"message GetMempoolInfoRequest{}\nmessage GetMempoolInfoResponse {\n    // The count of transactions in the mempool\n    uint32 size  = 1;\n    // The size in bytes of all transactions in the mempool\n    uint32 bytes = 2;\n}\n\nmessage GetMempoolRequest {\n    // When `full_transactions` is true, full transaction data is provided\n    // instead of just transaction hashes. Default is false.\n    bool full_transactions = 1;\n}\nmessage GetMempoolResponse {\n    // List of unconfirmed transactions.\n    repeated TransactionData transaction_data = 1;\n}\n\nmessage GetBlockchainInfoRequest {}\nmessage GetBlockchainInfoResponse {\n    // Illium network types\n    enum Network {\n        // Live public network with monetary value\n        MAINNET  = 0;\n        // An isolated environment for automated testing\n        REGTEST  = 1;\n        // A public environment where monetary value is agreed to be zero,\n        // and some checks for transaction conformity are disabled.\n        TESTNET  = 2;\n        // Alpha testnet\n        ALPHANET = 3;\n    }\n\n    // Which network the node is operating on\n    Network network           = 1;\n    // The current number of blocks in the chain\n    uint32 best_height        = 2;\n    // The hash of the best (tip) block in the chain\n    bytes best_block_ID       = 3;\n    // The timestamp of the best block\n    int64 block_time          = 4;\n    // When `tx_index` is true, the node has full transaction index enabled\n    bool tx_index             = 5;\n    // The total number of coins in circulation\n    uint64 circulating_supply = 6;\n    // The total number of coins staked\n    uint64 total_staked       = 7;\n    // The balance of the treasury\n    uint64 treasury_balance   = 8;\n}\n\nmessage GetBlockInfoRequest {\n    oneof id_or_height {\n        // The block hash as a byte array\n        bytes block_ID = 1;\n        // The block number\n        uint32 height   = 2;\n    }\n}\nmessage GetBlockInfoResponse {\n    // Marshaled block header data, as well as metadata\n    BlockInfo info = 1;\n}\n\nmessage GetBlockRequest {\n    oneof id_or_height {\n        // The block hash as a byte array\n        bytes block_ID = 1;\n        // The block number\n        uint32 height   = 2;\n    }\n}\nmessage GetBlockResponse {\n    // The full block response\n    Block block = 1;\n}\n\nmessage GetCompressedBlockRequest {\n    oneof id_or_height {\n        // The block hash as a byte array\n        bytes block_ID = 1;\n        // The block number\n        uint32 height  = 2;\n    }\n}\nmessage GetCompressedBlockResponse {\n    // The compressed block contains only transaction outputs\n    CompressedBlock block = 1;\n}\n\nmessage GetHeadersRequest {\n    // The height to start receiving headers\n    uint32 start_height = 1;\n    // The last header height to return. Note that a maximum of 2000\n    // blocks will be returned per request. If end_height is > start_height + 1999\n    // then end_height will be set set to start_height + 1999 and 2000 headers\n    // will be returned. If end_height is past the tip of the chain the headers\n    // will be returned up to the tip.\n    //\n    // If end_height is less than start_height 2000 headers will be returned.\n    uint32 end_height   = 2;\n}\nmessage GetHeadersResponse {\n    repeated BlockHeader headers = 1;\n}\n\nmessage GetCompressedBlocksRequest {\n    // The height to start receiving headers\n    uint32 start_height = 1;\n    // The last block height to return. Note that a maximum of 2000 blocks will be returned\n    // per request. If end_height is > start_height + 1999 then end_height will be set set\n    // to start_height + 1999 and 2000 compressed blocks will be returned. If end_height is\n    // past the tip of the chain the compressed blocks will be returned up to the tip.\n    //\n    // If end_height is less than start_height 2000 blocks will be returned.\n    uint32 end_height   = 2;\n}\nmessage GetCompressedBlocksResponse {\n    // The compressed block response\n    repeated CompressedBlock blocks = 1;\n}\n\nmessage GetTransactionRequest {\n    // A transaction hash\n    bytes transaction_ID = 1;\n}\nmessage GetTransactionResponse {\n    // The transaction response\n    Transaction tx = 1;\n}\n\nmessage GetMerkleProofRequest {\n    // A transaction hash\n    bytes transaction_ID = 1;\n}\nmessage GetMerkleProofResponse {\n    // Block header information for the corresponding transaction\n    BlockInfo block        = 1;\n    // Is the proof hashes corresponding to the witness hash tree.\n    repeated bytes Uhashes = 2;\n    // Is the proof hashes corresponding to the witness hash tree.\n    repeated bytes Whashes = 3;\n    // The least significant bit in flags corresponds to the last hash in `hashes`. The second least\n    // significant to the second to last hash, and so on. The bit signifies whether the hash should be\n    // prepended (0) or appended (1) when hashing each level in the tree.\n    uint32 flags           = 4;\n}\n\nmessage GetValidatorRequest {\n    // A serialized validator ID\n    bytes validator_ID = 1;\n}\nmessage GetValidatorResponse {\n    // The validator response\n    Validator validator = 1;\n}\n\nmessage GetValidatorSetInfoRequest{}\nmessage GetValidatorSetInfoResponse{\n    // The total number of coins staked on the network\n    uint64 total_staked   = 1;\n    // The total stake weighted by time locks.\n    uint64 stake_weight   = 2;\n    // The total number of validators on the network\n    uint32 num_validators = 3;\n}\n\nmessage GetValidatorSetRequest{}\nmessage GetValidatorSetResponse{\n    // The full list of validators on the network\n    repeated Validator validators = 1;\n}\n\nmessage GetAccumulatorCheckpointRequest{\n    oneof height_or_timestamp {\n        // The height of the accumulator checkpoint to return.\n        // If there is no checkpoint at that height, the *prior*\n        // checkpoint found in the chain will be returned.\n        //\n        // An error will be returned if there is no checkpoint before\n        // the provided height.\n        uint32 height   = 1;\n        \n        // The timestamp of the accumulator checkpoint to return.\n        // If there is no checkpoint at that timestamp, the *prior*\n        // checkpoint found in the chain will be returned.\n        //\n        // An error will be returned if there is no checkpoint before\n        // the provided timestamp.\n        int64 timestamp = 2;\n    }\n}\nmessage GetAccumulatorCheckpointResponse{\n    // The height of the checkpoint\n    uint32 height              = 1;\n    // The number of entries in the accumulator at this checkpoint\n    uint64 num_entries         = 2;\n    // The accumulator hashes\n    repeated bytes accumulator = 3;\n}\n\nmessage SubmitTransactionRequest {\n    // The transaction to submit to the network\n    Transaction transaction = 1;\n}\nmessage SubmitTransactionResponse {\n    // The transaction ID of the transaction.\n    //\n    // If submission was unsuccessful and error will be returned.\n    bytes transaction_ID = 1;\n}\n\nmessage SubscribeBlocksRequest {\n    // When full_block is true, a complete marshaled block is sent.\n    // Default is false, block metadata is sent. See `BlockInfo`.\n    bool full_block        = 1;\n    \n    // When full_transactions is true, provide full transaction info\n    // for a marshaled block.\n    //\n    // Default is false, only the transaction IDs are included for\n    // a marshaled block.\n    bool full_transactions = 2;\n}\n\nmessage SubscribeCompressedBlocksRequest {}\n\n")))}p.isMDXComponent=!0}}]);