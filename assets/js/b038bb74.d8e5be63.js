"use strict";(self.webpackChunkmorganlab_wiki=self.webpackChunkmorganlab_wiki||[]).push([[321],{4313:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var r=s(4848),o=s(8453);const t={sidebar_position:98,title:"Protip"},i="Protip",a={id:"protip",title:"Protip",description:"Terminal autocompletion",source:"@site/docs/protip.md",sourceDirName:".",slug:"/protip",permalink:"/wiki/protip",draft:!1,unlisted:!1,editUrl:"https://github.com/MorganResearchLab/wiki/docs/protip.md",tags:[],version:"current",sidebarPosition:98,frontMatter:{sidebar_position:98,title:"Protip"},sidebar:"tutorialSidebar",previous:{title:"Singularity on Mac",permalink:"/wiki/misc/singularity-on-mac"},next:{title:"Contributing",permalink:"/wiki/contributing"}},l={},c=[{value:"Terminal autocompletion",id:"terminal-autocompletion",level:2},{value:"Passwordless Auth to VS Code Remote",id:"passwordless-auth-to-vs-code-remote",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"protip",children:"Protip"}),"\n",(0,r.jsx)(n.h2,{id:"terminal-autocompletion",children:"Terminal autocompletion"}),"\n",(0,r.jsx)(n.p,{children:"Tired of going through of your bash history and pressing up arrow key to find that one specific command? Use bash autocompletion"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a file called ",(0,r.jsx)(n.code,{children:".inputrc"})," in your home directory (e.g., ",(0,r.jsx)(n.code,{children:"/uoa/home/r04mr23/.inputrc"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Copy and paste the following to the file","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title=".inputrc"',children:'"\\e[A": history-search-backward\n"\\e[B": history-search-forward\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Save it and reload your terminal by creating a new terminal (it's the ",(0,r.jsx)(n.code,{children:"+"})," button beside the ",(0,r.jsx)(n.code,{children:"bash"}),")\n",(0,r.jsx)(n.img,{alt:"Terminal overview",src:s(3166).A+"",width:"1556",height:"440"})]}),"\n",(0,r.jsxs)(n.li,{children:["Now whenever you're typing a command you can use up or down arrow key to search for the previous command that you used. Here's the example:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# I typed `sba`\n[r04mr23@maxlogin1(maxwell) ~]$ sba\n\n# I pressed up arrow\n[r04mr23@maxlogin1(maxwell) ~]$ sbatch /uoa/home/r04mr23/sharedscratch/src/start_jupyter.sh benccchmarker-simulation\n\n# I pressed the up arrow again\n[r04mr23@maxlogin1(maxwell) ~]$ sbatch alignment_slurm.sh \n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"passwordless-auth-to-vs-code-remote",children:"Passwordless Auth to VS Code Remote"}),"\n",(0,r.jsx)(n.p,{children:"It can be annoying to have to reenter your Maxwell password every time you're trying to connect to it. Here's how you can bypass it:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Open terminal on your local pc"}),"\n",(0,r.jsxs)(n.li,{children:["Generate ",(0,r.jsx)(n.a,{href:"https://www.preveil.com/blog/public-and-private-key/",children:"public and private keys"})," using OpenSSL, change ",(0,r.jsx)(n.code,{children:"<local_user>"})," with your username (e.g., ",(0,r.jsx)(n.code,{children:"r04mr23"})," for me)","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'ssh-keygen -q -b 2048 -P "" -f /Users/<local_user>/.ssh/keys/maxlogin_rsa -t rsa\n'})}),"\n","This will output two files ",(0,r.jsx)(n.code,{children:"maxlogin1_rsa"})," (private key) and ",(0,r.jsx)(n.code,{children:"maxlogin1_rsa.pub"})," (publick key)"]}),"\n",(0,r.jsxs)(n.li,{children:["Update your ssh config located on ",(0,r.jsx)(n.code,{children:"/Users/<localuser>/.ssh/config"})," (create one if you don't have) by adding the following, again change the ",(0,r.jsx)(n.code,{children:"<local_user>"})," and ",(0,r.jsx)(n.code,{children:"<remote_user>"})," with yours, usually they're the same for Maxwell","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'file="/Users/<local_user>/.ssh/config"',children:'Host maxlogin1\nHostName maxlogin1.abdn.ac.uk\nUser <remote_user>\nPort 22\nPreferredAuthentications publickey\nIdentityFile "/Users/<local_user>/.ssh/keys/maxlogin1_rsa"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Copy the content of the ",(0,r.jsx)(n.code,{children:"maxlogin1_rsa.pub"})," to  ",(0,r.jsx)(n.code,{children:"<remote_user_home_dir>/.ssh/authorized_keys"})," (in Maxwell it's ",(0,r.jsx)(n.code,{children:"/uoa/home/<remote_user_name>/.ssh/authorized_keys"})," create one if it doesn't exist), your file should look like this now","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'file="/uoa/home/<remote_user_name>/.ssh/authorized_keys"',children:"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCxu/dOSNX1aRYB8Abl1Jbj0zFTwCCQBaXi/ZsWJS4mEX0RkXckItf2hf0O14PBZ8DdW9RS/zdadadasdaystdeyuasgdhjagjhdgashjdghjasdtyaatyuetyquegjhwqghjdaghjsdghsjagdhjagsdhjaghjdgahsjdghjastdyaudtyuatdyuatsyudtasyudtasyudryrqtyertyqwretfqghwefqgwhefghqfhegqfwgheqw m.ramdhani.23@abdn.ac.uk\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Update the permission to ",(0,r.jsx)(n.code,{children:"600"})," (File can only be accessed by you, inaccessible to everyone else)","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[r04mr23@maxlogin1(maxwell) ~]$ chmod 600 /uoa/home/<remote_user_name>/.ssh/authorized_keys\n"})}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Now you can log in to VS Code without password!"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3166:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/1_1-5389f86ac7ddbabc1903e547dbb5711e.png"},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var r=s(6540);const o={},t=r.createContext(o);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);