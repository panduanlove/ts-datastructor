export default class LinkNode<T> {
  private value:T;
  private next:LinkNode<T>;
  constructor(value:T, next:LinkNode<T> = null) {
    this.value = value;
    this.next = next;
  }

  public get Value() {
    return this.value;
  }

  public get Next() {
    return this.next;
  }

  public setValue(value:T) {
    this.value = value;
  }

  public setNext(next:LinkNode<T>) {
    this.next = next;
  }

  public toString() {
    return `${this.value}`;
  }
}
