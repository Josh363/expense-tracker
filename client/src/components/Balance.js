import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext)

  const total = transactions
    .map(transaction => transaction.amount)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2)

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${numberWithCommas(total)}</h1>
    </>
  )
}
