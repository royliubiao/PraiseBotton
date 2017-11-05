// fis.match('::package', {
//   postpackager: fis.plugin('loader', {
//     allInOne: true
//   })
// });

// 启用插件
fis.hook('relative');

// 让所有文件，都使用相对路径。
fis.match('**', {
  relative: true
})
 //less转换css
fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css',
});

// fis.match('*.es6', {
//   parser: fis.plugin('translate-es6', {
//     presets: ['es2015']
//   }),
//   rExt: '.js' // .es6 最终修改其后缀为 .js
// })