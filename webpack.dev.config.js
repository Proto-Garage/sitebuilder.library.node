const path = require("path");

module.exports = {
  entry: "./docs/lib/app.tsx",
  output: {
    path: __dirname + "./build",
    filename: "bundle.js",
    libraryTarget: "umd",
    umdNamedDefine: true
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "bootstrap-css": path.join(
        __dirname,
        "node_modules/bootstrap/dist/css/bootstrap.css"
      ),
      "sitebuilder.library.node": path.resolve("./src")
    }
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        enforce: "pre",
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "tslint-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          // {
          //   loader: "css-loader",
          //   options: {}
          // },
          // {
          //   loader: "sass-loader",
          //   options: {}
          // }
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  },

  devServer: {
    // contentBase: path.join(__dirname, "docs"),
    // index: "docs/index.html",
    port: 4000,
    // hot: true,
    open: true,
    // inline: true,
    progress: true
  }
};
