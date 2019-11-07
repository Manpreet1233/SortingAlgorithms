
// SORTING FUNCTIONSS
function insertionSort(array_i){
  var array = array_i.slice(0)
  console.log("running insertion sort");
  console.log("array is:");
  console.log(array);

  for (var i = 1; i <= array.length-1; i++) {
      var value = array[i];
      var space = i;
      while (space > 0 && array[space-1] > value) {
          array[space] = array[space -1];
          space = space - 1;
      }
      array[space] = value;
      console.log(array);
  }



  //console.log("sorted\n")
  //console.log(array)
  //console.log("unsorted\n")
  //console.log(array_i)

  if(!(validate(array_i.slice(0) ,array))){ 
    console.log("INSERTION SORT FAILED\n") //should not run if everything went well
  }
}

function selectionSort(array_s){
  var array = array_s.slice(0)
  console.log("running seletion sort");
  console.log("array is:");
  console.log(array);

    for (var i = 0; i <= array.length - 1; i++) {
        //variable storing the index of minimum element
        var iMin = i;
        //console.log(iMin);
         for (var j = i + 1; j < array.length; j++) {
             if (array[j] < array[iMin]) {
                 //updating index of minimum element
                 iMin = j;
                 //console.log(iMin);
             }
         }
        //if ( i !== iMin) {
            var temp = array[i];
            array[i] = array[iMin];
            array[iMin] = temp;
            //console.log(array);
        //}
        console.log(array)
    }
    console.log(array)

    if(!(validate(array_s.slice(0) ,array))){ 
      console.log("INSERTION SORT FAILED\n") //should not run if everything went well
    }
  

}

function bubbleSort(array){
  console.log("running bubble sort");
  console.log("array is:");
  console.log(array);

//num of passes
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < (array.length-i-1); j++) {
      //comparing the 2 positions beside eachother and swapping if necessary 
      if (array[j] > array[j+1]) {
        var temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
  }
  console.log(array);
  if(!(validate(array.slice(0) ,array))){ 
    console.log("INSERTION SORT FAILED\n") //should not run if everything went well
  }
}

function mergeSort(array){
  console.log("running merge sort");
  console.log("array is:");
  console.log(array);

  if (array.length == 1) {
    return array;
  }
  var mid = Math.floor(array.length / 2);
  var left = array.slice(0, mid);
  var right = array.slice(mid);
  //console.log(array);
  //sending left and right to the mergeSort to break it down into pieces and then merge them
  return merge(mergeSort(left), mergeSort(right));
 
}

function merge(left, right) {
  var result = [];
  var indexLeft, indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft++]);
      //indexLeft++;
    } else {
      result.push(right[indexRight++]);
      //indexRight++;
    }
    //console.log(array);
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
  
}

function quickSort(array){
  console.log("running quick sort");
}

function treeSort(array){
  console.log("running tree sort");
}

// validation function
function validate(unsortedArr ,sortedArr){
  //im pretty sure javascript has built in sort function, use that to validate the sorts
  // return true or false
  console.log("VALIDATING!!\n")
  //console.log("unsorted\n")
  //console.log(unsortedArr)
  
  unsortedArr = unsortedArr.sort(function(a,b){return a-b});
  //console.log("both sorted now\n")
  //console.log(unsortedArr)
  //console.log(sortedArr)

  if(sortedArr.length != unsortedArr.length){
    //console.log("failed in length check\n")
    return false;
  }
  for(i = 0; i<sortedArr.length; i++){
    if(sortedArr[i] != unsortedArr[i]){
      //console.log(sortedArr[i])
      return false;
    }
  }
  console.log("validation passed\n")
  return true; //nothing goes wrong return true
  
}

// rank the sorts
function rank(array,time){

}
//convert string array to int array
function convert(array){

  array = array.split(" ")
  console.log(array.length)
  console.log(array)
  var int_arr = []
  for(var i =0; i<array.length; i++){
    int_arr[i] =  parseInt(array[i], 10)
  }
  console.log(int_arr)
  return int_arr
}

function doFunction(){
  console.log("clicked");
  var x =  $('textarea#input').val();
  console.log(x);
  var unsorted_arr = convert(x);
  //use convert to convert the string array to int array, return the int array int a new variable

  //pass the int array into each sorting type and sort it
  //start time
  insertionSort(unsorted_arr.slice(0)); // what does this do??? https://stackoverflow.com/questions/6612385/why-does-changing-an-array-in-javascript-affect-copies-of-the-array
  selectionSort(unsorted_arr.slice(0));
  //  bubbleSort(tempUnsorted); //something is wrong with this. idk
  //end time


}


console.log("hi");
console.log(insertionSort([1,2,3,4,2,1]));
console.log(selectionSort([2,3,4,7,3,2,7,9,6]));
console.log(bubbleSort([1,2,3,4,2,1]));
console.log(mergeSort([1,2,3,4,2,1]));

