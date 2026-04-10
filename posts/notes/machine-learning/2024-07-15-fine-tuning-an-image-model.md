---
date: '2024-07-15'
title: 'Fine-tuning (an image model)'
---

==Four steps==

1. Pretrain a neural network model, i.e., the _source model_, on a source dataset (e.g., the ImageNet dataset).

2. Create a new neural network model, i.e., the _target model_. This copies all model designs and their parameters on the source model except the output layer. 
	- We assume that these model parameters contain the knowledge learned from the source dataset and this knowledge will also be applicable to the target dataset. ==We also assume that the output layer of the source model is closely related to the labels of the source dataset==; thus it is not used in the target model.

4. Add an output layer to the target model, whose number of outputs is the number of categories in the target dataset. Then randomly initialize the model parameters of this layer.

5. Train the target model on the target dataset, such as a chair dataset. The output layer will be trained from scratch, while the parameters of all the other layers are fine-tuned based on the parameters of the source model.
