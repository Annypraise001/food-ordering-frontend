const payment = (function(){
  function init(){
    const cart = JSON.parse(localStorage.getItem('cart')||'[]')
    const summary = document.getElementById('order-summary')
    if(!summary) return;
    if(!cart.length){ summary.innerHTML='<small class="muted">No items in cart</small>'; document.getElementById('payBtn').disabled=true; return }
    let total = 0
    summary.innerHTML = cart.map(i=>{ total += i.price*i.qty; return `<div class="row"><div>${i.name} x ${i.qty}</div><div>₦${(i.price*i.qty).toFixed(2)}</div></div>` }).join('')
    summary.innerHTML += '<div style="height:8px"></div><div class="row"><strong>Total</strong><strong>₦'+total.toFixed(2)+'</strong></div>'
    document.getElementById('payBtn').onclick = ()=> {
      // simple "simulate" payment & create order
      const orders = JSON.parse(localStorage.getItem('orders')||'[]')
      const id = Date.now()
      orders.push({id, items:cart, total, created: new Date().toISOString()})
      localStorage.setItem('orders', JSON.stringify(orders))
      localStorage.removeItem('cart')
      alert('Payment successful — order placed')
      location.href='order.html'
    }
  }
  return { init }
})();
