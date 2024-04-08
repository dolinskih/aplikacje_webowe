f = open("pi.txt", "r")

numbers = []
lines = []
secondNum = False
for line in f:
    lines.append(line.strip())
for i in range(0, len(lines) - 1):
    numbers.append(lines[i] + lines[i+1])

numbersGreaterThan90 = 0
for number in numbers:
    if int(number) > 90:
        numbersGreaterThan90 += 1

print(f"Ilość fragmentów dwu-cyfrowych większych od 90: {numbersGreaterThan90}")