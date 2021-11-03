

# lst1 = []
# for mot in file:
#     lst1.append(mot.strip())
# print(lst1)



import re
import string
frequency = {}
class Text():
    def __init__(self, string):
        self.string = string

    def word_in_text(self):
        document_text = open('day.txt', 'r')
        text_string = document_text.read().lower()
        match_pattern = re.findall(r'\b[a-z]{3,15}\b', text_string)

        for word in match_pattern:
            count = frequency.get(word, 0)
            frequency[word] = count + 1

        frequency_list = frequency.keys()

        for words in frequency_list:
            return words, frequency[words]

    def frequance(self):
        frequency = {}
        document_text = open('day.txt', 'r')
        text_string = document_text.read().lower()
        match_pattern = re.findall(r'\b[a-z]{3,15}\b', text_string)

        for word in match_pattern:
            count = frequency.get(word, 0)
            frequency[word] = count + 1

        frequency_list = frequency.keys()

        for words in frequency_list:
            print(words, frequency[words])

    def frequance_uniq(self):
        frequency = {}
        document_text = open('day.txt', 'r')
        text_string = document_text.read().lower()
        match_pattern = re.findall(r'\b[a-z]{3,15}\b', text_string)

        for word in match_pattern:
            count = frequency.get(word, 0)
            frequency[word] = count + 1

        frequency_list = frequency.keys()

        for words in frequency_list:
            if(frequency[words] == 1):
               print(words, frequency[words])


text = Text(open('day.txt', 'r'))

class TextModification(Text):
    def no_poc(self):
        punc = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
        for ele in self.string:
            if ele in punc:
                self.string = self.string.replace(ele, "")
    def stoop(self):
        pass
