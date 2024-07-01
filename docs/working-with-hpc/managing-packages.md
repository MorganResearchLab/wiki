---
title: Managing packages
label: Managing packages
sidebar_position: 4
---

# Managing packages
## Introduction

There are many reasons why we need to use package manager or environment over installing packages globally (which most likely you won't be able to do as you don't have the sudo access), here are some:

1. **Dependency Management**<br/>
    By using package manager/environment makes it easier to ensure that all the dependencies we use when we're developing our software consistent as it helps manage the different version of libraries/packages which prevents compatibility issues or version conflicts to happen
2. **Isolation**<br/>
    Each project can have its own set of dependencies isolated from other projects. This is particularly important when different projects require different versions of the same library.
3. **Reproducibility**<br/>
    By using environment or package managers, you can recreate the exact environment needed to run an application, ensuring that it works the same way on different machines.

And honestly many other reasons why but hopefully you should be convinced to use package manager by this point.

There are different ways on how you can manage your packages/environments and it also depends on the language that you're using as your development tools. However, since we're talking about Maxwell and you're most likely to use Python or R, there are three different package managers that I used most often, they are `venv`, `conda` and `mamba`. Here are the simple comparison between them

| id | name       | advantages                                                                       | disadvantages                          |
|----|------------|----------------------------------------------------------------------------------|----------------------------------------|
| 0  | venv | - Installing with pip is blazingly fast - Most of the python packages are in pip | - Can only manage Python libraries     |
| 1  | conda      | - Can manage not only Python (e.g., R, Julia etc.)                               | - Installation is slow compared to PIP |
| 2  | mamba      | - Basically a `conda` wrapper with faster installation                           | - None that I have found yet           |

## venv
### Creating a virtual environment
```
[r04mr23@maxlogin1(maxwell) ~]$ python -m venv my_env 
```
This will create a virtual environment called `my_env` located in the directory where you run the command, in my case it's the `~`/home directory
### Activating the environment
```
[r04mr23@maxlogin1(maxwell) ~]$ source my_env/bin/activate

# (my_env) will appear at the start if you successfully activated the environment
(my_env) [r04mr23@maxlogin1(maxwell) ~]$
```

If you check the Python using `which python` it will give you the path to the binary inside of the virtual environment
### Managing packages
You can use `pip` to install, update or remove packages packages, for example to install `pandas`
```
(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip install pandas
```
If you installed it successfully, now if you check the list of installed packages, you will see `pandas` in it
```
(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip list
Package         Version
--------------- -----------
numpy           2.0.0
pandas          2.2.2
pip             23.0.1
python-dateutil 2.9.0.post0
pytz            2024.1
setuptools      65.5.0
six             1.16.0
tzdata          2024.1
```

To install specific version of a package
```
(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip install pandas=1.2.3
```

To update a package
```
(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip install pandas --upgrade
```
OR
```
(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip install pandas -U
```

To uninstall a package
```
(my_env) [r04mr23@maxlogin1(maxwell) ~]$ pip uninstall pandas
```

### Saving installed packages version for reproducibility
You can save the installed packages in your environment using `pip freeze > requirements.txt` for which you can then use the `requirements.txt` to install similar packages and version on a new environment

```txt title="requirements.txt"
numpy==2.0.0
pandas==2.2.2
python-dateutil==2.9.0.post0
pytz==2024.1
six==1.16.0
tzdata==2024.1
```

### Deactivating environment
Once you're done with everything or when you want to switch to another environment you can use `deactivate` command and it will deactivate the current environment

### More resources
- [Python Docs' venv — Creation of virtual environments](https://docs.python.org/3/library/venv.html)
- [Real Python's Python Virtual Environments: A Primer](https://realpython.com/python-virtual-environments-a-primer/)
- [pip commands](https://pip.pypa.io/en/stable/cli/)

## Mamba
I will skip conda because the commands will be more or less similar to mamba's
### Creating a mamba environment

Load mamba
```
[r04mr23@maxlogin1(maxwell) ~]$ module load mamba
```
Creating an environment called my_env
```
[r04mr23@maxlogin1(maxwell) ~]$ mamba create --name my_env
```
The coolest thing about conda/mamba is you can specify the Python version that you want, for example to create a mamba environment with Python 3.11
```
[r04mr23@maxlogin1(maxwell) ~]$ mamba create --name my_env python=3.11
```


### Activating the environment
```
[r04mr23@maxlogin1(maxwell) ~]$ mamba activate my_env

# (my_env) will appear at the start if you successfully activated the environment
(my_env) [r04mr23@maxlogin1(maxwell) ~]$
```

### Managing packages
To install `pandas`
```
(my_env) [r04mr23@maxlogin1(maxwell) ~]$ mamba install pandas
```
If you installed it successfully, now if you check the list of installed packages, you will see `pandas` in it
```
(my_env) [r04mr23@maxlogin1(maxwell) ~]$ mamba list
# packages in environment at /uoa/home/r04mr23/sharedscratch/.conda/envs/my_env:
#
# Name                    Version                   Build  Channel
_libgcc_mutex             0.1                 conda_forge    conda-forge
_openmp_mutex             4.5                       2_gnu    conda-forge
pandas                  1.2.3                 conda_forge    conda-forge
```

To install specific version of a package
```
(my_env) [r04mr23@maxlogin1(maxwell) ~]$ mamba install pandas=1.2.3
```

To update a pakacge
```
(my_env) [r04mr23@maxlogin1(maxwell) ~]$ mamba update pandas
```

To uninstall a package
```
(my_env) [r04mr23@maxlogin1(maxwell) ~]$ mamba remove pandas
```

### Saving installed packages version for reproducibility
You can save the installed packages in your environment using `conda env export -n my_env -f my_env.yaml` for which you can then use the `my_env.yaml` to install similar packages and version on a new environment

### Deactivating environment
Once you're done with everything or when you want to switch to another environment you can use `mamba deactivate` command and it will deactivate the current environment

### More resources
- [Conda's common tasks](https://conda.io/projects/conda/en/latest/user-guide/tasks/index.html)