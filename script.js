let inputButton = document.getElementById("button")

inputButton.addEventListener("click", function () {
  let Inputname = document.getElementById("nome")
  let Inputage = document.getElementById("age")
  let Inputoption = document.getElementById("genero")
  
  let name = Inputname.value
  let age = Inputage.value
  let option = Inputoption.value

  let info = document.getElementById("info")
  info.innerHTML = `<h3> Olá ${name}, é um prazer recebe-lo você tem ${age} anos correto? e se identifica como ${option}.</h3>`
  Inputname.value = ""
  Inputage.value = ""
})
