
  function working(){
    const x = RNG();
    const y = RNG();
    const workerResult = x,y;
    postMessage(workerResult);
  }

  function RNG(){
    return Math.floor(Math.random()*1000);
  }

  setInterval(working(),1000);