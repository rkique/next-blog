---
date: '2023-03-05'
title: 'DL_conceptual3'
---
1a. A convolutional neural net is more suitable because it is partially connected, which means outputs are affected only by nearby inputs and not the whole image. This allows it to focus on local differences and patterns, such as detecting the edges in the digit pictures. The convolutions are also translational equivariant, whereas fully connected networks are more susceptible to shifts in position, and would have trouble classifying each digit as a 3.

b. The layer itself would produce different outputs because the pooling layer is not wide enough to encompass the translation. However, the neural net might still produce the correct outputs because the convolution is translationally equivariant, meaning that translations to the original image don't really (?) affect the output.

c. The convolutional layer would produce convolved outputs: its role is to identify features from the images. Using those features, the fully connected layer determines the classification of the image.

2a. Earlier convolutional layers might extract edges and specific local features of the polar bear, such as the eyes and nose. Later ones might locate the bear and provide spatial information, e.g. the relation of the head to the body.

b. We can determine the output width and height given the filter count, filter size, padding, and stride. We have 1 filter of 3 x 3 size, no padding because we are using the VALID method, and a stride of 2. Then we calculate both width and height to be $\frac{13 - 3 - 0}{2} + 1 = 6$: our convolved matrix is 6 by 6.


1a. We might use 1D CNNs for working with sequences; as we've seen with n-grams, the idea of learning filters to convolve with a sliding window of previous words to predict next words would be useful. Other situations in which a 1D CNN might be useful include DNA sequences, audio transcription, or predicting traffic jams. By training with sensor data which counts cars at different times of day, the CNN could learn patterns of traffic and predict times of day when routes are busy.

2b. Our 1D CNN could learn 1D filters that correspond to semantic features of the tweet, and then combine those in a fully connected network to determine the emotion expressed. We would train the model on labeled data, with input tweet and ground truth classification provided. Our CNN kernel could convolve over one-hot encoded words in the tweet. We could take into account variable tweet sizes by getting a set of probabilities per sentence and averaging them for the tweet.

Drawing on the podcast and paper, discuss one technology-driven (implemented using technology/software) and one human-driven method (manually implemented using humans) Apple is using to protect user’s privacy while identifying known CSAM images. (4-6 sentences)


One technology-driven method in the plan involved Private Set Intersection, a cryptographic protocol used between Apple servers and user devices. On the server side, a series of transformations are done on the NeuralHashes of known CSAM images, and followed with a final blinding step that only the server knows. On the user side, the same series of transformations would be carried out, but the final step is done on the server after a photo is uploaded. Only if an image hash matches a known CSAM hash is the server able to decrypt the data and view the image.

One human-driven method was the manual checking of images by a human reviewer at Apple. Given that a Photos account has both found CSAM matches and reached a threshold of those matches, the images in question is revealed and viewed to verify that they are the same. Because the PSI protocol still protects the encryption of other images on an iCloud Photos account, only the matching images would be revealed to the human reviewer.

