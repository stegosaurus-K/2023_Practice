let array = [
        { id: 1, val: "学校", parentId: null },
        { id: 2, val: "班级1", parentId: 1 },
        { id: 3, val: "班级2", parentId: 1 },
        { id: 4, val: "学生1", parentId: 2 },
        { id: 5, val: "学生2", parentId: 2 },
        { id: 6, val: "学生3", parentId: 3 },
      ];
      let output = {
        id: 1,
        val: "学校",
        children: [
          {
            id: 2,
            val: "班级1",
            children: [
              {
                id: 4,
                val: "学生1",
                children: [],
              },
              {
                id: 5,
                val: "学生2",
                children: [],
              },
            ],
          },
          {
            id: 3,
            val: "班级2",
            children: [
              {
                id: 6,
                val: "学生3",
                children: [],
              },
            ],
          },
        ],
      };

      function arrayToTree(arr, parentId) {
        // 找出第一级
        const arr1 = arr.filter((item) =>
          parentId === undefined
            ? item.parentId === null
            : item.parentId === parentId
        );
        // 再对每一级的chidren递归
        const arr2 = arr1.map((item) => {
          item.children = arrayToTree(arr, item.id);
          return item;
        });
        return arr2;
      }

      console.log(arrayToTree(array));