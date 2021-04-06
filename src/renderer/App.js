import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Tabs } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
import {Body} from "./components/Body";
import {TabContent} from "./components/TabContent";
import UiControlContainer from "../container/UIControlContainer";

const { TabPane } = Tabs;
const initialPanes = [
  { title: 'Tab 1', content: <TabContent/>, key: '1' },
  { title: 'Tab 2', content: <TabContent/>, key: '2' },
];

export const App = () => {
  const uiContainer = UiControlContainer.useContainer()
  const [state, setState] = React.useState( {
    activeKey: initialPanes[0].key,
    panes: initialPanes,
  });
  const [newTabIndex, setNewTabIndex] = React.useState(3);

  //#region Tabs
  const onChange = activeKey => {
    setState({ ...state, activeKey });
  };

  const onEdit = (targetKey, action) => {
    console.log(action);
    if(action === "add"){
      add();
    }
    else if(action === "remove"){
      remove(targetKey)
    }
  };

  const add = () => {
    const { panes } = state;
    const activeKey = `newTab${newTabIndex}`;
    const newPanes = [...panes];
    newPanes.push({ title: 'New Tab', content: <TabContent/>, key: activeKey });
    setState({
      panes: newPanes,
      activeKey,
    });
    setNewTabIndex(newTabIndex + 1)
  };

  const remove = targetKey => {
    const { panes, activeKey } = state;
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter(pane => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setState({
      panes: newPanes,
      activeKey: newActiveKey,
    });
  };
  //endregion

  return (
        <Tabs
            style={{width: "100%", height: "100%"}}
            type="editable-card"
            onChange={onChange}
            activeKey={state.activeKey}
            onEdit={onEdit}
        >
          {state.panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable} style={{width: "100%", height: "100%"}}>
                  {pane.content}
              </TabPane>
          ))}
        </Tabs>
  );
}
//style={{display:"inline-flex", width:"640px", height:"480px"}}