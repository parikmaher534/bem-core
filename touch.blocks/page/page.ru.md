﻿# `page`

На уровне переопределения `touch` блок создает набор дополнительных HTML-элементов внутри `head`:

* `<meta>` с атрибутом `name` – `'format-detection'`. Значением `content` служит `'telephone=no'`. Элемент отключает автоматическое распознавание телефонных номеров в html-коде и их набор по нажатию.
* `<link>` с атрибутом `name` — `'apple-mobile-web-app-capable'`. Значением `content` служит `'yes'`. Элемент задает для страницы полноэкранный режим отображения на устройствах с iOS.
* `<meta>` с атрибутом `name` в значении `'viewport'`. Элемент позволяет управлять масштабированием страницы. При этом значение атрибута `content`, определяющего режим масштабирования, зависит от поля контекста `zoom`:
    * если полю не присвоено значение или оно `false` – `'maximum-scale=1,initial-scale=1,user-scalable=0'`. Масштаб по умолчанию устанавливается равным 100%. Масштабирование отключено.
    * со значением `true` – `'initial-scale=1'`. Масштабирование включено. Масштаб по умолчанию устанавливается равным 100%.

```js
{
    block: 'page',
    title: 'Hello, World!',
    head: { elem: 'meta', 'zoom': true },
    content: 'Включение масштабирования страницы'
}
```

Кроме того, к элементу <body> с классом `page` подмешивается блок `ua` с модификатором `js_true`.

## Элементы блока

### `icon` 

Позволяет задать ссылку на значки Web Clips, для отображения на рабочем столе iOS при добавлении ссылки на сайт. Ссылка задается через свойство `src{X}`.

#### Свойства элемента

##### `src{X}`

Свойства вида `src{X}` используются для указания пути к файлу значка. В качестве `{X}` выступает разрешение фала значка. Допустимы следующие значения свойства:

* `src16` – элемент `link` c атрибутом `rel` со значением `'shortcut icon'`. 
* `src57` – элемент `link` c атрибутами: `sizes` со значением `'57x57'`, `rel` со значением `'apple-touch-icon-precomposed'`. 
* `src72` – элемент `link` c атрибутами: `sizes` со значением `'72x72'`, `rel` со значением `'apple-touch-icon-precomposed'`. 
* `src114` – элемент `link` c атрибутом `rel` со значением `'apple-touch-icon-precomposed'`. 


```js
{
    block: 'page',
    title: 'Page title',
    { elem: 'icon', src72: 'example.png' },
    content: 'Страница с подключенным значком'
}
```