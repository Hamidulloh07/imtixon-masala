/* 1 chi uy vazifa boshlandi */
function reverseFirstName(reverse) {
  return reverse.split(" ").reverse().join(" ");
}
let result = reverseFirstName(" ")
console.log(`reverseFirstName(""): = sozni reverse qilish uchun shu parametr orqali yozing`);
console.log(result);


/* 1 chi uy vazifa tugadi */
/* 2 chi uy vazifa boshlandi */
let theDoubleWord = function (words) {
  let word = []
  for (i = 0; i < words.length; i++) {
    word += words[i] + words[i];
  }

  return word;
}
let resultWordDouble = theDoubleWord("")
console.log(`theDoubleWord("") = harflarni 2ga kopaytirish uchun shu parametr ichiga yozing`);
console.log(resultWordDouble);



/* 2 uy vazifa tugadi */
/* 3 uy vazifa boshlandi */


function rootNumber(rootNumbers) {
    let rootArr = [];

    for(let number of rootNumbers) {
        if (Math.sqrt(number) % 1 == 0) {
            rootArr.push(Math.sqrt(number));
        }
        else {
            rootArr.push(number * number);
        }
    }
    return console.log(rootArr);
}
console.log(`rootNumber([]) = ildizni topish uchun raqamni shu parametrni ichiga yozing`);
rootNumber([]);
/* 3 uy vazifa tugadi */