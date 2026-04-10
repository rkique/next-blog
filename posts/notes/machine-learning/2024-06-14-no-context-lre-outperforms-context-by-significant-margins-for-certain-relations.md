---
date: '2024-06-14'
title: 'No-context LRE outperforms context by significant margins for certain relations'
---


No-context LREs are better suited for inflectional tasks:
verb - Ving - 3pSg


"When something is adding, it (adds)"
"Adding (adds)"

### comparing semantic and no-context prompts

With prompt as 'Achieve ':

Semantic and no-context JacobianICL LRE predictions:
With space (subject is "Achieve ")

```
[' achievement', ' result', ' performance', ' an', ' promotion'] [0.25816282629966736, 0.05760391429066658, 0.020700398832559586, 0.014116446487605572, 0.012953978963196278]

[' achievement', ' achieving', ' achieve', ' result', ' achie'] [0.5677151679992676, 0.11178974062204361, 0.07105789333581924, 0.030561618506908417, 0.024365844205021858]
```

Without space:

```
[' achievement', ' achieve', ' achie', ' accomplishment', ' Achievement'] [0.955619215965271, 0.02111237682402134, 0.0036687813699245453, 0.0035007756669074297, 0.001994681777432561]

[' achievement', ' achieve', ' achie', 'ach', ' a'] [0.6326740384101868, 0.06513863056898117, 0.038593363016843796, 0.034325648099184036, 0.020496781915426254]
```


With space: (subject is "Manage ")

```
[' management', ' result', ' achievement', ' performance', ' enjoyment'] [0.10412605106830597, 0.05886753275990486, 0.046933289617300034, 0.021656155586242676, 0.0166043508797884]
[' achievement', ' achieving', ' management', ' achieve', ' success'] [0.3372057378292084, 0.22462746500968933, 0.04857909679412842, 0.035541221499443054, 0.022068047896027565]
```

Without space:

```
[' management', ' manage', ' manager', ' administration', ' managing'] [0.9546042680740356, 0.017759522423148155, 0.007064249832183123, 0.006636249367147684, 0.0030861422419548035]
[' management', ' manage', ' achievement', ' manager', ' managing'] [0.8190439343452454, 0.14456984400749207, 0.007426188327372074, 0.0048702131025493145, 0.004037548787891865]
```

With space (subject is "Punish ", h-index is 3, subject token is " ")

```
[' result', ' performance', ' success', ' participation', ' execution'] [0.13250687718391418, 0.02843361720442772, 0.01793285645544529, 0.01779330149292946, 0.016328051686286926]
```

```
[' achievement', ' achieving', ' achieve', ' success', ' a'] [0.49891743063926697, 0.14519324898719788, 0.06343022733926773, 0.026858050376176834, 0.016939159482717514]
```

Without space: (subject is "Punish", h-index is 2, subject token is (Pun?)ish)

```
[' punishment', ' enforcement', ' punish', '\n', ' sanction'] [0.7507086396217346, 0.013536537997424603, 0.010792269371449947, 0.009450026787817478, 0.009376486763358116]
```

```
[' punishment', ' achievement', ' enforcement', ' punish', ' enforce'] [0.3848090171813965, 0.22977995872497559, 0.07940982282161713, 0.02921324409544468, 0.015394298359751701]

```
### irregular + ment
Semantic Context:
- Seems to be stuck on predicting the previous -re task.
- Why would this be?

```
[' re', '\n', ' rehabilitation', ' reinforcement', ' recreation'] matches ['achievement'] is False
[' re', ' rehabilitation', '\n', ' retribution', ' recreation'] matches ['acknowledgement'] is False
[' rehabilitation', ' re', ' adjustment', '\n', ' recreation'] matches ['adjustment'] is True
['\n', ' re', ' rehabilitation', ' recreation', ' promotion'] matches ['advertisement', 'advertizement'] is False
[' re', ' rehabilitation', '\n', ' recreation', ' reinforcement'] matches ['agreement'] is False
[' re', ' rehabilitation', '\n', ' reinforcement', ' dis'] matches ['alignment'] is False
[' re', ' rehabilitation', '\n', ' renewal', ' reform'] matches ['amendment'] is False
[' recreation', ' amusement', ' entertainment', '\n', ' rehabilitation'] matches ['amusement'] is True
[' re', '\n', ' rehabilitation', ' recreation', ' reinforcement'] matches ['announcement'] is False
[' re', '\n', ' rehabilitation', ' recreation', ' restoration'] matches ['appointment'] is False
[' re', '\n', ' rehabilitation', ' recreation', ' reorgan'] matches ['arrangement'] is False
[' rehabilitation', ' re', ' reass', '\n', ' restoration'] matches ['assessment'] is False
[' reass', ' re', ' rehabilitation', ' assignment', '\n'] matches ['assignment'] is True
[' re', '\n', ' commitment', ' rehabilitation', ' recreation'] matches ['commitment'] is True
[' detachment', ' det', ' re', ' detention', '\n'] matches ['detachment'] is True
[' development', ' rehabilitation', ' re', '\n', ' redevelopment'] matches ['development'] is True
[' dis', '\n', ' re', ' rehabilitation', ' recreation'] matches ['disagreement'] is True
['\n', ' dis', ' re', ' disappointment', ' rep'] matches ['disappointment'] is True
['\n', ' re', ' dis', ' displacement', ' rehabilitation'] matches ['displacement'] is True
[' embarrassment', '\n', ' re', ' rehabilitation', ' dis'] matches ['embarrassment'] is True
[' encouragement', ' re', ' rehabilitation', ' reinforcement', '\n'] matches ['encouragement'] is True
[' re', ' rehabilitation', '\n', ' reinforcement', ' recreation'] matches ['endorsement'] is False
[' enforcement', ' reinforcement', ' re', ' rehabilitation', ' en'] matches ['enforcement'] is True
[' engagement', ' re', ' rehabilitation', ' recreation', '\n'] matches ['engagement'] is True
[' rehabilitation', ' reinforcement', ' re', ' enhancement', '\n'] matches ['enhancement'] is True
[' recreation', ' re', ' enjoyment', ' rehabilitation', '\n'] matches ['enjoyment'] is True
[' rehabilitation', ' re', '\n', ' recreation', ' reinforcement'] matches ['enlightenment'] is False
[' rehabilitation', ' re', '\n', ' enrollment', ' reinforcement'] matches ['enrollment', 'enrolment'] is True
[' entertainment', ' recreation', ' rehabilitation', ' ent', '\n'] matches ['entertainment'] is True
[' rehabilitation', ' re', ' ent', '\n', ' entitlement'] matches ['entitlement'] is True
[' equipment', ' rehabilitation', ' re', ' reinforcement', '\n'] matches ['equipment'] is True
[' rehabilitation', ' re', '\n', ' recreation', ' reinforcement'] matches ['establishment'] is False
[' excitement', ' exc', ' re', '\n', ' recreation'] matches ['excitement'] is True
[' fulfil', ' re', '\n', ' fulfillment', ' rehabilitation'] matches ['fulfilment'] is True
[' fulfillment', ' re', '\n', ' rehabilitation', ' fulfil'] matches ['fulfillment'] is True
[' harassment', '\n', ' rehabilitation', ' re', ' harass'] matches ['harassment'] is True
[' rehabilitation', ' re', ' dis', '\n', ' impairment'] matches ['impairment'] is True
[' rehabilitation', ' re', ' reinforcement', '\n', ' improvement'] matches ['improvement'] is True
[' re', '\n', ' rehabilitation', ' retribution', ' recreation'] matches ['infringement'] is False
[' re', ' rehabilitation', '\n', ' reinforcement', ' recreation'] matches ['investment'] is False
[' rehabilitation', ' re', '\n', ' recreation', ' ent'] matches ['involvement'] is False
[' management', ' rehabilitation', ' re', '\n', ' maintenance'] matches ['management'] is True
[' punishment', ' retribution', ' rehabilitation', '\n', ' re'] matches ['punishment'] is True
[' redevelopment', ' re', ' rehabilitation', ' development', ' recreation'] matches ['redevelopment'] is True
[' re', ' rehabilitation', '\n', ' reimbursement', ' rein'] matches ['reimbursement'] is True
[' reinforcement', ' rehabilitation', ' re', '\n', ' rein'] matches ['reinforcement'] is True
[' replacement', ' re', ' rehabilitation', '\n', ' restoration'] matches ['replacement'] is True
[' re', '\n', ' rehabilitation', ' recreation', ' requ'] matches ['requirement'] is True
[' resentment', ' re', '\n', ' rehabilitation', ' retribution'] matches ['resentment'] is True
```
No Context:

```
[' ', ' improvement', ' endorsement', '\n', ' amendment'] matches ['accomplishment'] is False
[' ', ' improvement', ' achievement', ' enactment', ' endorsement'] matches ['achievement'] is True
[' ', ' acknowledgement', ' endorsement', ' acknowledgment', ' approval'] matches ['acknowledgement'] is True
[' to', ' en', '-', ' mat', ' cos'] matches ['adjustment'] is False
[' ', ' endorsement', ' advertisement', '\n', ' approval'] matches ['advertisement', 'advertizement'] is True
[' to', ' en', '-', ' mat', ' cos'] matches ['agreement'] is False
[' to', ' en', '-', ' mat', ' cos'] matches ['alignment'] is False
[' amendment', ' ', ' endorsement', ' enactment', ' amend'] matches ['amendment'] is True
[' ', ' amendment', ' endorsement', '\n', ' recommendation'] matches ['amusement'] is False
[' ', ' announcement', ' endorsement', ' enactment', ' amendment'] matches ['announcement'] is True
[' ', ' appointment', ' approval', ' endorsement', ' recommendation'] matches ['appointment'] is True
[' ', ' arrangement', ' amendment', ' endorsement', ' agreement'] matches ['arrangement'] is True
[' assessment', ' ', ' evaluation', ' endorsement', ' appraisal'] matches ['assessment'] is True
[' ', ' assignment', ' assessment', ' endorsement', ' approval'] matches ['assignment'] is True
[' to', ' en', '-', ' mat', ' cos'] matches ['commitment'] is False
[' ', ' endorsement', ' assessment', ' amendment', ' adoption'] matches ['detachment'] is False
[' to', ' en', '-', ' mat', ' cos'] matches ['development'] is False
[' ', ' agreement', ' endorsement', ' approval', ' recommendation'] matches ['disagreement'] is False
[' ', ' approval', ' endorsement', ' improvement', ' recommendation'] matches ['disappointment'] is False
[' ', ' endorsement', '\n', ' adoption', ' involvement'] matches ['displacement'] is False
[' ', ' endorsement', ' en', ' improvement', ' enactment'] matches ['embarrassment'] is False
[' encouragement', ' ', ' endorsement', ' recommendation', ' encourage'] matches ['encouragement'] is True
[' endorsement', ' ', ' recommendation', ' approval', ' adoption'] matches ['endorsement'] is True
[' enforcement', ' enforce', ' ', ' enactment', ' endorsement'] matches ['enforcement'] is True
[' ', ' engagement', ' involvement', ' endorsement', ' enactment'] matches ['engagement'] is True
[' enhancement', ' ', ' improvement', ' endorsement', ' amendment'] matches ['enhancement'] is True
[' ', ' endorsement', ' improvement', ' appreciation', ' enjoyment'] matches ['enjoyment'] is True
[' ', ' endorsement', ' improvement', ' enactment', ' amendment'] matches ['enlightenment'] is False
[' ', ' endorsement', ' enactment', ' enrol', ' adoption'] matches ['enrollment', 'enrolment'] is True
[' ', ' endorsement', ' consideration', ' entertainment', '\n'] matches ['entertainment'] is True
[' ', ' endorsement', ' enactment', '\n', ' entitlement'] matches ['entitlement'] is True
[' ', ' endorsement', ' improvement', ' equipment', '\n'] matches ['equipment'] is True
[' en', ' to', '-', ' mat', ' est'] matches ['establishment'] is True
[' ', ' endorsement', ' approval', '\n', ' encouragement'] matches ['excitement'] is False
[' ', ' fulfil', ' endorsement', ' approval', ' enactment'] matches ['fulfilment'] is True
[' ', ' fulfil', ' fulfillment', ' endorsement', ' improvement'] matches ['fulfillment'] is True
[' ', ' endorsement', ' assessment', ' enactment', ' recommendation'] matches ['harassment'] is False
[' ', ' improvement', ' impairment', ' amendment', ' endorsement'] matches ['impairment'] is True
[' to', ' en', '-', ' mat', ' cos'] matches ['improvement'] is False
[' ', ' infringement', ' endorsement', ' amendment', ' improvement'] matches ['infringement'] is True
[' en', ' to', '-', ' mat', ' cos'] matches ['investment'] is False
[' ', ' involvement', ' endorsement', ' enactment', ' amendment'] matches ['involvement'] is True
[' ', ' management', ' amendment', ' administration', ' endorsement'] matches ['management'] is True
[' ', ' enforcement', ' amendment', ' endorsement', ' enactment'] matches ['punishment'] is False
[' development', ' ', ' redevelopment', ' improvement', ' adoption'] matches ['redevelopment'] is True
[' ', ' reimbursement', ' endorsement', '\n', ' recommendation'] matches ['reimbursement'] is True
[' ', ' endorsement', ' reinforcement', ' improvement', ' enforcement'] matches ['reinforcement'] is True
[' to', ' en', '-', ' mat', ' cos'] matches ['replacement'] is False
[' en', ' to', '-', ' mat', ' cos'] matches ['requirement'] is False
[' to', ' en', '-', ' mat', ' cos'] matches ['resentment'] is False
verb+ment_irreg,50,324,321
```

- verb+ment irregular
- uk-city+county
- verb_Ving - 3pSg

Let's look at why this might be. 


It also underperforms on other tasks:
- meronym - substance
- hyponyms - misc

