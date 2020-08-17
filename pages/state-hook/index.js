import { useState } from 'react'
import {Button, Card, Space} from 'antd'
import './StateHook.module.css'

const IndexPage = () => {
	const [count, setCount] = useState(0)
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
		</div>
	)
}
export default IndexPage
