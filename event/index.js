
const MyBlog = require('./lib');
const blog = new MyBlog;

blog.addListener('dota2', (res) => {
  console.log(res.price);
  if (res.price > 50) {
    console.log('fuck yes!');
  }
});