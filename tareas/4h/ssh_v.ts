Script started on mié 22 ene 2020 20:53:38 -04
]0;cccsar@cat-dog: ~/Desktop/playground[1;32mcccsar@08:53 pm[00m:[1;34m~/Desktop/playground[00m$ ssh -v cesarlocal@159.90.10.204
OpenSSH_7.2p2 Ubuntu-4ubuntu2.8, OpenSSL 1.0.2g  1 Mar 2016
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 19: Applying options for *
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
debug1: Authenticating to 159.90.10.204:22 as 'cesarlocal'
debug1: SSH2_MSG_KEXINIT sent
debug1: SSH2_MSG_KEXINIT received
debug1: kex: algorithm: curve25519-sha256@libssh.org
debug1: kex: host key algorithm: ecdsa-sha2-nistp256
debug1: kex: server->client cipher: chacha20-poly1305@openssh.com MAC: <implicit> compression: none
debug1: kex: client->server cipher: chacha20-poly1305@openssh.com MAC: <implicit> compression: none
debug1: expecting SSH2_MSG_KEX_ECDH_REPLY
debug1: Server host key: ecdsa-sha2-nistp256 SHA256:jx/h5WL0wd+qD4e4wLI4rYxo/oIfhSejFmgUeOngN2s
debug1: Host '159.90.10.204' is known and matches the ECDSA host key.
debug1: Found key in /home/cccsar/.ssh/known_hosts:4
debug1: rekey after 134217728 blocks
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug1: SSH2_MSG_NEWKEYS received
debug1: rekey after 134217728 blocks
debug1: SSH2_MSG_EXT_INFO received
debug1: kex_input_ext_info: server-sig-algs=<ssh-ed25519,ssh-rsa,rsa-sha2-256,rsa-sha2-512,ssh-dss,ecdsa-sha2-nistp256,ecdsa-sha2-nistp384,ecdsa-sha2-nistp521>
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
debug1: Next authentication method: password
cesarlocal@159.90.10.204's password: 
debug1: Authentication succeeded (password).
Authenticated to 159.90.10.204 ([159.90.10.204]:22).
debug1: channel 0: new [client-session]
debug1: Requesting no-more-sessions@openssh.com
debug1: Entering interactive session.
debug1: pledge: network
debug1: client_input_global_request: rtype hostkeys-00@openssh.com want_reply 0
debug1: Sending environment.
debug1: Sending env LC_PAPER = es_VE.UTF-8
debug1: Sending env LC_ADDRESS = es_VE.UTF-8
debug1: Sending env LC_MONETARY = es_VE.UTF-8
debug1: Sending env LC_NUMERIC = es_VE.UTF-8
debug1: Sending env LC_TELEPHONE = es_VE.UTF-8
debug1: Sending env LC_IDENTIFICATION = es_VE.UTF-8
debug1: Sending env LANG = en_US.UTF-8
debug1: Sending env LC_MEASUREMENT = es_VE.UTF-8
debug1: Sending env LC_TIME = es_VE.UTF-8
debug1: Sending env LC_NAME = es_VE.UTF-8
Linux rabban 4.19.0-6-amd64 #1 SMP Debian 4.19.67-2+deb10u2 (2019-11-11) x86_64
Last login: Wed Jan 22 18:35:48 2020 from 190.39.203.213
Cannot open display "default display"
[cesarlocal@rabban ~ 08:53 pm]$ exit
cerrar sesión
debug1: client_input_channel_req: channel 0 rtype exit-status reply 0
debug1: client_input_channel_req: channel 0 rtype eow@openssh.com reply 0
debug1: channel 0: free: client-session, nchannels 1
Connection to 159.90.10.204 closed.
Transferred: sent 2752, received 3620 bytes, in 3.0 seconds
Bytes per second: sent 920.6, received 1211.0
debug1: Exit status 0
]0;cccsar@cat-dog: ~/Desktop/playground[1;32mcccsar@08:53 pm[00m:[1;34m~/Desktop/playground[00m$ exit
exit

Script done on mié 22 ene 2020 20:53:59 -04
