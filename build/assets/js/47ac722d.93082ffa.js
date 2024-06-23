"use strict";(self.webpackChunkmorganlab_wiki=self.webpackChunkmorganlab_wiki||[]).push([[621],{7483:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=s(4848),t=s(8453);const r={sidebar_position:2},c="Running a job",l={id:"working-with-hpc/running-a-job",title:"Running a job",description:"For this tutorial I'll be creating an empty folder called tutorial in my sharedscratch",source:"@site/docs/working-with-hpc/running-a-job.md",sourceDirName:"working-with-hpc",slug:"/working-with-hpc/running-a-job",permalink:"/wiki/working-with-hpc/running-a-job",draft:!1,unlisted:!1,editUrl:"https://github.com/MorganResearchLab/wiki/docs/working-with-hpc/running-a-job.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Using Maxwell",permalink:"/wiki/working-with-hpc/using-maxwell"},next:{title:"Slurm interactive session",permalink:"/wiki/working-with-hpc/slurm-interactive-session"}},o={},h=[];function d(e){const n={a:"a",code:"code",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"running-a-job",children:"Running a job"}),"\n",(0,i.jsxs)(n.p,{children:["For this tutorial I'll be creating an empty folder called ",(0,i.jsx)(n.code,{children:"tutorial"})," in my ",(0,i.jsx)(n.code,{children:"sharedscratch"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The VS Code way"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Right click on the ",(0,i.jsx)(n.code,{children:"sharedscratch"})," folder and select ",(0,i.jsx)(n.code,{children:"New Folder..."}),"\n",(0,i.jsx)(n.img,{alt:"alt text",src:s(7179).A+"",width:"402",height:"295"})]}),"\n",(0,i.jsxs)(n.li,{children:["Name the folder ",(0,i.jsx)(n.code,{children:"tutorial"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Shell"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ mkdir sharedscratch/tutorial\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Let's say I want to run a Python script called ",(0,i.jsx)(n.code,{children:"test.py"})," on Maxwell, it's just a simple script that will print ",(0,i.jsx)(n.code,{children:"This is a Maxwell test"})," 100 times"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# sharedscratchtutorial/tutorial/test.py\n\nfor i in range(100):\n    print("This is a Maxwell test")\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The VS Code way"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a new file by right clicking on the ",(0,i.jsx)(n.code,{children:"tutorial"})," folder\n",(0,i.jsx)(n.img,{alt:"alt text",src:s(2144).A+"",width:"413",height:"329"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Name the file ",(0,i.jsx)(n.code,{children:"test.py"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy and paste the code above to the file\n",(0,i.jsx)(n.img,{alt:"alt text",src:s(9350).A+"",width:"845",height:"334"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Save the file by pressing ",(0,i.jsx)(n.code,{children:"CTRL+S"})," on Windows or ",(0,i.jsx)(n.code,{children:"\u2318"}),"+ ",(0,i.jsx)(n.code,{children:"s"})," on Mac"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You can open a terminal ",(0,i.jsx)(n.code,{children:"CTRL"})," + ` on Windows or ",(0,i.jsx)(n.code,{children:"\u2303"})," + ` on Mac, then run the code by typing ",(0,i.jsx)(n.code,{children:"python test.py"})," and should be working smoothly for something small like this, but in reality you'll be working with much bigger stuff and its not recommended to run your whole pipeline on a login node, so instead of doing that we will use SLURM"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a new file called ",(0,i.jsx)(n.code,{children:"slurm.sh"})," in the same directory as your ",(0,i.jsx)(n.code,{children:"test.py"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Paste the following blocks of code to the ",(0,i.jsx)(n.code,{children:"slurm.sh"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"#!/bin/bash\n#SBATCH --job-name=tester\n#SBATCH -o tester.out\n#SBATCH --ntasks=1\n#SBATCH --mail-type=begin\n#SBATCH --mail-type=end\n#SBATCH --mail-user=m.ramdhani.23@abdn.ac.uk\n\npython test.py\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The first line is called the shebang it specifify the interpreter to be used to run the code, next lines starting with ",(0,i.jsx)(n.code,{children:"#SBATCH"})," are the special instructions we'll use to interact with the Slurm Workload Manager"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--job-name"}),": Name for the job"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--o"}),": Output log"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--ntasks"}),": Number of tasks to be executed in parallel"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--mail-.."}),": Send a mail when the job starts running and when the job is finished to ",(0,i.jsx)(n.code,{children:"--mail-user"})," email address"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Once we're set we can run the code from the terminal"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# Change the directory if you haven't done so\n$ cd sharedscratch/tutorial\n\n# Run the script\n$ sbatch slurm.sh\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"9",children:["\n",(0,i.jsxs)(n.li,{children:["You can check the status of the job by using ",(0,i.jsx)(n.code,{children:"squeue -u <YOUR_USER_ID>"})," ",(0,i.jsx)(n.img,{alt:"alt text",src:s(2710).A+"",width:"789",height:"121"})]}),"\n",(0,i.jsxs)(n.li,{children:["You can also see the log once your job starts running in a file called ",(0,i.jsx)(n.code,{children:"tester.out"}),(0,i.jsx)(n.img,{alt:"alt text",src:s(799).A+"",width:"302",height:"538"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Shell"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ cd sharedscratch/tutorial\n\n$ vim test.py\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"esc"})," then ",(0,i.jsx)(n.code,{children:"i"})," to insert text, ",(0,i.jsx)(n.code,{children:"ctrl"})," + ",(0,i.jsx)(n.code,{children:"v"})," to paste the python code, save it by pressing ",(0,i.jsx)(n.code,{children:"esc"})," then ",(0,i.jsx)(n.code,{children:"w"})," then ",(0,i.jsx)(n.code,{children:"q"})," and enter to save file"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"vim slurm.sh\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Do the same thing above but this time paste the code for ",(0,i.jsx)(n.code,{children:"slurm.sh"})," and save it"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ sbatch slurm.sh\n$ squeue -u <YOUR_USERNAME>\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When running your job you might feel like you want to update your script or stop the already running job to do this you can use ",(0,i.jsx)(n.code,{children:"scancel <JOB_ID>"})," ",(0,i.jsx)(n.code,{children:"JOB_ID"})," of your job can be found on the first column when you run ",(0,i.jsx)(n.code,{children:"squeue -u <YOUR_USERNAME>"})]}),"\n",(0,i.jsx)(n.p,{children:"More resources:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://bioinformaticsworkbook.org/Appendix/HPC/SLURM/slurm-cheatsheat.html",children:"Bioinformatics Workbook's Quick Reference Sheet for HPC"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.carc.usc.edu/user-information/user-guides/hpc-basics/slurm-cheatsheet",children:"USC's HPC Cheatsheet"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://slurm.schedmd.com/documentation.html",children:"Slurm Workload Manager Documentation"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},7179:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/01_01-bc3a7f4170f182bc3ba360e570f36c87.png"},2144:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/01_02-e810928152013d3c37717732ecdece83.png"},9350:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/01_03-50227ccf4b722741f3a35670e90dc09b.png"},2710:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/01_04-d782f8f3330f460c0f74bda2a6f6db5b.png"},799:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/01_05-1d197d80fcc70b4558c7bdad5b53aa77.png"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(6540);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);