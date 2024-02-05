const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('')
})

const email = document.getElementsByClassName('email')[0].value

console.log(email)

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (input.value.match(validRegex)) {
    alert('Valid email address!')

    document.form1.text1.focus()

    return true
  } else {
    alert('Invalid email address!')

    document.form1.text1.focus()

    return false
  }
}
