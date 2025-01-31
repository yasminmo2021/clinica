'use client';

import Link from "next/link"
import React, { useState } from 'react';
import styles from "./Header.module.css";
import Image from "next/image"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();
    <Image className={styles.imga} src="/images/menu[.jpg" alt='icone do menu' width={30} height={30}/>
  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Image className={styles.img} src="/images/logo.jpg" alt="Logo"  width={50} height={80}/>
        <h1 className={styles.h1}>Voleibol</h1>
      </div>

      {isMenuOpen &&
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.lista}>
            <li>
              <Link className={styles.link} href='/'>Home</Link>
            </li>

            <li>
              <Link className={styles.link} href="/sobre">Sobre</Link>
            </li>

            <li>
              <Link className={styles.link} href="/lista">Lista</Link>
            </li>

            <li>
              <Link className={styles.link} href="/props">Props</Link>
            </li>

            <li>
              <Link className={styles.link} href="/filtro">Filtro</Link>
            </li>
            <li>
              <Link className={styles.link} href="/efeitos">Efeitos</Link>
            </li>
          </ul>
        </nav>
      }

      <button className={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? 'Fechar' : 'Menu'}
      </button>
    </header>
  );
};

export default Header;