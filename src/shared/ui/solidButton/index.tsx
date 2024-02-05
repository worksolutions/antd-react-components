import React from "react";
import {Button, ConfigProvider} from "antd";

function SolidButton({children, htmlType, loading}:{children: React.ReactNode, htmlType?: "button" | "submit" | "reset", loading: boolean}) {
    return (
        <ConfigProvider button={{className: "solidButton", style: {boxShadow: "0px 4px 15px 0px #0000001A", background: "#fff", border: "none", color: "#0B7AC2" }}}>
           <Button block htmlType={htmlType} loading={loading} type='primary'>{children}</Button>
        </ConfigProvider>
);
}

export default React.memo(SolidButton);