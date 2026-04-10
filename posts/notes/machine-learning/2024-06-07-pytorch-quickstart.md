---
date: '2024-06-07'
title: 'PyTorch Quickstart'
---
`torch.utils.data.DataLoader`: an iterable around DataSet
`torch.utils.data.Dataset`. `Dataset`: samples and corresponding labels

choose devices if available:

```
device = (
    "cuda"
    if [torch.cuda.is_available](https://pytorch.org/docs/stable/generated/torch.cuda.is_available.html#torch.cuda.is_available "torch.cuda.is_available")()
    else "mps"
    if [torch.backends.mps.is_available](https://pytorch.org/docs/stable/backends.html#torch.backends.mps.is_available "torch.backends.mps.is_available")()
    else "cpu"
)
```

State Dictionaries are used to save models:

```
torch.save(model.state_dict(), "model.pth")
print("Saved PyTorch Model State to model.pth")
```
