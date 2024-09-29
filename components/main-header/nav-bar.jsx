"use client";

import { usePathname } from "next/navigation";
import React from "react";
import style from "./main-header.module.css";
import Link from "next/link";

const NavConfig = [
  {
    title: "Browse Meals",
    link: "/meals",
  },
  {
    title: "Foodies Community",
    link: "/community",
  },
];

const NavBar = () => {
  const path = usePathname();

  return (
    <nav className={style.nav}>
      <ul>
        {NavConfig.map((nav) => (
          <li>
            <Link
              href={nav.link}
              className={path.startsWith(nav.link) ? style.active : null}
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
