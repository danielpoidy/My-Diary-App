var form = document.getElementById('form')
var textInput = document.getElementById('text-input')
var displaySection = document.getElementById('display')

function validateForm (event) {
  event.preventDefault()
  var entryDisplay = document.createElement('div')
  entryDisplay.className = 'single-entry-div'
  var entryDisplayButton = document.createElement('button')
  entryDisplayButton.innerHTML = 'X'
  entryDisplayButton.className = 'single-entry-button'
  entryDisplay.textContent = textInput.value
  console.log(entryDisplay.textContent)
  displaySection.appendChild(entryDisplay)
  entryDisplay.appendChild(entryDisplayButton)
  textInput.value = ''
}

form.addEventListener('submit', validateForm)
