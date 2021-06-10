import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers, deactivateUser } from '../../../actions/user'
import ClipboardListIcon from '../../icons/ClipboardListIcon'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'
import AnimatedLoader from '../../ui/loaders/AnimatedLoader/AnimatedLoader'
import Table from '../../ui/Table/Table'
import TitleWithIcon from '../../ui/titles/TitleWithIcon'
import classes from './UsersContent.module.css'
import { openModal } from '../../../store/redux/modal/modalActions'

const UsersContent = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  let mainContent

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    try {
      const response = await getUsers()
      console.log(response.data)
      setIsLoading(false)
      setUsers(response.data.data)
    } catch (error) {
      console.log(error.message)
      setIsLoading(false)
    }
  }

  const handleDelete = async (id) => {
    const response = await deactivateUser(id)
    loadUsers()
    console.log(response.data)
  }

  const handleEdit = (data) => {
    dispatch(
      openModal({
        modalType: 'CreateForm',
        modalProps: {
          initialData: data,
          onComplete: () => loadUsers()
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
    if (users.length <= 0) {
      mainContent = (
        <div className={classes.NoContent}>
          <ClipboardListIcon />
          <p>No content</p>
        </div>
      )
    } else {
      mainContent = (
        <Table
          items={users}
          headings={['Name', 'Description', 'Created by', 'Created at']}
          excludes={['_id', '__v', 'slug', 'updatedAt']}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )
    }
  }

  return (
    <div className={classes.UsersContent}>
      <TitleWithIcon
        title="Users"
        subTitle="10 Users"
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
                    onComplete: () => loadUsers()
                  }
                })
              )
            }>
            New User
          </SquareButton>
        ]}
      />
      <div className={classes.Main}>{mainContent}</div>
    </div>
  )
}

UsersContent.propTypes = {}

export default UsersContent
