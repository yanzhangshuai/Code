import { useAsync, useAsyncEffect } from '@react-hook/async'
import React from 'react'
export const AsyncDemo = () => {

  const [{ status, cancel, error, value }, call] = useAsync(() => {
    
    return new Promise(resolve => setTimeout(() => {
      resolve('Loaded1')
     setTimeout(() => {
      console.log('status',status) 
     },1000);
    }, 3000))
  })
  switch (status) {
    case 'loading':
      return (
        <div>
          <button onClick={cancel}>Cancel</button>
          Loading...
        </div>
      )
    case 'cancelled':
      return (
        <div>
          Cancelled.
          <button onClick={call}>Try again</button>
        </div>
      )
    case 'error':
      return `Error: ${error}`
    case 'success':
      return value || 'Success!'
    default:
      return <button onClick={call}>Load me</button>
  }
} 