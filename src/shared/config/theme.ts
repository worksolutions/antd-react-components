import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorSuccess: "#5bbb28",
    colorWarning: "#ecdd92",
    colorError: "#f68181",
    colorText: "rgb(70, 70, 70)",
    colorTextSecondary: "#2E2E2E",
    colorTextTertiary: "#D4D4D4",
    colorTextQuaternary: "#FFFFFF",
    colorTextPlaceholder: "#757575",
    boxShadowTertiary: "0px -40px 48px -16px rgba(34, 60, 80, 0.18)",
    colorWhite: "#FFFFFF",
    colorSuccessText: "#5bbb28",
    colorSuccessHover: "#338707",
    colorSuccessTextHover: "#338707",
    colorSuccessActive: "#225905",
    colorSuccessTextActive: "#225905",
    colorSuccessBg: "#beeca6",
    colorSuccessBgHover: "#8ad364",
    colorSuccessBorder: "#5bbb28",
    colorSuccessBorderHover: "#338707",
    colorWarningBg: "#f8f3d8",
    colorWarningBgHover: "#f2e8b4",
    colorWarningBorder: "#ecdd92",
    colorWarningText: "#ecdd92",
    colorWarningBorderHover: "#e0c952",
    colorWarningHover: "#e0c952",
    colorWarningTextHover: "#e0c952",
    colorWarningActive: "#b89f21",
    colorWarningTextActive: "#b89f21",
    colorErrorBorder: "#f68181",
    colorErrorText: "#f68181",
    colorErrorBg: "#fed1d1",
    colorErrorBgHover: "#f7aaaa",
    colorErrorHover: "#e22929",
    colorErrorBorderHover: "#e22929",
    colorErrorTextHover: "#e22929",
    colorErrorActive: "#9e0505",
    colorErrorTextActive: "#9e0505",
    colorLink: "#0b7ac2",
    colorPrimaryTextActive: "#075180",
    colorPrimaryActive: "#075180",
    colorPrimaryHover: "#0b7ac2",
    colorPrimaryTextHover: "#0b7ac2",
    colorPrimaryBorderHover: "#0b7ac2",
    colorPrimary: "#4eace8",
    colorInfo: "#4eace8",
    colorPrimaryText: "#4eace8",
    colorPrimaryBorder: "#4eace8",
    colorPrimaryBg: "#bbe2fb",
    colorPrimaryBgHover: "#7bc7f8",
    colorLinkHover: "#4eace8",
    colorLinkActive: "#075180",
    colorTextBase: "#2e2e2e",
    colorBorder: "#757575",
    colorBorderSecondary: "#d4d4d4",
  },
  components: {
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
    Badge: {
      lineWidth: 2,
      statusSize: 6,
    },
    Pagination: {
      borderRadius: 50,
      colorBgTextHover: "rgb(187, 226, 251)",
      colorPrimaryBorder: "rgb(0, 0, 0)",
      colorBgTextActive: "rgb(187, 226, 251)",
      itemActiveBg: "rgb(187, 226, 251)",
      colorTextDisabled: "rgba(0, 0, 0, 0.25)",
    },
    Menu: {
      itemSelectedBg: "rgb(255, 255, 255)",
      subMenuItemBg: "rgba(255, 255, 255, 0.01)",
      itemSelectedColor: "rgb(11, 122, 194)",
      activeBarBorderWidth: 0,
      activeBarWidth: 4,
      itemBorderRadius: 0,
      subMenuItemBorderRadius: 0,
      borderRadius: 0,
      borderRadiusLG: 0,
      itemBg: "rgba(255, 255, 255, 0)",
    },
    Table: {
      borderColor: "rgb(235, 235, 235)",
      headerBorderRadius: 6,
      headerSplitColor: "rgba(255, 255, 255, 0)",
    },
    Avatar: {
      containerSizeSM: 16,
      containerSize: 24,
      containerSizeLG: 32,
      textFontSizeSM: 12,
      textFontSize: 16,
      textFontSizeLG: 22,
      colorTextPlaceholder: "rgb(189, 146, 236)",
    },
    Select: {
      optionPadding: "8px 16px",
    },
    Modal: {
      borderRadiusLG: 6,
      colorBgMask: "rgba(23, 23, 23, 0.3)",
    },
    Card: {
      boxShadow: "0px 5px 50px 0px rgba(0, 0, 0, 0.10)",
      boxShadowTertiary: "0px 5px 50px 0px rgba(0, 0, 0, 0.10)",
      borderRadiusLG: 6,
    },
    Upload: {
      colorFillAlter: "rgba(255, 255, 255, 0.45)",
      colorBorder: "rgb(217, 217, 217)",
    },
  },
};
