const EventEmitter = require('events').EventEmitter;

class MyBlog extends EventEmitter {
  constructor() {
    super()
    setInterval(() => {
      this.emit('dota2', { newHero: 'xxx', price: Math.random() * 100 });
    }, 2000);
  }
} 

module.exports = MyBlog;