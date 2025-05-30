---
title: GPU on Maxwell
label: GPU on Maxwell
sidebar_position: 20
---

# GPU on Maxwell

## Introduction

Sometimes your job takes forever to run and then you realise that you can utilise Maxwell GPU or sometimes some of the software that you use can only run on GPU. Today I'm gonna show you how we can use GPU on Maxwell.

### Maxwell GPUs

Here are the summary of the available GPU on Maxwell

| NodeName | GPU Type                   | GPU Code                | Number of GPUs | Memory (GB) | Number of CPUs | Partition                              |
|----------|----------------------------|-------------------------|----------------|-------------|----------------|----------------------------------------|
| agpu001  | NVIDIA A100                | A100                    | 3              | 515         | 48             | a100_full                              |
| agpu002  | NVIDIA A100                | A100                    | 3              | 515         | 48             | a100_full                              |
| agpu003  | NVIDIA A100                | A100                    | 3              | 515         | 48             | a100_full                              |
| agpu004  | NVIDIA A100                | A100                    | 4              | 515         | 32             | a100_full                              |
| egpu001  | NVIDIA Tesla V100-PCIE-32GB| Tesla_V100-PCIE-32GB    | 2              | 184         | 40             | spot-compute,spot-gpu                  |
| cgpu001  | NVIDIA GeForce RTX 2080 Ti | NVIDIA_GeForce_RTX_2080_Ti | 2              | 184         | 40             | uoa-gpu,spot-compute,spot-gpu,uoa-gpu-priority |

To check it yourself, you can run `scontrol show nodes | grep -E "Gres=|Partitions="` on the terminal and it will return the available GPUs (non-null) alongside it's partition.

To use the GPU, you can add both the `--gres` and `--partition` parameters to your sbatch script. It should look like this:

```bash
#!/bin/bash

# Any bash parameters that you want
#SBATCH --ntasks=1
#SBATCH --mem=16G
#SBATCH --job-name=jupyter-notebook
#SBATCH --output=jupyter-notebook.log

#SBATCH --gres=gpu:A100:1
#SBATCH --partition=a100_full

module load cudatoolkit
module load mamba
source ~/.bash_profile
source ~/.bashrc
```

`--gres` (Generic Resource) parameter specifies the type and the number of GPUs required, so in this case I will be using NVIDIA A100 GPU and the number of GPUs that I will be using is 1, for the types and number of GPUs that you can use, please refer to the `GPU Code` and `Number of GPUs` column on the table respectively. For the `--partition` please refer to the `Partition` column.