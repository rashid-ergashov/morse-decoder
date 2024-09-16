const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const dots = '.'
    const desh = '-'
    const star = '**********'

    let newword = ''



    for (let i = 0; i < expr.length; i += 10) {

        let res = expr.slice(i, i + 10)
        if (res === star) {
            newword += ' '
            continue
        }

        res = res
            .replace(/10/g, dots)
            .replace(/11/g, desh)
            .replace(/0/g, '');
        newword = newword + MORSE_TABLE[res]

    }


    return newword
}


module.exports = {
    decode
}