'use client'
import { FC, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

import './Modal.css'
import { Modal } from './models'
import CloseSvg from '@public/icons/close.svg'

const ModalUI: FC<Modal> = ({ children, onClose, modal, title }) => {
  const bodyElement = useMemo(
    () => (typeof document !== 'undefined' ? document.querySelector('body') : null),
    []
  ) as HTMLBodyElement | null
  const element = useMemo(() => (typeof document !== 'undefined' ? document.createElement('div') : null), [])

  useEffect(() => {
    if (modal && bodyElement && element) {
      bodyElement.appendChild(element)
      bodyElement.classList.add('disabled')

      return () => {
        bodyElement && bodyElement.removeChild(element)
        bodyElement.classList.remove('disabled')
      }
    }
  }, [modal, bodyElement, element])

  if (modal && bodyElement) {
    return createPortal(
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className='modal'
      >
        <div onClick={e => e.stopPropagation()} className='modal__body'>
          <header className='flex items-center justify-between'>
            <h3 className='text-[28px] text-[#1B4B66] leading-[28px] font-bold'>{title}</h3>
            <CloseSvg onClick={onClose} className='cursor-pointer' />
          </header>
          <main className='modal__content'>{children}</main>
        </div>
      </motion.div>,
      bodyElement
    )
  }

  return null
}

export default ModalUI
