import { ThemeConfig } from "antd";

export const components: ThemeConfig["components"] = {
  Layout: {
    bodyBg: "transparent",
    headerBg: "transparent",
    colorBgContainer: "transparent",
    colorBgElevated: "transparent",
    footerBg: "transparent"
  },
  Button: {
    colorPrimary: "#4EACE8",
    colorPrimaryHover: "#075180",
    defaultBorderColor: "#757575",
    defaultGhostBorderColor: "#757575",
    defaultGhostColor: "#464646",
    defaultColor: "#464646",
    lineWidth: 2,
    borderRadius: 50,
    borderRadiusLG: 50,
    borderRadiusSM: 50,
    colorErrorHover: "#E22929",
    colorErrorBorderHover: "#F68181",
    textHoverBg: "#075180",
    dangerColor: "#9E0505",
  },
  Input: {
    activeBorderColor: "#7BC7F8",
    inputFontSize: 14,
    colorBorder: "#EBEBEB",
    colorErrorBorder: "#F7AAAA",
    paddingInline: 16,
    lineWidth: 2,
    borderRadius: 8
  }
};
