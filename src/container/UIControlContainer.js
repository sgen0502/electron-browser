import {useState} from 'react';
import {createContainer} from 'unstated-next';

const UiControlContainer = () => {
    const [tab, setTab] = useState([]);

    return{
        tab,
        setTab,
    };
};

export default createContainer(UiControlContainer);