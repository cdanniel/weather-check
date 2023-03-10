# Weather Check App

## Instrucciones para la ejecución del programa

Antes de continuar, asegúrate de tener instalado Node.js y React en tu ordenador. Si no es así, puedes descargarlos en los siguientes enlaces:
- [Node.js](https://nodejs.org/es/)
- [React](https://es.reactjs.org/)

Para ejecutar la aplicación en local, sigue los siguientes pasos:

1. Clona el repositorio en tu ordenador
2. Crea un archivo llamado `config.js` en la raíz del proyecto y agrega la siguiente línea:
```bash
export const apiKey = "TU_API_KEY_DE_OPENWEATHERMAP";
```
Reemplaza "TU_API_KEY_DE_OPENWEATHERMAP" con tu propia API key proporcionada por OpenWeather.

3. Abre una terminal en la raíz del proyecto y ejecuta los siguientes comandos:
```bash
npm install
npm start
```
4. La aplicación se abrirá en el navegador predeterminado en la dirección http://localhost:3000.

Nota: La aplicación requiere una API Key válida de OpenWeather para funcionar correctamente. Si no tienes una, puedes obtener una gratuitamente en https://home.openweathermap.org/users/sign_up.
