# events__channels

Элемент `channels` блока `events` предназначен для работы с именованными каналами событий. Именные каналы позволяют организовать работу с событиями, используя шаблон проектирования «наблюдатель» (также известный как Publisher-subscriber).

Элемент реализует функцию, позволяющую:

* получить ссылку на именной канал по `id`;
* получить ссылку на стандартный канал;
* удалить канал – стандартный или по `id`.

Элемент `events` реализован в технологии `vanila.js` и подходит для использования как на клиенте, так и на сервере.

Функция принимает аргументы:

* `{String}` `[id]` – Идентификатор канала. Если не задан будет использоваться канал по умолчанию (`'default'`).
* `{Boolean}` `[drop]` – Логический флаг, указывающий (в значении `true`) на необходимость удалить канал. По умолчанию `false`.

Функция возвращает:

* ссылку на объект «класса» `Emitter` – именной канал;
* `undefined`, если функция была вызвана с параметром `drop` в значении `true`.

```js
modules.define('channels-subscriber', ['events__channels'], function(provide, channels) {
    var _shout = function(e, data){ data && console.log(data); },
        def = channels(); // получаем стандартный канал

    def.on('test', _shout); // подписываемся на событие test
});

modules.define('channels-emitter', ['events__channels'], function(provide, channels) {    
    var getData = function(){
            var def = channels(), // получаем стандартный канал
                data = (Math.round(Math.random()*2000)), 
                cb = function(){ def.emit('test', data) }; // вызываем событие test
            
            setTimeout(cb, data);
        };

provide({ 'getData': getData });
});

modules.require(['channels-subscriber'], function(){}); // "прогреваем" channels-subscriber
modules.require(['channels-emitter'], function(emitter) { emitter.getData() }); // значение data
```
