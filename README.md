# Turisti - K Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Objetivos de aprendizaje](#2-objetivos-de-aprendizaje)
* [3. Diseño de la Interfaz de Usuario](#3-Diseño-de-la-Interfaz-de-Usuario)
* [4. Pruebas unitarias](#4-Pruebas-unitarias)

## 1. Preámbulo

Perú es uno de los destinos más transitados de Sudamérica, te ofrece ruinas incas, preciosas ciudades históricas, naturaleza pura en el Amazonas, desiertos, valles y playas. Todo esto sin nombrar que Perú posee una de las gastronomías más preciadas del mundo. Se puede considerar la cuna de la civilización. Junto a Egipto, Mesopotamia, India o China, en Perú hay restos de edificaciones que datan de hace más de 5.500 años. Culturas tan ricas como la Moche, Nazca, Tiahuanaco o los Incas nacieron en este territorio. Turisti-K es una red social para viajeros, amantes de las maravillas que ofrece Perú donde puedan publicar sugerencias, artículos o comentarios sobre su viaje conociendo Perú.

## 2. Objetivos de aprendizaje

Los objetivos alcazados en este proyecto son:

### HTML

- [x] **Uso de HTML semántico**

### CSS

- [x] **Uso de selectores de CSS**
- [x] **Modelo de caja (box model): borde, margen, padding**
- [x] **Uso de flexbox en CSS**
- [ ] **Uso de CSS Grid Layout**
### Web APIs

- [x] **Uso de selectores del DOM**
- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**
- [x] **Manipulación dinámica del DOM**
- [x] **Ruteado (History API, evento hashchange, window.location)**
### JavaScript

- [x] **Arrays (arreglos)**
- [x] **Objetos (key, value)**
- [x] **Diferenciar entre tipos de datos primitivos y no primitivos**
- [x] **Variables (declaración, asignación, ámbito)**
- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**
- [x] **Uso de bucles/ciclos (while, for, for..of)**
- [x] **Funciones (params, args, return)**
- [x] **Pruebas unitarias (unit tests)**
- [x] **Pruebas asíncronas**
- [x] **Uso de mocks y espías**
- [x] **Módulos de ECMAScript (ES Modules)**
- [x] **Uso de linter (ESLINT)**
- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**
- [x] **Diferenciar entre expresiones (expressions) y sentencias (statements)**
- [x] **Callbacks**
- [x] **Promesas**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**
- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**
- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**
- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**
- [x] **GitHub: Despliegue con GitHub Pages**
- [x] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**
- [ ] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### Firebase

- [x] **Firebase Auth**
- [x] **Firestore**
## 3 Diseño de la Interfaz de Usuario 

### 3.1 Prototipo de baja fidelidad

![](https://github.com/LindsayMuji/LIM016-social-network/blob/main/src/Images/Prototipo1.png)

### 3.2 Responsive

![](https://github.com/LindsayMuji/LIM016-social-network/blob/main/src/Images/login-responsive.png)
![](https://github.com/LindsayMuji/LIM016-social-network/blob/main/src/Images/singup-responsive.png)
![](https://github.com/LindsayMuji/LIM016-social-network/blob/main/src/Images/muro-responsive.png)

### 3.3 Consideraciones del comportamiento de la interfaz de usuario (UI)

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:

![Log In](https://github.com/LindsayMuji/LIM016-social-network/blob/main/src/Images/login.png)

![Sing Up](https://github.com/LindsayMuji/LIM016-social-network/blob/main/src/Images/singup.png)

  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo de contraseña debe ser secreto.
* Comportamiento:
  - Si hay errores, muestra mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

![Muro](https://github.com/LindsayMuji/LIM016-social-network/blob/main/src/Images/muro.png)

* Comportamiento:
  - Poder publicar un _post_.
  - Poder eliminar un post específico.
  - Al dar _click_ para editar un _post_, permite editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página se puede ver los textos editados.

## 4 Pruebas unitarias (unit tests)

![Test](https://github.com/LindsayMuji/LIM016-social-network/blob/main/src/Images/test.png)

* Los tests unitarios cubren un mínimo del 70% de _statements_, _functions_,
  _lines_, y _branches_.

