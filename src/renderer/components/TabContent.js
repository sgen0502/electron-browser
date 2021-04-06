import React, {useState, useRef} from 'react';
import {Header} from "./Header";
import './TabContent.less'

export const TabContent = (favorite) => {
    const webViewRef = useRef(null);
    const [url, setUrl] = useState("https://google.com");

    return (
        <div className={'tabContentContainer'}>
            <Header setUrl={(s) => setUrl(s)} webviewRef={webViewRef}/>
            <div className={'tabBody'}>
                <webview className={'tabBody'} src={url} autosize="on" plugins="true" ref={webViewRef}/>
            </div>
        </div>
    );
}