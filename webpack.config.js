const path = require("path");

module.exports = {
  entry: [__dirname + "/src/scss/app.scss", __dirname + "/src/ts/app.ts"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/app.min.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "css/", name: "[name].min.css" },
          },
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
