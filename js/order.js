const orders = (function(){
  function getOrders(){ return JSON.parse(localStorage.getItem('orders')||'[]') }
  function saveOrders(o){ localStorage.setItem('orders', JSON.stringify(o)) }
  function render(){
    const root = document.getElementById('orders-list'); if(!root) return;
    const list = getOrders(); root.innerHTML=''
    if(!list.length){ root.innerHTML='<small class="muted">No orders yet</small>'; return; }
    list.reverse().forEach(ord=>{
      const el = document.createElement('div'); el.className='card'; el.style.marginBottom='8px';
      el.innerHTML = `<div style="display:flex;justify-content:space-between"><div><strong>Order #${ord.id}</strong><div class="muted">${new Date(ord.created).toLocaleString()}</div></div><div><strong>₦${ord.total.toFixed(2)}</strong></div></div>
        <div style="margin-top:8px">${ord.items.map(i=>'<div>'+i.name+' x '+i.qty+' - ₦'+(i.price*i.qty).toFixed(2)+'</div>').join('')}</div>
      `;
      root.appendChild(el)
    })
  }
  return { render }
})();
