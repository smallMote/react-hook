import { useRouter } from 'next/router'
import { Row, Col, Card } from 'antd'

export default function Home(props) {
  const router = useRouter()
  const menus = [
    {
      name: 'useState',
      path: '/state-hook'
    }
  ]
  return (
    <div className='container'>
      <Row>
        {
          menus.map(item => (
            <Col
              key={item.name}
              onClick={() => router.push(item.path)}>
              <Card>
                <h1>{ item.name }</h1>
              </Card>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
