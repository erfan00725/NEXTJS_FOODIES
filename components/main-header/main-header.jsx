import Link from "next/link";
import React from "react";

import image from "@/assets/logo.png";

import classes from "./main-header.module.css";
import Image from "next/image";
import NavBar from "./nav-bar";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Image src={image} alt="site logo" priority />
        NextLevel Food!
      </Link>
      <NavBar />
    </header>
  );
};

export default MainHeader;
