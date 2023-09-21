import { BsChevronUp } from 'react-icons/bs';
import { ScrollToTopBtn } from './ToTopBtn.styled';

export const ToTopButton = () => {
  return (
    <ScrollToTopBtn
      smooth
      component={<BsChevronUp size={24} strokeWidth={1} />}
    />
  );
};
