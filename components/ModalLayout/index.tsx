import React from 'react';
import Container from '../Container';

const ModalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='overlay'></div>
      <Container>
        <div className='relative'>
          <div
            className='absolute top-[69px] z-[10000000] right-0'
            // onClick={(e) => {
            //   e.stopPropagation();
            // }}
          >
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ModalLayout;
