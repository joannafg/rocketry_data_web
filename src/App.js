import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Card, Row, Col, Space} from 'antd'

function App() {
  return (
    <div className="App" style={{marginTop: '25px'}}>
      <Row gutter={40} align={"middle"} justify={"center"} type={"flex"} style={{marginTop: '25px'}}>
        <Col span={6}><Card title="Card title">Card content</Card></Col>
        <Col span={6}><Card title="Card title">Card content</Card></Col>
        <Col span={6}><Card title="Card title">Card content</Card></Col>
      </Row>
    
      <Row gutter={40} align={"middle"} justify={"center"} type={"flex"} style={{marginTop: '25px'}}>
        <Col span={6}><Card title="Card title">Card content</Card></Col>
        <Col span={6}><Card title="Card title">Card content</Card></Col>
        <Col span={6}><Card title="Card title">Card content</Card></Col>
      </Row>
    </div>
  );
}

export default App;
