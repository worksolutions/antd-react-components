import React from "react";
import { Button, ButtonProps, ConfigProvider } from "antd";

// eslint-disable-next-line import/no-internal-modules
import { theme } from "../../config/theme";

interface IButton extends ButtonProps {
  children: React.ReactNode;
}

function ButtonWs(props: IButton) {
  return (
    <ConfigProvider theme={theme}>
      <Button {...props}>{props.children}</Button>
    </ConfigProvider>
  );
}

export default React.memo(ButtonWs);
