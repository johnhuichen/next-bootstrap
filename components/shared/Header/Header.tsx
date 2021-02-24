import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCandyCane } from "@fortawesome/free-solid-svg-icons";

import getTranslations from "translations/header";
import useClickOutside from "hooks/useClickOutside";

import styles from "./Header.module.css";

interface LoginPopupProps {
  showPopup: boolean;
  nodeRef: React.RefObject<HTMLDivElement>;
}

const LoginPopup: React.FC<LoginPopupProps> = ({
  showPopup,
  nodeRef,
}: LoginPopupProps) => {
  if (!showPopup) {
    return null;
  }

  return (
    <div className={styles.loginPopup} ref={nodeRef}>
      <input className={styles.loginPopupInput} placeholder="Email" />
      <input
        className={styles.loginPopupInput}
        placeholder="Password"
        type="password"
      />
      <button className={styles.loginBtn}>Login</button>
    </div>
  );
};

const Header: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { locale } = useRouter();
  const translations = useMemo(() => getTranslations(locale as string), [
    locale,
  ]);
  const handleClickOutside = useCallback(() => setShowPopup(false), []);
  const { nodeRef } = useClickOutside({ handleClickOutside });

  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.logo} href="/">
          <FontAwesomeIcon icon={faCandyCane} />
          {translations.brand}
        </a>
      </Link>
      <button className={styles.login} onClick={() => setShowPopup(true)}>
        Login
      </button>
      <LoginPopup showPopup={showPopup} nodeRef={nodeRef} />
    </div>
  );
};

export default Header;
