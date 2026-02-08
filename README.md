# Meraki Gift Store - Adaptación CloudCannon + Netlify

Este proyecto ha sido adaptado para funcionar como un sitio estático en Netlify, gestionable a través del CMS CloudCannon.

## Características Nuevas

- **Datos Dinámicos**: Los productos y testimonios ahora viven en archivos JSON individuales dentro de `content/`.
- **CloudCannon CMS**: Configuración lista para editar contenido visualmente.
- **Script de Construcción**: Un script (`scripts/build-data.js`) agrega todo el contenido en un solo archivo `db.json` para que la aplicación React lo consuma de manera eficiente.

## Estructura de Datos

- `content/products/*.json`: Archivos individuales de productos. Editables en el CMS.
- `content/testimonials/*.json`: Archivos de testimonios.
- `public/data/db.json`: Archivo generado automáticamente durante el build. **No editar manualmente**.

## Comandos

### Desarrollo Local

```bash
npm install
npm run dev
```

Esto iniciará el servidor de desarrollo de Vite.

### Construcción para Producción

```bash
npm run build
```

Este comando ejecuta secuencialmente:
1. `npm run build-data`: Genera `public/data/db.json` desde los archivos en `content/`.
2. `vite build`: Compila la aplicación React en la carpeta `dist/`.

## Despliegue

### 1. GitHub
Sube este repositorio a GitHub. Asegúrate de incluir la carpeta `content` y excluir `public/data` (ya está en .gitignore).

### 2. Netlify
1. Conecta tu repositorio de GitHub a Netlify.
2. Configuración de Build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Desplegar.

### 3. CloudCannon
1. Crea una cuenta en CloudCannon y conecta tu repositorio.
2. CloudCannon detectará automáticamente el archivo `cloudcannon.config.yml`.
3. CloudCannon sincronizará los cambios en `content/` con tu repositorio, lo que disparará un nuevo build en Netlify.

## Notas para el Desarrollador

- Si agregas nuevos campos a los productos, asegúrate de actualizar:
  1. Los archivos JSON en `content/products/`.
  2. La interfaz `Product` en `types.ts`.
  3. La configuración en `cloudcannon.config.yml` si quieres que sean editables.
