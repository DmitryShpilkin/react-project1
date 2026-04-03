// Импортируем React и хук useRef для работы с ссылками на DOM-элементы
import React, { useRef } from 'react';

// Импортируем собственные компоненты: Button и Input
import Button from './components/Button';
import Input from './components/Input';

// Импортируем стили для компонента App
import './App.css';

// Основной функциональный компонент приложения
function App() {
  // Создаём ссылку на элемент <input> с помощью хука useRef
  // inputRef будет хранить ссылку на DOM-узел поля ввода
  const inputRef = useRef(null);

  // Функция для очистки значения в поле ввода
  const handleClear = () => {
    // Проверяем, что ссылка на элемент существует
    if (inputRef.current) {
      // Обнуляем значение поля ввода через прямой доступ к DOM-элементу
      inputRef.current.value = '';
    }
  };

  // Возвращаем JSX-разметку компонента
  return (
    <div className="app-container">
      {/* Поле ввода, которому передаём ссылку inputRef */}
      <Input ref={inputRef} placeholder="Введите текст..." />
      {/* Кнопка, при нажатии на которую вызывается handleClear */}
      <Button onClick={handleClear} />
    </div>
  );
}

// Экспортируем компонент App для использования в других частях приложения
export default App;