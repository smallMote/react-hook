import { useState } from 'react'
import {Button, Card, Space, Row, Col} from 'antd'
import './StateHook.module.scss'

const IndexPage = () => {
	const [count, setCount] = useState(0)
  const [user, setUser] = useState({ name: 'Larry' })
  const [fruits, setFruits] = useState(['Apple', 'Banana']) // Strawberry
  const [func, setFunc] = useState(() => 0)
  // 新对象切换
  function toggleObjectOfNew() {
    setUser(user.name === 'Larry' ? { name: 'Anna' } : { name: 'Larry' })
  }
  // 对象连接切换
  function toggleObjectOfAssign() {
	  // assign 函数并没有创建一个新的对象，所以导致视图不会更新
    console.log(Object.assign(user, { name: 'Anna' }))
    setUser(Object.assign(user, { name: 'Anna' }))
  }
  // 新数组切换
  function toggleArrayOfNew() {
    setFruits(fruits.includes('Apple') ? ['Blueberry', 'Strawberry'] : ['Apple', 'Banana'])
  }
  function toggleArrayOfContact() {
    fruits[1] = 'Strawberry'
    console.log(fruits) // ["Apple", "Strawberry"]
    setFruits(fruits)
  }
	return (
		<div className="container">
			<div className="state-hook-item">
				<Card title="每次set都要赋值一个新的值，useState才会更新">
					<h1>{ count }</h1>
					<Space>
						<Button onClick={
							() => setCount(count + 1)
						} type="primary">+</Button>
						<Button onClick={
							() => setCount(count - 1)
						} type="primary">-</Button>
					</Space>
				</Card>
			</div>
			<div className="state-hook-item state-hook-object">
				<Card title="在更新值为Object或者Array类型数据的时候要特别注意（查看控制台）">
          <Row gutter={24}>
            <Col span={12} xs={24} sm={24} md={12}>
              <Card>
                <h1>{ user.name }</h1>
                <Space>
                  <Button onClick={toggleObjectOfNew} type="primary">
                    New Object
                  </Button>
                  <Button onClick={toggleObjectOfAssign} type="primary">
                    Assign Object
                  </Button>
                </Space>
              </Card>
            </Col>
            <Col span={12} xs={24} sm={24} md={12}>
              <Card>
                <h1>
                  {
                    fruits.map(item => item).toString()
                  }
                </h1>
                <Space>
                  <Button onClick={toggleArrayOfNew} type="primary">
                    New Array
                  </Button>
                  <Button onClick={toggleArrayOfContact} type="primary">
                    Contact Array
                  </Button>
                </Space>
              </Card>
            </Col>
          </Row>
				</Card>
			</div>
      <div className="state-hook-item state-hook-func">
        <Card title="可以传递一个函数，useState会使用函数的返回值">
          <h1>{ func }</h1>
          <Space>
            <Button onClick={
              () => setFunc(func + 1)
            } type="primary">+</Button>
            <Button onClick={
              () => setFunc(func - 1)
            } type="primary">-</Button>
          </Space>
        </Card>
      </div>
		</div>
	)
}

export default IndexPage
