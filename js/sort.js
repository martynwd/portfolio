let arr = Array.from({length: 10}, ()=> Math.floor(Math.random()*100))
let copyArr = [...arr]

const swap = (arr, left, right) => {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }

const partition = (arr, left, right) => {
    const pivot = arr[Math.floor(Math.random() * (right - left + 1) + left)]
  
    while (left <= right) {
      while (arr[left] < pivot) {
        left++;
      }
      while (arr[right] > pivot) {
        right--;
      }
      if (left <= right) {
        swap(arr, left, right);
        left++;
        right--;
      }
    }
    return left;
  }


const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (arr.length > 1) {
      const position = partition(arr, left, right);
      if (left < position - 1) quickSort(arr, left, position - 1);
      if (position < right) quickSort(arr, position, right);
    }
    return arr;
  }

const findMin = (arr) => {
    return Math.min(...arr)
}

const findMax = (arr) => {
    return Math.max(...arr)
}

const findMid = (arr) => {
    let sortedArr = quickSort(arr);
    return sortedArr[Math.floor((arr.length -1) /2)]
}


sortedArr = [...arr];
quickSort(sortedArr)


console.log(quickSort(arr))

console.log(findMin(arr))

console.log(findMax(arr))

console.log(findMid(arr))


let cont  = document.querySelector('main')

let divWithNums = document.createElement('div');
let text = document.createElement('p');

text.classList.add('topic')
text.innerHTML = 'Total div tags:' + document.querySelectorAll("div").length + ' total a tags:' + document.querySelectorAll("a").length

arrArea = document.querySelector('.array_block');
arrArea.classList.add('topic')
let arrToString = document.createElement('p').innerHTML = '[' + copyArr.join(',') + ']'
let sotredArrToString = document.createElement('p').innerHTML = '[' + sortedArr.join(',') + ']'
arrArea.append(arrToString)


divWithNums.append(text)
cont.append(divWithNums)

var modal = document.getElementById("modal");


var btn = document.getElementById("sortButton");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

modal.append(sotredArrToString)
