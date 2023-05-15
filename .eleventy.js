module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");

    return { input: "src/*", output: "_site/*" };
}