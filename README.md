# 🎨 FrontEnd - PruebaDemo

This repository contains the **frontend** of the **PruebaDemo** app, built with **React.js**.  
It connects to a **REST API built with .NET Web API**, allowing basic CRUD operations for product management in a modern and efficient way.

If you like to watch it [Video]: https://www.youtube.com/watch?v=4NSJPSvllR4

## 🌐 What is PruebaDemo?

PruebaDemo is a simple web application, created as a learning project, to manage product records.  
You can **create**, **read**, **update**, and **delete** products.

From the main page (`PageProduct.jsx`), you can:

- Add a new product (redirects to a form).
- Search for products by name (using the `FilterText.jsx` component).
- View a list of all products.
- Edit or delete each product.
  - When editing, the same form is reused with pre-filled data for a better user experience.

---

## 🧠 What I learned from this project

- Project structure using **feature-based folders** (organized by functionality).
- Forms with **Formik**, and validation using **Yup**.
- Making HTTP requests with **Axios**.
- Routing with `react-router-dom`.
- Setting up **absolute paths** using `vite.config.js` and `node:path`.
- Styling using **Reactstrap** (no need for custom CSS).
- Navigation with `useNavigate` and route parameters with `useParams`.
- Code separation using **hooks**, **schemas**, **services**, and **pages**.
- Clean and reusable component practices.

---

## 🚀 Technologies used

```json
"dependencies": {
  "axios": "^1.10.0",
  "bootstrap": "^5.3.7",
  "formik": "^2.4.6",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router-dom": "^7.6.3",
  "reactstrap": "^9.2.3",
  "yup": "^1.6.1"
}
```

## Project structure

The project is organized by features (feature-based folder structure).

```
src/
├── feature/
│   ├── products/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── schemas/
│   │   └── services/
│   └── master/
...

```

This helps to keep the code clean, scalable, and easier to maintain.

## 📌 Current state & next steps

- ✅ Basic CRUD functionality implemented
- ✅ Strong form validation
- ✅ Modular architecture, ready to grow

### 🔜 Coming next:

- Add JWT authentication

- Deploy the API and connect the frontend to a live server

- Add more features (user accounts, reports, etc.)
