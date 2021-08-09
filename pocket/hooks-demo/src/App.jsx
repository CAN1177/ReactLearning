import React, { useEffect, useState, useMemo } from 'react'
import useApi from './useApi'

function Child({data}) {
  
  useEffect(() =>{
    console.log('data: ', data);
  }, [data])

  return <div>子组件</div>
}

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [kw, setKw] = useState('')

  // useMemo 将 data 包装一下，告诉 data 它需要监听的值。
  const data = useMemo(() => ({
    name,
    phone
  }), [name, phone])

  return (
    <div className="App">
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder='请输入姓名' />
      <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder='请输入电话' />
      <input onChange={(e) => setKw(e.target.value)} type="text" placeholder='请输入关键词' />
      <Child data={data} />
    </div>
  )
}

export default App