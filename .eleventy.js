const markdownIt = require('markdown-it');
const footnote = require('markdown-it-footnote');
const createExamples = require('./bin/create-examples.js');

function highlightRegex(match) {
  return new RegExp(`(?<=<pre>.*>[^<]+)(${match})`, 'gmisu');
}

module.exports = function(eleventyConfig) {

  const options = {
    html: true,
    breaks: true,
    linkify: true
  };

  const markdownLibrary = markdownIt(options).use(footnote);

  eleventyConfig.setLibrary('md', markdownLibrary);

  eleventyConfig.on('eleventy.before', async () => await createExamples());

  eleventyConfig.addWatchTarget("./src/examples/");

  eleventyConfig.addFilter("year", (date) => `${new Date(date).getUTCFullYear()}`);

  eleventyConfig.addTransform("css-token", function(content) {
    const variable = highlightRegex('--[\\w-]+');
    const comment = highlightRegex('\\/\\*[^*]+\\*\\/');
    return content
      .replaceAll(variable, '<span class="token variable">$1</span>')
      .replaceAll(comment, '<span class="token comment">$1</span>')
  });

  eleventyConfig.addPassthroughCopy({"src/public/**/*.(css|jpg|gif|png|svg|webmanifest|ico|pdf)": "/"});

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: 'src/pages',
      includes: '../_includes',
      data: '../_data',
      output: '_site'
    }
  };
};