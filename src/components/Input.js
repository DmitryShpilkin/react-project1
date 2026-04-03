// Импортируем библиотеку React
import React from 'react';
// Подключаем CSS-файл для стилизации этого компонента
import './Input.css';

// Используем React.forwardRef, чтобы "пробросить" ссылку (ref) 
// от родительского компонента (App) напрямую к нативному DOM-элементу <input>
const Input = React.forwardRef((props, ref) => {
    // props — это объект со всеми свойствами, переданными в компонент (например, placeholder)
    // ref — это ссылка, которую передал родительский компонент через атрибут ref

    return (
        // Рендерим нативный тег <input>
        // 1. ref={ref} — прикрепляем полученную ссылку к DOM-элементу
        // 2. className="custom-input" — применяем стили из CSS
        // 3. {...props} — "распыляем" все остальные свойства (placeholder, type и т.д.) в элемент
        <input ref={ref} className="custom-input" {...props} />
    );
});

// Экспортируем компонент для использования в других файлах
export default Input;