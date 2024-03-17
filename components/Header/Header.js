'use client';

import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.css";
import logo from "@/assets/logo.png";
import HeaderBackground from "@/components/HeaderBackground/HeaderBackground";
import NavLink from "@/components/NavLink/NavLink";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
    const { user } = useUser();

    return (
        <>
            <HeaderBackground />
            <div className={styles.headerWrapper}>
                <Link href='/' className={styles.logoLink}>
                    <Image className={styles} src={logo.src} alt="NextLevel Food" priority width={100} height={100} />
                    <h1 className={styles.logoName}>NextLevel Food</h1>
                </Link>
                <div className={styles.navBar}>
                    <NavLink href='/meals'>Browse Meals</NavLink>
                    <NavLink href='/community'>Foodies Community</NavLink>
                    {!user && (
                        <NavLink href='/api/auth/login'>Login</NavLink>
                    )}
                    {user && (
                        <NavLink href='/api/auth/logout'>Logout</NavLink>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;