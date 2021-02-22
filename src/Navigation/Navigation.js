import React from 'react';
import { Tabs } from 'antd';
import InputForm from '../Components/InputForm/InputForm';
import Dashboard from '../Components/Dashboard/Dashboard';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Navigation = () => (
  <Tabs  style={{ marginLeft : "5em", marginRight : "5em" }} defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Timeline Dashboard" key="1">
      <Dashboard/>
    </TabPane>
    <TabPane tab="Create Timeline entry" key="2">
      <InputForm/>
    </TabPane>
  </Tabs>
);

export default Navigation;