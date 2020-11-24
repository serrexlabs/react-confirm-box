import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { mountRootId } from '../config';

type Props = {
  children: Element;
};

export const Portal: React.FC<Props> = ({ children }: Props) => {
  const mount = document.getElementById(mountRootId) as HTMLElement;
  const el = document.createElement('div');

  useEffect((): any => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};
