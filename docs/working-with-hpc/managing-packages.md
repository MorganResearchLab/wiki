---
title: Managing packages
label: Managing packages
sidebar_position: 4
---

# Managing packages

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

1. virualenv
