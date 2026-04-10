---
date: '2024-06-10'
title: 'The Pile -- Notes'
---

We introduce new datasets derived from the fol-
lowing sources: PubMed Central, ArXiv, GitHub, the FreeLaw Project, Stack Exchange, the US Patent and Trademark Office, PubMed, Ubuntu IRC, HackerNews, YouTube, PhilPapers, and NIH ExPorter. In addition, we incorporate several existing high-quality datasets: Books3 (Presser, 2020), Project Gutenberg (PG-19) (Rae et al., 2019), Open Subtitles (Tiedemann, 2016), English Wikipedia, DM Mathematics (Saxton et al., 2019), EuroParl (Koehn, 2005), and the Enron Emails corpus (Klimt
and Yang, 2004).


Pile-CC:  a new filtered subset of Common Crawl

Books3: Bibliotik private tracker (Presser 2020)

Bits per Byte:
LT /LB is 0.29335 GPT-2 tokens/byte across the Pile

![[Screenshot 2024-06-10 at 12.48.22 PM.png]]

The two most comparable publicly available datasets to the Pile are CC-100 (Wenzek et al., 2019) and C4/mC4 (Raffel et al., 2019). C4 is comparably-sized to the Pile, while mC4 and CC- 100 are larger, multilingual datasets. However, C4/mC4 require immense computational resources to preprocess the data, with its maintainers even recommending the use of a distributed cloud service,17 setting a high bar of entry to using these datasets. CC-100 is directly downloadable and pre-cleaned; however, its English portion is much smaller than the Pile. 