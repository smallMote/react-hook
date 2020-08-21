import Head from 'next/head'
import { Card, Space, Button } from 'antd'
import { useEffect, useState } from 'react'

const EffectHookOfOnce = () => {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log('子组件：当第二个参数是一个空数组时，会在组件挂载的时候回执行一次')
    return () => {
      console.log('子组件：当第二个参数是一个空数组时，会在组件销毁的时候执行一次')
    }
  }, [])
  return (
    <>
      <Head>
        <title>Effect Hook</title>
      </Head>
      <div className="container">
        <Card title="Child Component：当第二个参数是一个空数组时，会在组件挂载后执行一次，销毁的时候会执行return的函数">
          <h1>{ count }</h1>
          <Space>
            <Button type="primary" onClick={() => setCount(count + 1)}>Change</Button>
          </Space>
        </Card>
      </div>
    </>
  )
}

const EffectHookWatchState = () => {
  const [ count, setCount ] = useState(0)
  const [ num, setNum ] = useState(0)
  useEffect(() => {
    console.log(`The state is changed: ${ count }`)
  }, [count])
  return (
    <>
      <Head>
        <title>Effect Hook</title>
      </Head>
      <div className="container">
        <Card title="监听指定的State，然后执行 Effect Hook">
          <div>
            <Space>
              <h1>Count: { count }</h1>
              <h1>Num: { num }</h1>
            </Space>
          </div>
          <Space>
            <Button type="primary" onClick={() => setCount(count + 1)}>Change Count</Button>
            <Button type="primary" onClick={() => setNum(num + 1)}>Change Num</Button>
          </Space>
        </Card>
      </div>
    </>
  )
}

const EffectHook = () => {
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    console.log('The effect no return, 组件挂载后和每次state更新都会执行')
  })
  return (
    <>
      <Head>
        <title>Effect Hook</title>
      </Head>
      <div className="container">
        <Card>
          <h1>{ count }</h1>
          <Space>
            <Button type="primary" onClick={() => setCount(count + 1)}>Change</Button>
          </Space>
        </Card>
      </div>
      {
        count !== 2 && <EffectHookOfOnce />
      }
      <EffectHookWatchState />
    </>
  )
}
export default EffectHook
