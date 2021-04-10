function interpolationSearch(array, key) {
	let low = 0;
	let high = array.length - 1;
	while(array[high] != array[low] && key >= array[low] && key <= array[high]) {
		let mid = parseInt(low + ((key - array[low]) * (high - low) / (array[high] - array[low])));
		if(array[mid] < key) {
			low = mid + 1;
		} else if(key < array[mid]) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	if(key == array[low]) {
		return low;
	} else {
		return false;
	}
}

let array = [20, 45, 93, 67, 10, 97, 52, 88];
let interpolation = interpolationSearch(array.sort(), 67);
console.log(interpolation);