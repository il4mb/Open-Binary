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