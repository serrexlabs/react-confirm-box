import React, { useState } from 'react';
import './styles.scss';
import { Options } from '../types';

type Props = {
  message: string;
  resolver: (decision: boolean) => void;
  options?: Options;
};

const ConfirmBox: React.FC<Props> = ({ resolver, message, options }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const onConfirmPopup = () => {
    setIsOpen(false);
    resolver(true);
  };

  const onCancelPopup = () => {
    setIsOpen(false);
    resolver(false);
  };

  const render = () => {
    const { classNames } = options || {};

    const containerClassNames = `confirm - box__content $ {
      classNames ?.container || ''
    }
    `;
    const confirmButtonClassNames = `${classNames?.buttons || ''} $ {
      classNames ?.confirmButton || ''
    }
    `;
    const cancelButtonClassNames = `${classNames?.buttons || ''} $ {
      classNames ?.cancelButton || ''
    }
    `;

    if (!options?.render) {
      return (
        <div className={containerClassNames}>
          <span>{message}</span>
          <div className="confirm-box__actions">
            <button
              onClick={onConfirmPopup}
              role="confirmable-button"
              className={confirmButtonClassNames}
            >
              {options?.labels?.confirmable ? options?.labels?.confirmable : 'Yes'}
            </button>

            <button
              onClick={onCancelPopup}
              role="cancellable-button"
              className={cancelButtonClassNames}
            >
              {options?.labels?.cancellable ? options?.labels?.cancellable : 'No'}
            </button>
          </div>
        </div>
      );
    }

    return options.render(message, onConfirmPopup, onCancelPopup);
  };

  return isOpen ? (
    <div className="confirm-box">
      {render()}
      <div className="confirm-box__overlay" />
    </div>
  ) : null;
};

export default ConfirmBox;
