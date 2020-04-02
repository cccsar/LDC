Script started on mié 22 ene 2020 20:55:39 -04
]0;cccsar@cat-dog: ~/Desktop/playground[1;32mcccsar@08:55 pm[00m:[1;34m~/Desktop/playground[00m$ ssh -vv cesarlocal@159.90.10.204
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
debug1: SSH2_MSG_KEXINIT sent
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
debug1: expecting SSH2_MSG_KEX_ECDH_REPLY
debug1: Server host key: ecdsa-sha2-nistp256 SHA256:jx/h5WL0wd+qD4e4wLI4rYxo/oIfhSejFmgUeOngN2s
debug1: Host '159.90.10.204' is known and matches the ECDSA host key.
debug1: Found key in /home/cccsar/.ssh/known_hosts:4
debug2: set_newkeys: mode 1
debug1: rekey after 134217728 blocks
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug1: SSH2_MSG_NEWKEYS received
debug2: set_newkeys: mode 0
debug1: rekey after 134217728 blocks
debug2: key: /home/cccsar/.ssh/id_rsa ((nil))
debug2: key: /home/cccsar/.ssh/id_dsa ((nil))
debug2: key: /home/cccsar/.ssh/id_ecdsa ((nil))
debug2: key: /home/cccsar/.ssh/id_ed25519 ((nil))
debug1: SSH2_MSG_EXT_INFO received
debug1: kex_input_ext_info: server-sig-algs=<ssh-ed25519,ssh-rsa,rsa-sha2-256,rsa-sha2-512,ssh-dss,ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521>
debug2: service_accept: ssh-userauth
debug1: SSH2_MSG_SERVICE_ACCEPT received
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%                                                                         %
%   Este sistema es solo para uso del personal del LDC. Cualquier         %
%   uso nocivo para la estabilidad de este sistema sera sancionado        %
%   severamente.                                                          %
%                                                                         %
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
debug1: Authentications that can continue: publickey,password
debug1: Next authentication method: publickey
debug1: Trying private key: /home/cccsar/.ssh/id_rsa
debug1: Trying private key: /home/cccsar/.ssh/id_dsa
debug1: Trying private key: /home/cccsar/.ssh/id_ecdsa
debug1: Trying private key: /home/cccsar/.ssh/id_ed25519
debug2: we did not send a packet, disable method
debug1: Next authentication method: password
cesarlocal@159.90.10.204's password: 
debug2: we sent a password packet, wait for reply
debug1: Authentication succeeded (password).
Authenticated to 159.90.10.204 ([159.90.10.204]:22).
debug1: channel 0: new [client-session]
debug2: channel 0: send open
debug1: Requesting no-more-sessions@openssh.com
debug1: Entering interactive session.
debug1: pledge: network
debug1: client_input_global_request: rtype hostkeys-00@openssh.com want_reply 0
debug2: callback start
debug2: fd 3 setting TCP_NODELAY
debug2: client_session2_setup: id 0
debug2: channel 0: request pty-req confirm 1
debug1: Sending environment.
debug1: Sending env LC_PAPER = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug1: Sending env LC_ADDRESS = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug1: Sending env LC_MONETARY = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug1: Sending env LC_NUMERIC = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug1: Sending env LC_TELEPHONE = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug1: Sending env LC_IDENTIFICATION = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug1: Sending env LANG = en_US.UTF-8
debug2: channel 0: request env confirm 0
debug1: Sending env LC_MEASUREMENT = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug1: Sending env LC_TIME = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug1: Sending env LC_NAME = es_VE.UTF-8
debug2: channel 0: request env confirm 0
debug2: channel 0: request shell confirm 1
debug2: callback done
debug2: channel 0: open confirm rwindow 0 rmax 32768
debug2: channel_input_status_confirm: type 99 id 0
debug2: PTY allocation request accepted on channel 0
debug2: channel 0: rcvd adjust 2097152
debug2: channel_input_status_confirm: type 99 id 0
debug2: shell request accepted on channel 0
Linux rabban 4.19.0-6-amd64 #1 SMP Debian 4.19.67-2+deb10u2 (2019-11-11) x86_64
Last login: Wed Jan 22 20:53:56 2020 from 190.39.203.213
Cannot open display "default display"
[cesarlocal@rabban ~ 08:56 pm]$ exdebug2: channel 0: rcvd eof
debug2: channel 0: output open -> drain
debug1: client_input_channel_req: channel 0 rtype exit-status reply 0
debug1: client_input_channel_req: channel 0 rtype eow@openssh.com reply 0
debug2: channel 0: rcvd eow
debug2: channel 0: close_read
debug2: channel 0: input open -> closed
debug2: channel 0: rcvd close
it
cerrar sesión
debug2: channel 0: obuf empty
debug2: channel 0: close_write
debug2: channel 0: output drain -> closed
debug2: channel 0: almost dead
debug2: channel 0: gc: notify user
debug2: channel 0: gc: user detached
debug2: channel 0: send close
debug2: channel 0: is dead
debug2: channel 0: garbage collecting
debug1: channel 0: free: client-session, nchannels 1
Connection to 159.90.10.204 closed.
Transferred: sent 2752, received 3620 bytes, in 4.6 seconds
Bytes per second: sent 604.5, received 795.1
debug1: Exit status 0
]0;cccsar@cat-dog: ~/Desktop/playground[1;32mcccsar@08:56 pm[00m:[1;34m~/Desktop/playground[00m$ exit
exit

Script done on mié 22 ene 2020 20:56:15 -04
