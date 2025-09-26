# React Challenge - Create Accommodation Form

Una aplicación React con formulario multi-paso para crear alojamientos, incluyendo tests unitarios y E2E con Cypress.

## 🚀 Instalación y Ejecución Local

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🧪 Testing

### Tests Unitarios

```bash
npm test --watch
```

### Tests E2E con Cypress

#### Abrir Cypress (Modo Interactivo)

```bash
npm run cypress:open
```

#### Ejecutar Tests en Headless

```bash
npm run cypress:run
```

## 🔧 Web Component - custom-form-result.html

Para probar el web component personalizado:

1. **Preparar y servir el proyecto en puerto 3001**:

   ```bash
   # Instalar dependencias
   npm install

   # Construir el proyecto
   npm run build

   # Servir en puerto 3001
   npx --yes serve . -p 3001
   ```

2. **Abrir en el navegador**:
   ```
   http://localhost:3001/custom-form-result.html
   ```

## Validaciones

- **Botón Next**: Se habilita solo cuando el paso actual es válido
- **Botón Submit**: Se habilita solo en el paso de resumen

## Comportamiento Post-Envío

Después de enviar el formulario exitosamente:

1. **Alerta de Éxito**:

   ```
   "The accommodation has been created successfully."
   ```

2. **Reseteo Automático**:
   - El formulario vuelve al Paso 1
   - Todos los campos se limpian
   - El estado se resetea completamente

3. **Datos en Consola**:
   - Abrir DevTools (F12)
   - Ir a la pestaña "Console"
   - Ver el log: `"Submit payload"` con todos los datos del formulario
