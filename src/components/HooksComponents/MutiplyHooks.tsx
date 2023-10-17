import  { useState } from 'react'




function useMultiplyCount(value:number):[number,()=>void] {
  const [count, setcount] = useState(value)
  const multiplyCount=()=>setcount((prev)=>(prev * 2))
  return [count, multiplyCount]
}

export default useMultiplyCount
