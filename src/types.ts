export type Options = {
  labels?: {
    confirmable: string;
    cancellable: string;
  };
  render?: (message: string, onConfirm: () => void, onCancel: () => void) => Element;
};
