// კალათაში დამატება
function addToCart(product) {
    // კალათის მონაცემების მიღება localStorage-დან
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // პროდუქტს დავამატებთ კალათაში
    cart.push(product);
  
    // კალათის მონაცემების შენახვა localStorage-ში
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // კალათის განახლება
    updateCart();
  }
  
  // კალათის განახლება
  function updateCart() {
    // კალათის მონაცემების მიღება localStorage-დან
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // კალათის HTML-ის განახლება
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';  // კალათის განახლება (დასუფთავება)
  
    // თითოეული პროდუქტის დამატება კალათაში
    cart.forEach(product => {
      const li = document.createElement('li');
      li.textContent = product;
      cartList.appendChild(li);
    });
  }
  
  // კალათის გაწმენდა
  function clearCart() {
    // კალათის მონაცემების წაშლა localStorage-დან
    localStorage.removeItem('cart');
  
    // კალათის განახლება
    updateCart();
  }
  
  // აპლიკაციის დამატება მას შემდეგ, რაც ჩაიხსნება
  window.onload = function() {
    updateCart(); // კალათის განახლება გვერდის დასაწყისში
  };
  