var origin = [
  { father: null, id: 1 },
  { father: 1, id: 2 },
  { father: 2, id: 3 },
  { father: 2, id: 4 },
  { father: null, id: 5 },
];
var result = [
  {
    id: 1,
    children: [
      {
        id: 2,
        children: [{ id: 3 }, { id: 4 }],
      },
    ],
  },
  { id: 5, children: [] },
];
function arrayToTree(arr, parentId) {
  const arr1 = arr.filter((item) =>
    parentId === undefined
      ? item.father === null
      : item.father === parentId
  );
  const arr2 = arr1.map((item) => {
    item.children = arrayToTree(arr, item.id);
    return item;
  });
  return arr2;
}
let res = arrayToTree(origin);
console.log(res);