import React from 'react'
import StatsCard from '../../ui/cards/StatsCard'
import Table from '../../ui/Table/Table'

import classes from './DashboardContent.module.css'

const DashboardContent = () => {
  return (
    <div className={classes.main__container}>
      <div className={classes.main__cards}>
        <StatsCard title="all projects" figure={89} icon="las la-upload" status="#2298F1" />
        <StatsCard title="all projects" figure={89} icon="las la-upload" status="#66B92E" />
        <StatsCard title="all projects" figure={89} icon="las la-upload" status="#DA932C" />
        <StatsCard title="all projects" figure={89} icon="las la-upload" status="#D65B4A" />
      </div>

      <Table
        title="Ongoing Projects"
        subTitle="32 Projects"
        items={[1, 2, 3]}
        headings={['Name', 'Description', 'Created by', 'Created at']}
      />
    </div>
  )
}

export default DashboardContent
