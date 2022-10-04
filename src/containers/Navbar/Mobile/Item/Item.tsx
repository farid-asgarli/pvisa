import { Drawer } from "antd";
import { useRouter } from "next/router";
import { List as ListIcon, X } from "phosphor-react";
import React, { useState } from "react";
import Logo from "../../../../components/Logo/Logo";
import Wrapper from "../../../../components/Wrapper/Wrapper";
import { Navbar } from "../../../../models/containers/Navbar";
import { menuItems } from "../../../../static/MenuLinks";
import { concatStyles } from "../../../../utils/Concatinator";
import styles from "./Item.module.css";
const Item: typeof Navbar.Mobile.Item = ({
  children,
  className,
  commonPageProps,
  ...props
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className={concatStyles(styles.Body, className)} {...props}>
      <Wrapper>
        <div className={styles.Inner}>
          <Logo />
          <button
            title="Menu"
            onClick={() => setVisible(true)}
            className={styles.HamburgerMenu}
          >
            <ListIcon className={styles.Icon} />
          </button>
        </div>
        <Navbar.Mobile.Menu
          commonPageProps={commonPageProps}
          setVisible={setVisible}
          visible={visible}
        />
      </Wrapper>
    </div>
  );
};
export default Item;
