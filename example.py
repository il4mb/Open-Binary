import OpenBiner

binary = OpenBiner.Biner("1010")

print(binary, chr(binary))

binary = binary.sumWith("1001")

print(binary, chr(binary))

binary = binary.subWith('1001')

print(binary, chr(binary))