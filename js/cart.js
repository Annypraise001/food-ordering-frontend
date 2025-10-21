const cart = (function(){
  function get(){ return JSON.parse(localStorage.getItem('cart')||'[]') }
  function save(c){ localStorage.setItem('cart', JSON.stringify(c)) }
  function render(){
    const root = document.getElementById('cart-items'); if(!root) return;
    const c = get(); root.innerHTML=''
    if(!c.length){ root.innerHTML='<small class="muted">Cart is empty</small>'; document.getElementById('cart-total').innerText='₦0.00'; return; }
    let total=0
    c.forEach(it=>{
      total += it.price * it.qty
      const row = document.createElement('div'); row.className='item'
      row.innerHTML = `<div style="flex:1"><strong>${it.name}</strong><div class="muted">₦${it.price.toFixed(2)}</div></div>
        <div style="display:flex;gap:8px;align-items:center">
          <button class="btn ghost" onclick="cart.changeQty(${it.id}, -1)">-</button>
          <div>${it.qty}</div>
          <button class="btn ghost" onclick="cart.changeQty(${it.id}, 1)">+</button>
          <button class="btn" onclick="cart.remove(${it.id})">Remove</button>
        </div>`
      root.appendChild(row)
    })
    document.getElementById('cart-total').innerText = '₦' + total.toFixed(2)
    // checkout
    const checkoutBtn = document.getElementById('checkoutBtn')
    if(checkoutBtn) checkoutBtn.onclick = ()=> { if(!get().length){ alert('Cart empty'); return } location.href='payment.html' }
  }
  function changeQty(id, delta){
    const c = get(); const it = c.find(x=>x.id===id); if(!it) return;
    it.qty += delta; if(it.qty<=0) { const idx=c.findIndex(x=>x.id===id); c.splice(idx,1) }
    save(c); render(); localStorage.setItem('lastAction', Date.now()); location.reload()
  }
  function remove(id){
    const c = get(); const idx = c.findIndex(x=>x.id===id); if(idx>-1) c.splice(idx,1)
    save(c); render(); location.reload()
  }
  return { render, changeQty, remove, get }
})();
