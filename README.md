# Open Binary
![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

**what is Open Binary ?**
Open Binary has a simple code to add and subtract binary numbers

### Features
- [x] Adding a binary number to another binary number
- [x] Subtracting binary numbers from other numbers

***

### Simple Use
import OpenBinary
```python
# -*- coding: utf-8 -*-
import  OpenBinary
```
>**Create New Binary**
>```python
>binary = OpenBinary.Biner('1010')
>print(binary, chr(binary))
>```
>**The result should be**
>```
>1010	c
>```
>***
>>**1. Sum**
>>```python
>>binary = binary.sumWith("1001")
>>print(binary, chr(binary))
>>```
>>**The result should be**
>>```
>>10011	✛
>>```
>
>>**2. Subtract**
>>```python
>>binary = binary.subWith("1001")
>>print(binary, chr(binary))
>>```
>>**The result should be**
>>```
>>1010	c
>>```
