---
title: Managing files and directories
label: Managing files and directories
sidebar_position: 4
---

# Managing Files and Directories

As a member of the lab, you will have access to three different storage resources:
1. `home` directory (`~` or `uoa/home/{your_user_id}`)
2. `scratch` directory (`~/sharedscratch` or `/uoa/home/{your_user_id}/sharedscratch`)
3. `Morgan_Lab` shared folder (`/uoa/scratch/shared/Morgan_Lab`)

The following breakdown shows the storage limit and file limit for each resource:
    | id | Name       | Storage Limit | File Limit |
    |----|------------|---------------|------------|
    | 0  | home       | 64G           | 200K       |
    | 1  | scratch    | 1T            | 200K       |
    | 2  | Morgan_Lab | 1T            | 200K       |

(In reality, there are no definitive limits to the storage size. However, it's recommended to keep your scratch directory at around 1T unless you have exceptional circumstances, as the HPC admins will monitor them from time to time.)

The `home` and `scratch` directories are personal directories, and no one else is supposed to have access to them except you. Most of the time, all files are supposed to be stored in the scratch directory. The home directory is only meant to store some configurations (hidden directories that start with `.`), and some small files from your prototyping may go there.

The `Morgan_Lab` shared folder is shared among the members of the group. If you're not part of the group, you will have to raise a ticket to the IT helpdesk [here](https://uoa.freshservice.com/support/tickets).

