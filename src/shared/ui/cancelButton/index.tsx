import React from "react";
import {Button, ConfigProvider} from "antd";

function CancelButton({children, htmlType, loading}:{children: React.ReactNode, htmlType?: "button" | "submit" | "reset", loading: boolean}) {
    return (
        <ConfigProvider button={{className: "cancelButton"}}>
           <Button ghost block danger htmlType={htmlType} loading={loading}>{children}</Button>
        </ConfigProvider>
);
}

export default React.memo(CancelButton);