class Sorter {
  constructor(public collection: number[]) {}
  sort(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }

  //Time Complexity:O(n^2)
  //Space Complexity: O(1)
  bubbleSort(): number[] {
    let swapped: boolean;
    let n = this.collection.length;
    do {
      swapped = false;
      for (let i = 0; i < n; i++) {
        if (this.collection[i] > this.collection[i + 1]) {
          let leftHand = this.collection[i];
          this.collection[i] = this.collection[i + 1];
          this.collection[i + 1] = leftHand;
          swapped = true;
        }
      }
      n--;
    } while (swapped);
    return this.collection;
  }

  //Time Complexity:O(n^2)
  //Space Complexity: O(1)
  selectionSort(): number[] {
    let n = this.collection.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (this.collection[j] < this.collection[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        let leftHand = this.collection[i];
        this.collection[i] = this.collection[minIndex];
        this.collection[minIndex] = leftHand;
      }
    }
    return this.collection;
  }

  //Time Complexity:O(2n)
  //Space Complexity: O(1)
  insertionSort(): number[] {
    let n = this.collection.length;
    for (let i = 1; i < n; i++) {
      let key = this.collection[i];
      let j = i - 1;
      while (j >= 0 && this.collection[j] > key) {
        this.collection[j + 1] = this.collection[j];
        j = j - 1;
      }
      this.collection[j + 1] = key;
    }
    return this.collection;
  }

  //Advanced Sorting Algorithms

  //Time Complexity:O(nlogn)
  //Space Complexity: O(n)
  mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
      return array.sort();
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return this.mergeSortImplementation(
      this.mergeSort(left),
      this.mergeSort(right)
    );
  }
  mergeSortImplementation(left: number[], right: number[]) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  //Time Complexity:O(nlogn)
  //Space Complexity: O(logn)
  quickSort(array: number[]): number[] {
    if (array.length <= 1) {
      return array;
    }
    let pivotEl: number = array[Math.floor(array.length / 2)];
    let left = [];
    let right = [];

    for (let i = 0; i < array.length; i++) {
      if (i != Math.floor(array.length / 2)) {
        if (array[i] < pivotEl) {
          left.push(array[i]);
        } else {
          right.push(array[i]);
        }
      }
    }
    return this.quickSort(left).concat(pivotEl, this.quickSort(right));
  }

  //Time Complexity:O(nlogn)
  //Space Complexity: O(1)
  heapSort(array: number[]): number[] {
    let n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(array, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp;
      this.heapify(array, i, 0);
    }

    return array;
  }

  heapify(array: number[], n: number, i: number): void {
    let largest: number = i;
    let left: number = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && array[left] > array[largest]) {
      largest = left;
    }
    if (right < n && array[right] > array[largest]) {
      largest = right;
    }
    if (largest !== i) {
      let swap = array[i];
      array[i] = array[largest];
      array[largest] = swap;

      this.heapify(array, n, largest);
    }
  }
}

const sampleArray: number[] = [102, 3, 5, 99];
const sorter = new Sorter(sampleArray);
// sorter.sort();
// console.log(sorter.collection);
// console.log("Bubble Sorted:", sorter.bubbleSort());
// console.log("Selection Sorted:", sorter.selectionSort());
// console.log("Insertion Sorted:", sorter.insertionSort());
// console.log("Merge Sorted:", sorter.mergeSort(sampleArray));
// console.log("Quick Sorted:", sorter.quickSort(sampleArray));
console.log("Heap Sorted:", sorter.heapSort(sampleArray));

// Ref:
// https://www.youtube.com/watch?v=mTLa9b_Sm3s
// https://dev.to/alexmercedcoder/introduction-to-sorting-algorithms-in-javascript-b60
