#Zadanie 2.1
def DecimalToBinary(num):
    binNum = ""
    while num >= 1:
        binNum += str(num % 2)
        num //= 2
    return binNum[::-1]

def NumberOfBlocks(num):
    lastNumber = num[0]
    blocksNumber = 1
    for i in range(1, len(num)):
        if num[i] is not lastNumber:
            blocksNumber += 1
            lastNumber = num[i]
    return blocksNumber

currNum = int(input("Podaj liczbę dodatnią całkowitą: "))
binCurrNum = DecimalToBinary(currNum)
print(f"Liczba w systemie dziesiętnym: {currNum}\nLiczba w systemie binarnym: {binCurrNum}\nLiczba bloków: {NumberOfBlocks(binCurrNum)}")

#Zadanie 2.2
f = open("bin.txt", "r")
numbers = []
numbersWithMax2Blocks = 0
for line in f:
    numbers.append(line.strip())
    if NumberOfBlocks(line.strip()) <= 2:
        numbersWithMax2Blocks += 1
print(f"Ilość liczb z co najwyżej 2 blokami: {numbersWithMax2Blocks}")

#Zadanie 2.3
def BinaryToDecimal(num: str):
    decimalNum = 0
    if int(num[len(num) - 1]) == 1:
        decimalNum += 1
    num = num[:-1]
    num = num[::-1]
    currMultiplier = 2
    for i in num:
        if i == "1":
            decimalNum += currMultiplier
        currMultiplier *= 2
    return decimalNum

currMaxDecimal = BinaryToDecimal(numbers[0])
currMaxBinary = numbers[0]

for i in range(1, len(numbers)):
    currNumBinary = numbers[i]
    currNumDecimal = BinaryToDecimal(currNumBinary)
    if currNumDecimal > currMaxDecimal:
        currMaxDecimal = currNumDecimal
        currMaxBinary = currNumBinary

print(f"Największa liczba w pliku: {currMaxBinary}")

#Zadanie 2.5
f2 = open("wyniki2_5.txt", "w")
numbersDecimal = []
for num in numbers:
    numbersDecimal.append(BinaryToDecimal(num))

for num in numbersDecimal:
    f2.write(DecimalToBinary(num ^ (num // 2))+'\n')

f.close()
f2.close()