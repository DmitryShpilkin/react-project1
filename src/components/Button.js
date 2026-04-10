// Импортируем React и хук useState для управления состоянием компонента
import React, { useState } from 'react';

// Подключаем CSS-файл, где будут стили для обычного и нажатого состояния
import './Button.css';

// Определяем компонент. Он принимает проп onClick от родителя (например, из App.js)
const Button = ({ onClick }) => {
    // 1. Создаем состояние (state) с помощью хука useState
    // isClicked — переменная состояния (true/false), которая отслеживает, нажата ли кнопка.
    // setIsClicked — функция для изменения этой переменной.
    // useState(false) означает, что изначально кнопка НЕ нажата.
    const [isClicked, setIsClicked] = useState(false);

    // 2. Создаем собственный обработчик клика
    const handleClick = () => {
        // Меняем состояние на противоположное (true -> false, false -> true)
        setIsClicked(!isClicked);

        // Вызываем внешний обработчик onClick, который пришел от родителя,
        // чтобы не нарушить его логику (например, очистку поля ввода)
        if (onClick) {
            onClick();
        }
    };

    return (
        // 3. Возвращаем кнопку
        <button
            // Динамически формируем имя класса:
            // Всегда будет 'custom-button', а если isClicked === true, добавится класс 'clicked'
            className={`custom-button ${isClicked ? 'clicked' : ''}`}
            // При клике вызываем наш новый обработчик handleClick
            onClick={handleClick}
        >
            Изменить цвет
        </button>
    );
};

export default Button;