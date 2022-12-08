import { makeObservable, observable, action } from 'mobx'

export default class CounterStore {
  constructor(options) {
    this.count = 0
    makeObservable(this, {
      count: observable,
      decrement: action.bound,
      increment: action.bound,
    })
  }
  decrement() {
    this.count -= 1
  }

  increment() {
    this.count += 1
  }
}
