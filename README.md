# Frontend Starter (LocalStorage demo)

This is a minimal frontend starter for a food-ordering demo that uses **localStorage** (no backend).

## Structure
```
frontend/
├── index.html
├── login.html
├── register.html
├── menu.html
├── cart.html
├── order.html
├── payment.html
├── css/
│   └── style.css
└── js/
    ├── main.js
    ├── auth.js
    ├── menu.js
    ├── cart.js
    ├── order.js
    └── payment.js
```

## Features
- Register / Login (stored in localStorage)
- Menu with sample items (seeded automatically)
- Add to cart, change quantities, remove items
- Checkout / Payment simulation that creates orders
- Orders list stored in localStorage
- All pages are static — ready to connect to a backend later

## How to use
1. Download and unzip the `frontend_starter.zip`
2. Open `index.html` in your browser (or serve with a static server)
3. Register an account and try the flow

## To connect to a backend later
Replace localStorage operations in `js/*` with `fetch()` calls to your API endpoints.

Enjoy — if you want, I can now:
- add more sample items,
- convert to a SPA,
- or wire it to your backend when ready.
