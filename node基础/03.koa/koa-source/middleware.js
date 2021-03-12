/*const add = (x,y) => x + y
const square = z =>  z * z;

const fn = (x,y) => square(add(x,y));
console.log(fn(2,2));

// 组合函数
const compose1 = (fn1,fn2) => (...args) => fn2(fn1(...args));
const fn2 = compose1(add, square);
console.log(fn2(3,3));

// 多参数组合函数
const compose = (...[first, ...other]) => (...args) => {
    let ret = first(...args);
    other.forEach(fn => {
        ret = fn(ret)
    });
    return ret
}

const fn3 = compose(add, square,square)
console.log(fn3(3,3));
*/

function compose(middlewares) {
    return function () {
        // 执行第一个0
        return dispatch(0);
        function dispatch(i) {
            let fn = middlewares[i];
            if(!fn) {
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function next() {
                    return dispatch(i + 1);
                })
            )
        }
    }
}

async function fn1(next) {
    console.log('fn1');
    await next()
    console.log('end fn1');
}

async function fn2(next) {
    console.log("fn2");
    await delay();
    await next();
    console.log("end fn2");
   }

function fn3(next) {
    console.log('fn3')
}

function delay() {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve()
       }, 2000);
   })
}

const middlewares = [fn1, fn2, fn3];
const finalFn = compose(middlewares);
finalFn()