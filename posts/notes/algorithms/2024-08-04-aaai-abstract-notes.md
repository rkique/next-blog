---
date: '2024-08-04'
title: 'AAAI Abstract notes'
---
Non-student advisors and collaborators should be acknowledged appropriately, as coauthors or otherwise.

In the spirit of this year’s bridge theme, if your research unifies methodologies from multiple AI disciplines, we suggest that you include in your abstract and poster a discussion of how this bridge enables your research objectives.

The abstract must include the following: 
- title
- the primary author’s full name, affiliation
- postal address, phone number, URL (if available), and e-mail address
- all co-authors’ full names and affiliations; technical description;
- any figures, tables, or diagrams.
- Students should submit a supplemental file containing complementary material about their research. This file must be in pdf or zip format and may not exceed 20MB in size. The supplemental file is critical to reviewers, because of the brevity of the submissions.

- Abstract
- Introduction
- Related Work
- Research Questions
- Methodology
- Future Work
- References


- A fully-compliant PDF file.  
- Your LATEX source file submitted as a single .tex file (do   not use the “input” command to include sections of your  paper — every section must be in the single source file).  (The only allowable exception is .bib file, which should   be included separately).  
• The bibliography (.bib) file(s).  
• Your source must compile on our system, which includes 
only standard LATEX 2020 TeXLive support files.  
• Only the graphics files used in compiling paper.  
• The LATEX-generated files (e.g. .aux, .bbl file, PDF, etc.).  
Your LATEX source will be reviewed and recompiled on our  
system (if it does not compile, your paper will be returned  
to you. Do not submit your source in multiple text files.  
Your single LATEX source file must include all your text, your  
bibliography (formatted using aaai25.bst), and any custom  
macros.  
Your files should work without any supporting files (other  
than the program itself) on any computer with a standard  
LATEX distribution.


```
%File: formatting-instructions-latex-2025.tex
%release 2025.0
\documentclass[letterpaper]{article} % DO NOT CHANGE THIS
\usepackage{aaai25}  % DO NOT CHANGE THIS
\usepackage{times}  % DO NOT CHANGE THIS
\usepackage{helvet}  % DO NOT CHANGE THIS
\usepackage{courier}  % DO NOT CHANGE THIS
\usepackage[hyphens]{url}  % DO NOT CHANGE THIS
\usepackage{graphicx} % DO NOT CHANGE THIS
\urlstyle{rm} % DO NOT CHANGE THIS
\def\UrlFont{\rm}  % DO NOT CHANGE THIS
\usepackage{natbib}  % DO NOT CHANGE THIS AND DO NOT ADD ANY OPTIONS TO IT
\usepackage{caption} % DO NOT CHANGE THIS AND DO NOT ADD ANY OPTIONS TO IT
\frenchspacing  % DO NOT CHANGE THIS
\setlength{\pdfpagewidth}{8.5in}  % DO NOT CHANGE THIS
\setlength{\pdfpageheight}{11in}  % DO NOT CHANGE THIS
%
% These are recommended to typeset algorithms but not required. See the subsubsection on algorithms. Remove them if you don't have algorithms in your paper.
\usepackage{algorithm}
\usepackage{algorithmic}

%
% These are are recommended to typeset listings but not required. See the subsubsection on listing. Remove this block if you don't have listings in your paper.
\usepackage{newfloat}
\usepackage{listings}
\DeclareCaptionStyle{ruled}{labelfont=normalfont,labelsep=colon,strut=off} % DO NOT CHANGE THIS
\lstset{%
	basicstyle={\footnotesize\ttfamily},% footnotesize acceptable for monospace
	numbers=left,numberstyle=\footnotesize,xleftmargin=2em,% show line numbers, remove this entire line if you don't want the numbers.
	aboveskip=0pt,belowskip=0pt,%
	showstringspaces=false,tabsize=2,breaklines=true}
\floatstyle{ruled}
\newfloat{listing}{tb}{lst}{}
\floatname{listing}{Listing}
%
% Keep the \pdfinfo as shown here. There's no need
% for you to add the /Title and /Author tags.
\pdfinfo{
/TemplateVersion (2025.1)
}
\usepackage{amsmath}
\usepackage{amssymb}
% DISALLOWED PACKAGES
% \usepackage{authblk} -- This package is specifically forbidden
% \usepackage{balance} -- This package is specifically forbidden
% \usepackage{color (if used in text)
% \usepackage{CJK} -- This package is specifically forbidden
% \usepackage{float} -- This package is specifically forbidden
% \usepackage{flushend} -- This package is specifically forbidden
% \usepackage{fontenc} -- This package is specifically forbidden
% \usepackage{fullpage} -- This package is specifically forbidden
% \usepackage{geometry} -- This package is specifically forbidden
% \usepackage{grffile} -- This package is specifically forbidden
% \usepackage{hyperref} -- This package is specifically forbidden
% \usepackage{navigator} -- This package is specifically forbidden
% (or any other package that embeds links such as navigator or hyperref)
% \indentfirst} -- This package is specifically forbidden
% \layout} -- This package is specifically forbidden
% \multicol} -- This package is specifically forbidden
% \nameref} -- This package is specifically forbidden
% \usepackage{savetrees} -- This package is specifically forbidden
% \usepackage{setspace} -- This package is specifically forbidden
% \usepackage{stfloats} -- This package is specifically forbidden
% \usepackage{tabu} -- This package is specifically forbidden
% \usepackage{titlesec} -- This package is specifically forbidden
% \usepackage{tocbibind} -- This package is specifically forbidden
% \usepackage{ulem} -- This package is specifically forbidden
% \usepackage{wrapfig} -- This package is specifically forbidden
% DISALLOWED COMMANDS
% \nocopyright -- Your paper will not be published if you use this command
% \addtolength -- This command may not be used
% \balance -- This command may not be used
% \baselinestretch -- Your paper will not be published if you use this command
% \clearpage -- No page breaks of any kind may be used for the final version of your paper
% \columnsep -- This command may not be used
% \newpage -- No page breaks of any kind may be used for the final version of your paper
% \pagebreak -- No page breaks of any kind may be used for the final version of your paperr
% \pagestyle -- This command may not be used
% \tiny -- This is not an acceptable font size.
% \vspace{- -- No negative value may be used in proximity of a caption, figure, table, section, subsection, subsubsection, or reference
% \vskip{- -- No negative value may be used to alter spacing above or below a caption, figure, table, section, subsection, subsubsection, or reference

\setcounter{secnumdepth}{0} %May be changed to 1 or 2 if section numbers are desired.

\title{Linear Decoding of Morphology Relations in Language Models}
\author {
    Eric Xia\textsuperscript{\rm 1},
    Jugal Kalita \textsuperscript{\rm 2}
}
\affiliations {
    \textsuperscript{\rm 1}Brown University\\
    \textsuperscript{\rm 2}University of Colorado Colorado Springs\\
    eric\_xia@brown.edu, jkalita@uccs.edu
}

\begin{document}

\maketitle


\begin{abstract}
The recent success of transformer language models owes much to their conversational fluency and productivity in linguistic and morphological aspects. An affine Taylor approximation has been found to be a good approximation for transformer computations over certain factual and encyclopedic relations. We show that the truly linear approximation $W\textbf{s}$, where $\textbf{s}$ is a middle layer representation of the base form and $W$ is a local model derivative, is necessary and sufficient to approximate \textit{morphological derivations}, achieving above 80\% top-1 accuracy across most morphological tasks in the Bigger Analogy Test Set. We argue that many morphological forms in transformer models are likely linearly encoded, with implications for how entities are represented.
\end{abstract}

\noindent
% \includegraphics[width=1\linewidth]{compute_3.png}
% \captionof{figure}{Adapting morphological analogies from the Bigger Analogy Test Set to relational contexts reveals that many are genuinely linearly approximable, such as \textbf{[V+tion]}, \textbf{[V+able]}, \textbf{[N - plural]}, and \textbf{[V - V\_ed]}.}
% \label{fig:compute}

\begin{links}
    \link{Code}{https://github.com/rkique/linear-morphology}
\end{links}

\section{Introduction}
Large language models display impressive capabilities for factual recall, which commonly involve relations between entities \cite{Brown:20}. Work to date around relational representation in LMs have focused on factual subject-object relations \cite{Meng:22b}; however, language encompasses a much broader range of relations. The impressive conversational ability of LLMs depends on their lexical and morphological productivity, and uncovering how models are able to achieve this is an important aspect of model interpretability. We show a linear transformation of a early hidden state with a model derivative approximates morphological derivations over fixed relational contexts. This suggests that transformers encode morphology linearly, in an even simpler fashion than the affine LRE \cite{Her:23}. We show relational approximation can be applied to a broad range of linguistic phenomena, opening avenues for further research into model representations. To the best of our knowledge, we are the first to show that a linear transformation of a language model's internal state can effectively approximate a wide range of outputs.
\section{Prior Work and Methods}
\textbf{Transformer Computation} In autoregressive transformer language models, input text is converted to a sequence of tokens $t_1 \ldots t_n$ embedded as $x_1 \ldots x_n \in \mathbb{R}^d$. The hidden states $x_1 \ldots x_n$ are then passed through $L$ transformer layers, each composed of a self-attention layer $a^l$ and an multi-layer perceptron (MLP) layer $m^l$, and then decoded by the decoder head $D$ to a probability distribution over tokens. The representation state $x^l_i$ of the $i^\mathrm{th}$ token at layer $l$ is obtained as $x^l_i = x^{l-1}_i + a^l_i + m^l_i$, where $\mathrm{a}^l_i$ is multi-headed Key-Value Query attention over $x^{l-1}$\cite{Vas:17} and $m^l_i$ the $i^\mathrm{th}$ output of the $l ^\mathrm{th}$ MLP sublayer.\\ \\
\begin{figure*}[h!]
    \centering
    \includegraphics[width=0.8\linewidth]{gpt_j_3_9.png}
    \caption{Breaking down the affine LRE into Jacobian ($W\textbf{s}$) and Bias ($\textbf{s} + b$) approximators shows that $W$ is sufficient and necessary to approximate morphological relations. It also suggests that $W$ and $b$ play complementary roles: the Jacobian is responsible for approximating alternate forms, while the bias is responsible for conceptual shifts.}
    \label{fig:gpt-j}
\end{figure*} 
\textbf{Linear Representation} Paccanaro and Hinton \shortcite{Pac:01} introduced the concept of the linear relational embedding for learning relational knowledge from triples (Colin, \textit{child}, Victoria). Mikolov et. al.~\shortcite{Mik:13} demonstrated correspondences between directional binary relations and the addition of embedding vectors in the Word2Vec vector space. Park et al.~\shortcite{Park:23} formalized concept intervention as adding an embedding representation $\bar{\lambda}_W$ to change the probability of an output reflecting a concept $W$. \\ \\
\textbf{Affine Approximation}  We directly build off the affine LRE \cite{Her:23}, which hypothesizes the LM is implicitly learning linear relational embeddings. 
The LRE assumes transformer computations are linearly approximable within specific contextual relations. The function to calculate the object state $x^L_o = \textbf{o}$ from a subject $x^i_s = \textbf{s}$ with a fixed relational context, $\textbf{o} = F(\textbf{s})$, is modeled by a first-order Taylor approximation of $F$ about a number of examples $s_1 \ldots s_n$. For $i = 1 \ldots n$:
 \begin{align*}
F(\textbf{s}) &\approx F(s_i) + W(\textbf{s} - s_i) \nonumber \\
       &= F(s_i) + W\textbf{s} - Ws_i \nonumber \\
       &= W\textbf{s} + b,  \nonumber \\
\text{where } b &= F(s_i) - Ws_i \nonumber
\end{align*}
Then $W$ and $b$ over a relation can be calculated as the mean Jacobian and bias between $n$ enriched subjects $s_1 \ldots s_n$ and outputs $F(s_1) \ldots F(s_n)$ for a fixed relation prompt:\footnote{The scalar $\beta$ is introduced to account for differences in magnitude due to layer normalization in the decoder head.}
\begin{align*}
W &= \mathbb{E}_{s_i}\left[\left.\frac{\partial F}{\partial s}\right|_{s_i} \right] \nonumber \\ 
b &= \mathbb{E}_{s_i}\left[\left. F(s) - \frac{\partial F}{\partial s} \; s\right |_{s_i} \right] \nonumber  \\
 \textbf{o} &= F(\textbf{s}) \approx \beta W \textbf{s} + b
 \end{align*}
However, the LRE diverges from its namesake by introducing bias $b$ and scaling $\beta$ terms. Under the assumption that the relation is not only linearly approximable, but truly linear, we would expect the following to be valid:
\begin{align*}
F(\textbf{s}) &\approx F'(s_i)\textbf{s} \nonumber \\
W &= \mathbb{E}_{s_i}\left[\left.\frac{\partial F}{\partial s}\right|_{s_i} \right] \nonumber \\
\textbf{o} &= F(\textbf{s}) \approx W \textbf{s} 
\end{align*}
which is true to the original \cite{Pac:01}. \\
\textbf{Dataset} We adapt the Bigger Analogy Test Set \cite{Glad:16} to a relational dataset by introducing relation-specific prompts for each analogy dataset. For example, the derivational morphology dataset $\textbf{[verb+ment]}$ uses the clozed prompt \textit{"To \{\} results in a"}. One corresponding prompt would be \textit{"To fulfill results in a"}, eliciting the object \textit{"fulfillment"}. Following the testing standards established by Hernandez \shortcite{Her:23}, we use 8 ICL examples for 8 different subject-object pairs to extract Jacobians for each relation. \\ \\ 
We restrict evaluation to the pairs for which the LM computation is successful in reproducing the actual object in question: for both GPT-J and Llama, this is all or nearly all of the examples provided in BATS. \\ \\
 \textbf{Evaluation} Let the relational approximator be $\tilde{F}$. Then for token $t$ and decoder head $D$, we calculate accuracy as the top token match rate of the approximator and LM:
\begin{equation*}
\label{eq:faithfulness}
\underset{t}{\mathrm{argmax}} \ D(F(\textbf{s}))_t \stackrel{?}{=} \underset{t}{\mathrm{argmax}} \ D(\tilde{{F}}(\textbf{s}))_t
\end{equation*} 
We test the original LRE and two variants, the Jacobian approximator and the Bias approximator: 
\begin{align*}
\tilde{F} &= \beta W\textbf{s} + b \\
\tilde{F} &= W\textbf{s} \\
\tilde{F} &= \textbf{s} + b
\end{align*}
We omit the subject-object pairs used to build the approximator from the testing pool. We build approximators for likely subject hidden states ($l = 3 \ldots 9$) and the final object state ($l = 27$) through the process outlined above. We then evaluate the approximators four times and average the best performing approximation. For the LRE, we use $\beta=7$, which was found to be optimal for BATS.
\section{Discussion}
\section{Significance}
This work provides an interpretation that reveals atomic representations espoused in Linear Representational Hypothesis and concept theory \cite{Park:23}, \cite{Wang:23}, \cite{Park:24}, can be unfolded to encompass a range of morphological variation.
\bibliography{aaai25}

\end{document}


```