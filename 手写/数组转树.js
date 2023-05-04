let data = [
    { id: 0, parentId: null },
    { id: 1, parentId: 0 },
    { id: 2, parentId: 0 },
    { id: 3, parentId: 1 },
    { id: 4, parentId: 1 },
    { id: 5, parentId: 2 },
];

function createNode(id, data) {
    let childNode = [];

    data.forEach((item) => {
        if (item.parentId === id) {
            childNode.push(createNode(item.id, data));
        }
    });
    // 创建node
    let node = {
        id,
        childNode,
    };
    return node;
}

function arrToTree(data) {
    // 先找到根元素
    let rootNode = data.find(({ parentId }) => parentId === null);

    return createNode(rootNode.id, data);
}
console.log(JSON.stringify(arrToTree(data)));

// {
//     "id": 0,
//     "childNode": [
//         {
//             "id": 1,
//             "childNode": [
//                 { "id": 3, "childNode": [] },
//                 { "id": 4, "childNode": [] }
//             ]
//         },
//         {
//             "id": 2,
//             "childNode": [
//                 { "id": 5, "childNode": [] }
//             ]
//         }
//     ]
// }
