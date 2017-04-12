# gitbook-plugin-wrapper

Block plugin which wraps content with a specific tag.

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/gitbook-plugin-wrapper.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/gitbook-plugin-wrapper
[travis-image]: https://img.shields.io/travis/dbachko/gitbook-plugin-wrapper.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbachko/gitbook-plugin-wrapper
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard


### Install

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
  "plugins": ["wrapper"]
}
```

### Usage

You can now provide wraps in various ways using the `wrap` tag.

```markdown
{% wrap element='div' className='container' %}
This text will be wrapped with div
{% endwrap %}
```
The above example will produce this html markdown:

 
``` html
<div class="container">
  <p>This text will be wrapped with div</p>
</div>
```

## License

[MIT](LICENSE.md)
