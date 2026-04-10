---
date: '2026-04-08'
title: 'Stanford alpaca notes'
---
- `prompt.txt` is for generating data.

> generate_instruction.py: data generation pipeline.

Formatting of seed examples
Parsing and filtering logic: blacklist, length filters, deduplication.

  > This is what prevents the generation loop from producing near-duplicate instructions. Without it, GPT-3 would tend to rephrase the same tasks repeatedly. The else branch (line 199 onward) runs for instructions that pass -- it  records the similarity metadata and appends the instruction to the accepted pool, which also means future instructions are compared against a growing set.

dataclass:

class ModelArguments:
    model_name_or_path: Optional[str] = field(default="facebook/opt-125m")
    

```
model_args, data_args, training_args = parser.parse_args_into_dataclasses()
```

