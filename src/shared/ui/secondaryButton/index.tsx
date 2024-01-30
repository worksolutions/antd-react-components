import React from "react";
import {Button, ConfigProvider} from "antd";

function SecondaryButton({children, htmlType, loading}:{children: React.ReactNode, htmlType?: "button" | "submit" | "reset", loading: boolean}) {
    return (
        <ConfigProvider button={{className: "secondaryButton"}}>
           <Button ghost block htmlType={htmlType} loading={loading} type='default'>{children}</Button>
        </ConfigProvider>
);
}

export default React.memo(SecondaryButton);