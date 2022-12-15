import OpenBiner

binary = OpenBiner.Biner("110001")

print(binary)
print('01111')

binary = binary.subWith("1111")

print()
print(binary)