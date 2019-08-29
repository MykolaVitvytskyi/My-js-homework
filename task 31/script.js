const a = { a: 1, b: {b1: 2, b2: 3}, c: 4};

function deepFreeze(obj){
  Object.entries(obj).forEach(([key, value]) => {

    if( typeof obj[key] === 'object' ){
      deepFreeze(obj[key]);
    }

    Object.defineProperty(obj, key,{
      value : value,
      writable : false,
      configurable: false,
      enumerable : false
    });
  });
}

deepFreeze(a);

a.b.b1 = null;
console.log(a);
