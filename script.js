// Retrieve necessary elements
const increaseButtons = document.querySelectorAll(".increase-quantity");
const decreaseButtons = document.querySelectorAll(".decrease-quantity");
const deleteButtons = document.querySelectorAll(".delete-item");
const likeButtons = document.querySelectorAll(".like-item");
const quantityElements = document.querySelectorAll(".quantity");
const totalPriceElement = document.getElementById("total-price");

// Add event listeners to the buttons
increaseButtons.forEach((button) => {
  button.addEventListener("click", increaseQuantity);
});

decreaseButtons.forEach((button) => {
  button.addEventListener("click", decreaseQuantity);
});

deleteButtons.forEach((button) => {
  button.addEventListener("click", deleteItem);
});

likeButtons.forEach((button) => {
  button.addEventListener("click", toggleLike);
});

// Event handler functions
function increaseQuantity(event) {
  const quantityElement = event.target.parentNode.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  updateTotalPrice();
}

function decreaseQuantity(event) {
  const quantityElement = event.target.parentNode.querySelector(".quantity");
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
    updateTotalPrice();
  }
}

function deleteItem(event) {
  const itemElement = event.target.parentNode;
  itemElement.remove();
  updateTotalPrice();
}

function toggleLike(event) {
  const likeButton = event.target;
  likeButton.classList.toggle("liked");
}

function updateTotalPrice() {
  const quantities = document.querySelectorAll(".quantity");
  let totalPrice = 0;
  quantities.forEach((quantityElement) => {
    const quantity = parseInt(quantityElement.textContent);
    totalPrice += quantity;
  });
  totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}

// Get all the heart buttons
var heartButtons = document.getElementsByClassName("like-item");

// Iterate through each heart button
for (var i = 0; i < heartButtons.length; i++) {
  // Add a click event listener to each heart button
  heartButtons[i].addEventListener("click", function () {
    // Change the color of the heart icon to yellow
    this.firstChild.style.color = "yellow";
  });
}
