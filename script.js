function validForm() {
  // alert('alerta')

  //Variables
  var email = document.loginform.email
  var senha = document.loginform.senha

  if (
    !email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) ||
    email.value == ''
  ) {
    email.nextElementSibling.style.display = 'block'
    email.style.border = '1px solid #f00'
    return false
  } else {
    email.nextElementSibling.style.display = 'none'
    email.style.border = 'none'
  }
  if (
    !senha.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/) ||
    senha.value == ''
  ) {
    senha.nextElementSibling.style.display = 'block'
    senha.style.border = '1px solid #f00'
    return false
  } else {
    senha.nextElementSibling.style.display = 'none'
    senha.style.border = 'none'
  }
}
