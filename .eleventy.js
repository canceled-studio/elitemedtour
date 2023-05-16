const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");

  eleventyConfig.addPlugin(EleventyRenderPlugin);

  return { input: "src/*", output: "_site/*" };
};
