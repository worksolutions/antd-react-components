import { ThemeConfig } from "antd";

export const components: ThemeConfig["components"] = {
  Layout: {
    bodyBg: "transparent",
    headerBg: "transparent",
    colorBgContainer: "transparent",
    colorBgElevated: "transparent",
    footerBg: "transparent",
  },
  Input: {
    colorBorder: "#EBEBEB",
    colorErrorBorder: "#F7AAAA",
    paddingInline: 16,
    lineWidth: 2,
    borderRadius: 8,
    colorError: "#F7AAAA",
    colorErrorHover: "#F7AAAA",
    hoverBg: "#FCFCFC",
    colorBgContainer: "#FCFCFC",
    colorTextPlaceholder: "#757575",
    hoverBorderColor: "rgb(123, 199, 248)",
    activeBorderColor: "rgb(123, 199, 248)",
  },
  Button: {
    defaultHoverColor: "rgb(117, 117, 117)",
    defaultHoverBorderColor: "rgb(184, 184, 184)",
  },
  Switch: {
    colorTextQuaternary: "rgb(235, 235, 235)",
    handleShadow: "0 2px 4px 0 rgba(0, 35, 11, 0.2)",
  },
  Select: {
    colorPrimaryHover: "rgb(123, 199, 248)",
  },
  Tooltip: {
    colorBgSpotlight: "rgb(93, 93, 93)",
  },
};
