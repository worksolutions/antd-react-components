import React from "react";
import { Button, ButtonProps } from "antd";

interface IButton extends ButtonProps {
  children: React.ReactNode;
}

function ButtonWs(props: IButton) {
  return <Button {...props}>{props.children}</Button>;
}

export default React.memo(ButtonWs);
