---
date: '2024-11-16'
title: 'unix, ssh notes'
---
water bottle
thermal imager
flashlight


`find . -type f -name 's_o_bias_7_27.pt' -execdir mv '{}' 's_o_bias_9_27.pt' \;`

ssh -N -L localhost:8888:localhost:8888 exia@cs-gpu3.vast.uccs.edu
 

```
ctrl+a d
screen -r

ssh -N -L localhost:8888:localhost:8787 exia@cs-gpu3.vast.uccs.edu

ssh -NL 8888:localhost:8888 exia@cs-gpu1.vast.uccs.edu
ssh -NL 8887:localhost:8887 exia@cs-gpu1.vast.uccs.edu
ssh -NL 6666:localhost:6666 exia@cs-gpu1.vast.uccs.edu

ssh -NL 7777:localhost:7777 exia@cs-gpu3.vast.uccs.edu

jupyter lab --no-browser --port=8893

ssh exia@cs-gpu1.vast.uccs.edu
scp -r my-lre exia@cs-gpu5.vast.uccs.edu:/home/exia/Desktop

Transfer document to desktop:

scp -r exia@cs-gpu1.vast.uccs.edu:/home/exia/my-lre/data/J_RelBenchmark_log.txt .
scp -r exia@cs-gpu1.vast.uccs.edu:/home/exia/my-lre/data/W2V_RelBenchmark_log.txt .

scp -r exia@cs-gpu1.vast.uccs.edu:/home/exia/my-lre/data/no_context_J_RelBenchmark_log.txt .

The mount points for partitions are very important.

screen -r lre (attach to the lre screen)
add /home/exia/.local/bin to PATH  (?)

It takes half an hour to create one LRE from 8 samples.

grep -v '^\[' J_RelBenchmark_log.txt > J_total_log.txt


REPLACE SPACES ACCIDENTALLY ADDED TO FILENAMES
find . -type f -name "* *" -exec bash -c 'mv "$0" "${0// /}"' {} \;
 
source_dir="."

for file in "$source_dir"/*; do
    [ -f "$file" ] || continue
    filename=$(basename "$file")
    second_substring=$(echo "$filename" | cut -d'_' -f2)
    target_dir="$source_dir/$second_substring"
    mkdir -p "$target_dir"

    # Move the file to the target directory
    mv "$file" "$target_dir/"
done


To activate the jupyter environment 'myenv': 

source /home/exia/miniconda3/bin/activate /home/exia/miniconda3/envs/my-lre


```
