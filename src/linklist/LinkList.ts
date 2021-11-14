import LinkNode from './LinkNode';

export default class LinkList<T> {
  private headNode:LinkNode<T> = null;
  private tailNode:LinkNode<T> = null;
  private size:number = 0;

  public get Size() {
    return this.size;
  }

  /**
   * 向链表尾部追加一个节点
   * @param value
   */
  public append(value:T):LinkNode<T> {
    this.size++;
    const node = new LinkNode(value);
    // 没有节点时
    if (!this.headNode) {
      this.headNode = this.tailNode = node;
      this.tailNode.setNext(null);
      return this.headNode;
    }
    // 只有一个节点时
    if (this.headNode === this.tailNode) {
      this.tailNode = node;
      this.headNode.setNext(this.tailNode);
      return this.headNode;
    }
    const tailNode = node;
    this.tailNode.setNext(tailNode);
    this.tailNode = tailNode;
    return this.tailNode;
  }

  /**
   * 向链表头部添加一个节点
   * @param value
   */
  public prepend(value:T):LinkNode<T> {
    this.size++;
    if (!this.headNode) {
      this.headNode = this.tailNode = new LinkNode(value);
    } else {
      this.headNode = new LinkNode(value, this.headNode);
    }
    return this.headNode;
  }

  /**
   * 获取头结点
   */
  public getHeadNode():LinkNode<T> {
    return this.headNode;
  }

  /**
   * 获取尾结点
   */
  public getTailNode():LinkNode<T> {
    return this.tailNode;
  }

  /**
   * 清空链表
   */
  public clear() {
    this.headNode = this.tailNode = null;
    this.size = 0;
  }

  /**
   * 从链表中删除节点
   * @param arg
   */
  public deleteNode(arg:((item:T)=>boolean) | T):boolean {
    let temp = this.headNode;
    let result = false;
    let prevNode:LinkNode<T>;
    while (temp) {
      const match = arg instanceof Function ? arg(temp.Value) : arg === temp.Value;
      if (match) {
        this.size--;
        result = true;
        if (temp === this.headNode) {
          this.headNode = temp.Next;
        } else if (temp === this.tailNode) {
          prevNode.setNext(null);
          this.tailNode = prevNode;
        } else {
          prevNode.setNext(temp.Next);
        }
      } else {
        // 没有匹配到要删除的项，设置 prevNode
        // 有要删除的项，prevNode不变
        prevNode = temp;
      }
      temp = temp.Next;
    }
    return result;
  }

  /**
   * 查找链表中的指定节点
   * @param arg
   */
  public findNode(arg:((item:T)=>boolean) | T):LinkNode<T> {
    let temp = this.headNode;
    let result:LinkNode<T>;
    while (temp) {
      const match = arg instanceof Function ? arg(temp.Value) : arg === temp.Value;
      if (match) {
        result = temp;
        break;
      }
      temp = temp.Next;
    }
    return result;
  }

  /**
   * 在指定节点后插入新的节点
   * @param value
   * @param oriNode
   */
  public insertAfter(value:T, oriNode:LinkNode<T>) {
    const newNode = new LinkNode(value);
    if (oriNode) {
      const nextNode = oriNode.Next;
      if (!nextNode) {
        this.tailNode = newNode;
      }
      newNode.setNext(nextNode);
      oriNode.setNext(newNode);
      this.size++;
      return true;
    }
    return false;
  }
}
