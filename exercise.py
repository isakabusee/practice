# Parens Valid
# Given a string that has parenthesis in it 
# return whether the parenthesis are valid

# Input: "Y(3(p)p(3)r)s"
# Output: True

# Input: "N(0(p)3"
# Output: False

def parens_valid(stringy) :
    pairs = 0
    for char in stringy:
        if char == "(":
            pairs +=1
            print (pairs)
        if char == ")":
            pairs -=1
            print (pairs)
        if pairs < 0:
            return False

    if pairs == 0:
        return True
    else:
        return False
print(parens_valid("y(3(p)p(3)r)0s"))

# FREQUENCY COUNTER

# An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
# typically using all the original letters exactly once.
# Is there a quick wy to determine if they aren't an anagram before spending more time?
# Given two strings return whether or not they are anagrams

# Input: "yes", "eys"
# Output: True

# Input: "yes", "eYs"
# Output: True

# Input: "no", "noo"
# Output: False

# For Hana's reference
#   for i in range(len(keys)):
#       direct[keys[i]] = values[i]

def anagram(str1, str2):
    if len(str1) != len(str2):
        return False
    else:
        counter = 0
        for letter in range(len(str1)):
            if str1[letter] in str2:
                counter += 1
            if counter == len(str2):
                return True
            else:
                return False
    
print (anagram("nooo","oono"))

#Another question
# Given a string that may have extra spaces at the start and the end,
# return a new string that has the extra spaces at the start and the end trimmed (removed)
# do not remove any other spaces.

# Input: "   hello world   "
# Output: "helloworld"

string_length = len("    hello world    ")

print (string_length)

def extraspaces(str3):
    new_string = ""
    for char in range(len(str3)):
        if str3[char] != "  ":
            new_string = new_string + str3[char]
    return new_string

result = extraspaces("   Hello World   ")
print (result)

def strip (str4):
    for char in range (len(str4)):
        if str4[char] == "  ":
            str4.pop


def saySomthi (greeting):
    # var greeting = " Hello Isaac "
    print (greeting)
saySomthi(" Hello Isaac")

def addSome (num1, num2):
    print num1
    print num2
    print num1 + num2
addSome(3,14)

def someString (stringy):
#  for i in len(stringy)
#  print i
    print stringy
someString("This is something nice!")
