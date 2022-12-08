import { observer } from 'mobx-react-lite'
function Counter({ counterStore }) {
  const { decrement, increment, count } = counterStore
  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      &nbsp;<span>{count}</span>&nbsp;
      <button onClick={() => increment()}>+</button>
    </div>
  )
}

export default observer(Counter)
