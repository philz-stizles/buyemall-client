import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCoupons, removeCoupon } from '../../../actions/coupon'
import ClipboardListIcon from '../../icons/ClipboardListIcon'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'
import AnimatedLoader from '../../ui/loaders/AnimatedLoader/AnimatedLoader'
import Table from '../../ui/Table/Table'
import TitleWithIcon from '../../ui/titles/TitleWithIcon'
import classes from './CouponsContent.module.css'
import { openModal } from '../../../store/redux/modal/modalActions'
import TabList from '../../ui/tabs/TabList/TabList'

const CouponsContent = () => {
  const [coupons, setCoupons] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  let mainContent

  useEffect(() => {
    loadCoupons()
  }, [])

  const loadCoupons = async () => {
    try {
      const response = await getCoupons()
      console.log(response.data)
      setIsLoading(false)
      setCoupons(response.data.data)
    } catch (error) {
      console.log(error.message)
      setIsLoading(false)
    }
  }

  const handleDelete = async (item) => {
    const response = await removeCoupon(item.slug)
    loadCoupons()
    console.log(response.data)
  }

  const handleEdit = (item) => {
    dispatch(
      openModal({
        modalType: 'CreateForm',
        modalProps: {
          initialData: item,
          onComplete: () => loadCoupons()
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
    if (coupons.length <= 0) {
      mainContent = (
        <div className={classes.NoContent}>
          <ClipboardListIcon />
          <p>No content</p>
        </div>
      )
    } else {
      mainContent = (
        <Table
          items={coupons}
          headings={['Name', 'Description', 'Created by', 'Created at']}
          excludes={['_id', '__v', 'slug', 'updatedAt']}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )
    }
  }

  return (
    <div className={classes.CouponsContent}>
      <TitleWithIcon
        title="Coupons"
        subTitle="10 Coupons"
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
                    onComplete: () => loadCoupons()
                  }
                })
              )
            }>
            New Coupon
          </SquareButton>
        ]}
      />
      <TabList items={['New Product', 'Products List']} />
      <div className={classes.Main}>{mainContent}</div>
    </div>
  )
}

CouponsContent.propTypes = {}

export default CouponsContent
