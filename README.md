<h1 align="center">DripKart 🛒</h1>

- 🗄️ MongoDB & Redis Integration
- 🔑 JWT with Refresh/Access Tokens
- 📦 Product & Category Management
- 🛍️ Shopping Cart Functionality
- 💰 Checkout with Stripe
- 🏷️ Coupon Code System
- 👑 Admin Dashboard
- 📊 Sales Analytics
- 🚀Caching with Redis

### backend .env file

```bash
PORT=5000
MONGO_URI=

UPSTASH_REDIS_URL=

ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

STRIPE_SECRET_KEY=
CLIENT_URL=http://localhost:5173
NODE_ENV=
```

### frontend .env file

```bash
VITE_STRIPE_PUBLISHABLE_KEY=
```

### Run this app locally

```shell
npm run build
```

### Start the app

```shell
npm run start
```
