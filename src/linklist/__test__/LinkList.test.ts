import LinkList from '../LinkList';

const linkList = new LinkList();

describe('linklist test', () => {
  test('linkList Size to equal 0', () => {
    expect(linkList.Size).toBe(0);
  });

  test('append to linklist', () => {
    linkList.append(1);
    linkList.append(2);
    linkList.append(3);
    expect(linkList.Size).toBe(3);
    const headNode = linkList.getHeadNode();
    const tailNode = linkList.getTailNode();
    expect(headNode.Value).toBe(1);
    expect(tailNode.Value).toBe(3);
  });

  test('preppend to linklist', () => {
    linkList.prepend(5);
    expect(linkList.Size).toBe(4);
    const headNode = linkList.getHeadNode();
    expect(headNode.Value).toBe(5);
    linkList.clear();
    linkList.prepend(10);
    expect(linkList.getHeadNode().Value).toBe(10);
    expect(linkList.Size).toBe(1);
  });

  test('clear linklist', () => {
    linkList.clear();
    expect(linkList.getHeadNode()).toEqual(null);
    expect(linkList.Size).toBe(0);
  });

  test('deleteNode', () => {
    linkList.clear();
    linkList.append(1);
    linkList.append(3);
    linkList.append(5);
    expect(linkList.Size).toBe(3);
    linkList.deleteNode(1);
    expect(linkList.Size).toBe(2);
    expect(linkList.getHeadNode().Value).toBe(3);
    expect(linkList.getTailNode().Value).toBe(5);
    linkList.prepend(10);
    linkList.prepend(10);
    expect(linkList.getHeadNode().Value).toBe(10);
    expect(linkList.Size).toBe(4);
    linkList.prepend(9);
    linkList.deleteNode(10);
    expect(linkList.getHeadNode().Value).toBe(9);
    expect(linkList.Size).toBe(3);
    linkList.deleteNode((item:number) => item === 5);
    expect(linkList.Size).toBe(2);
    expect(linkList.getTailNode().Value).toBe(3);
    linkList.deleteNode((item:number) => item === 3);
    expect(linkList.Size).toBe(1);
    expect(linkList.getTailNode()).toEqual(linkList.getHeadNode());
  });

  test('findNode', () => {
    linkList.clear();
    linkList.append(20);
    linkList.append(30);
    linkList.append(40);
    expect(linkList.findNode(30).Value).toBe(30);
    expect(linkList.findNode(50)).toEqual(undefined);
    expect(linkList.findNode((item: number) => item === 20).Value).toBe(20);
  });

  test('insertAfter', () => {
    linkList.clear();
    linkList.append(1);
    linkList.insertAfter(3, linkList.getTailNode());
    expect(linkList.getTailNode().Value).toBe(3);
    expect(linkList.Size).toBe(2);
    linkList.insertAfter(5, null);
    expect(linkList.getTailNode().Value).toBe(3);
    expect(linkList.Size).toBe(2);
    const tailNode = linkList.findNode(3);
    tailNode.setValue(5);
    expect(linkList.getTailNode().Value).toBe(5);
    expect(linkList.getTailNode().toString()).toBe('5');
  });
});
