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
        # elements are the same number
        a , b = self.__match_len__(self._val, binary)
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
        # elements are the same number
        a , b = self.__match_len__(self._val, binary)
        a = list(a)
        b = list(Biner(b)._val)

        deducted = ''
        borrow = 0

        for x in range(len(a)-1, -1, -1) :

            i, ii = int(a[x]), int(b[x])

            # when it can't be reduced
            if i < ii :

                # collect unborrowable index elements
                notEnaught = []

                for _x in range(x, -1, -1) :
                    if  int(a[_x]) > 0 :
                        a[_x] = '0' # replace borrowed value to zero
                        borrow += 1
                        break # exit loop

                    # add index unborrowable
                    notEnaught.append(_x)

                # replace unborrowable element to 1
                for _x in notEnaught :
                    a[_x] = '1'

            if i == 1 and ii == 1 :
                deducted += '0'
            elif i == 1 and ii == 0 :
                deducted += '1'
            elif i == 0 and ii == 1 :
                # this value can't subtracted
                # so we need to check was borrowed
                if borrow > 0 : # if borrow is not zero add 1 to value
                    deducted += '1'
                    borrow -=1
            elif i == 0 and ii == 0 :
                deducted += '0'

        return Biner(self.__flip__(deducted))
        
    def __match_len__(self, str1: str, str2: str ) :

        if(len(str1) > len(str2)) :
            newB = ''
            for x in range(int(len(str1) - len(str2))) :
                newB += '0'
            str2 = newB + str2
        elif len(str2) > len(str1) :
            newA = ''
            for x in range(int(len(str2) - len(str1))) :
                newA += '0'
            str1 = newA + str1

        return str1, str2

    def __flip__(self, val : str) :
        liva = list(str(val))
        flip = ""
        for x in range(len(liva)-1, -1, -1) :
            flip += liva[x]
        return flip

    def __repr__(self):
        return self._val