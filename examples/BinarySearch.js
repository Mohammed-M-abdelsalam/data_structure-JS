function findValue(arr, value, head=0, tail=arr.length-1){
    if(head > tail) return false;
    let mid = Math.floor((head + tail) / 2);
    if(arr[mid] === value){
        return true;
    }else if(value < arr[mid]){
        tail = mid - 1;
        return findValue(arr, value, head, tail);
    }else if(value > arr[mid]){
        head = mid + 1;
        return findValue(arr, value, head, tail);
    }
    return false;
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(findValue(arr, 5));



