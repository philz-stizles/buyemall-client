import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCategories, removeCategory } from '../../../actions/category'
import ClipboardListIcon from '../../icons/ClipboardListIcon'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'
import AnimatedLoader from '../../ui/loaders/AnimatedLoader/AnimatedLoader'
import Table from '../../ui/Table/Table'
import TitleWithIcon from '../../ui/titles/TitleWithIcon'
import classes from './CategoriesContent.module.css'
import { openModal } from '../../../store/redux/modal/modalActions'

const CategoriesContent = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  let mainContent

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    try {
      const response = await getCategories()
      console.log(response.data)
      setIsLoading(false)
      setCategories(response.data.data)
    } catch (error) {
      console.log(error.message)
      setIsLoading(false)
    }
  }

  const handleDelete = async (id) => {
    const response = await removeCategory(id)
    loadCategories()
    console.log(response.data)
  }

  const handleEdit = (data) => {
    dispatch(
      openModal({
        modalType: 'CreateForm',
        modalProps: {
          initialData: data,
          onComplete: () => loadCategories()
        }
      })
    )
  }

  if (isLoading) {
    mainContent = (
      <div className={classes.Loader}>
        <AnimatedLoader />
      </div>
    )
  }

  if (!isLoading) {
    if (categories.length <= 0) {
      mainContent = (
        <div className={classes.NoContent}>
          <ClipboardListIcon />
          <p>No content</p>
        </div>
      )
    } else {
      mainContent = (
        <Table
          items={categories}
          headings={['Name', 'Description', 'Created by', 'Created at']}
          excludes={['_id', '__v', 'slug', 'updatedAt']}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )
    }
  }

  return (
    <div className={classes.CategoriesContent}>
      <TitleWithIcon
        title="Categories"
        subTitle="10 Categories"
        actions={[
          <SquareButton
            key="create"
            borderColor="#738297"
            bgColor="transparent"
            color="#fff"
            onClick={() =>
              dispatch(
                openModal({
                  modalType: 'CreateForm',
                  modalProps: {
                    onComplete: () => loadCategories()
                  }
                })
              )
            }>
            New Category
          </SquareButton>
        ]}
      />
      <div className={classes.Main}>{mainContent}</div>
    </div>
  )
}

CategoriesContent.propTypes = {}

export default CategoriesContent
