Script started on mié 22 ene 2020 20:56:21 -04
]0;cccsar@cat-dog: ~/Desktop/playground[1;32mcccsar@08:56 pm[00m:[1;34m~/Desktop/playground[00m$ ssh -vvv cesarlocal@159.90.10.204
OpenSSH_7.2p2 Ubuntu-4ubuntu2.8, OpenSSL 1.0.2g  1 Mar 2016
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: Applying options for *
debug2: resolving "159.90.10.204" port 22
debug2: ssh_connect_direct: needpriv 0
debug1: Connecting to 159.90.10.204 [159.90.10.204] port 22.
debug1: Connection established.
debug1: key_load_public: No such file or directory
debug1: identity file /home/cccsar/.ssh/id_rsa type -1
debug1: key_load_public: No such file or directory
debug1: identity file /home/cccsar/.ssh/id_rsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /home/cccsar/.ssh/id_dsa type -1
debug1: key_load_public: No such file or directory
debug1: identity file /home/cccsar/.ssh/id_dsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /home/cccsar/.ssh/id_ecdsa type -1
debug1: key_load_public: No such file or directory
debug1: identity file /home/cccsar/.ssh/id_ecdsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /home/cccsar/.ssh/id_ed25519 type -1
debug1: key_load_public: No such file or directory
debug1: identity file /home/cccsar/.ssh/id_ed25519-cert type -1
debug1: Enabling compatibility mode for protocol 2.0
debug1: Local version string SSH-2.0-OpenSSH_7.2p2 Ubuntu-4ubuntu2.8
debug1: Remote protocol version 2.0, remote software version OpenSSH_7.9p1 Debian-10+deb10u1
debug1: match: OpenSSH_7.9p1 Debian-10+deb10u1 pat OpenSSH* compat 0x04000000
debug2: fd 3 setting O_NONBLOCK
debug1: Authenticating to 159.90.10.204:22 as 'cesarlocal'
debug3: hostkeys_foreach: reading file "/home/cccsar/.ssh/known_hosts"
debug3: record_hostkey: found key type ECDSA in file /home/cccsar/.ssh/known_hosts:4
debug3: load_hostkeys: loaded 1 keys from 159.90.10.204
debug3: order_hostkeyalgs: prefer hostkeyalgs: ecdsa-sha2-nistp256-cert-v01@openssh.com,ecdsa-sha2-nistp384-cert-v01@openssh.com,ecdsa-sha2-nistp521-cert-v01@openssh.com,ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521
debug3: send packet: type 20
debug1: SSH2_MSG_KEXINIT sent
debug3: receive packet: type 20
debug1: SSH2_MSG_KEXINIT received
debug2: local client KEXINIT proposal
debug2: KEX algorithms: curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group-exchange-sha1,diffie-hellman-group14-sha1,ext-info-c
debug2: host key algorithms: ecdsa-sha2-nistp256-cert-v01@openssh.com,ecdsa-sha2-nistp384-cert-v01@openssh.com,ecdsa-sha2-nistp521-cert-v01@openssh.com,ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521,ssh-ed25519-cert-v01@openssh.com,ssh-rsa-cert-v01@openssh.com,ssh-ed25519,rsa-sha2-512,rsa-sha2-256,ssh-rsa
debug2: ciphers ctos: chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com,aes128-cbc,aes192-cbc,aes256-cbc,3des-cbc
debug2: ciphers stoc: chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com,aes128-cbc,aes192-cbc,aes256-cbc,3des-cbc
debug2: MACs ctos: umac-64-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,hmac-sha1-etm@openssh.com,umac-64@openssh.com,umac-128@openssh.com,hmac-sha2-256,hmac-sha2-512,hmac-sha1
debug2: MACs stoc: umac-64-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,hmac-sha1-etm@openssh.com,umac-64@openssh.com,umac-128@openssh.com,hmac-sha2-256,hmac-sha2-512,hmac-sha1
debug2: compression ctos: none,zlib@openssh.com,zlib
debug2: compression stoc: none,zlib@openssh.com,zlib
debug2: languages ctos: 
debug2: languages stoc: 
debug2: first_kex_follows 0 
debug2: reserved 0 
debug2: peer server KEXINIT proposal
debug2: KEX algorithms: curve25519-sha256,curve25519-sha256@libssh.org,ecdh-sha2-nistp256,ecdh-sha2-nistp384,ecdh-sha2-nistp521,diffie-hellman-group-exchange-sha256,diffie-hellman-group16-sha512,diffie-hellman-group18-sha512,diffie-hellman-group14-sha256,diffie-hellman-group14-sha1
debug2: host key algorithms: rsa-sha2-512,rsa-sha2-256,ssh-rsa,ecdsa-sha2-nistp256
debug2: ciphers ctos: chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com
debug2: ciphers stoc: chacha20-poly1305@openssh.com,aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com
debug2: MACs ctos: umac-64-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,hmac-sha1-etm@openssh.com,umac-64@openssh.com,umac-128@openssh.com,hmac-sha2-256,hmac-sha2-512,hmac-sha1
debug2: MACs stoc: umac-64-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-256-etm@openssh.com,hmac-sha2-512-etm@openssh.com,hmac-sha1-etm@openssh.com,umac-64@openssh.com,umac-128@openssh.com,hmac-sha2-256,hmac-sha2-512,hmac-sha1
debug2: compression ctos: none,zlib@openssh.com
debug2: compression stoc: none,zlib@openssh.com
debug2: languages ctos: 
debug2: languages stoc: 
debug2: first_kex_follows 0 
debug2: reserved 0 
debug1: kex: algorithm: curve25519-sha256@libssh.org
debug1: kex: host key algorithm: ecdsa-sha2-nistp256
debug1: kex: server->client cipher: chacha20-poly1305@openssh.com MAC: <implicit> compression: none
debug1: kex: client->server cipher: chacha20-poly1305@openssh.com MAC: <implicit> compression: none
debug3: send packet: type 30
debug1: expecting SSH2_MSG_KEX_ECDH_REPLY
debug3: receive packet: type 31
debug1: Server host key: ecdsa-sha2-nistp256 SHA256:jx/h5WL0wd+qD4e4wLI4rYxo/oIfhSejFmgUeOngN2s
debug3: hostkeys_foreach: reading file "/home/cccsar/.ssh/known_hosts"
debug3: record_hostkey: found key type ECDSA in file /home/cccsar/.ssh/known_hosts:4
debug3: load_hostkeys: loaded 1 keys from 159.90.10.204
debug1: Host '159.90.10.204' is known and matches the ECDSA host key.
debug1: Found key in /home/cccsar/.ssh/known_hosts:4
debug3: send packet: type 21
debug2: set_newkeys: mode 1
debug1: rekey after 134217728 blocks
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug3: receive packet: type 21
debug1: SSH2_MSG_NEWKEYS received
debug2: set_newkeys: mode 0
debug1: rekey after 134217728 blocks
debug2: key: /home/cccsar/.ssh/id_rsa ((nil))
debug2: key: /home/cccsar/.ssh/id_dsa ((nil))
debug2: key: /home/cccsar/.ssh/id_ecdsa ((nil))
debug2: key: /home/cccsar/.ssh/id_ed25519 ((nil))
debug3: send packet: type 5
debug3: receive packet: type 7
debug1: SSH2_MSG_EXT_INFO received
debug1: kex_input_ext_info: server-sig-algs=<ssh-ed25519,ssh-rsa,rsa-sha2-256,rsa-sha2-512,ssh-dss,ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521>
debug3: receive packet: type 6
debug2: service_accept: ssh-userauth
debug1: SSH2_MSG_SERVICE_ACCEPT received
debug3: send packet: type 50
debug3: receive packet: type 53
debug3: input_userauth_banner
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%                                                                         %
%   Este sistema es solo para uso del personal del LDC. Cualquier         %
%   uso nocivo para la estabilidad de este sistema sera sancionado        %
%   severamente.                                                          %
%                                                                         %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
debug3: receive packet: type 51
debug1: Authentications that can continue: publickey,password
debug3: start over, passed a different list publickey,password
debug3: preferred gssapi-keyex,gssapi-with-mic,publickey,keyboard-interactive,password
debug3: authmethod_lookup publickey
debug3: remaining preferred: keyboard-interactive,password
debug3: authmethod_is_enabled publickey
debug1: Next authentication method: publickey
debug1: Trying private key: /home/cccsar/.ssh/id_rsa
debug3: no such identity: /home/cccsar/.ssh/id_rsa: No such file or directory
debug1: Trying private key: /home/cccsar/.ssh/id_dsa
debug3: no such identity: /home/cccsar/.ssh/id_dsa: No such file or directory
debug1: Trying private key: /home/cccsar/.ssh/id_ecdsa
debug3: no such identity: /home/cccsar/.ssh/id_ecdsa: No such file or directory
debug1: Trying private key: /home/cccsar/.ssh/id_ed25519
debug3: no such identity: /home/cccsar/.ssh/id_ed25519: No such file or directory
debug2: we did not send a packet, disable method
debug3: authmethod_lookup password
debug3: remaining preferred: ,password
debug3: authmethod_is_enabled password
debug1: Next authentication method: password
cesarlocal@159.90.10.204's password: 
debug3: send packet: type 50
debug2: we sent a password packet, wait for reply
debug3: receive packet: type 52
debug1: Authentication succeeded (password).
Authenticated to 159.90.10.204 ([159.90.10.204]:22).
debug1: channel 0: new [client-session]
debug3: ssh_session2_open: channel_new: 0
debug2: channel 0: send open
debug3: send packet: type 90
debug1: Requesting no-more-sessions@openssh.com
debug3: send packet: type 80
debug1: Entering interactive session.
debug1: pledge: network
debug3: receive packet: type 80
debug1: client_input_global_request: rtype hostkeys-00@openssh.com want_reply 0
debug3: receive packet: type 91
debug2: callback start
debug2: fd 3 setting TCP_NODELAY
debug3: ssh_packet_set_tos: set IP_TOS 0x10
debug2: client_session2_setup: id 0
debug2: channel 0: request pty-req confirm 1
debug3: send packet: type 98
debug1: Sending environment.
debug1: Sending env LC_PAPER = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug3: send packet: type 98
debug3: Ignored env XDG_VTNR
debug3: Ignored env XDG_SESSION_ID
debug1: Sending env LC_ADDRESS = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug3: send packet: type 98
debug3: Ignored env CLUTTER_IM_MODULE
debug1: Sending env LC_MONETARY = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug3: send packet: type 98
debug3: Ignored env XDG_GREETER_DATA_DIR
debug3: Ignored env GPG_AGENT_INFO
debug3: Ignored env SHELL
debug3: Ignored env VTE_VERSION
debug3: Ignored env TERM
debug3: Ignored env QT_LINUX_ACCESSIBILITY_ALWAYS_ON
debug1: Sending env LC_NUMERIC = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug3: send packet: type 98
debug3: Ignored env WINDOWID
debug3: Ignored env GNOME_KEYRING_CONTROL
debug3: Ignored env UPSTART_SESSION
debug3: Ignored env GTK_MODULES
debug3: Ignored env USER
debug3: Ignored env QT_ACCESSIBILITY
debug1: Sending env LC_TELEPHONE = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug3: send packet: type 98
debug3: Ignored env LS_COLORS
debug3: Ignored env XDG_SESSION_PATH
debug3: Ignored env XDG_SEAT_PATH
debug3: Ignored env SSH_AUTH_SOCK
debug3: Ignored env DEFAULTS_PATH
debug3: Ignored env XDG_CONFIG_DIRS
debug3: Ignored env PATH
debug3: Ignored env DESKTOP_SESSION
debug3: Ignored env QT_QPA_PLATFORMTHEME
debug3: Ignored env QT_IM_MODULE
debug1: Sending env LC_IDENTIFICATION = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug3: send packet: type 98
debug3: Ignored env JOB
debug3: Ignored env PWD
debug3: Ignored env XDG_SESSION_TYPE
debug3: Ignored env XMODIFIERS
debug1: Sending env LANG = en_US.UTF-8
debug2: channel 0: request env confirm 0
debug3: send packet: type 98
debug3: Ignored env GNOME_KEYRING_PID
debug3: Ignored env MANDATORY_PATH
debug3: Ignored env GDM_LANG
debug1: Sending env LC_MEASUREMENT = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug3: send packet: type 98
debug3: Ignored env IM_CONFIG_PHASE
debug3: Ignored env COMPIZ_CONFIG_PROFILE
debug3: Ignored env GDMSESSION
debug3: Ignored env GTK2_MODULES
debug3: Ignored env SESSIONTYPE
debug3: Ignored env XDG_SEAT
debug3: Ignored env HOME
debug3: Ignored env SHLVL
debug3: Ignored env LANGUAGE
debug3: Ignored env GNOME_DESKTOP_SESSION_ID
debug3: Ignored env UPSTART_INSTANCE
debug3: Ignored env LOGNAME
debug3: Ignored env XDG_SESSION_DESKTOP
debug3: Ignored env UPSTART_EVENTS
debug3: Ignored env QT4_IM_MODULE
debug3: Ignored env XDG_DATA_DIRS
debug3: Ignored env DBUS_SESSION_BUS_ADDRESS
debug3: Ignored env LESSOPEN
debug3: Ignored env UPSTART_JOB
debug3: Ignored env INSTANCE
debug3: Ignored env DISPLAY
debug3: Ignored env XDG_RUNTIME_DIR
debug3: Ignored env GTK_IM_MODULE
debug3: Ignored env XDG_CURRENT_DESKTOP
debug1: Sending env LC_TIME = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug3: send packet: type 98
debug3: Ignored env LESSCLOSE
debug3: Ignored env XAUTHORITY
debug1: Sending env LC_NAME = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug3: send packet: type 98
debug3: Ignored env _
debug2: channel 0: request shell confirm 1
debug3: send packet: type 98
debug2: callback done
debug2: channel 0: open confirm rwindow 0 rmax 32768
debug3: receive packet: type 99
debug2: channel_input_status_confirm: type 99 id 0
debug2: PTY allocation request accepted on channel 0
debug2: channel 0: rcvd adjust 2097152
debug3: receive packet: type 99
debug2: channel_input_status_confirm: type 99 id 0
debug2: shell request accepted on channel 0
Linux rabban 4.19.0-6-amd64 #1 SMP Debian 4.19.67-2+deb10u2 (2019-11-11) x86_64
Last login: Wed Jan 22 20:56:10 2020 from 190.39.203.213
Cannot open display "default display"
[cesarlocal@rabban ~ 08:56 pm]$ exit
cerrar sesión
debug3: receive packet: type 96
debug2: channel 0: rcvd eof
debug2: channel 0: output open -> drain
debug2: channel 0: obuf empty
debug2: channel 0: close_write
debug2: channel 0: output drain -> closed
debug3: receive packet: type 98
debug1: client_input_channel_req: channel 0 rtype exit-status reply 0
debug3: receive packet: type 98
debug1: client_input_channel_req: channel 0 rtype eow@openssh.com reply 0
debug2: channel 0: rcvd eow
debug2: channel 0: close_read
debug2: channel 0: input open -> closed
debug3: receive packet: type 97
debug2: channel 0: rcvd close
debug3: channel 0: will not send data after close
debug2: channel 0: almost dead
debug2: channel 0: gc: notify user
debug2: channel 0: gc: user detached
debug2: channel 0: send close
debug3: send packet: type 97
debug2: channel 0: is dead
debug2: channel 0: garbage collecting
debug1: channel 0: free: client-session, nchannels 1
debug3: channel 0: status: The following connections are open:
  #0 client-session (t4 r0 i3/0 o3/0 fd -1/-1 cc -1)

debug3: send packet: type 1
Connection to 159.90.10.204 closed.
Transferred: sent 2752, received 3600 bytes, in 10.9 seconds
Bytes per second: sent 251.9, received 329.6
debug1: Exit status 0
]0;cccsar@cat-dog: ~/Desktop/playground[1;32mcccsar@08:56 pm[00m:[1;34m~/Desktop/playground[00m$ exit
exit

Script done on mié 22 ene 2020 20:56:57 -04
