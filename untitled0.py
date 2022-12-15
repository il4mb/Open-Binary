# -*- coding: utf-8 -*-
"""
Created on Thu Dec 15 21:38:13 2022

@author: ilham b
"""

import OpenBiner

binary = OpenBiner.Biner('1010')

print( "sebelum : " + str(binary))

binary = binary.sumWith('1111')

print("sesudah : " + str(binary))

binary = binary.subWith('1111')

print("dikurangkan : " + str(binary))