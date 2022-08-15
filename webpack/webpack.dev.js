const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname,'../.env.development')
        })],
    mode: "development",
    devtool: "cheap-module-source-map",
}
