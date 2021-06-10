import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getSubCategories, removeSubCategory } from '../../../actions/subCategory'
import ClipboardListIcon from '../../icons/ClipboardListIcon'
import AnimatedLoader from '../../ui/loaders/AnimatedLoader/AnimatedLoader'
import Table from '../../ui/Table/Table'
import TitleWithIcon from '../../ui/titles/TitleWithIcon'
import classes from './SubCategoriesContent.module.css'
import { openModal } from '../../../store/redux/modal/modalActions'
import { getCategories } from '../../../actions/category'
import SubCategoryHrForm from './components/SubCategoryHrForm'

const SubCategoriesContent = () => {
  const [subCategories, setSubCategories] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  let mainContent

  useEffect(() => {
    loadCategories()
    loadSubCategories()
  }, [])

  const loadCategories = async () => {
    try {
      const response = await getCategories()
      console.log(response.data)
      setCategories(response.data.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const loadSubCategories = async () => {
    try {
      const response = await getSubCategories()
      console.log(response.data)
      setSubCategories(response.data.data)
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (item) => {
    const response = await removeSubCategory(item.slug)
    loadSubCategories()
    console.log(response.data)
  }

  const handleEdit = (item) => {
    dispatch(
      openModal({
        modalType: 'SubCategoryForm',
        modalProps: {
          initialData: item,
          categories,
          onComplete: () => loadSubCategories()
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
    if (subCategories.length <= 0) {
      mainContent = (
        <div className={classes.NoContent}>
          <ClipboardListIcon />
          <p>No content</p>
        </div>
      )
    } else {
      mainContent = (
        <Table
          items={subCategories}
          headings={['Name', 'Category', 'Created by', 'Created at']}
          excludes={['_id', '__v', 'slug', 'updatedAt']}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )
    }
  }

  return (
    <div className={classes.SubCategoriesContent}>
      {/* <TitleWithIcon title="Sub-categories" subTitle="10 Sub-categories" actions={[<SquareButton
            key="create"
            borderColor="#738297"
            bgColor="transparent"
            color="#fff"
            onClick={() =>
              dispatch(
                openModal({
                  modalType: 'SubCategoryForm',
                  modalProps: {
                    categories,
                    onComplete: () => loadSubCategories()
                  }
                })
              )
            }>
            New Sub-category
          </SquareButton>]} /> **/}
      <TitleWithIcon title="Sub-categories" subTitle="10 Sub-categories" actions={[]} />
      <div className={classes.Main}>
        <SubCategoryHrForm categories={categories} onComplete={() => loadSubCategories()} />
        {mainContent}
      </div>
    </div>
  )
}

SubCategoriesContent.propTypes = {}

export default SubCategoriesContent
