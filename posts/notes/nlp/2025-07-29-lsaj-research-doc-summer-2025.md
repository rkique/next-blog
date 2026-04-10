---
date: '2025-07-29'
title: 'LSAJ_ Research Doc Summer 2025'
---
# Identity Slippage in LM conversations with distressed users

# Introduction

### Motivation

Despite AI companies often expressing that their language models are not meant for use as a mental health tool, they are increasingly being used in psychotherapeutic contexts. Mental health support platforms like Woebot and Wysa already use chatbots for behavioral tests or empathetic discussions. It’s only a matter of time before LLMs are deployed as assistants to licensed professionals  (https://arxiv.org/pdf/2502.11095). This calls for the development of safe and trustworthy models.   
While prior research has been done on quality and safety of LLM responses as therapists, a limitation is ensuring identity consistency in emotionally complex conversations. LLMs can change tone, value and behavior rapidly based on user responses (https://arxiv.org/html/2412.00804v2). However, in critical conditions, like supporting distressed users, reliable and stable responses are expected. If our contribution successfully determines patterns in the generation of consistent help and avoiding vague solutions or identity slippage of these agents, conflicting beliefs on the usage of such models in psychological settings will settle. Determining ways to solve role slippage will help in other fields that prioritize objectivity too (like ethics and data analysis)
.  
### Contribution

We hope to make the following contributions in our research:

1) Stability of ML psychotherapy (identity retention) across model families, parameter sizing and mental health disorders 
2) Thematic analysis of ML psychotherapy conversations across the same factors mentioned above through topic modeling
3) Evaluating performance of ML psychotherapy in comparison to original human therapists and negative examples
4) Performance of our New Method of Data Regeneration for Context Agnostic responses. Our data filtering process for the interview responses of patients and support seekers need to be fixed so that an arbitrary therapist agent can handle it. We will be prompting GPT 4o with instructions and looking at how effective it is at data regeneration while keeping original semantic value intact

# Relevant Past Papers

[Examining Identity Drift in Conversations of LLM Agents](https://arxiv.org/html/2412.00804v2)  
This research paper explores a glaring problem in interactions between humans and LLMs, specifically something the authors call “Identity Drift”, or an LLM’s inability to sustain a certain role over a certain period of time. This is studied through first asking different LMsto discuss 36 themes, collecting data based on what the LLM’s discuss/how they go about discussing the topic (first without, then with a certain persona). The results showed that larger LMs had trouble with identity drift, struggling more with maintaining the persona they were assigned to have.

[(PDF) Measuring therapist cognitions contributing to therapist drift: a qualitative study](https://www.researchgate.net/publication/348878040_Measuring_therapist_cognitions_contributing_to_therapist_drift_a_qualitative_study)  
CBT is a structured, evidence-based approach to psychology. But, trained therapists sometimes “drift” away from this technique. This paper used focus groups with 12 therapists experienced in handling anxiety disorders, and interviewed them to learn about CBT drifting. They used a thematic analysis in these conversations about cognitions (thoughts that cause drifting). The themes were: reflection of cognitions, internal and external cognitions and fear of cognitions. This is relevant to our research because it is crucial to look at real-world therapist-drifting to evaluate the worth of language models as psychotherapy assistants. 

# Methods 

Our generation procedure will follow a conversation between requests of a distressed support seeker from the datasets and a ML agent. Its identity will be of a therapist trying to pull a distressed user out of a vulnerable state. Our tested disorders will include: depression, PTSD and General Anxiety Disorder (provided by DAIC-WOZ interviews). The other grouping for our experiments will be categorized problems.   

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdn2dl57nT7cWzWKL9gWNuyDFr5A5bQkO-JraWhQ2qGb1LFtOeFXVRYzWEK7zMmbihXZfYUvX70V08uIpoB88YBJZ6ceO9P_AbYbXOlvHTvDQIrau-_NY72aVSq08vOF-4McI8U?key=f628hkgjin4scGbQrAHr4g)**

Within [https://github.com/thu-coai/Emotional-Support-Conversation?tab=readme](https://github.com/thu-coai/Emotional-Support-Conversation?tab=readme), we will merge the *breakup with partner, problems with friends, issues with parent, appearance anxiety, school bullying and issues with children* conversation classifications into one set for social difficulties. The set for professional difficulties will include the *job crisis, academic pressure and procrastination* conversations. The *ongoing depression* labeled conversations will be combined with the above mentioned depression specific interview set.  
These conversations require thorough cleaning as many instances of the support seeker’s utterances can be responses to questions or other statements that have missing context considering that we are creating our own agent that is not exposed to the supporter’s utterances in the datasets. To solve this and smoothen the flow of conversations, we will use GPT 4o to regenerate support seeker utterances so that they make sense with variable responses from the LM we experiment with. I.e. by removing answers to questions entirely or framing answers as general statements while keeping original phrasing as similar as possible.   

For instance, in the context of the following conversation:

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf68qBrzRG0eRF2yI2xBQ5fBJpJAOw40uc40OJLbOWbxiVtvUcCqwZs3K4bF_wqd96YTNzNu3BY9-Y9sRr1LQo9Qiy3Y4pqzwoeeDr6rFhCutLJcssFpRQI_agA4OWdzQVPE57g?key=f628hkgjin4scGbQrAHr4g)**

We will change the responses (I’m fine…., no it’s not snowing…) to generic statements (I’ve been doing well…., the weather is cold but it hasn’t been snowing…) that can be said regardless of previous reactions by the therapist agent. Also, we will not handle ignored questions of the therapist agent by the fixed dataset utterances. This is because the reactions of this perceived support seeker are irrelevant to the performance of the agent in terms of its own relevance and identity retention that we will evaluate later.   
To look at identity drifting, we will use the PsychoBench 13-question identity quantifier. This questionnaire will be taken during 3 snapshots of each conversation log. It measures one’s identity on 4 dimensions (personality, interpersonal relationship, motivation, and emotion), each with many subscales. Then, we will look at if identity was retained for each of these subscales during the conversation. 

Then using BERTopic modeling, we can look at the 10 most important topics and the associated tokens most often used for them. This process to check identity retention and topic modeling will be followed across many factors (model families, model parameter sizes, disorder specific conversations, etc.) It will help reveal model specific and linguistic and technical psychological conditions that cause different results. 

Lastly, the failed ESC conversations set will also be used with the earlier process of generation. Then we will also be comparing topic modeling results for the original dataset conversations (using them as baselines: ideal or failed results) with all of our generated conversations and checking for linguistic patterns or similarity. Essentially we will be checking best and worst performance for different model families, sizes and disorders).

### Experimental Setup

For our experimental setup, we will use GPT-4o and BERTopic to evaluate the identity consistency and coherence of LLMs in therapeutic scenarios. Each conversation will begin with a standardized prompt (e.g., “I’m worried about my big test tomorrow”) from DAIC-WOZ and ESC datasets and proceed with variable supporter/seeker responses. We can then insert sensitive triggers, misinformation, and railguard-pushing attempts midway, then reintroduce the original prompt to check whether the model’s responses remain consistent in tone, behavior, and identity. Identity consistency will be measured using PsychoBench, and evaluating different snapshots of the conversation (beginning, middle, end). Additionally, we will use BERTopic to extract the top 10 emergent themes and associated tokens per conversation type to analyze topic drift.

### Results

We hope to show through a series of experiments that models exhibit significant role change throughout interactions with the user, prompting a need for improvement. This results from the prediction that divergence between input and output topics. 

Ultimately, performing these tests will be crucial in evaluating the suitability of LMs in addressing user concerns. We hope to both inform model development in the future, and provide a practical analysis of which LMs are the best choices for therapy as of now. 

For instance, we expect the LLMs which utilize chain-of-thought prompting to exhibit a more analytical approach to conversations with anyone in discomfort. This is due to the fact that LLMs like ChatGPT utilize a chain-of-thought approach to prompting, planning out each step in its thought process.


# References

[Journal of Medical Internet Research \- The Use of AI in Mental Health Services to Support](https://www.jmir.org/2025/1/e63548/)   
This research paper simply documents the growing use of Artificial Intelligence in Mental Health Services, emphasizing the need for exploration of applying LMs in healthcare. They do this by searching through multiple extensive archives of peer reviewed articles on databases like PubMed and Scopus. Once reviewed, each article was categorized by the AI used, its utility and data flow & either met or didn’t meet a certain criteria. The result showed that despite going through 1217 papers, only 12 of them met the correct criteria, demonstrating a need for exploration.

[A Survey of Large Language Models in Psychotherapy: Current Landscape and Future Directions](https://arxiv.org/pdf/2502.11095)   
This paper dives into LLM application in Psychotherapy, revealing the current world of psychotherapy today and how it might look in the near future. The authors identify multiple ongoing studies in the field, mostly in English and addressing depression. Despite this, they also reveal multiple problems, like cultural and linguistic bias, leading to them encouraging people to immerse themselves in the field.  
[HAI-Policy-Brief-Responsible-Development-LLMs-Psychotherapy.pdf](https://hai.stanford.edu/assets/files/2024-06/HAI-Policy-Brief-Responsible-Development-LLMs-Psychotherapy.pdf)  
“Toward Responsible Development and Evaluation of LLMs in Psychotherapy” dives into the world of Psychotherapy, a treatment for mental health issues by talking with a mental health provider, with researchers hoping that the introduction of LLMs can improve mental health resources all around. They see the integration of LLMs into the field in three different ways, either utilizing an assistive approach that simply help providers with simple tasks, a collaborative approach where both LLMs and a providers create a list of exercises/ formulate a strategy and a fully autonomous, where LLMs fully take the reigns. 

[MentalChat16K: A Benchmark Dataset for Conversational Mental Health Assistance](https://arxiv.org/html/2503.13509v1)  
“MentalChat16K: A Benchmark Dataset for Conversational Mental Health Assistance” explores the creation of MentalChat16K, which as its title suggests, is a dataset mostly meant to act as a benchmark for LLMs being trained in health assistance. It is comprised of two separate datasets, one being conversations between caregiver and patient, the other being dialogue transcribed by ChatGPT 3.5. To see if the dataset actually works, researchers enlisted the help of both LLM and human evaluators, with the LLMs (fine tuned to the dataset) showing improvement (compared to the base LLM).  