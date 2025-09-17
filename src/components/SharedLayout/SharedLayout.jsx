import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { toastContainerStyle, toastOptions } from 'helpers/helpers';
import { GlobalStyle } from 'components/GlobalStyle';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { ToTopButton } from 'components/ToTopBtn/ToTopBtn';
import { Container, Wrapper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header />

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
