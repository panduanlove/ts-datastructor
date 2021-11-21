import Queue from '../Queue';

describe('queue test', () => {
  test('create empty queue', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    expect(queue.peek()).toBeNull();
    expect(queue.dequeue()).toBeNull();
  });

  test('enqueue', () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(5);
    expect(queue.peek()).toBe(3);
  });

  test('dequeue', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBeNull();
    queue.enqueue(3);
    queue.enqueue(5);
    expect(queue.dequeue()).toBe(3);
  });
});
