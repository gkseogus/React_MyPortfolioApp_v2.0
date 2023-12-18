import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { AiOutlineClose } from 'react-icons/ai';

interface MoreModalFace {
  onClose: () => void;
  modalTitleText: string | ReactNode;
}

const MoreModal = ({ onClose, modalTitleText }: MoreModalFace) => {
  const modalRef = useRef<HTMLDivElement>(null);

  /**
   * background 클릭 시 모달 창 닫히는 함수
   */
  const handleBackGround = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [modalRef, onClose],
  );

  useEffect(() => {
    // modal이 떠 있을 땐 스크롤 막음 + background 클릭 시 모달창 닫힘
    document.body.style.overflow = 'hidden';
    document.addEventListener('mousedown', handleBackGround);

    // modal 닫히면 다시 스크롤 가능하도록 함 + background 클릭 시 모달창 닫힘
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleBackGround);
    };
  }, [handleBackGround]);

  return (
    <ModalMainContain ref={modalRef}>
      <ModalSubContain>
        <CloseBtn onClick={onClose}>
          <AiOutlineClose size={32} />
        </CloseBtn>
        <ModalTitle>{modalTitleText}</ModalTitle>
      </ModalSubContain>
    </ModalMainContain>
  );
};

export default MoreModal;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModalMainContain = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  z-index: 10;
  -ms-overflow-style: none;
  scrollbar-width: none;
  animation: ${fadeIn} 0.5s ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 500px) {
    top: 20%;
    transform: translate(0%, 0%);
  }
`;

const ModalSubContain = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 26px;
  gap: 24px;
  position: relative;
  width: 400px;
  height: 250px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.orange};
  border-radius: 16px;
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 150px;
  }
`;

const ModalTitle = styled.p`
  width: 300px;
  font-weight: 600;
  line-height: 24px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray100};
  white-space: pre-wrap;
`;

const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  right: 0px;
  top: 0px;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;