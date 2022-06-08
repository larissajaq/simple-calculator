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

// ADD KEYDOWN AS EVENT FOR CALCULATOR USING SPECIFIC KEYS
// document.addEventListener('keydown', function(event){

// if(event.shiftKey==57){
//     event.key = '(';
// }
// else if(event.shiftKey==48){
//     event.key = ')';
// }
// else if(event.shiftKey==53){
//     event.key = '%';
// }
// if(event.keyCode==88){
//     screenValue += '*';
//     screen.value = screenValue;
// }
// if(event.key<=9 || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='.' || event.key=='/' || event.key=='%' || event.key=='(' || event.key==')'){
//     screenValue += event.key;
//     screen.value = screenValue;
// }
// if(event.keyCode == 13 || event.keyCode == 187)
// {
//     screen.value = eval(screenValue);
// }
// else if(event.keyCode == 46){
//     screenValue = "";
//     screen.value = screenValue;
//     console.clear();
// }
// else if(event.keyCode == 8){
//     screenValue = screenValue.slice(0, -1);
//     screen.value = screenValue;
// }
// else if(event.keyCode == 67){
//     screenValue = "";
//     screen.value = screenValue;
//     console.clear();
// }
// else if(event.keyCode == 82){
//     location.reload();
// }
// })
