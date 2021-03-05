function checkAndCount() {
   let firstNum = parseInt(prompt('введите число #1', ''), 10)

   if (isNaN(firstNum)) {
      console.log('Некорректный ввод !')
   } else {
      let secondNum = parseInt(prompt('введите число #2', ''), 10)
      return isNaN(secondNum) ?
         console.log('Некорректный ввод !') :
         console.log(`Ответ: сумма ${firstNum+secondNum} частное ${firstNum/secondNum}`)
   }

}
checkAndCount() 