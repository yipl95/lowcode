import React from "react";
import { Tabs } from 'antd';
import Components from './components'

const { TabPane } = Tabs;

const Material: React.FC = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        centered
      >
        <TabPane tab="组件" key="1">
          <Components />
        </TabPane>
        <TabPane tab="资源库" key="2">
          资源库
        </TabPane>
      </Tabs>
    </div>
  )
}

export default Material;
