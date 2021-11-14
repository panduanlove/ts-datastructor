export default class DoubleLinkNode<T> {
  private value: T;
  private next: DoubleLinkNode<T>;
  private prev: DoubleLinkNode<T>;

  constructor(value:T, next: DoubleLinkNode<T> = null, prev: DoubleLinkNode<T> = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  public get Value() {
    return this.value;
  }

  public get Next() {
    return this.next;
  }

  public get Prev() {
    return this.prev;
  }

  public setValue(value:T) {
    this.value = value;
  }

  public setNext(node: DoubleLinkNode<T>) {
    this.next = node;
    if (node !== null) {
      node.prev = this;
    }
  }

  public toString() {
    return `${this.Value}`;
  }
}
