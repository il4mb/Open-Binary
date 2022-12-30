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

def tempList(x) :

    li = list()

    while x > 0 :
        li.append(0)
        x -= 1

    return li


def DesimalToBinary(desimal) :

    temp = tempList(desimal)
    sub = 0

    for i in range(0, len(temp)) :

        times = ((len(temp) -i) -1)
        reference = 2**times

        if reference > desimal :

            temp[i] = 0

        else :

            if (sub + reference) > desimal :

                temp[i] = 0
            
            else :

                sub += reference
                temp[i] = 1


        _final = list()

        for x in temp :

            if x == 0 and len(_final) > 0 :

                _final.append(x)

            elif x > 0 :

                _final.append(x)
                
    return _final


def BinaryToDesimal(binary) :
    libi = list(binary)

    out = 0
    for x in range(len(libi) -1, -1, -1) :

        ref = 2**((len(libi) -x)-1)

        if int(libi[x]) > 0 :
            out += ref

    return out


def BinaryToOktal(binary) :

    remaind = len(binary)%3

    if remaind > 0 :

        remaind = 3 - remaind

        while remaind > 0 :

            binary = "0" + binary
            remaind -=1


    libi = list(binary)

    output = tempList(int(len(libi)/3))
    idx = len(output) -1

    for x in range(len(libi)-1, -1, -1) :

        ref = 2**( 2- x%3)

        if int(libi[x]) == 1 :

            output[idx] += ref

        if x%3 == 0 :

            idx -=1

    return "".join(str(x) for x in output)


def BinaryToHexadesimal(binary) :

    remaind = len(binary)%4

    if remaind > 0 :

        remaind = 4 - remaind

        while remaind > 0 :

            binary = "0" + binary
            remaind -=1


    libi = list(binary)

    output = tempList(int(len(libi)/4))
    idx = len(output) -1

    for x in range(len(libi)-1, -1, -1) :

        ref = 2**( 3 - x%4)

        if int(libi[x]) == 1 :

            output[idx] += ref

        if x%4 == 0 :

            idx -=1
        
    for key, val in enumerate(output) :

        if val > 9 :

            Hx = "?"

            if val == 10 : Hx = "A"
            elif val == 11 : Hx = "B"
            elif val == 12 : Hx = "C"
            elif val == 13 : Hx = "D"
            elif val == 14 : Hx = "E"
            elif val == 15 : Hx = "F"

            output[key] = Hx
        
    return "".join(str(x) for x in output)

