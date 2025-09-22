document.addEventListener("DOMContentLoaded", () => {

  // ---------- Precargar taller o médico ----------
  const params = new URLSearchParams(window.location.search);
  const taller = params.get("taller");
  const tallerInput = document.getElementById("taller");
  if (taller && tallerInput) {
    tallerInput.value = taller;
  }

  // ---------- Formulario de turnos ----------
  const form = document.getElementById("turnoForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const dni = document.getElementById("dni").value;
      const fecha = document.getElementById("fecha").value;
      const tallerValor = document.getElementById("taller").value;

      const turno = { nombre, dni, fecha, taller: tallerValor };
      let turnos = JSON.parse(localStorage.getItem("turnos")) || [];
      turnos.push(turno);
      localStorage.setItem("turnos", JSON.stringify(turnos));

      alert(`Turno confirmado para ${nombre} en ${tallerValor}\nSe enviará confirmación a su correo y SMS.`);

      form.reset();
    });
  }

  // ---------- Login simple ----------
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const usuario = document.getElementById("usuario").value;
      const clave = document.getElementById("clave").value;

      if (usuario === "admin" && clave === "1234") {
        alert("Ingreso exitoso");
        window.location.href = "index.html";
      } else {
        alert("Usuario o clave incorrectos");
      }
    });
  }

});
