import { Drawer } from "antd";
import { useRouter } from "next/router";
import { X } from "phosphor-react";
import { Navbar } from "../../../../models/containers/Navbar";
import { menuItems } from "../../../../static/MenuLinks";
import styles from "./Menu.module.css";
const Menu: typeof Navbar.Mobile.Menu = ({
  className,
  visible,
  setVisible,
  children,
  ...props
}) => {
  const { locale, pathname } = useRouter();

  return (
    <Drawer
      title={<span className={styles.DrawerTitle}>Menu</span>}
      placement="right"
      closeIcon={<X className={styles.CloseIcon} />}
      onClose={(e) => setVisible(false)}
      visible={visible}
      drawerStyle={{
        backgroundColor: "#4383FF",
      }}
    >
      <div className={styles.Collection}>
        {menuItems(locale as DefaultLocale).map((x, i) => (
          <Navbar.Desktop.Link
            key={i}
            active={x.path === "/" + pathname.split("/")[1]}
            children={x.text}
            path={x.path}
            onClick={() => setVisible(false)}
            className={styles.Link}
            activeClassName={styles.ActiveLink}
          />
        ))}
      </div>
    </Drawer>
  );
};
export default Menu;
