---
date: '2024-07-11'
title: 'beta=10 LRE performance hypernyms - misc'
---

LRE and then Jacobian. The bias term demonstrates generalization in many cases, e.g. from croissant --> food, cup --> beverage, gasoline --> utility. What do we call hierarchical genrealization? Park reports that "Hierarchically related concepts live in orthogonal subspaces". 

So, in order to generalize, we would expect the bias term to be orthogonal to the original Ws term. Let's test this. Hmm, it didn't work. What does the above statement really mean? It says that a hierarchical concept direction is represented by a vector orthogonal to the original space, so we could look at hypernyms - animal for example. We could use the span "animal", "mammal", and try to interpret the bias vector accordingly.

```
armchair [' furniture', ' furn', ' Furn', ' sofa', ' furnish'] [' Furn', 'Sit', 'uph', 'Ind', ' sofa']
blender [' kitchen', ' appliance', ' household', ' food', ' appliances'] [' kitchen', ' mechanical', ' powered', 'Food', ' Kitchen']
bracelet [' jewelry', ' personal', ' jew', ' accessory', ' bracelet'] [' jewelry', ' jew', ' bracelet', ' personal', ' necklace']
brooch [' jewelry', ' jew', ' cl', ' jewels', ' clothes'] [' jewels', ' jewelry', 'cl', 'Cl', ' jew']
cake [' food', ' baking', ' dessert', ' eating', ' cooking'] [' baking', ' desserts', ' dessert', ' pastry', ' cakes']
computer [' computing', ' computers', ' electronic', ' computer', ' electronics'] [' computing', ' computers', ' Comput', ' Computer', ' Computing']
croissant [' food', ' pastry', ' bread', ' bakery', ' edible'] [' bakery', ' pastry', ' baked', ' bread', ' sandwiches']
cup [' beverage', ' drinking', ' mug', ' tea', ' drink'] [' drinking', 'Tea', ' tea', ' beverage', ' spoon']
denim [' clothes', ' clothing', ' jeans', ' cloth', ' pants'] [' jeans', ' denim', ' clothes', ' pants', ' clothing']
deodorant [' hygiene', ' bathroom', ' toilet', ' bath', ' bathing'] [' bathrooms', ' bathing', ' hygiene', ' baths', ' showers']
desk [' office', ' furniture', ' work', ' the', ' workplace'] [' office', ' workplace', ' offices', ' workspace', ' work']
diary [' personal', ' exercise', ' diary', ' self', ' the'] [' exercising', ' exercise', ' diary', ' reporting', 'ilo']
dishwasher [' appliance', ' appliances', ' household', ' domestic', ' washing'] [' appliances', ' washing', ' cleaning', 'wash', ' appliance']
dress [' clothing', ' clothes', ' cloth', ' underwear', ' garment'] [' panties', ' clothing', ' underwear', ' gown', ' clothes']
fridge [' fridge', ' kitchen', ' refrigerator', ' appliance', ' food'] [' fridge', ' refrigerator', ' refriger', ' cooling', ' kitchen']
gasoline [' utility', ' cleaning', ' chemical', ' automobile', ' gas'] [' gasoline', ' gas', ' petrol', ' spraying', ' automobile']
grapefruit [' fruit', ' food', ' citrus', ' fruits', '...'] ['cit', 'Fresh', 'Force', 'fruit', 'iton']
hamburger [' food', ' eating', ' meat', ' hamb', ' dish'] [' hamb', 'Meat', ' burger', ' grilled', ' sandwiches']
jacket [' clothing', ' clothes', ' coat', ' the', ' jacket'] [' coat', ' trousers', ' coats', ' jeans', ' jackets']
jeans [' clothing', ' clothes', ' jeans', ' underwear', ' pants'] [' jeans', ' trousers', ' denim', ' clothing', ' pants']
juicer [' kitchen', ' appliance', ' food', ' juice', ' fruit'] [' juice', ' kitchen', ' milk', ' exercising', ' beverage']
lemon [' fruit', ' kitchen', ' citrus', ' the', '...'] ['cit', ' citrus', ' acidic', ' lemon', ' fruit']
lotion [' bath', ' bathing', ' skin', ' bathroom', ' body'] ['Skin', ' bathing', ' dermat', ' bath', ' moistur']
hypernyms - misc,reg,24,no_bias,11,lm,43
```