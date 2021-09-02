module.exports = (opts = {}) => {
    return {
        postcssPlugin: 'postcss-no-fixed-width',
        Once (root, { result }) {
            root.walkDecls(decl => {
                if (decl.prop === 'width') {
                    if (decl.value.includes('px')) {
                        decl.value = '100%';
                    }
                }
            })
        }
    }
}

module.exports.postcss = true

// postcss.plugin('postcss-reverse-props', (options = {}) => {
//     return css => {
//         css.walkDecls(decl => {
//             if (decl.prop === 'width') {
//                 if (decl.value.includes('px')) {
//                     decl.value = '100%';
//                 }
//             }
//         });
//     };
// });
