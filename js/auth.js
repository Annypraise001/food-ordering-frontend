const auth = (function(){
  function users(){ return JSON.parse(localStorage.getItem('users')||'[]') }
  function saveUsers(u){ localStorage.setItem('users', JSON.stringify(u)) }
  function initRegister(){
    document.getElementById('registerBtn').onclick = ()=>{
      const name = document.getElementById('name').value.trim()
      const email = document.getElementById('email').value.trim()
      const password = document.getElementById('password').value
      const msg = document.getElementById('msg')
      if(!name||!email||!password){ msg.innerText='Fill all fields'; return }
      const u = users()
      if(u.find(x=>x.email===email)){ msg.innerText='Email already used'; return }
      u.push({id:Date.now(),name,email,password})
      saveUsers(u)
      localStorage.setItem('session', JSON.stringify({email,name}))
      msg.innerText='Registered & logged in'
      setTimeout(()=> location.href='menu.html',800)
    }
  }
  function initLogin(){
    document.getElementById('loginBtn').onclick = ()=>{
      const email = document.getElementById('email').value.trim()
      const password = document.getElementById('password').value
      const msg = document.getElementById('msg')
      const u = users().find(x=>x.email===email && x.password===password)
      if(!u){ msg.innerText='Invalid credentials'; return }
      localStorage.setItem('session', JSON.stringify({email,name:u.name}))
      msg.innerText='Logged in'
      setTimeout(()=> location.href='menu.html',600)
    }
  }
  return { initLogin, initRegister }
})();
