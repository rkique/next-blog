---
date: '2024-07-19'
title: 'Using the capitalized versions of last prompt objects doesn''t change the embedding noiceably'
---
```
obj = copy.copy(sample.object[0])

#get the final state for the 
#get the final state for the capitalized initial subject token
init_object_id = mt.tokenizer(sample.object[0]).input_ids[0]
init_object_token = mt.tokenizer.convert_ids_to_tokens(init_object_id)
mod_prompt = prompt + f" {sample.object[0].capitalize()}"
sample.object[0] = f" {init_object_token.capitalize()}"
fullobj_hs = build.get_final_state(mt, sample, mod_prompt)

#get the final state for the initial subject token
init_object_id = mt.tokenizer(obj).input_ids[0]
init_object_token = mt.tokenizer.convert_ids_to_tokens(init_object_id)
mod_prompt = prompt + f" {obj}"
sample.object[0] = init_object_token
obj_hs = build.get_final_state(mt, sample, mod_prompt)
```'
