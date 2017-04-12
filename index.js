/**
 * Wraps html in tag with specific class name.
 *
 * @param {String} html
 * @param {Object} attrs
 * @return {String} HTML wrapped in a container
 */
function wrapInContainer (html, {element, className}) {
  return `<${element} class="${className}">${html}</${element}>`
}

module.exports = {
  blocks: {
    wrap: {
      process: function (block) {
        const pluginConfig = this.config.get('pluginsConfig.wrapper')
        const attrs = Object.assign({}, pluginConfig, block.kwargs)

        return this
          .renderBlock('markdown', block.body)
          .then(renderedBody => wrapInContainer(renderedBody, attrs))
      }
    }
  }
}
