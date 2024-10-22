---
title: Singularity on Maxwell
label: Singularity on Maxwell
sidebar_position: 18
---

# Singularity on Maxwell

## Introduction

As of October 2024, Maxwell allows the building of singularity image file. `build` is available to use on the `uoa-singularity` partition and `cgpu002` compute node. If you're not familiar with singulartiy you can read more about it [here](../misc/singularity-on-mac.md).

### Building singularity interactively
```bash
[r04mr23@maxlogin1(maxwell) ~]$ srun -p uoa-singularity -w cgpu002 --pty bash # Technically you don't need to specifcy the -w as it's usually automatically allocated
[r04mr23@cgpu002(maxwell) ~]$ echo $SLURM_JOB_PARTITION
uoa-singularity
[r04mr23@cgpu002(maxwell) ~]$ module load apptainer # Use apptainer instead of singularity, this is the open-source version of singularity
```

Just to make sure it works as intended I'll show you how to build a singularity image file, we're going to use the simple `.def` file from the Singularity website tutorial.

```def title=trial.def
Bootstrap: docker
From: ubuntu:16.04

%post
    apt-get -y update
    apt-get -y install cowsay lolcat

%environment
    export LC_ALL=C
    export PATH=/usr/games:$PATH

%runscript
    date | cowsay | lolcat
```

Running the command below will build the image file for you
```bash
[r04mr23@maxlogin1(maxwell) ~]$ apptainer build --fakeroot trial.sif trial.def
```

### Submitting singularity as slurm job
In reality, most of the time when you're working on a project that requires Singularity, you may need to submit it as a Slurm job instead of running it interactively. The reason for this is because it may take a while to finish building the image file. It's the same as submitting normal slurm jobs, you just need to specify the correct partition and load the Apptainer module.

```bash
#!/usr/bin/env bash

#!SBATCH ...any slurm options that you want
#!SBATCH -p uoa-singularity

module load apptainer
apptainer build --fakeroot your_output_sif_file.sif your_singularity_def_file.def
```

Note that you can run the singularity image file on any node BUT you can only build a new singularity image file on the `uoa-singularity`.

Credit to W.H Michael Chung from the Digital Research team.

## Common errors

### FATAL:   Unable to get library client configuration: remote has no library client
Apptainer removed support for the old library remote endpoint provided by Sylabs Cloud. Practically, this means that commands like `apptainer pull library://lolcow` would fail with the error message “FATAL: Unable to get library client configuration: remote has no library client”. To solve it refer to this post here https://docs.mpcdf.mpg.de/bnb/211.html

