// import React, { useEffect, useState, useMemo, useCallback } from "react";
// import useApi from "./useApi";

// // function Child({ data }) {
// //   useEffect(() => {
// //     console.log("data: ", data);
// //   }, [data]);

// //   return <div>子组件</div>;
// // }

// function Child({ callback }) {
//   useEffect(() => {
//     callback()
//   }, [callback])

//   return <div>子组件</div>
// }

// function App() {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [kw, setKw] = useState("");

//   // // useMemo 将 data 包装一下，告诉 data 它需要监听的值。
//   // const data = useMemo(
//   //   () => ({
//   //     name,
//   //     phone,
//   //   }),
//   //   [name, phone]
//   // );

//   // 无论修改其他任何属性，都不会触发子组件的副作用
//   const callback = useCallback(() => {
//     console.log('我是callback')
//   }, [])
//   return (
//     <div className="App">
//       <input
//         onChange={(e) => setName(e.target.value)}
//         type="text"
//         placeholder="请输入姓名"
//       />
//       <input
//         onChange={(e) => setPhone(e.target.value)}
//         type="text"
//         placeholder="请输入电话"
//       />
//       <input
//         onChange={(e) => setKw(e.target.value)}
//         type="text"
//         placeholder="请输入关键词"
//       />
//       {/* <Child data={data} /> */}
//       <Child callback={callback} />
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  // const handleClick = () => {
  //   setTimeout(() => {
  //     console.log('点击次数: ' + count);
  //   }, 3000);
  // }
  useEffect(() => {
    setTimeout(() => {
      console.log('点击次数: ' + count);
    }, 3000);
  })

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>点击{count}次</button>
      {/* <button onClick={handleClick}>展示点击次数</button> */}
    </div>
  )
}

export default App