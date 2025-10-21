const menu = (function(){
  const SAMPLE = [
    {id:1,name:'Cheeseburger',price:1200,desc:'Juicy burger with cheese',img:'https://picsum.photos/seed/burger/300/200'},
    {id:2,name:'Pepperoni Pizza',price:2200,desc:'Loaded pepperoni',img:'https://picsum.photos/seed/pizza/300/200'},
    {id:3,name:'Pasta Alfredo',price:1500,desc:'Creamy fettuccine',img:'https://picsum.photos/seed/pasta/300/200'},
    {id:4,name:'Chicken Salad',price:900,desc:'Fresh greens & grilled chicken',img:'https://picsum.photos/seed/salad/300/200'}
  ];
  function init(){
    // seed menu once in localStorage
    if(!localStorage.getItem('menu')) localStorage.setItem('menu', JSON.stringify(SAMPLE))
    render()
  }
  function getMenu(){ return JSON.parse(localStorage.getItem('menu')||'[]') }
  function addToCart(id){
    const menu = getMenu(); const item = menu.find(m=>m.id===id)
    if(!item) return;
    const cart = JSON.parse(localStorage.getItem('cart')||'[]')
    const found = cart.find(c=>c.id===id)
    if(found) found.qty += 1
    else cart.push({...item, qty:1})
    localStorage.setItem('cart', JSON.stringify(cart))
    alert(item.name + ' added to cart')
    location.reload()
  }
  function render(){
    const list = document.getElementById('menu-list'); if(!list) return;
    const m = getMenu()
    list.innerHTML = ''
    m.forEach(it=>{
      const card = document.createElement('div'); card.className='item'
      card.innerHTML = `<img src="${it.img}" alt="${it.name}"/><div style="flex:1">
        <strong>${it.name}</strong><div class="muted">${it.desc}</div>
        <div style="margin-top:6px" class="row"><div>₦${it.price.toFixed(2)}</div><div><button class="btn" onclick="menu.addToCart(${it.id})">Add</button></div></div>
      </div>`
      list.appendChild(card)
    })
  }
  return { init, render, addToCart }
})();
