import React, { useState } from 'react';
import './styles.scss';

type Props = {
  message: string;
  resolver: (decision: boolean) => void;
  options?: {
    labels?: {
      confirmable: string;
      cancellable: string;
    };
    render?: (onConfirm: () => void, onCancel: () => void) => Element;
  };
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
    if (!options?.render) {
      return (
        <div className="confirm-box__content">
          <span>{message}</span>
          <div className="confirm-box__actions">
            <button onClick={onConfirmPopup} role="confirmable-button">
              {options?.labels?.confirmable ? options?.labels?.confirmable : 'Yes'}
            </button>

            <button onClick={onCancelPopup} role="cancellable-button">
              {options?.labels?.cancellable ? options?.labels?.cancellable : 'No'}
            </button>
          </div>
        </div>
      );
    }

    return options.render(onConfirmPopup, onCancelPopup);
  };

  return isOpen ? (
    <div className="confirm-box">
      {render()}
      <div className="confirm-box__overlay" />
    </div>
  ) : null;
};

export default ConfirmBox;
