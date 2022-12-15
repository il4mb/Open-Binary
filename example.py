import OpenBiner

binary = OpenBiner.Biner("1010")

print(binary, chr(binary))

binary = binary.doAdd("1001")

print(binary, chr(binary))

binary = binary.doLess('1001')

print(binary, chr(binary))