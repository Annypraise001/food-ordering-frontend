const main = (function(){
  function getCart(){ return JSON.parse(localStorage.getItem('cart')||'[]') }
  function initMiniCart(){
    const mini = document.querySelectorAll('#mini-cart');
    mini.forEach(el=>{
      const cart = getCart();
      el.innerHTML = '';
      if(!cart.length){ el.innerHTML = '<small class="muted">No items</small>'; return; }
      cart.slice(0,3).forEach(i=>{
        const d = document.createElement('div'); d.className='row';
        d.innerHTML = `<div>${i.name} x ${i.qty}</div><div>₦${(i.price*i.qty).toFixed(2)}</div>`;
        el.appendChild(d);
      });
      if(cart.length>3){ const more=document.createElement('div'); more.className='muted'; more.innerText = (cart.length-3) + ' more...'; el.appendChild(more) }
    })
  }
  return { initMiniCart }
})();
