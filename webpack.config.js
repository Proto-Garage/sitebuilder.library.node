const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ROOT = path.resolve(__dirname, "src");

module.exports = {
  context: ROOT,
  entry: "./index.tsx",
  output: {
    path: __dirname + "/lib",
    filename: "SitebuilderLibraryNode.js",
    // filename: "[name].js",
    libraryTarget: "umd",
    library: "SitebuilderLibraryNode",
    umdNamedDefine: true
  },

  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    },
    styled: {
      root: "styled",
      commonjs2: "styled-components",
      commonjs: "styled-components",
      amd: "styled-components"
    },
    "react-icons": {
      root: "react-icons",
      commonjs2: "react-icons",
      commonjs: "react-icons",
      amd: "react-icons"
    }
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"],
    modules: [ROOT, "node_modules"]
  },

  module: {
    rules: [
      /****************
       * PRE-LOADERS
       *****************/
      {
        enforce: "pre",
        test: /\.tsx$/,
        use: "source-map-loader"
      },
      {
        enforce: "pre",
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: "tslint-loader"
      },

      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx$/,
        exclude: [/node_modules/],
        use: "awesome-typescript-loader"
      },
      // {
      //   enforce: "pre",
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   use: "tslint-loader"
      // },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 10000,
              name: "assets/media/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      {
        test: /\.scss$/,
        use: [
          // process.env.NODE_ENV !== "production"
          //   ? "style-loader"
          //   : MiniCssExtractPlugin.loader,
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

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "sitebuilder.library.node.css",
      // filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: "react",
  //   "react-dom": "react-dom"
  // },
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
