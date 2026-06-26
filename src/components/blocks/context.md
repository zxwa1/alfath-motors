# Blocks Components Context
This folder contains complex, composed UI sections (e.g., Hero, Navbar, CarShowcase, Footer).
These components combine multiple UI components and often include Framer Motion cinematic animations.
- Animations must be hardware accelerated (GPU) targeting 60fps on mobile.
- Use `use client` when defining Framer Motion animations.
- Maintain flat architecture by passing data down as props instead of fetching data inside the block itself where possible.
