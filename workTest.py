
from converter import *


binarys= [
    "1111",
    "1010", # 10
    "1001", # 9
    "1101"  # 12
]

# FIND LONGEST BINARY
longest = 0
for bin in binarys :
    if len(bin) > longest :
        longest = len(bin)


# TOTAL ALL COLUMN
re = tempList(longest)
for key, bin in enumerate(binarys) :
    lb = list(bin)
    for x in range(len(lb)-1, -1, -1) :
        re[x] += int(lb[x])


converted = tempList(longest)
for key, x in enumerate(re) :
    bin = tempList(longest)
    for i in range(0, len(re)) :
        times = ((len(re) -i) -1)
        desimal = 2**times

        if desimal > x :
            bin[i] = 0
        else :
            bin[i] = 1
            if desimal == x :
                break

    converted[key] = bin

# 11111 = 31
