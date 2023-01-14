import React from 'react';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({
                                                children,
                                              }) => {

  return (
    <div className={styles.layout}>
      <div className={styles.layout__wrapper}>
        <header className="container" style={{minHeight: '100px', backgroundColor: '#61a3b4'}}>
          header
        </header>

        <main className={styles.content}>
          {children}
        </main>

        <footer className="container" style={{minHeight: '150px', backgroundColor: '#61a3b4'}}>
          footer
        </footer>
      </div>
    </div>
  );
};
