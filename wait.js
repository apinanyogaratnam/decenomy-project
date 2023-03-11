class MyClass {
  async getOk() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return 'OK';
  }
}

export default MyClass;
