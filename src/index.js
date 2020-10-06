
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {
  let resultArray = [];
	matrix.forEach((element, index)=>{
  	if(index%2!==0){
    	resultArray = resultArray.concat(...element.reverse());
    } else {
    	resultArray = resultArray.concat(...element);
    }
  });
  
  return resultArray;
}
