#!/usr/bin/python3 
#type python3 !/usr/bin/python3

#number
print(2 + 3)

# #escape
print("hell'o' \"w\"orld")

# #newline
print("hello \nworld")

# #docsting
print('''
H
e
l
l
o
''')

a = 'Hello Python'
print(a) # Hello Python

#length
print(len(a)) # 12

#index
print(a[2:5]) # llo

#repeat
print((a+'\n')*2)

#치환
name = 'sample'
print('fake '+name+' fake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake apple Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake '+name+' Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Data')

#positional formaiong
print('fake {} fake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake apple {} Datafake Datafake Datafake Datafake Datafake Datafake Datafake {} Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Data'.format('sample', 12, 'oh my'))

#Named placeholder
# 숫자 강제 : age:digit => age:d
print('fake {name} fake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake apple {age:d} Datafake Datafake Datafake Datafake Datafake Datafake Datafake {name} Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Datafake Data'.format(name='sample', age=12))