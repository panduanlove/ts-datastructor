import LinkList from "../linklist/LinkList";
export class Stack<T> {
  private linkList:LinkList<T>;
  constructor(){
    this.linkList = new LinkList();
  }

  /**
   * 入栈
   */
  public push(node:T){
    this.linkList.append(node);
  }

  /**
   * 出栈
   */
  public pop(){
    this.linkList.pop();
  }

  public peek(){
    if(!this.linkList.getTailNode()){
      return null;
    }
    return this.linkList.getTailNode().Value;
  }

  /**
   * 判断是否是空栈
   */
  public isEmpty(){
    return !!this.linkList.getTailNode();
  }
}