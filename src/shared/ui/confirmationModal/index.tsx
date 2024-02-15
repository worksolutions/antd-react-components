import React, { useState } from "react";
import { useToggle } from "react-use";
import { Modal, ModalProps } from "antd";

interface ConfirmationModalProps extends Omit<ModalProps, "onOk" | "onCancel"> {
  subtitle: React.ReactNode;
  onConfirm?: () => Promise<void>;
  onCancel?: () => void;
}

interface PatchedComponentProps extends Omit<ModalProps, "open" | "confirmLoading" | "children" | "onOk" | "onCancel"> {
  subtitle: React.ReactNode;
}

const ConfirmationModal = React.memo(function ({ subtitle, onConfirm, onCancel, ...props }: ConfirmationModalProps) {
  const [confirmLoading, toggleConfirmLoading] = useToggle(false);

  const handleOnConfirm =
    onConfirm &&
    (async () => {
      toggleConfirmLoading(true);
      await onConfirm();
      toggleConfirmLoading(false);
    });

  const handleOnCancel =
    onCancel &&
    (() => {
      toggleConfirmLoading(false);
      onCancel();
    });

  return (
    <Modal {...props} confirmLoading={confirmLoading} onOk={handleOnConfirm} onCancel={handleOnCancel}>
      <p>{subtitle}</p>
    </Modal>
  );
});

export function useConfirmationModal(): [(action: () => Promise<void>) => () => void, React.FC<PatchedComponentProps>] {
  const [open, toggleOpen] = useToggle(false);
  const [onConfirm, setOnConfirm] = useState<() => Promise<void>>();
  const [onCancel, setOnCancel] = useState<() => void>();

  const withConfirmation = React.useCallback(
    (action: () => Promise<void>) => () => {
      toggleOpen(true);

      setOnConfirm(() => async () => {
        await action();
        toggleOpen(false);
      });

      setOnCancel(() => () => {
        toggleOpen(false);
      });
    },
    [toggleOpen],
  );

  const PatchedComponent = React.useCallback(
    (props: PatchedComponentProps) => (
      <ConfirmationModal {...props} open={open} onConfirm={onConfirm} onCancel={onCancel} />
    ),
    [open, onConfirm, onCancel],
  );

  return React.useMemo(() => [withConfirmation, PatchedComponent], [withConfirmation, PatchedComponent]);
}
