cd ~/client/project-Stroymaste-front/
cat > deploy-frontend.sh << 'EOF'
#!/bin/bash

# Остановить скрипт при ошибках
set -e

# Директория проекта
cd ~/client/project-Stroymaste-front/

# Создание директории для логов
mkdir -p logs

echo "Обновление зависимостей и сборка фронтенда..."
npm ci
npm run build

# Запуск через PM2
echo "Запуск фронтенда через PM2..."
pm2 delete stroymasterFrontend 2>/dev/null || true
pm2 start ecosystem.config.js

# Сохраняем конфигурацию PM2
pm2 save

echo "Фронтенд успешно запущен!"
EOF

chmod +x deploy-frontend.sh