---
title: Frequently asked questions
label: Frequently asked questions
sidebar_position: 99
---

Collection of the frequently asked questions, shoutout to Sean Andrew Buchan (Digital Research Analyst at the University of Aberdeen) for answering most of the questions

## How do I check my HPC usage?

```bash
$ sreport cluster UserUtilizationByAccount users=r04mr23 start=2000-01-01 format=Accounts%20,Cluster%16,Login,Used
--------------------------------------------------------------------------------
Cluster/User/Account Utilization 2000-01-01T00:00:00 - 2024-06-22T23:59:59 (772412400 secs)
Usage reported in CPU Minutes
--------------------------------------------------------------------------------
             Account          Cluster     Login     Used 
-------------------- ---------------- --------- -------- 
                mmsn  maxwell_cluster   r04mr23   281760
```
Change the `r04mr23` with your Maxwell username, it's in minutes, so you have to divide it by 60.

## I set my `#SBATCH --time` correctly but my job is being stopped mid way?
The reason might be because you didn't set the partition in the first place and your job being assigned to `spot-compute` which can only be used for running short job no longer than 36 hours.Add the `#SBATCH --partition uoa-compute` to run job that is longer than 36 hours

## How do I check how much storage have I used? `du -sh` seems to take forever

Chek home (`/uoa/home/r04mr23`) directory usage
```
$ beegfs-ctl --getquota --cfgFile=/etc/beegfs/beegfs-client-uoa-home.conf --uid r04mr23

Quota information for storage pool Default (ID: 1):

      user/group     ||           size          ||    chunk files    
     name     |  id  ||    used    |    hard    ||  used   |  hard   
--------------|------||------------|------------||---------|---------
       r04mr23|193544||   14.19 GiB|   56.00 GiB||    75776|   200000
```

Check sharedscratch directory (`/uoa/home/r04mr23/sharedscratch`) usage
```
$ beegfs-ctl --getquota --cfgFile=/etc/beegfs/beegfs-client-uoa-scratch.conf --uid r04mr23

      user/group     ||           size          ||    chunk files    
     name     |  id  ||    used    |    hard    ||  used   |  hard   
--------------|------||------------|------------||---------|---------
       r04mr23|193544||    2.52 TiB| 1024.00 GiB||  1002345|  1000000
```

Again change r04mr23 with your Maxwell username, `size` `used` is your usage, `size` `hard` is the non-official storage limit, try to keep it below `hard` as suggested by the Maxwell team. `chunk files` is the file number limit.

## How do I check how long did it take for my slurm job to finish?
```
sacct --format=JobID,JobName,State,Elapsed -j <JOB_ID>
```