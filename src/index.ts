import ReactDOM from 'react-dom';

import { Portal } from './portal';
import ConfirmBox from './confirm';
import React from 'react';
import { mountRootId } from './config';
import { Options } from './types';

export const confirm = async (message: string, options?: Options): Promise<any> => {
  const mount = await document.getElementById(mountRootId);
  if (!mount) {
    const rootMount = await document.createElement('div');
    await rootMount.setAttribute('id', mountRootId);
    document.body.appendChild(rootMount);
  }

  return new Promise((resolve) => {
    const ConfirmBoxEl = React.createElement(ConfirmBox, {
      resolver: resolve,
      message,
      options,
    });
    const PortalEl = React.createElement(Portal, null, ConfirmBoxEl);
    ReactDOM.render(PortalEl, document.getElementById(mountRootId));
  });
};
