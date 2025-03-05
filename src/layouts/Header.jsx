import { useState } from "react";
import { Link } from "react-router-dom";

import { deleteCookies, getCookie } from "utils/cookie";
import { getProfile } from "services/user";

import styles from "./Header.module.css";
import { useQuery } from "@tanstack/react-query";

function Header() {
  const cookie = getCookie("refreshToken");

  const { data } = useQuery(["profile"], getProfile);

  const [isOpen, setIsOpen] = useState(false);

  const dropdownHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const exiteHandler = () => {
    deleteCookies(["accessToken", "refreshToken"]);
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        {data && data.data.role === "ADMIN" && <Link to="/admin" className={styles.adminButton}>پنل ادمین</Link>}
        <span onClick={dropdownHandler}>
          <img src="profile.svg" />
          <p>دیوار من</p>
        </span>
        {isOpen && (
          <div className={styles.dropdownMenu}>
            <div>
              {!cookie && <Link to="/auth" onClick={() => setIsOpen((isOpen) => !isOpen)}>ورود</Link>}
              <Link>کاربر دیوار</Link>
              <Link>تایید هویت</Link>
              <Link>دیوار حرفه ای</Link>
              <Link>آگهی های من</Link>
              <Link>نشان ها</Link>
              <Link>تنظیمات</Link>
              {cookie && <Link onClick={exiteHandler}>خروج</Link>}
            </div>
          </div>
        )}
        <Link to="/dashboard" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
