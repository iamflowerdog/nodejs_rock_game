
const MyBlog = require('./lib');
// js里面，如果构造函数不需要传参数，可以忽略括号
const blog = new MyBlog;

blog.addListener('dota2', (res) => {
  console.log(res.price);
  if (res.price > 50) {
    console.log('fuck yes!');
  }
});