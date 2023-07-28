const path = require("path");
const copyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    popup: path.resolve(__dirname, "src/popup/popup.tsx"),
    options: path.resolve(__dirname, "src/options/options.tsx"),
    background: path.resolve(__dirname, "src/background/background.ts"),
    contentScript: path.resolve(
      __dirname,
      "src/contentScript/contentScript.ts"
    ),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
      {
        type: "asset/resource",
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf)$/i,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new copyPlugin({
      patterns: [
        {
          from: "src/static",
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),

    ...getHTMLPlugins(["popup", "options"]),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

function getHTMLPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlWebpackPlugin({
        title: "React Extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
