let num = parseInt(prompt('введите число #1', ''), 10)
let radix = parseInt(prompt('введите число #2 от 2 до 36', ''), 10)

if (isNaN(num) || isNaN(radix)) {
   console.log('Некорректный ввод!')
} else {
   console.log(+num.toString(radix))
}