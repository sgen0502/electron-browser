import React, { Component } from 'react';

export const Browser = (url) => {
    return (
        <div>
            <webview src={url} autosize="on" plugins="true"/>
        </div>
    );
}