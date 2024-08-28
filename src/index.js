
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const result = [];
  
  for(let i in matrix){
    if(i % 2 === 0){
      result.push(...matrix[i]);
    } else {
      result.push(...matrix[i].reverse());
    }
  }
  
  return result;
}
