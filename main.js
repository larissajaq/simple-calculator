let display = document.getElementById('display')
const buttons = document.querySelectorAll('.button')

let screenValue = ''

for (item of buttons) {
  item.addEventListener('click', e => {
    buttonText = e.target.innerText

    switch (buttonText) {
      case 'x':
        screenValue += '*'
        display.value = screenValue
        break
      case '÷':
        screenValue += '/'
        display.value = screenValue
        break
      case 'C':
        screenValue = ''
        display.value = screenValue
        break
      case '←':
        screenValue = screenValue.slice(0, -1)
        display.value = screenValue
        break
      case '=':
        try {
          screenValue = eval(screenValue)
          display.value = screenValue
        } catch {
          screenValue = 'Error!'
          display.value = screenValue
        }
        break
      default:
        screenValue += buttonText
        display.value = screenValue
    }
  })
}

