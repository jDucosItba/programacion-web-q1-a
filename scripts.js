// Obtener los elementos de los botones de los planes de suscripción
const planButtons = document.querySelectorAll('.card-body .btn');

// Agregar un evento de clic a cada botón
planButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Función para agregar un plan al carrito
function addToCart(event) {
  event.preventDefault();
  
  // Obtener el título y el precio del plan seleccionado
  const planTitle = this.parentNode.querySelector('.card-title').textContent;
  const planPrice = this.textContent;

  // Crear un nuevo elemento de lista con los detalles del plan
  const listItem = document.createElement('li');
  listItem.textContent = `${planTitle} - ${planPrice}`;

  // Agregar el elemento de lista al carrito
  const cart = document.getElementById('cart-items');
  cart.appendChild(listItem);
}
