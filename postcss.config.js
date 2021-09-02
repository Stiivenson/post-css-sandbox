module.exports = {
    plugins: [
        require('stylelint'),
        require('./src/css-plugins/fixedWidth'),
        require('precss'),
    ]
}
