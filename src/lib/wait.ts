function wait(n) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, n);
    });
  }
  export default wait;