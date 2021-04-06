import React, {useState} from 'react';
import { AutoComplete, Input, Menu, Dropdown, Button, message } from 'antd';
import {DownOutlined, CaretLeftOutlined, UserOutlined, CaretRightOutlined} from "@ant-design/icons";

const { Search } = Input;

export const Header = ({setUrl, webviewRef}) => {
    const [localUrl, setLocalUrl] = useState("https://google.com");

    const onKeyPress = () => {
        console.log(window.event.keyCode);
        if(window.event.keyCode == 13){
            navigate();
        }
    };

    const onInputChange = (event) => {
        setLocalUrl(event.target.value);
    };

    const onSelect = (value, option) => {
        navigate();
    }

    const onSearch = (value, event) => {
        setUrl && setUrl(value);
    }

    const navigate = () =>{
        const url = document.getElementById('url').value;
        setUrl && setUrl(url);
    }

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
                1st menu item
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
                3rd menu item
            </Menu.Item>
        </Menu>
    );

    return (
        <div className={'header-container'}>
            <header>
                <Button shape="circle" icon={<CaretLeftOutlined />} />
                <Button shape="circle" icon={<CaretRightOutlined />} />
                <Search
                    id="url"
                    //value={localUrl}
                    style={{ width: '70%' }}
                    // onChange={onInputChange}
                    // onKeyPress={onKeyPress}
                    onSearch={onSearch}
                />
                <Dropdown overlay={menu}>
                    <Button><DownOutlined /></Button>
                </Dropdown>
            </header>
        </div>
    );
}