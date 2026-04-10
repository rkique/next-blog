---
date: '2025-10-08'
title: 'type check notes'
---
(define-type BinOp [plus])

(define-type Exp [binE (operator : BinOp)
			         (left : Exp)
     				(right : Exp)
			   [numE (value : Number)])
			(calc : (Exp -> Number))
			(define (calc e)
			 	(type-case Exp e
				[(binE o l r)
				