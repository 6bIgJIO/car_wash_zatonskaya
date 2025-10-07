
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

function App(){
  return (
    React.createElement('div',{className:'min-h-screen bg-gray-50 text-gray-900'}, [
      React.createElement('header',{className:'p-6 bg-black text-white flex justify-between items-center'}, 
        React.createElement('div',{className:'flex items-center gap-3'}, [React.createElement('div',{className:'w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center'}, 'CD'), React.createElement('div',null, React.createElement('div',{className:'font-bold'}, 'CleanDrive'))])
      ),
      React.createElement('main',{className:'p-8'}, [
        React.createElement('section',{className:'grid md:grid-cols-2 gap-6 items-center'}, [
          React.createElement('div',{className:'bg-gradient-to-br from-orange-600 to-black p-8 rounded-3xl shadow-2xl text-black'}, [
            React.createElement('h1',{className:'text-4xl font-extrabold'}, 'CleanDrive — Профессиональная автомойка'),
            React.createElement('p',{className:'mt-2'}, 'Ежедневно 08:00–20:00 • ул. Затонская, 46и, Свердловский район, Красноярск'),
            React.createElement('div',{className:'mt-4 flex gap-3'}, [React.createElement('a',{className:'bg-black/90 text-white px-4 py-2 rounded-lg', href:'tel:+73912727110'}, 'Позвонить')])
          ]),
          React.createElement('div', {className:'space-y-4'}, [
            React.createElement('h2',{className:'text-2xl font-bold'}, 'Наши услуги'),
            React.createElement('div',{className:'grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3'}, [
              React.createElement('div',{className:'bg-white/90 p-4 rounded-xl shadow-md'}, [React.createElement('h4',{className:'font-bold'}, 'Экспресс'), React.createElement('div',{className:'text-2xl mt-2'}, '500 ₽')]),
              React.createElement('div',{className:'bg-white/90 p-4 rounded-xl shadow-md'}, [React.createElement('h4',{className:'font-bold'}, 'Полный пакет'), React.createElement('div',{className:'text-2xl mt-2'}, '1800 ₽')])
            ])
          ])
        ]),
        React.createElement('section',{id:'contact', className:'mt-8 p-6 bg-white rounded-xl shadow'}, [
          React.createElement('h3',{className:'text-xl font-bold'}, 'Контакты'),
          React.createElement('p',null, 'Адрес: Затонская улица, 46и, Свердловский район, Красноярск, 660052'),
          React.createElement('p',null, 'Часы: Ежедневно с 08:00 до 20:00'),
          React.createElement('p',null, 'Телефон: +7 (391) 272-71-10')
        ])
      ]),
      React.createElement('footer',{className:'p-6 text-center text-sm text-gray-600'}, '© CleanDrive — demo')
    ])
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
