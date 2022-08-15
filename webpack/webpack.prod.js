const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname,'../.env.production'),
            systemvars: true
        })],
    mode: "production",
    devtool: "source-map",
}
