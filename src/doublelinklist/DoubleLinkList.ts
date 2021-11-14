import DoubleLinkNode from './DoubleLinkNode';

export default class DoubleLinkList<T> {
  private headNode: DoubleLinkNode<T> = null;
  private tailNode: DoubleLinkNode<T> = null;
  private size = 0;

  public get Size() {
    return this.size;
  }

  /**
   * 获取头结点
   */
  public getHeadNode():DoubleLinkNode<T> {
    return this.headNode;
  }

  /**
   * 获取尾结点
   */
  public getTailNode():DoubleLinkNode<T> {
    return this.tailNode;
  }

  /**
   * 向链表尾部追加一个节点
   * @param value
   */
  public append(value:T) {
    this.size++;
    const node = new DoubleLinkNode(value);
    // 没有节点时
    if (!this.headNode) {
      this.headNode = this.tailNode = node;
      return this.headNode;
    }
    // 只有一个节点时
    if (this.headNode === this.tailNode) {
      this.tailNode = node;
      this.headNode.setNext(node);
      return this.headNode;
    }
    this.tailNode.setNext(node);
    this.tailNode = node;
    return this.headNode;
  }

  /**
   * 向链表头部插入一个节点
   * @param value
   */
  public prepend(value:T):DoubleLinkNode<T> {
    this.size++;
    const node = new DoubleLinkNode(value);
    // 没有节点时
    if (!this.headNode) {
      this.headNode = this.tailNode = node;
    } else {
      node.setNext(this.headNode);
      this.headNode = node;
    }
    return this.headNode;
  }

  /**
   * 从链表中删除指定节点
   * @param arg
   */
  public deleteNode(arg:((item:T)=>boolean) | T):boolean {
    let temp = this.headNode;
    let result = false;
    let prevNode:DoubleLinkNode<T>;
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
        // 控链表
        if (this.size === 0) {
          this.emptyList();
          break;
        }
      }
      prevNode = temp;
      temp = temp.Next;
    }
    return result;
  }

  /**
   * 查找链表中的指定节点
   * @param arg
   */
  public findNode(arg:((item:T)=>boolean) | T):DoubleLinkNode<T> {
    let temp = this.headNode;
    let result:DoubleLinkNode<T>;
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
  public insertAfter(value:T, oriNode:DoubleLinkNode<T>) {
    const newNode = new DoubleLinkNode(value);
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

  /**
   * 推出头结点
   */
  public shift():DoubleLinkNode<T> {
    if (this.size === 0) {
      return null;
    } if (this.size === 1) {
      this.tailNode = null;
    }
    const temp:DoubleLinkNode<T> = this.headNode;
    this.headNode = temp.Next;
    this.size--;
    return temp;
  }

  /**
   * 推出尾结点
   */
  public pop():DoubleLinkNode<T> {
    let result:DoubleLinkNode<T>;
    if (this.size === 0) {
      return null;
    } if (this.size === 1) {
      result = this.headNode;
      this.emptyList();
      return result;
    }
    result = this.tailNode;
    const prev = this.tailNode.Prev;
    prev.setNext(null);
    this.tailNode = prev;
    this.size--;
    return result;
  }

  private emptyList() {
    this.headNode = this.tailNode = null;
    this.size = 0;
  }

  /**
   * 清空链表
   */
  public clear() {
    this.emptyList();
  }
}
