
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let new_arr = [];
  let i,j;
  if(matrix){
    for (i=0; i<matrix.length; i++){
      if(i%2==1) matrix[i].reverse();
      for (j=0; j<matrix[i].length; j++){
        new_arr.push(matrix[i][j]);
      }
    }
  }
  return new_arr;
}
