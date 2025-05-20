import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Убедитесь, что этот импорт существует
import './assets/styles/main.css'
import { Notify, Loading, Confirm } from 'notiflix';

Notify.init({
  position: 'right-top',
  timeout: 3000
});

Loading.init({
  svgSize: '100px',
  svgColor: '#1E3A8A', // Используем основной цвет из темы
  messageColor: '#1E3A8A',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  cssAnimationDuration: 800,
  messageFontSize: '1rem',
  cssAnimation: true,
  svgIcon: `
    <svg viewBox="0 0 24 24">
      <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" fill="currentColor">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  `
});

const app = createApp(App)

// Отключаем Vue DevTools в продакшн режиме
if (process.env.NODE_ENV === 'production') {
  app.config.devtools = false
}

app.use(store) // Подключение хранилища
app.use(router)

app.mount('#app')