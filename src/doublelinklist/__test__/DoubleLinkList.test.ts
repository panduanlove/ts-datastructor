import DoubleLinkList from '../DoubleLinkList';

const doubleLinkList = new DoubleLinkList();

describe('doublelniklist test', () => {
  test('doublelniklist Size to equal 0', () => {
    expect(doubleLinkList.Size).toBe(0);
  });

  test('append to doublelniklist', () => {
    doubleLinkList.append(1);
    expect(doubleLinkList.Size).toBe(1);
    expect(doubleLinkList.getHeadNode()).toEqual(doubleLinkList.getTailNode());
    doubleLinkList.append(2);
    expect(doubleLinkList.Size).toBe(2);
    expect(doubleLinkList.getHeadNode().Next).toEqual(doubleLinkList.getTailNode());
    expect(doubleLinkList.getTailNode().Prev).toEqual(doubleLinkList.getHeadNode());
    expect(doubleLinkList.getHeadNode().Value).toBe(1);
    expect(doubleLinkList.getTailNode().Value).toBe(2);
    doubleLinkList.append(3);
    expect(doubleLinkList.Size).toBe(3);
    expect(doubleLinkList.getTailNode().Value).toBe(3);
    expect(doubleLinkList.getTailNode().Prev.Value).toBe(2);
  });

  test('prepend to doublelniklist', () => {
    doubleLinkList.clear();
    expect(doubleLinkList.Size).toBe(0);
    expect(doubleLinkList.getHeadNode()).toEqual(null);
    expect(doubleLinkList.getTailNode()).toEqual(null);
    doubleLinkList.prepend(1);
    expect(doubleLinkList.Size).toBe(1);
    expect(doubleLinkList.getHeadNode().Value).toBe(1);
    expect(doubleLinkList.getTailNode().Value).toBe(1);
    doubleLinkList.prepend(3);
    expect(doubleLinkList.Size).toBe(2);
    expect(doubleLinkList.getHeadNode().Value).toBe(3);
    expect(doubleLinkList.getTailNode().Value).toBe(1);
    expect(doubleLinkList.getTailNode().Prev).toEqual(doubleLinkList.getHeadNode());
  });

  test('deleteNode', () => {
    doubleLinkList.clear();
    doubleLinkList.append(1);
    doubleLinkList.deleteNode(1);
    expect(doubleLinkList.Size).toBe(0);
    doubleLinkList.append(3);
    let result = doubleLinkList.deleteNode(1);
    expect(result).toBeFalsy();
    result = doubleLinkList.deleteNode((item: number) => item === 3);
    expect(result).toBeTruthy();
    doubleLinkList.append(1);
    doubleLinkList.append(3);
    doubleLinkList.append(5);
    doubleLinkList.deleteNode(3);
    expect(doubleLinkList.getTailNode().Value).toBe(5);
    doubleLinkList.deleteNode(5);
    expect(doubleLinkList.Size).toBe(1);
    doubleLinkList.deleteNode(1);
    expect(doubleLinkList.getHeadNode()).toEqual(null);
    expect(doubleLinkList.getTailNode()).toEqual(null);
  });

  test('findNode', () => {
    doubleLinkList.clear();
    doubleLinkList.append(20);
    doubleLinkList.append(30);
    doubleLinkList.append(40);
    expect(doubleLinkList.findNode(30).Value).toBe(30);
    expect(doubleLinkList.findNode(50)).toEqual(undefined);
    expect(doubleLinkList.findNode((item: number) => item === 20).Value).toBe(20);
  });

  test('insertAfter', () => {
    doubleLinkList.clear();
    doubleLinkList.append(1);
    doubleLinkList.insertAfter(3, doubleLinkList.getTailNode());
    expect(doubleLinkList.getTailNode().Value).toBe(3);
    expect(doubleLinkList.Size).toBe(2);
    doubleLinkList.insertAfter(5, null);
    expect(doubleLinkList.getTailNode().Value).toBe(3);
    expect(doubleLinkList.Size).toBe(2);
    const tailNode = doubleLinkList.findNode(3);
    tailNode.setValue(5);
    expect(doubleLinkList.getTailNode().Value).toBe(5);
    expect(doubleLinkList.getTailNode().toString()).toBe('5');
    expect(tailNode.Prev).toEqual(doubleLinkList.getHeadNode());
    expect(tailNode.Prev.Value).toBe(1);
  });

  test('shift', () => {
    doubleLinkList.clear();
    let result = doubleLinkList.shift();
    expect(result).toEqual(null);
    doubleLinkList.append(1);
    result = doubleLinkList.shift();
    expect(result.Value).toBe(1);
    doubleLinkList.append(3);
    doubleLinkList.append(5);
    expect(doubleLinkList.getHeadNode().Value).toBe(3);
    result = doubleLinkList.shift();
    expect(result.Value).toBe(3);
    expect(doubleLinkList.getHeadNode()).toEqual(doubleLinkList.getTailNode());
  });

  test('pop', () => {
    doubleLinkList.clear();
    let result = doubleLinkList.pop();
    expect(result).toEqual(null);
    doubleLinkList.append(1);
    result = doubleLinkList.pop();
    expect(result.Value).toBe(1);
    doubleLinkList.append(3);
    doubleLinkList.append(5);
    result = doubleLinkList.pop();
    expect(result.Value).toBe(5);
    expect(doubleLinkList.getHeadNode()).toEqual(doubleLinkList.getTailNode());
  });
});
