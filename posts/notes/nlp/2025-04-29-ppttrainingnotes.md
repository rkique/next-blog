---
date: '2025-04-29'
title: 'ppttrainingnotes'
---
want same length data for training.

dyck_sequences_cross_serial_64_0.5
num_symbols: 64.
num_sequences: 100000
target_length: 2048
max_depth = 16

We will want to generate 2048 * 100000 character file.
Run the script without pre-pretraining.

nli-brackets: 	      1277017
shuffle-dyck bytes: 642981866
This yields 613767 brackets, need an order of magnitude more.
Or: can compare against no pre-pretraining.

First test:
- compare 613767 brackets against no pretraining and equivalent pretraining.


datasets uses apache arrow for efficient storag.e

dataset is Dataset({
    features: ['input_ids', 'attention_mask'],
    num_rows: 100000
})

{'data_dir': './data/tokenized/wikitext', 'model_name': './output/shuff_dyck/pythia-160m/checkpoint-500', 'reinit': False, 'max_seq_length': 2048, 'gradient_accumulation_steps': 2, 'max_steps': 3000, 'bsz': 16, 'warmup_steps': 500, 'logging_steps': 1, 'save_steps': 3000, 'output_dir': './output/wikitext/pythia-160m/shuff_dyck', 'seed': 3407, 'report_to': 'wandb', 'lr': 0.0005, 'min_lr_rate': 0.1, 'override_packing': False, 'use_callback': False}

