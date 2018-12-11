module.exports = function (api) {
  api.cache(true)

  return {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "browsers": ["> 1%", "last 2 versions", "not ie <= 9"]
          },
          "debug": false 
        }
      ]
    ]
  }
}
