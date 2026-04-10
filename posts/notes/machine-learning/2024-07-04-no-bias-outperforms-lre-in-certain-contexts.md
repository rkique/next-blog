---
date: '2024-07-04'
title: 'No bias outperforms LRE in certain contexts'
---

```
Testing name - nationality
aristotle [' g', ' it', ' french', ' english', ' r'] [' Aristotle', ' lobe', ' classical', ' antiquity', ' philosophers']
balzac [' french', ' g', ' it', ' b', ' a'] [' consult', ' recourse', "\\'", '{"', ' regression']
beethoven [' g', ' french', ' english', ' it', ' aust'] [' Austrian', ' classical', 'lav', ' von', ' lith']
reg,22,no_bias,7, lm, 42
Testing animal - youth
ape [' pup', ' young', ' baby', ' kit', ' cub'] [' we', ' lit', 'lit', ' Kit', ' kit']
badger [' pup', ' young', ' kit', ' cub', ' p'] ['kit', 'lit', ' kit', ' kits', ' lit']
bear [' pup', ' cub', ' kit', ' young', ' p'] [' cub', 'kit', ' kit', ' kits', 'lit']
reg,37,no_bias,24, lm, 43
Testing UK_city - county
aberdeen [' sh', ' mid', ' ox', ' dev', ' west'] ['kin', ' hip', ' faces', 'hy', ' guys']
belfast [' h', ' mid', ' west', ' sh', ' her'] [' fusion', 'hy', ' holds', ' hug', ' faces']
reg,7,no_bias,4, lm, 22
Testing antonyms - binary
after [' out', ' under', ' in', ' not', '\n'] [' before', ' ahead', 'before', ' under', 'ahead']
ahead [' behind', ' back', ' out', ' ', ' in'] [' behind', 'behind', ' ahead', 'ahead', ' beside']
anterior [' the', ' posterior', ' ', ' to', ' behind'] [' posterior', ' subsequent', ' prior', ' rear', ' behind']
reg,25,no_bias,36, lm, 47
Testing verb_inf - Ved
accept [' accepted', ' accept', ' allowed', ' been', ' be'] [' accept', 'accept', 'Accept', ' accepted', ' accepts']
achieve [' been', ' achieved', ' be', ' to', ' become'] [' achieve', ' Achieve', ' achieved', ' achieves', ' achievable']
add [' added', ' to', ' add', ' be', ' been'] [' add', 'add', 'Add', ' adds', ' added']
reg,44,no_bias,49, lm, 50
Testing country - language
andorra [' english', ' sp', ' french', ' port', ' the'] [' can', ' port', ' gal', ' his', ' the']
argentina [' english', ' sp', ' port', ' french', ' r'] [' port', ' me', ' gal', ' cast', ' it']
australia [' english', ' sp', ' port', ' french', ' r'] [' port', ' aust', ' r', ' it', ' nor']
reg,27,no_bias,11, lm, 47
Testing verb_Ving - Ved
adding [' been', '\n', ' not', ' allowed', ' '] [' adding', 'adding', 'Adding', ' allowing', ' Adding']
agreeing [' been', ' agreed', ' allowed', ' not', '\n'] [' agreeing', ' agreed', ' agreement', 'ag', ' agreements']
allowing [' been', ' allowed', ' not', '\n', ' permitted'] [' allowing', ' allowed', ' permitting', ' authorizing', 'Allow']
reg,40,no_bias,44, lm, 50
Testing hypernyms - misc
armchair [' furniture', ' clothing', ' household', ' the', ' personal'] [' seating', ' sitting', ' sleeping', ' chairs', ' comfort']
blender [' food', ' kitchen', ' household', ' the', ' container'] [' drinking', ' milk', ' liquid', ' caffe', ' baking']
bracelet [' personal', ' clothing', ' jewelry', ' accessory', ' the'] [' jewelry', ' personal', ' jew', ' small', ' bead']
reg,32,no_bias,22, lm, 43
Testing meronyms - substance
atmosphere [' a', '...', ' the', ' many', ' material'] [' air', ' gases', ' Air', ' gas', ' layers']
bag [' a', ' material', '...', ' the', ' plastic'] [' kn', ' pl', ' PP', ' goods', ' PU']
beach ['...', ' a', '...', '…', ' material'] ['Sea', ' Sea', ' SEA', ' sea', 'sea']
reg,9,no_bias,19, lm, 50
Testing noun - plural_irreg
ability [' ', ' abilities', '\n', ' (', ' the'] [' Abilities', ' abilities', ' Ability', ' ability', 'Ability']
academy [' acad', ' ', '\n', ' the', ' agencies'] [' acad', ' Acad', ' Academy', ' academy', ' academia']
activity [' activities', ' ', '\n', ' (', ' business'] [' Activities', ' activities', ' Activity', ' activity', 'Activity']
reg,39,no_bias,49, lm, 50
Testing un+adj_reg
able [' un', ' not', ' unc', ' uncon', ' und'] ['un', 'inc', ' incapable', ' unused', ' ineligible']
acceptable [' un', ' not', ' unacceptable', ' unre', ' unc'] ['un', 'uner', 'inc', ' unacceptable', 'una']
affected [' un', ' not', ' unc', ' und', ' non'] ['uner', 'un', 'U', ' uncond', 'unch']
reg,50,no_bias,50, lm, 50
Testing over+adj_reg
ambitious [' over', ' overe', ' overd', ' overs', ' overly'] [' ambitious', 'GM', ' BA', 'GA', ' AN']
arching [' over', ' overe', ' overd', ' ove', ' overly'] ['AR', 'ARK', ' Arabic', 'ARS', ' Greek']
booked [' over', ' overe', ' overd', ' overly', ' ove'] [' book', 'BE', 'bn', 'BA', 'BP']
reg,50,no_bias,2, lm, 50
Testing adj+ly_reg
according [' typically', '\n', ' actually', ' ', ' generally'] ['WD', 'wd', 'IAS', 'idas', 'IFA']
actual [' typically', ' actually', ' practically', ' currently', ' generally'] [' Actual', ' actual', 'actual', ' Att', ' actor']
additional [' typically', ' generally', ' actually', ' increasingly', ' significantly'] [' additional', ' Additional', 'add', ' Add', 'addle']
reg,21,no_bias,47, lm, 50
Testing name - occupation
andersen [' philosopher', ' poet', ' writer', ' ', ' author'] [' predic', ' per', ' dialog', ' philos', ' philosopher']
aristotle [' philosopher', ' ', ' mathematician', ' scientist', ' poet'] [' Aristotle', ' philosopher', ' philosophy', ' logic', ' philosophers']
balzac [' philosopher', ' writer', ' poet', ' author', ' '] [' essay', ' essays', 'iens', '18', ' sentences']
reg,34,no_bias,29, lm, 49
Testing synonyms - intensity
afraid [' a', ' in', ' to', ' not', ' afraid'] [' scared', ' terrified', ' afraid', ' panicked', ' panic']
angry [' a', ' in', ' st', ' rep', ' evil'] [' rage', ' wrath', ' TER', ' HEL', ' rampage']
ask [' a', ' to', ' in', ' ab', ' not'] ['orman', 'avan', ' to', 'antle', 'ylan']
reg,10,no_bias,12, lm, 41
Testing animal - sound
alpaca [' squ', ' h', ' m', ' ble', ' br'] [' ble', 'ship', ' blew', ' pleading', ' ship']
bear [' roar', ' grow', ' grunt', ' h', ' m'] [' grow', ' roar', ' grunt', ' bear', ' requ']
bee [' squ', ' ch', ' buzz', ' m', ' co'] [' bee', ' buzzing', ' buzz', ' hive', ' sting']
reg,35,no_bias,33, lm, 43
Testing noun - plural_reg
album ['\n', ' ', ' (', ' the', ' all'] [' Album', ' albums', 'album', ' album', ' Alb']
application [' ', '\n', ' the', ' (', '...'] [' Applications', ' applications', ' Application', 'Applications', 'application']
area [' ', ' the', ' (', '\n', ' areas'] [' Area', ' Areas', ' areas', ' area', 'Area']
reg,30,no_bias,50, lm, 50
Testing Ving - verb_inf
achieving ['\n', ' ', ' allow', ' achieve', ' do'] [' achieving', ' happening', ' allowing', ' doing', ' following']
adding ['\n', ' ', ' allow', ' avoid', ' do'] [' allowing', ' adding', ' avoiding', 'adding', ' doing']
allowing [' allow', ' ', '\n', ' avoid', ' be'] [' allowing', 'allow', ' following', ' allow', 'owing']
reg,21,no_bias,28, lm, 50
Testing male - female
actor [' man', ' b', ' male', ' female', ' m'] [' actor', ' man', 'actor', ' stage', ' gentleman']
batman [' b', ' lady', ' female', ' woman', ' bat'] [' Batman', 'Batman', ' bat', ' superhero', ' knight']
boar [' b', ' female', ' bo', ' lady', ' m'] [' bo', ' buck', ' beef', ' bear', ' pig']
reg,14,no_bias,13, lm, 42
Testing hyponyms - misc
bag [' a', ' k', '\n', ' t', ' m'] [' stored', ' available', ' item', ' listed', ' Product']
reg,8,no_bias,13, lm, 44
Testing adj - superlative
able [' most', ' the', ' least', ' not', ' '] [' Able', 'abled', ' able', 'abe', 'ABLE']
angry [' most', ' the', ' ang', ' ', ' least'] [' anger', ' angry', ' Angry', ' Anger', ' ang']
cheap [' most', ' the', '\n', ' least', ' '] [' cheap', ' Cheap', ' cheaply', 'che', ' cheapest']
reg,25,no_bias,45, lm, 48
```