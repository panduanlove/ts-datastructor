const LinkList = require('./src/linklist/LinkList').default;

const linkList = new LinkList();
linkList.append(1);
linkList.append(3);
linkList.append(5);
linkList.deleteNode(1);
linkList.prepend(10);
linkList.prepend(10);
linkList.prepend(9);
linkList.deleteNode(10);
linkList.deleteNode((item) => item === 5);
linkList.deleteNode((item) => item === 3);
