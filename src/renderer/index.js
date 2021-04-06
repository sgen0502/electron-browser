import React from 'react';
import {render} from 'react-dom';

import {App} from './App';
import UiControlContainer from "../container/UIControlContainer";

render(

    (<UiControlContainer.Provider>
        <App />
    </UiControlContainer.Provider>),
  document.getElementById('app')
);