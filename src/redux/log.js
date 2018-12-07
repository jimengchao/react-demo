export default (next) => (action) => {
    console.log(action, 'logs')
    try {
      next(action);
    } catch (err) {
      console.error('错误报告: ', err)
    } 
}