import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getOrders } from '../../../actions/order'
import ClipboardListIcon from '../../icons/ClipboardListIcon'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'
import AnimatedLoader from '../../ui/loaders/AnimatedLoader/AnimatedLoader'
import Table from '../../ui/Table/Table'
import TitleWithIcon from '../../ui/titles/TitleWithIcon'
import classes from './OrdersContent.module.css'
import { openModal } from '../../../store/redux/modal/modalActions'

const OrdersContent = () => {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  let mainContent

  useEffect(() => {
    loadOrders()
  }, [])

  const loadOrders = async () => {
    try {
      const response = await getOrders()
      console.log(response.data)
      setIsLoading(false)
      setOrders(response.data.data)
    } catch (error) {
      console.log(error.message)
      setIsLoading(false)
    }
  }

  const handleEdit = (data) => {
    dispatch(
      openModal({
        modalType: 'CreateForm',
        modalProps: {
          initialData: data,
          onComplete: () => loadOrders()
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
    if (orders.length <= 0) {
      mainContent = (
        <div className={classes.NoContent}>
          <ClipboardListIcon />
          <p>No content</p>
        </div>
      )
    } else {
      mainContent = (
        <Table
          items={orders}
          headings={['Name', 'Description', 'Created by', 'Created at']}
          excludes={['_id', '__v', 'slug', 'updatedAt']}
          onEdit={handleEdit}
        />
      )
    }
  }

  return (
    <div className={classes.OrdersContent}>
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
                    onComplete: () => loadOrders()
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

OrdersContent.propTypes = {}

export default OrdersContent
