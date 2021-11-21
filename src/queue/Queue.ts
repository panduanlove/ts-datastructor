import LinkList from '../linklist/LinkList';

export default class Queue<T> {
  private linkList:LinkList<T>;
  constructor() {
    this.linkList = new LinkList();
  }

  /**
   * 判断是不是空队列
   */
  public isEmpty() {
    return !this.linkList.getTailNode();
  }

  /**
   * 查一下队头
   */
  public peek() {
    if (!this.linkList.getHeadNode()) {
      return null;
    }
    return this.linkList.getHeadNode().Value;
  }

  /**
   * 入队
   */
  public enqueue(value:T) {
    this.linkList.append(value);
  }

  /**
   * 出队
   */
  public dequeue() {
    const node = this.linkList.shift();
    return node ? node.Value : null;
  }
}
