---
sidebar_position: 2
---

# Config File

As an alternative to using the command line options flags when running ilxd, you can set the same options in a config file.
By default, ilxd will look for a config file named `ilxd.conf` in the default application directory. 

You can tell ilxd to use a config file in a different directory with the following command line option:
```
$ ilxd --configfile=/path/to/ilxd.conf
```

If the command line options conflict with the config file options, the command line options will take precedence and the
config file options will be overridden with the command line options.

A sample config file is as follows:

**Note**: the `;` in the config file denotes a comment line. Thus the following config file contains only  comments.
If you want to set any of the options remove the `;` from the start of the line.

```
; The directory to store data such as the ilxd database.
; The default is ~/.ilxd on POSIX OSes, $LOCALAPPDATA/ilxd on Windows,
; ~/Library/Application Support/ilxd on Mac OS, and $home/ilxd on
; Plan9.  Environment variables are expanded so they may be used.  NOTE: Windows
; environment variables are typically %VARIABLE%, but they must be accessed with
; $VARIABLE here.  Also, ~ is expanded to $LOCALAPPDATA on Windows.
; datadir=~/.ilxd

; Use testnet.
; testnet=1

; Use regtest.
; regtest=1

; If this option is used on first startup when using regtest mode then node
; will use the regtest genesis validator network key and wallet keys.
; Otherwise it will use random keys.
; regtestval=1

; Set the node to use mock proofs instead of full proofs. This option is only available for regtest.
; mock=1

; Universal Plug and Play (UPnP) automatically opens the listen port obtains
; the external IP address from supported devices. This option disables it.
; noupnp=1

; Seed addresses are used to join the network. On start the node will make
; outgoing connections to the bootstrap peers and use them to discover other
; peers in the network.
; seedaddr=/ip4/x.x.x.x/tcp/9001/p2p/12D3KooWPZ3xBNRGx4fhRbfYAcXUhcZhTZ2LCkJ74kJXGfz9TVLT

; Listen addresses are the addresses and protocols used to listen for incoming
; network connections.
; listenaddr=/ip4/0.0.0.0/tcp/9001
; listenaddr=/ip6/::/tcp/9001
; listenaddr=/ip4/0.0.0.0/udp/9001/quic
; listenaddr=/ip6/::/udp/9001/quic

; Set a custom user agent string
; useragent=Custom_User_Agent

; Debug logging level.
; Valid levels are [trace, debug, info, warning, error, fatal]
; loglevel=info

; The directory to store log files
; logdir=~/.ilxd/logs

; The directory to store the wallet db
; walletdir=~/.ilxd/wallet

; Write libp2p logs to the terminal
; debug=1

; Delete the blockchain from disk.
; The node will store just the date needed to validate new blocks.
; prune=1

; Disable the transaction index
; notxindex=1

; Delete the tx index
; droptxindex=1

; Enable the wallet server index to serve lite wallets
; wsindex=1

; Delete the wallet server index from the database
; dropwsindex=1

; The max ban threshold. Overwhich nodes will be banned.
; maxbanscore=100

; A mnemonic seed to use for this node. This option must be used on first startup.
; Both the network key and wallet keys will be derived from this seed.
; walletseed=machine owner oval voyage hero pride index rack doll planet route unaware survey canyon search million embrace power thumb goat design rich grab rhythm

; A network private key to use for this node. This will change the node's peer ID.
; networkkey=08011240dcd8b19d2cc66f0ec613d4b08b7d73682e2e11122c09959a2cc000b99a525acbb562e48ca118db0f24a53cfbae9f6a3a67f863e6031595d643b7d891621ac280

; The amount of time to ban nodes for
; banduration=24h

; Minimum fee per kilobyte for relaying transactions and block preference
; minfeeperkilobyte=10000

; Minimum stake amount for relaying transactions stake transactions and block preference
; minstake=1000000

; An address to send coinbase rewards to. If this option is not used
; an interal wallet address will be used by default.
; coinbaseaddr=reg1pvuxrsstxqcye5pzau9w27h42gukqjmpv8qeze88nadnqf4xx84aursjg6qd608vlxkcrda7zyzmuhwyzxu5q6j5s48htc60q065fu5cdvhnq9

; Treasury transactions to whitelist
; treasurywhitelist=bdb237bf8c5de6b60ba1e2dcfe364fc24f583e568d1682f851a9d0f11a45c78d
; treasurywhitelist=e01838e6d01aca517a7f853b49cd23d004592b6681613d58a6a9a66dc630703c

; The default blocksize soft limit
; blocksizesoftlimit=1048576

; The default maximum size for network messages
; maxmessagesize=8388608

; Specify the gRPC interface and port to listen on if you want to use the gRPC API.
; grpclisten=/ip4/0.0.0.0/tcp/5001

; An authentication token for the gRPC API to authenticate clients.
; grpcauthtoken=<token>

; File containing the certificate file
; rpccert=~/.ilxd/rpc.cert

; File containing the certificate key
; rpckey=~/.ilxd/rpc.key

; This option should be used to specify the external IP address if using the auto-generated SSL certificate.
; If this option is not used when the cert is generated it will likely be treated as invalid.
; externalip=127.0.0.1

; Disable the node rpc service
; disablenodeservice=1

; Disable the wallet rpc service
; disablewalletservice=1

; Disable the wallet server RPC service. This will automatically be disable if wsindex is disabled.
; disablewalletserverservice=1

; Enable the prover RPC service. This is not turned on by default.
; enableproverservice=1

;; A path to the Tor binary. If this is provided the server will start tor automatically and shut it down on close.
;; All incoming and outgoing connections will be routed through Tor.
; torbinary=/path/to/tor

;; A path to a custom torrc file if you want to configure tor with your own settings.
;; torrcfile=/path/to/torrc

;; This option tells ilxd to accept connections over Tor AND over the clear internet. Clear TCP connections will be prioritized.
;; This mode is NOT private.
;; tordualstack=1
```