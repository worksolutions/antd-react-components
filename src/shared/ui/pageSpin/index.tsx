import React from "react";
import { Spin } from "antd";

import styles from "./index.module.scss";

function PageSpin() {
  return <Spin className={styles.pageSpin} size="large" />;
}

export default React.memo(PageSpin);
