import { type RouteConfig, index, layout, route } from "@react-router/dev/routes"

export default [
  layout('layouts/index-layout.tsx', [
    index("routes/home.tsx"),
    route('/beras', 'routes/beras.tsx'),
    route('/detail', 'routes/detail.tsx'),
    route('/history', 'routes/history.tsx'),
  ]),
  route('/login', 'routes/login.tsx'),
  route('/register', 'routes/register.tsx'),
  route('/cart', 'routes/cart.tsx'),
  route('/checkout', 'routes/checkout.tsx'),
] satisfies RouteConfig
