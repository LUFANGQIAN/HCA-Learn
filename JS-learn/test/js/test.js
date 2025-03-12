// let a, b;

// let span;

// a = prompt("请输a值");

// b = prompt("请输b值");

// a = Number(a);
// b = Number(b);

// alert(`a的值为 ${a},b的值为：${b}`);

// alert(`a+b的值为：${a+b}`);

// span = a;
// a = b;
// b = span;

// alert(`交换后a的值为 ${a},交换后b的值为 ${b}`);

// let arr = ['你', '干', '嘛', '你', '干', '嘛', '你', '干', '嘛', '你', '干', '嘛', '你', '干', '嘛', '你', '干', '嘛', '你', '干', '嘛', '你', '干', '嘛', '你', '干', '嘛', '你', '干', '嘛', '你', '干', '嘛', '你', '干', '嘛', '你', '干', '嘛'];

// console.log(arr.length);

// 外层打印几行
//  for (let i = 1; i <= 9; i++) {
//   //打印每行中的元素
//   for (let j = 1; j <= i; j++) {

//       document.write(`
//   <div> ${j} x ${i} = ${j * i} </div>
//    `)
//   }
//   //每行打印完换行
//   document.write('<br>')
// }

// for(let i = 0;i < arr.length;i++)
//   {
//       document.write(`<div> ${arr[i]} </div>`)
//   }
class Sort {
  bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}

let testSort = new Sort;

let testObj = {

  arr: [],

  getArr: function () {
    let maximum;

    maximum = prompt(`请输入要排序的元素个数`);
    for (let i = 0; i < maximum; i++) {
      let temp;
      temp = prompt(`请输入第${i + 1}个元素`)
      this.arr[i] = Number(temp);
    }
    document.write(`<div>刚刚输入的数组值为:${this.arr}</div>`)
  },

  takeSort: function () {
    this.arr = testSort.bubbleSort(this.arr);
    document.write(`<div>刚刚输入的数组值为:${this.arr}</div>`)
  }

}

function main(){
  testObj.getArr();
  testObj.takeSort();
}

window.onload = main;