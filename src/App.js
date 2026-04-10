import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';

function App() {
  // 1. Создаем состояние для подсчета кликов
  // clickCount - текущее число кликов (начинаем с 0)
  // setClickCount - функция для обновления этого числа
  const [clickCount, setClickCount] = useState(0);

  // 2. Создаем обработчик клика по кнопке
  const handleButtonClick = () => {
    // При каждом клике увеличиваем счетчик на 1
    // Используем функцию обновления (prev => prev + 1) для надежности
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div
      className="app-container"
      // 3. Динамически меняем стиль фона в зависимости от счетчика
      style={{
        /* 
          Тернарный оператор:
          - Если clickCount делится на 2 без остатка (четное число: 0, 2, 4...), 
            фон будет светло-серым (#f4f4f4).
          - Если есть остаток (нечетное число: 1, 3, 5...), 
            фон будет персиковым (#ffebcd).
        */
        backgroundColor: clickCount % 2 === 0 ? '#f4f4f4' : '#ffebcd',
      }}
    >
      {/* Передаем наш обработчик в компонент Button */}
      <Button onClick={handleButtonClick} />
    </div>
  );
}

export default App;