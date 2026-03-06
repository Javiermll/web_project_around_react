# Around The U.S. — Migración a React

Versión de la red social de fotos "Around" migrada a React con Vite, como proyecto de formación en el bootcamp TripleTen.

## Descripcion / Objetivo

Refactorización completa de la aplicación JavaScript vanilla "Around The U.S." a React 19 con componentes funcionales y hooks, manteniendo todas las funcionalidades de gestión de tarjetas y perfil conectadas a la misma API REST.

## Tecnologias y herramientas

- React 19 (componentes funcionales, hooks: `useState`, `useEffect`, `useContext`)
- Vite como bundler y servidor de desarrollo
- JavaScript ES6+ / JSX
- Context API para manejo de estado global (datos del usuario)
- CSS Modules / CSS por componente
- Metodología BEM adaptada a React
- ESLint con reglas de React Hooks
- Git / GitHub para control de versiones

## Funcionalidades principales

- **Componentes reutilizables:** arquitectura modular con 10+ componentes: `Card`, `Main`, `Header`, `Footer`, `Popup`, `PopupWithForm`, `ImagePopup`, `EditProfile`, `EditAvatar`, `NewCard`, `RemoveCard`.
- **Manejo de estado con hooks:** `useState` para modales, datos de usuario y tarjetas; `useEffect` para carga inicial desde la API.
- **Context API:** `CurrentUserContext` para compartir los datos del usuario autenticado entre componentes sin prop drilling.
- **Gestion completa de tarjetas y perfil:** crear, eliminar (con confirmación) y dar/quitar like a tarjetas; editar nombre, descripción y avatar del perfil.

## Rol

Proyecto individual: migración completa de la aplicación de JS vanilla a React, estructuración de componentes, implementación de Context API y manejo de estado con hooks.

## Resultado / Impacto

- 10+ componentes React funcionales con separación clara de responsabilidades.
- Eliminación del código imperativo (querySelector, addEventListener) reemplazado por JSX declarativo.
- Context API implementado para evitar prop drilling en el árbol de componentes.
- Hot Module Replacement (HMR) activo en desarrollo con Vite para iteración rápida.

## Instalacion y ejecucion

```bash
npm install
npm run dev       # http://localhost:5173
npm run build
npm run preview
```

## Repositorio

- GitHub: https://github.com/Javiermll/web_project_around_react
