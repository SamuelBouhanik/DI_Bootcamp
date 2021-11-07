class AnagramChecker:

    def __init__(self, file_name='sowpods.txt'):
        with open(file_name) as f:
            self.words = [word.strip().upper() for word in f.readlines()]
            # self.words = list(map(lambda x:x.strip(), f.readlines()))

    def is_valid_word(self, word):
        return word.upper() in self.words

    def get_anagrams(self, word):
        word = word.upper()
        word_sorted = sorted(list(word))

        anagrams = []
        for other_word in self.words:
            if sorted(list(other_word)) == word_sorted:
                anagrams.append(other_word)

        anagrams.remove(word)
        return anagrams



def is_word_valid(word):
    return len(word.split()) == 1 and word.isalpha()

while True:
    user_choice = input('A. Find a word\'s anagrams\nX. Exit\n')
    if user_choice in 'xX':
        print('Goodbye')
        break
    elif user_choice.upper() == 'A':
        selected_word = input('give us the word to check for anagrams\n')
        if is_word_valid(selected_word):
            clean_word = selected_word.strip()
            a = AnagramChecker()
            anagrams = a.get_anagrams(clean_word)
            msg = f'''YOUR WORD :"{clean_word}"
this is a valid English word.
Anagrams for your word:'''
            print(msg, *anagrams)
        else:
            print('not a valid word')