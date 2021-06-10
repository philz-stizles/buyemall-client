import React from 'react'
import { useSelector } from 'react-redux'
import CreateForm from '../../../components/ui/forms/CreateForm'
import SubCategoryForm from '../../admin/subCategories/components/SubCategoryForm'

const ModalManager = () => {
  const modalLookup = { CreateForm, SubCategoryForm }

  const currentModal = useSelector((state) => state.modal)

  let renderedModal

  if (currentModal) {
    const { modalType, modalProps } = currentModal
    const ModalComponent = modalLookup[modalType]
    renderedModal = <ModalComponent {...modalProps} />
  }

  return <span>{renderedModal}</span>
}

export default ModalManager
