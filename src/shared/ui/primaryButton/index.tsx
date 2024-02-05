import React from "react";
import {Button, ConfigProvider} from "antd";

function PrimaryButton({children, htmlType, loading}:{children: React.ReactNode, htmlType?: "button" | "submit" | "reset", loading: boolean}) {
    return (
        <ConfigProvider button={{className: "primaryButton"}}>
           <Button ghost block htmlType={htmlType} loading={loading} type='primary'>{children}</Button>
        </ConfigProvider>
);
}

export default React.memo(PrimaryButton);