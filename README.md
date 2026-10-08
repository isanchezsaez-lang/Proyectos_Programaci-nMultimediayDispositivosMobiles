# Programación Multimedia y Dispositivos Móviles

Repositorio de prácticas y proyectos para la asignatura **0489 - Programación Multimedia y Dispositivos Móviles** del ciclo formativo **2º DAM** (Desarrollo de Aplicaciones Multiplataforma).

## Proyectos

### Práctica 1 - UT1 RA1
**Practica_1_UT1_RA1/** - Game Store App

Una aplicación React Native con Expo que demuestra:
- **Componentes reutilizables**: GameCard component utilizado 3 veces con diferentes datos
- **Props y TypeScript**: Interfaces tipadas para props de componentes
- **State Management**: React hooks (useState) para interactividad
- **Diseño responsivo**: UI moderna con tema oscuro
- **Cross-platform**: Testado en Android (Pixel 7)

**Características principales:**
- Header con icono gaming y branding
- GameList con 3 juegos diferentes (Adventure Quest, Space Shooter, Puzzle Master)
- GameCard interactivo con:
  - Sistema de favoritos (❤️/🤍)
  - Detalles colapsables
  - Imágenes de fondo dinámicas
  - Rating y precio
- Footer con información y versión

**Requisitos de práctica completados:**
- ✅ 4.1 - Component reutilizable (GameCard usado 3 veces)
- ✅ 4.2 - Nuevo contenido (3 juegos con descripciones y precios)
- ✅ 4.3 - Cambios visuales (tema oscuro, colores, márgenes, distribución)
- ✅ 4.4 - Interacción con state (favoritos y detalles colapsables)
- ✅ 5 - Testing multiplataforma (Android Pixel 7)

## Stack Tecnológico

- **Lenguaje**: TypeScript
- **Framework**: React Native
- **Herramienta de desarrollo**: Expo
- **Gestor de paquetes**: npm/pnpm

## Instalación y Ejecución

```bash
cd Practica_1_UT1_RA1
npm install        # o pnpm install
npx expo start     # Inicia el dev server
```

Luego, en la terminal de Expo:
- Presiona `a` para Android emulator/device
- Presiona `i` para iOS simulator
- Escanea el QR code con Expo Go en tu dispositivo

## Testing

El proyecto ha sido probado en:
- ✅ Android: Pixel 7 (dispositivo físico)
- 🔄 iOS: Opcional (requiere Mac y iPhone/simulator)

## Estructura del Proyecto

```
Practica_1_UT1_RA1/
├── src/
│   ├── app/
│   │   └── index.tsx          # Punto de entrada (GameStore component)
│   └── components/
│       ├── Header.tsx         # Encabezado con branding
│       ├── GameList.tsx       # Lista de juegos
│       ├── GameCard.tsx       # Componente reutilizable
│       └── Footer.tsx         # Pie de página
├── app.json                   # Configuración de Expo
├── package.json               # Dependencias
└── tsconfig.json              # Configuración TypeScript
```

## Lecciones Aprendidas

- Estructura modular con componentes reutilizables
- Props y TypeScript para type-safety
- State management con React hooks
- Diseño responsive mobile-first
- Configuración y testing con Expo
- Control de versiones y GitHub workflow

## Autor

**Ismael Sánchez Saéz**  
isanchesaez@gmail.com

## Licencia

Proyecto educativo - Ciclo Formativo 2º DAM
