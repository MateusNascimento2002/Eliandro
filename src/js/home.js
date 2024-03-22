document.body.classList.add("no-overflow");
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 2.5,
    onComplete: function () {
      // Reativa o overflow depois que a animação terminar
      document.body.classList.remove("no-overflow");
    },
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);

//Form

function aplicarMascaraTelefone(input) {
  let valor = input.value.replace(/\D/g, "");
  valor = valor.replace(/^(\d{2})(\d)/g, "$1 $2");
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
  input.value = valor;
}

function submitFormulario(event) {
  event.preventDefault();
  Swal.fire("Parabéns, você enviou o formulário!");

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("celular").value = "";
  document.getElementById("mensagem").value = "";
  document.getElementById("checkbox").checked = false;
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formContato")
    .addEventListener("submit", submitFormulario);
});
