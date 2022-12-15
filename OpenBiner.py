"""
Copyright 2022 ilham B

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""

class Biner(int) :

    def __init__(self, value : str) :
        self._val = value

    def sumWith(self, binary : str) :

        a = str(self._val)
        b = str(binary)

        if(len(a) > len(b)) :
            newB = ''
            for x in range(int(len(a) - len(b))) :
                newB += '0'
            b = newB + b
        else :
            newA = ''
            for x in range(int(len(b) - len(a))) :
                newA += '0'
            a = newA + a


        a = list(a)
        b = list(Biner(b)._val)

        addition = ""
        carry = 0

        for x in range(len(a)-1, -1, -1) :

            i = int(a[x]), int(b[x])
            isum = carry + i[0] + i[1]

            if carry > 0 :
                carry -=1


            if isum == 3 : 
                addition += '1'
                carry = 1
                pass
            elif isum == 2 :
                addition += '0'
                carry += 1
            elif isum == 1 :
                addition += '1'
            elif isum == 0 :
                addition += '0'

            if x == 0 and carry > 0 :
                addition += str(carry)

        return Biner(self.__flip__(addition))


    def subWith(self, binary : str) :
        a = str(self._val)
        b = str(binary)

        if(len(a) > len(b)) :
            newB = ''
            for x in range(int(len(a) - len(b))) :
                newB += '0'
            b = newB + b
        else :
            newA = ''
            for x in range(int(len(b) - len(a))) :
                newA += '0'
            a = newA + a


        a = list(a)
        b = list(Biner(b)._val)

        deducted = ''
        carry = 0

        for x in range(len(a)-1, -1, -1) :

            i, ii = int(a[x]), int(b[x])

            if ii > i :
                carry = int(a[x-1])
                a[x-1] = '0'

            if i == 1 and ii == 1 :
                deducted += '0'
            elif i == 1 and ii == 0 :
                deducted += '1'
            elif i == 0 and ii == 1 :
                deducted += str(carry)
                carry -= 1
            elif i == 0 and ii == 0 :
                deducted += '0'

        return Biner(self.__flip__(deducted))


    def __flip__(self, val : str) :
        liva = list(str(val))
        flip = ""
        for x in range(len(liva)-1, -1, -1) :
            flip += liva[x]
        return flip


    def __repr__(self):
        return self._val