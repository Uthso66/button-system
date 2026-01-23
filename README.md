# 🎨✨ Button Component System — Next.js + TypeScript + Storybook

![Next.js](https://img.shields.io/badge/Next.js-App_Router-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript)
![Storybook](https://img.shields.io/badge/Storybook-UI_Docs-FF4785?style=for-the-badge&logo=storybook)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss)
![Testing Library](https://img.shields.io/badge/Testing-RTL-E33332?style=for-the-badge&logo=testinglibrary)

A **scalable, production-ready Button component system** built with **Next.js**, **TypeScript**, and **Tailwind CSS** — complete with **Storybook documentation** and **unit tests**.

This project isn’t about “making a button”.
It’s about building a **reliable UI primitive** that survives real-world usage.

---

## 🚀 Key Features (aka: why this isn’t a toy button)

- 🎨 **8 Visual Variants:** `primary`, `secondary`, `destructive`, `ghost`, `outline`, `success`, `warning`, `link`
- 📏 **3 Sizes:** `sm`, `md`, `lg` — consistent spacing & typography
- ⏳ **Loading State:** Built-in spinner with proper `aria` role
- 🧩 **Icon Support:** Optional leading icons without layout shifts
- 📐 **Full Width Mode:** Useful for forms and mobile layouts
- ♿ **Accessible by Default:** Semantic button usage + focus rings
- 🧪 **Fully Tested:** Covered with React Testing Library
- 📘 **Storybook-Driven:** Every variant documented and interactive

---

## 🧱 Tech Stack

| Layer              | Technology                   |
| ------------------ | ---------------------------- |
| **Framework**      | Next.js (App Router)         |
| **Language**       | TypeScript                   |
| **Styling**        | Tailwind CSS                 |
| **Component Docs** | Storybook                    |
| **Testing**        | Jest + React Testing Library |
| **Fonts**          | Geist / Geist Mono           |

---

## 🎯 Why This Project Exists

Most bugs in real apps don’t come from “big features” —
they come from **small, reused components** behaving inconsistently.

I built this project to:

- Design a **single source of truth** for button behavior
- Handle edge cases like `loading + disabled + icon`
- Practice **type-safe UI APIs**
- Treat Storybook as a **design system tool**, not a toy
- Write tests that catch regressions _before_ they ship

This is the kind of component you build **once** — and reuse everywhere.

---

## 🎞️ Component Behavior Breakdown

### 🟢 Variants & Styling Logic

- Variant styles are centralized via `getVariantClasses`
- Size logic is separated into `getSizeClasses`
- Prevents class explosion and keeps intent readable

```ts
getVariantClasses(variant);
getSizeClasses(size);
```

---

### 🟢 Loading & Disabled States

- `loading` automatically disables interaction
- Spinner replaces icon while preserving layout
- Visual feedback + functional safety

---

### 🟢 Icon Handling

- Icons render only when not loading
- Uses flex alignment to prevent text jumping
- Accepts any `ReactNode` (emoji, SVG, icon components)

---

## 📘 Storybook Setup

This project uses **Storybook with autodocs** to:

- Preview all variants in isolation
- Toggle props like `variant`, `size`, `loading`, `disabled`
- Serve as living documentation for future devs

Stories included:

- ✅ Primary
- ✅ All Variants
- ✅ With Icon

---

## 🧪 Testing Strategy

Tests cover:

- Default rendering
- Click handling
- Loading state behavior
- Variant-specific classes
- Size-based typography changes

This ensures the component behaves correctly even as styles evolve.

---

## ⚖️ Challenges & Trade-offs (recruiter section)

### 🎯 Flexibility vs Simplicity

**Trade-off:**
Supporting many variants increases API surface.

**Decision:**
Keep props minimal (`variant`, `size`, `loading`, `icon`) and predictable.

---

### 🎯 Styling Speed vs Maintainability

**Trade-off:**
Tailwind can get messy fast.

**Decision:**
Centralize class logic into small helper functions.

---

### 🎯 Visual Feedback vs Accessibility

**Trade-off:**
Animations and effects can break focus states.

**Decision:**
Explicit focus rings and semantic button usage.

---

## 💻 Local Setup

### 1️⃣ Clone

```bash
git clone https://github.com/Uthso66/button-system
cd button-system
```

### 2️⃣ Install & Run

```bash
npm install
npm run dev
```

---

## 🧪 Notes

- Component-first mindset
- Ideal as a base for a design system
- Easily portable into larger apps
- Built to scale, not just look nice

---

## 🧔 Author

**Uthso**
_Software QA Engineer • Frontend Systems Builder • Security Enthusiast_

🐙 GitHub: [https://github.com/Uthso66](https://github.com/Uthso66)
💼 LinkedIn: [https://www.linkedin.com/in/tarikul-islam-uthso/](https://www.linkedin.com/in/tarikul-islam-uthso/)

---

## 🪄 License

MIT License © 2025 Uthso
