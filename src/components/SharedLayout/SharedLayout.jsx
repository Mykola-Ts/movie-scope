import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { toastContainerStyle, toastOptions } from 'helpers/helpers';
import { GlobalStyle } from 'components/GlobalStyle';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { ToTopButton } from 'components/ToTopBtn/ToTopBtn';
import { Container, Wrapper } from './SharedLayout.styled';

const body = document.body;

export const SharedLayout = () => {
  const [isOpenMobMenu, setIsOpenMobMenu] = useState(false);

  const onCloseMobileMenu = () => {
    if (!isOpenMobMenu) return;

    setIsOpenMobMenu(false);
    body.style.overflow = '';
  };

  const onToggleMobileMenu = () => {
    body.style.overflow = !isOpenMobMenu ? 'hidden' : '';
    setIsOpenMobMenu(prev => !prev);
  };

  return (
    <>
      <Header
        isOpenMobMenu={isOpenMobMenu}
        setIsOpenMobMenu={setIsOpenMobMenu}
        onToggleMobileMenu={onToggleMobileMenu}
      />

      {isOpenMobMenu && <MobileMenu onCloseMobileMenu={onCloseMobileMenu} />}

      <Container>
        <Wrapper>
          <Suspense fallback={<Loader isLoading={true} />}>
            <Outlet />
          </Suspense>
        </Wrapper>
      </Container>

      <ToTopButton />

      <Toaster
        position="top-right"
        containerStyle={toastContainerStyle}
        toastOptions={toastOptions}
      />

      <GlobalStyle />
    </>
  );
};
