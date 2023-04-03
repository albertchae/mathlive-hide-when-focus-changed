const mathField = document.querySelector('#math-field');

mathField.addEventListener('input', (event) => {
  // input event with insertLineBreak handles enter keypress from
  // both physical and virtual keyboard
  if (event.data == "insertLineBreak") {
    console.log("got enter")
  }
});

mathVirtualKeyboard.show()
mathField.focus()
