# cookie

Блок предоставляет объект, содержащий набор методов для работы с куки браузера (JS-свойство `document.cookie`).

## Обзор блока

### Свойства и методы объекта

| Имя | Возвращаемое значение | Описание |
| -------- | --- | -------- |
| Метод <a href="#fields-get">get</a> | <code>{String} | {null}</code> | Cлужит для получения значения, хранящегося в куки браузера |
| Метод <a href="#fields-set">set</a> | <code>{String}</code> | Cлужит для записи куки с заданным именем |

## Описание блока

<a name="fields"></a>
### Свойства и методы объекта

<a name="fields-get"></a>
#### Метод `get`

Метод служит для получения значения, хранящегося в куки браузера, для имени переданного аргументом.

Принимаемые аргументы:

* `name` `{String}` – имя для получени куки.

Возвращаемое значение:

* `{String}` в случае успешного поиска. Значение автоматически декодируется с помощью `decodeURIComponent`.
* `null` если переданное аргументом имя не было найдено.

```js
modules.require(['cookie'], function(cookie) {
    cookie.set('mycookie', 'foobar');
    console.log(cookie.get('mycookie')); // 'foobar'
    console.log(cookie.get('foo')); // null
});
```

<a name="fields-set"></a>
#### Метод `set`

Метод служит для записи куки с заданным именем. Помимо имени и значения, методу можно передать хеш с дополнительными параметрами куки.

Принимаемые аргументы:

* `name` `{String}` – имя куки.
* `val` `{String}` | `{null}` – строка со значением, ассоциируемым с именем. При установке в качестве значения `null` куки будет удалено.
* `options` `{Object}` – хеш с дополнительными параметрами. В хеше допустимы следующие свойства с ожидаемым типом данных значения:
    * `expires` `{Number}` – срок жизни куки в сутках. При отрицательном значении куки будет удалено. Альтернативно, можно передать в качестве значения сформированный объект даты (`new Date()`).
    * `path` `{String}` – путь от корня домена внутри которого будет доступно куки.
    * `domain` `{String}` – домен в явном виде. По умолчанию – текущий.
    * `secure` `{Boolean}` – логический флаг, указывающий на необходимость принудительного использования с куки шифрованного соединения SSL. По умолчанию SSL не требуется.

Метод устанавливает значение куки и возвращает ссылку на объект `this`.

```js
modules.require(['cookie'], function(cookie) {
    cookie.set('mycookie', 'foobar', {
        expires : 1, // срок жизни одни сутки
        path : '/', // доступно для всех страниц домена
        secure : true // передавать куки только по SSL
    });
    console.log(cookie.get('mycookie')); // 'foobar'

    cookie.set('mycookie', null }); // удаляем куки
    console.log(cookie.get('mycookie')); // null
});
```

<a name="implement"></a>
### Особенности реализации

Блок реализован в технологии `js` и подходит для использования в клиентских приложениях.