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
      root: "react",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "react-dom",
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
    classnames: {
      root: "classnames",
      commonjs2: "classnames",
      commonjs: "classnames",
      amd: "classnames"
    },
    reactstrap: {
      root: "reactstrap",
      commonjs2: "reactstrap",
      commonjs: "reactstrap",
      amd: "reactstrap"
    },
    "react-beautiful-dnd": {
      root: "react-beautiful-dnd",
      commonjs2: "react-beautiful-dnd",
      commonjs: "react-beautiful-dnd",
      amd: "react-beautiful-dnd"
    },
    "react-owl-carousel2": {
      root: "react-owl-carousel2",
      commonjs2: "react-owl-carousel2",
      commonjs: "react-owl-carousel2",
      amd: "react-owl-carousel2"
    },
    "sitebulder.client": {
      root: "sitebulder.client",
      commonjs2: "sitebulder.client",
      commonjs: "sitebulder.client",
      amd: "sitebulder.client"
    },
    "styled-components": {
      root: "styled-components",
      commonjs2: "styled-components",
      commonjs: "styled-components",
      amd: "styled-components"
    },
    bootstrap: {
      root: "bootstrap",
      commonjs2: "bootstrap",
      commonjs: "bootstrap",
      amd: "bootstrap"
    },
    "@blueprintjs/core": {
      root: "@blueprintjs/core",
      commonjs2: "@blueprintjs/core",
      commonjs: "@blueprintjs/core",
      amd: "@blueprintjs/core"
    },
    "@blueprintjs/icons": {
      root: "@blueprintjs/icons",
      commonjs2: "@blueprintjs/icons",
      commonjs: "@blueprintjs/icons",
      amd: "@blueprintjs/icons"
    }
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".mjs", ".ts", ".tsx", ".js"],
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
        // test: /\.(ts|js)x?$/,
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: [/node_modules/],
        use: "awesome-typescript-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
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
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          // "style-loader", // creates style nodes from JS strings
          {
            loader: "css-loader",
            options: {}
          },
          {
            loader: "sass-loader",
            options: {}
          }
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
  },
  mode: "production"
};
