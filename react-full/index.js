import React from 'react';
import { render } from 'react-dom';

import Index from './src/components/index';

render(<Index items={[1,2,3]} />, document.getElementById('js-main'));
