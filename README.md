# Redux Thunk ToDo List!

Мой проект решает проблему трекинга дел - все дела под рукой и в одном месте. Причем неважно с какого устройства вы откроете приложение - задачи сохраняются в облачную базу данных, поэтому у вас всегда есть доступ к ним.

В рамках проекта я использовал следующий стэк технологий: JavaScript ES2019, node.js - в качестве среды выполнения JS кода на сервере, Express.js - для создания собственного REST API, MongoDB Atlas и фреймворк mongoose - в качестве базы данных, React.js - в качестве библиотеки для создания пользовательского интерфейса, Redux - для управления стейтом приложения, Redux Thunk - для обеспечения асинхронного общения между сервером и клиентом, Bootstrap - в качестве CSS-фреймворка.

Демонстрация работы проекта - https://yadi.sk/i/JqUJlc4SmDCzZQ

Процесс работы по шагам: Пользователь входит на сайт. Пользователь вводит задачу и нажимает 'Добавить' -> На сервер отправляется запрос в базу данных -> Сервер отправляет статус ответа -> Если ответ сервера успешный, задача отображается в списке. Аналогичным образом работает удаление, отметка 'Важное' и отметка 'Выполнено'.

Для запуска приложения необходимо убедиться, что у вас установлен node.js.
Запустить приложение можно следующим образом: 
1. Скачать репозиторий.
2. Открыть в терминале папку /backend и выполнить команду npm i, затем npm start.
3. Открыть в терминале папку /frontend и выполнить команду npm i, затем npm start.
Приложение откроется в браузере.

