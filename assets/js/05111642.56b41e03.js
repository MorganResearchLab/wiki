"use strict";(self.webpackChunkmorganlab_wiki=self.webpackChunkmorganlab_wiki||[]).push([[295],{4138:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=a(4848),r=a(8453);const t={title:"Managing packages",label:"Managing packages",sidebar_position:4},s="Managing packages",l={id:"working-with-hpc/managing-packages",title:"Managing packages",description:"Introduction",source:"@site/docs/working-with-hpc/managing-packages.md",sourceDirName:"working-with-hpc",slug:"/working-with-hpc/managing-packages",permalink:"/wiki/working-with-hpc/managing-packages",draft:!1,unlisted:!1,editUrl:"https://github.com/MorganResearchLab/wiki/docs/working-with-hpc/managing-packages.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Managing packages",label:"Managing packages",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Managing files and directories",permalink:"/wiki/working-with-hpc/managing-files-and-directories"},next:{title:"Running a Jupyter Server",permalink:"/wiki/working-with-hpc/running-a-jupyter-server"}},o={},c=[{value:"Introduction",id:"introduction",level:2},{value:"venv",id:"venv",level:2},{value:"Creating a virtual environment",id:"creating-a-virtual-environment",level:3},{value:"Activating the environment",id:"activating-the-environment",level:3},{value:"Managing packages",id:"managing-packages-1",level:3},{value:"Saving installed packages version for reproducibility",id:"saving-installed-packages-version-for-reproducibility",level:3},{value:"Deactivating environment",id:"deactivating-environment",level:3},{value:"More resources",id:"more-resources",level:3},{value:"Mamba",id:"mamba",level:2},{value:"Creating a mamba environment",id:"creating-a-mamba-environment",level:3},{value:"Activating the environment",id:"activating-the-environment-1",level:3},{value:"Managing packages",id:"managing-packages-2",level:3},{value:"Saving installed packages version for reproducibility",id:"saving-installed-packages-version-for-reproducibility-1",level:3},{value:"Deactivating environment",id:"deactivating-environment-1",level:3},{value:"More resources",id:"more-resources-1",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"managing-packages",children:"Managing packages"}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"There are many reasons why we need to use package manager or environment over installing packages globally (which most likely you won't be able to do as you don't have the sudo access), here are some:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Dependency Management"}),(0,i.jsx)("br",{}),"\nBy using package manager/environment makes it easier to ensure that all the dependencies we use when we're developing our software consistent as it helps manage the different version of libraries/packages which prevents compatibility issues or version conflicts to happen"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Isolation"}),(0,i.jsx)("br",{}),"\nEach project can have its own set of dependencies isolated from other projects. This is particularly important when different projects require different versions of the same library."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Reproducibility"}),(0,i.jsx)("br",{}),"\nBy using environment or package managers, you can recreate the exact environment needed to run an application, ensuring that it works the same way on different machines."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"And honestly many other reasons why but hopefully you should be convinced to use package manager by this point."}),"\n",(0,i.jsxs)(n.p,{children:["There are different ways on how you can manage your packages/environments and it also depends on the language that you're using as your development tools. However, since we're talking about Maxwell and you're most likely to use Python or R, there are three different package managers that I used most often, they are ",(0,i.jsx)(n.code,{children:"venv"}),", ",(0,i.jsx)(n.code,{children:"conda"})," and ",(0,i.jsx)(n.code,{children:"mamba"}),". Here are the simple comparison between them"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"id"}),(0,i.jsx)(n.th,{children:"name"}),(0,i.jsx)(n.th,{children:"advantages"}),(0,i.jsx)(n.th,{children:"disadvantages"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"0"}),(0,i.jsx)(n.td,{children:"venv"}),(0,i.jsx)(n.td,{children:"- Installing with pip is blazingly fast - Most of the python packages are in pip"}),(0,i.jsx)(n.td,{children:"- Can only manage Python libraries"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"conda"}),(0,i.jsx)(n.td,{children:"- Can manage not only Python (e.g., R, Julia etc.)"}),(0,i.jsx)(n.td,{children:"- Installation is slow compared to PIP"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"mamba"}),(0,i.jsxs)(n.td,{children:["- Basically a ",(0,i.jsx)(n.code,{children:"conda"})," wrapper with faster installation"]}),(0,i.jsx)(n.td,{children:"- None that I have found yet"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"venv",children:"venv"}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-virtual-environment",children:"Creating a virtual environment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[r04mr23@maxlogin1(maxwell) ~]$ python -m venv my_env \n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will create a virtual environment called ",(0,i.jsx)(n.code,{children:"my_env"})," located in the directory where you run the command, in my case it's the ",(0,i.jsx)(n.code,{children:"~"}),"/home directory"]}),"\n",(0,i.jsx)(n.h3,{id:"activating-the-environment",children:"Activating the environment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[r04mr23@maxlogin1(maxwell) ~]$ source my_env/bin/activate\n\n# (my_env) will appear at the start if you successfully activated the environment\n(my_env) [r04mr23@maxlogin1(maxwell) ~]$\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you check the Python using ",(0,i.jsx)(n.code,{children:"which python"})," it will give you the path to the binary inside of the virtual environment"]}),"\n",(0,i.jsx)(n.h3,{id:"managing-packages-1",children:"Managing packages"}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"pip"})," to install, update or remove packages packages, for example to install ",(0,i.jsx)(n.code,{children:"pandas"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip install pandas\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you installed it successfully, now if you check the list of installed packages, you will see ",(0,i.jsx)(n.code,{children:"pandas"})," in it"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip list\nPackage         Version\n--------------- -----------\nnumpy           2.0.0\npandas          2.2.2\npip             23.0.1\npython-dateutil 2.9.0.post0\npytz            2024.1\nsetuptools      65.5.0\nsix             1.16.0\ntzdata          2024.1\n"})}),"\n",(0,i.jsx)(n.p,{children:"To install specific version of a package"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip install pandas=1.2.3\n"})}),"\n",(0,i.jsx)(n.p,{children:"To update a package"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip install pandas --upgrade\n"})}),"\n",(0,i.jsx)(n.p,{children:"OR"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip install pandas -U\n"})}),"\n",(0,i.jsx)(n.p,{children:"To uninstall a package"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip uninstall pandas\n"})}),"\n",(0,i.jsx)(n.h3,{id:"saving-installed-packages-version-for-reproducibility",children:"Saving installed packages version for reproducibility"}),"\n",(0,i.jsxs)(n.p,{children:["You can save the installed packages in your environment using ",(0,i.jsx)(n.code,{children:"pip freeze > requirements.txt"})," for which you can then use the ",(0,i.jsx)(n.code,{children:"requirements.txt"})," to install similar packages and version on a new environment"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:'title="requirements.txt"',children:"numpy==2.0.0\npandas==2.2.2\npython-dateutil==2.9.0.post0\npytz==2024.1\nsix==1.16.0\ntzdata==2024.1\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deactivating-environment",children:"Deactivating environment"}),"\n",(0,i.jsxs)(n.p,{children:["Once you're done with everything or when you want to switch to another environment you can use ",(0,i.jsx)(n.code,{children:"deactivate"})," command and it will deactivate the current environment"]}),"\n",(0,i.jsx)(n.h3,{id:"more-resources",children:"More resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.python.org/3/library/venv.html",children:"Python Docs' venv \u2014 Creation of virtual environments"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://realpython.com/python-virtual-environments-a-primer/",children:"Real Python's Python Virtual Environments: A Primer"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://pip.pypa.io/en/stable/cli/",children:"pip commands"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mamba",children:"Mamba"}),"\n",(0,i.jsx)(n.p,{children:"I will skip conda because the commands will be more or less similar to mamba's"}),"\n",(0,i.jsx)(n.h3,{id:"creating-a-mamba-environment",children:"Creating a mamba environment"}),"\n",(0,i.jsx)(n.p,{children:"Load mamba"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[r04mr23@maxlogin1(maxwell) ~]$ module load mamba\n"})}),"\n",(0,i.jsx)(n.p,{children:"Creating an environment called my_env"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[r04mr23@maxlogin1(maxwell) ~]$ mamba create --name my_env\n"})}),"\n",(0,i.jsx)(n.p,{children:"The coolest thing about conda/mamba is you can specify the Python version that you want, for example to create a mamba environment with Python 3.11"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[r04mr23@maxlogin1(maxwell) ~]$ mamba create --name my_env python=3.11\n"})}),"\n",(0,i.jsx)(n.h3,{id:"activating-the-environment-1",children:"Activating the environment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[r04mr23@maxlogin1(maxwell) ~]$ mamba activate my_env\n\n# (my_env) will appear at the start if you successfully activated the environment\n(my_env) [r04mr23@maxlogin1(maxwell) ~]$\n"})}),"\n",(0,i.jsx)(n.h3,{id:"managing-packages-2",children:"Managing packages"}),"\n",(0,i.jsxs)(n.p,{children:["To install ",(0,i.jsx)(n.code,{children:"pandas"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(my_env) [r04mr23@maxlogin1(maxwell) ~]$ mamba install pandas\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you installed it successfully, now if you check the list of installed packages, you will see ",(0,i.jsx)(n.code,{children:"pandas"})," in it"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(my_env) [r04mr23@maxlogin1(maxwell) ~]$ mamba list\n# packages in environment at /uoa/home/r04mr23/sharedscratch/.conda/envs/my_env:\n#\n# Name                    Version                   Build  Channel\n_libgcc_mutex             0.1                 conda_forge    conda-forge\n_openmp_mutex             4.5                       2_gnu    conda-forge\npandas                  1.2.3                 conda_forge    conda-forge\n"})}),"\n",(0,i.jsx)(n.p,{children:"To install specific version of a package"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(my_env) [r04mr23@maxlogin1(maxwell) ~]$ mamba install pandas=1.2.3\n"})}),"\n",(0,i.jsx)(n.p,{children:"To update a pakacge"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(my_env) [r04mr23@maxlogin1(maxwell) ~]$ mamba update pandas\n"})}),"\n",(0,i.jsx)(n.p,{children:"To uninstall a package"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"(my_env) [r04mr23@maxlogin1(maxwell) ~]$ mamba remove pandas\n"})}),"\n",(0,i.jsx)(n.h3,{id:"saving-installed-packages-version-for-reproducibility-1",children:"Saving installed packages version for reproducibility"}),"\n",(0,i.jsxs)(n.p,{children:["You can save the installed packages in your environment using ",(0,i.jsx)(n.code,{children:"conda env export -n my_env -f my_env.yaml"})," for which you can then use the ",(0,i.jsx)(n.code,{children:"my_env.yaml"})," to install similar packages and version on a new environment"]}),"\n",(0,i.jsx)(n.h3,{id:"deactivating-environment-1",children:"Deactivating environment"}),"\n",(0,i.jsxs)(n.p,{children:["Once you're done with everything or when you want to switch to another environment you can use ",(0,i.jsx)(n.code,{children:"mamba deactivate"})," command and it will deactivate the current environment"]}),"\n",(0,i.jsx)(n.h3,{id:"more-resources-1",children:"More resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://conda.io/projects/conda/en/latest/user-guide/tasks/index.html",children:"Conda's common tasks"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>l});var i=a(6540);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);