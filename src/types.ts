type ClassNames = {
  container?: string;
  buttons?: string;
  confirmButton?: string;
  cancelButton?: string;
};

export type Options = {
  labels?: { confirmable: string; cancellable: string };
  classNames?: ClassNames;
  render?: (message: string, onConfirm: () => void, onCancel: () => void) => Element;
};
