---
title: Slurm interactive session
label: Slurm interactive session
sidebar_position: 3
---

# Slurm interactive session

One of the common beginner mistake when prototyping or running something on the HPC is to run the job on the login node, which technically should be fine if you're not running something that requires intensive resources. This is where Slurm interactive session comes into play. With Slurm interactive session we can run our programs within HPC clusters in real-time. So instead of using login node with the limited resource that it has, we can utilise the nodes in a full shell session.

To start an interactive session you can use the `srun` command with the following arguments
- `--nodes`: Specify the number of compute node that you want to use
- `--ntasks-per-node`: Tell the number of tasks we want to run per node
- `--time`: Set how long we want the interactive session to last in `DD-hh:mm:ss` format
- `--pty`: Create a pseudoterminal for us to interact with the HPC
- `bash`: Use bash interactive as the terminal
- `-i`: Let bash accept the standard input (keyboard input)

```bash
[r04mr23@maxlogin1(maxwell) ~]$ srun --nodes=1 --ntasks-per-node=1 --time=01:00:00 --pty bash -i
```

Running the above command will let us enter the interactive session, you will notice how the hostname changes from `maxlogin1` to one of the node hostname in the HPC, in my case it's `vhmem002`

```bash
[r04mr23@vhmem002(maxwell) ~]$
```

To exit the interactive session and going back to the login node you can use the `exit` command. Happy hacking!

