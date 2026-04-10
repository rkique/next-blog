---
date: '2024-07-15'
title: 'The Jacobian is really displaying morphology'
---
We use top-five faithfulness because it is more indicative of the prediction space being produced by the LM. We produce a *lower bound* for approximator faithfulness by searching for exact matches among the top five predictions, and an *upper bound* by searching for substrings within the top five predictions.

It is really displaying morphology for pluralization, Ved, verb+ment, 

Right now, I am running the lower bound faithfulness test for beta=1, 3.3, 10, 33.3, and 100. The critical thing is to show that the LRE learns morphology.

A more sensible bound is if the approximation is a substring of the LM prediction.

```
Testing name - nationality
einstein [' g', ' it', ' aust', ' french', ' english'] [' Austria', ' Austrian', ' physicists', ' gravitational', ' sch']
mozart [' g', ' english', ' it', ' french', ' r'] ['loc', 'let', 'nil', 'none', 'seq']
reg,5,no_bias,5, lm, 39
Testing animal - youth
cattle [' pup', ' baby', ' young', ' calf', ' lar'] [' calf', ' we', ' fo', ' lamb', ' calves']
shark [' pup', ' young', ' baby', ' p', ' lar'] ['lit', ' pup', 'gener', ' lit', ' suit']
insect [' pup', ' lar', ' baby', ' young', ' p'] [' pup', ' larvae', 'emb', ' coc', ' cater']
reg,6,no_bias,18, lm, 44
Testing verb_Ving - 3pSg
appearing [' is', ' appears', '\n', ' seems', ' becomes'] [' appearing', 'app', ' appearances', 'Appearances', ' appar']
asking [' is', ' becomes', '\n', ' ', ' does'] ['asking', ' asking', ' requesting', 'ask', ' seeking']
following [' is', ' becomes', '\n', ' continues', ' includes'] [' following', 'follow', ' complying', 'f', 'esting']
reg,0,no_bias,0, lm, 50
Testing noun+less_reg
child [' un', ' a', ' unf', ' without', '\n'] [' child', 'child', 'Child', ' Child', ' children']
meat [' a', ' un', ' without', '\n', ' unf'] ['meat', ' meat', 'Meat', ' Meat', ' meats']
remorse [' un', ' a', ' without', ' unf', ' devoid'] [' remorse', 'rem', 'ro', 'rob', ' rem']
reg,2,no_bias,46, lm, 49
Testing verb+able_reg
prefer [' capable', ' a', ' ', ' manageable', ' possible'] [' preferable', ' prefer', ' preference', ' preferred', ' preferential']
improve [' impro', ' capable', ' a', ' to', ' possible'] ['improve', ' impro', ' improve', ' improvement', ' improving']
recognize [' capable', ' a', ' manageable', ' acceptable', ' '] [' recognize', 'recogn', ' recognizable', ' recognition', ' recogn']
reg,3,no_bias,38, lm, 50
Testing UK_city - county
worcester [' west', ' mid', ' sh', ' w', ' ox'] ['erv', ' souls', 'verse', 'cester', ' vibration']
inverness [' west', ' the', ' w', ' mid', ' north'] [' souls', ' inherent', 'ound', ' sill', ' inverse']
reg,1,no_bias,6, lm, 22
Testing antonyms - binary
first ['\n', ' the', ' not', ' ', ' to'] ['second', ' second', ' seconds', 'third', 'seconds']
before ['\n', ' the', ' not', ' ', ' to'] ['after', ' after', ' behind', 'behind', ' afterwards']
reg,1,no_bias,27, lm, 47
Testing verb_inf - 3pSg
receive [' is', '\n', ' does', '...', ' has'] [' receive', ' Rece', ' received', ' Received', 'RE']
refer [' is', '\n', '...', ' refers', ' has'] [' refer', ' reference', ' refere', ' Refer', 'ref']
appear [' is', '\n', ' does', ' ', ' has'] [' appear', ' Appearance', ' Appears', ' appearance', ' apparent']
reg,1,no_bias,45, lm, 50
Testing re+verb_reg
submit [' re', ' rec', ' reass', ' recon', ' repeat'] [' sub', ' submit', ' subp', ' submission', ' unsub']
introduce [' re', ' rec', ' reass', ' recon', ' repeat'] [' reconsider', ' reintrodu', ' revisit', ' re', ' rethink']
locate [' re', ' rec', ' reass', ' recon', ' repeat'] [' rel', ' re', ' revisit', ' le', ' recal']
reg,50,no_bias,11, lm, 50
Testing verb_inf - Ved
unite ['\n', ' to', ' ', ' (', ' not'] [' unite', ' united', 'une', ' unified', 'UNE']
include ['\n', ' to', ' ', ' be', ' not'] [' include', 'include', ' Include', ' included', ' includes']
expect ['\n', ' ', ' to', ' (', ' not'] [' expect', ' Expect', 'EXP', ' expectancy', ' expectation']
reg,5,no_bias,41, lm, 50
Testing country - language
peru [' english', ' sp', ' french', ' port', ' ch'] [' port', ' cast', ' his', ' gu', ' chin']
iran [' english', ' sp', ' ar', ' r', ' french'] [' r', ' port', ' his', ' ar', ' he']
nicaragua [' sp', ' english', ' french', ' g', ' the'] [' cast', ' gu', ' his', ' the', ' port']
reg,14,no_bias,7, lm, 46
Testing meronyms - part
window [' frame', ' p', ' handle', ' door', ' hole'] [' pane', ' panel', ' glass', ' sill', ' frame']
tonne [' p', ' sp', ' hole', ' handle', ' f'] [' triangular', 'NL', 'NI', ' solid', ' segment']
bus [' p', ' handle', ' body', ' frame', ' hole'] [' wheel', 'iler', ' side', ' wagon', ' squ']
reg,4,no_bias,10, lm, 43
Testing verb_Ving - Ved
managing [' been', ' ', '\n', ' not', '...'] [' managing', ' managed', ' Managing', 'managed', ' management']
spending [' been', '\n', ' ', ' not', ' spent'] [' spending', ' Spending', ' spent', ' spend', 'sp']
appointing [' been', '\n', ' ', ' not', ' appointed'] [' appointed', ' appointing', 'appointed', ' appoint', 'apping']
reg,0,no_bias,11, lm, 50
Testing animal - shelter
mouse [' den', ' nest', ' bur', ' hole', ' home'] [' bur', ' mouse', ' sque', 'Mouse', ' hole']
chimpanzee [' den', ' nest', ' bur', ' cave', ' home'] [' chimpan', ' monkey', ' chimpanzees', ' primates', ' ape']
trout [' den', ' nest', ' bur', ' hole', ' cave'] [' trout', ' stream', ' river', ' Trout', ' freshwater']
reg,10,no_bias,6, lm, 46
Testing hypernyms - misc
plum [' the', ' item', '\n', ' a', ' food'] [' fruit', ' fru', ' drinking', 'fruit', ' pudding']
dress [' item', ' the', ' clothing', ' clothes', '\n'] [' gown', ' panties', ' dresses', ' underwear', ' clothing']
reg,6,no_bias,11, lm, 41
Testing meronyms - substance
desk [' a', '...', ' material', ' the', '…'] [' parts', ' plan', ' seven', ' various', ' materials']
ocean [' a', '...', ' the', '…', '\n'] [' ashore', 'a', 'sea', ' A', ' afloat']
plastic [' a', '...', ' the', ' material', ' chemicals'] [' poly', ' PET', ' recycling', ' committees', ' injecting']
reg,0,no_bias,7, lm, 49
Testing noun - plural_irreg
activity ['\n', ' ', ' the', ' (', ' various'] [' Activities', ' activities', 'activ', ' Activity', 'Activ']
authority ['\n', ' ', ' the', ' (', ' a'] [' Authorities', ' Authority', ' authorities', 'Authorities', ' authority']
industry ['\n', ' ', ' the', ' (', ' various'] [' industries', ' Industries', 'indust', ' Industry', 'Indust']
reg,3,no_bias,43, lm, 50
Testing un+adj_reg
lucky [' un', ' not', ' unc', '\n', ' unl'] [' unlucky', 'un', 'ug', 'rol', 'una']
biased [' un', ' not', ' non', ' und', ' unc'] [' unbiased', 'uner', ' uncond', 'un', 'unch']
known [' un', ' not', ' unknown', ' und', ' unc'] [' unknown', 'unknown', ' unknow', ' unsus', 'un']
reg,50,no_bias,35, lm, 50
Testing verb+ment_irreg
acknowledge ['\n', ' promotion', ' requirement', ' re', ' ent'] [' acknowledgment', ' acknowledgement', ' acknowledging', ' acknowledge', 'ack']
replace ['\n', ' re', ' promotion', ' requirement', ' '] ['replace', 'rn', ' rein', 'repl', ' replacement']
excite [' promotion', ' ent', '\n', ' engagement', ' employment'] [' excitement', 'exc', ' exciting', 'ex', ' exc']
reg,11,no_bias,43, lm, 50
Testing adj+ness_reg
interesting [' being', ' the', ' a', '\n', '...'] ['interesting', ' interesting', 'Interest', ' Interesting', ' INTER']
random [' a', ' the', '\n', ' being', '...'] [' RAND', 'Random', 'random', ' random', ' Random']


sad [' a', ' being', ' the', '\n', '...'] [' sadness', 'Sad', ' sad', ' Sad', ' sadd']
```