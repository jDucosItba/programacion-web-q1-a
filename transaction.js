document.addEventListener("DOMContentLoaded", function() {
    var selectedPlan = localStorage.getItem("selectedPlan");
    var selectedPrice = localStorage.getItem("selectedPrice");
  
    var selectedPlanElement = document.getElementById("selected-plan-container");
    var noPlanSelectedElement = document.getElementById("no-plan-selected");
  
    if (selectedPlan && selectedPrice) {
      var planNameElement = document.getElementById("plan-name");
      var planPriceElement = document.getElementById("plan-price");
  
      planNameElement.textContent = selectedPlan;
      planPriceElement.textContent = selectedPrice;
  
      selectedPlanElement.style.display = "block";
      noPlanSelectedElement.style.display = "none";
    } else {
      selectedPlanElement.style.display = "none";
      noPlanSelectedElement.style.display = "block";
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var selectedPlan = localStorage.getItem("selectedPlan");
    var selectedPrice = localStorage.getItem("selectedPrice");
  
    var selectedPlanInfo = document.getElementById("selected-plan-info");
    
    console.log(deletePlanIcon)
  
    if (selectedPlan && selectedPrice) {
      selectedPlanInfo.innerHTML = `
        <h3>${selectedPlan}</h3>
        <p>Precio: ${selectedPrice}</p>
        <a id="delete-plan-icon" class="delete-icon" href="#"></a>
      `;
      var deletePlanIcon = document.getElementById("delete-plan-icon");
      deletePlanIcon.addEventListener("click", function() {
        var confirmDelete = confirm(
          "Are you sure you want to remove the subscription plan from your shopping cart?"
        );
        location.reload();
        if (confirmDelete) {
          localStorage.removeItem("selectedPlan");
          localStorage.removeItem("selectedPrice");
          selectedPlanInfo.innerHTML = "";
          deletePlanIcon.style.display = "none";
          showNoPlanMessage();
        }
      });
  
      deletePlanIcon.style.display = "block";
    } else {
      showNoPlanMessage();
    }
  });
  
  function showNoPlanMessage() {
    var noPlanMessage = document.getElementById("no-plan-message");
    var choosePlanButton = document.getElementById("choose-plan-button");
  
    noPlanMessage.style.display = "block";
    choosePlanButton.addEventListener("click", function() {
      window.location.href = "suscripciones.html";
    });
  }
  
  function processPayment(event) {
    event.preventDefault();
  
    const form = event.target;
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
  
    // Aquí puedes implementar la lógica para procesar la transacción de pago
    // y mostrar mensajes de éxito o error
  
    // Ejemplo de mensaje de éxito
    alert('¡Pago exitoso! Gracias por tu compra.');
  
    // Limpiar los campos del formulario después de la transacción
    form.reset();
    form.classList.remove('was-validated');
  }
  
  const paymentForm = document.getElementById('payment-form');
  paymentForm.addEventListener('submit', processPayment);
  
  const deletePlanIcon = document.getElementById('delete-plan-icon');
  deletePlanIcon.addEventListener('click', deletePlan);
  
  function deletePlan(event) {
    event.preventDefault();
  
    if (confirm('Are you sure you want to remove the selected plan from the shopping cart?')) {
      localStorage.removeItem('selectedPlan');
      localStorage.removeItem('selectedPrice');
  
      location.reload();
    }
  }
  