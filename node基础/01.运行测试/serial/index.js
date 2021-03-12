/*
 * @Author: your name
 * @Date: 2021-03-09 15:45:21
 * @LastEditTime: 2021-03-10 09:24:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \2020CCsdf\node\node基础\01.运行测试\serival\index.js
 * 异步编程
 */
const logTime = (name) => {
    console.log(`log....${name}` + new Date().toLocaleTimeString())
}
exports.callback =() =>{
    setTimeout(() => {
        logTime('1callback');

        setTimeout(() => {
            logTime('2callback')
        }, 100);
    }, 100);
}

const promise = (name, delay = 100) => new Promise(resolve => {
    setTimeout(() => {
        logTime(name)
    }, delay); 
});

exports.promise = () => {
    promise('1 - Promise')
      .then(promise('2 - Promise'))
      .then(promise('3 - Promise'))
};

exports.generator = () => {
    const generator = function* (name) {
         yield promise(name + 1)
         yield promise(name + 2)
         yield promise(name + 3)
    }
    
    // 递归
    let co = generator => {
        if( it = generator.next().value ) {
            it.then(res => {
                co(generator)
            })
        } else {
            return
        }
    }
    co(generator('Co-generator'))
}

exports.asyncAwait = async() => {
    await promise('asyncAwait + 1')
    await promise('asyncAwait + 2')
    await promise('asyncAwait + 3')
}

exports.event = async() => {
    const asyncFun = name => event =>{
        setTimeout(() => {
            logTime(name);
            event.emit('end')
        }, 100);
        return event
    }
    const ary = [
        asyncFun('event1'),
        asyncFun('event2'),
        asyncFun('event3')
    ]
    const {EventEmiter} = require('events');
    const event = new EventEmiter();
    let i = 0;
    event.on('end', () => i< ary.length && ary[i++](event));
    event.end('end')
}