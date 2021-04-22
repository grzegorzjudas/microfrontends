import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

render(<App text="Running directly from browser!" />, document.getElementById('app'));
