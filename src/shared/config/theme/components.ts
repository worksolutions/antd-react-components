import { ThemeConfig } from "antd";

export const components: ThemeConfig["components"] = {
  Layout: {
    bodyBg: "transparent",
    headerBg: "transparent",
    colorBgContainer: "transparent",
    colorBgElevated: "transparent",
    footerBg: "transparent"
  },
  Typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
    lineHeight: 1.1428,
    fontSizeHeading3: 21,
    lineHeightHeading3: 1.1428,
    fontSizeHeading2: 32,
    lineHeightHeading2: 1.5,
    fontSizeHeading1: 47,
    lineHeightHeading1: 1.19,
    colorLink: "#0B7AC2",
    colorLinkHover: "#4EACE8",
    colorLinkActive: "#9752E0",
    colorSuccess: "#5BBB28",
    colorError: "#F68181",
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
