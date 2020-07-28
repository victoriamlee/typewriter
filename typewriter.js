const sentence = "hello there from lighthouse labs";


let count = 0;

for (const char in sentence) {
  count = char * 50
  setTimeout (() => process.stdout.write(sentence[char]), char * 50)
};


setTimeout (() => process.stdout.write("\n"), count);

