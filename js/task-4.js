const createCounterA = function() {
  /*
   * Локальная переменная privateValue доступна только в замыкании.
   * Получить к ней доступ во внешнем коде невозможно.
   */
  let counterValue = 0;

  const increment = function() {
    counterValue += 1;
    console.log(counterValue);
  };

  return {
    increment,
    };
    
 
};

const createCounterB = function () {

    let counterValue = 0;

    const decrement = function() {
    counterValue -= 1;
    console.log(counterValue);
  };

  return {
    decrement,
    };
 };

const counterA = createCounterA();
counterA.increment(); // 1
counterA.increment(); // 2
counterA.increment();//3

const counterB = createCounterB();
counterB.decrement(); // 1
counterB.decrement(); // 2
counterB.decrement(); // 3