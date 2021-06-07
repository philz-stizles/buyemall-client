import React from 'react'
import TitleWithIcon from '../titles/TitleWithIcon'
import TableRow from './components/TableRow'

const Table = ({title, subTitle, icon, items}) => {
  return (
    <div className="Table__container">
      <TitleWithIcon title={title} subTitle={subTitle} icon={icon} />
      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Deadline</th>
            <th>Leader + Team</th>
            <th>Budget</th>
            <th>Status</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map((item) => {
              return (
                <TableRow />
              )
            })
          }
        </tbody>
      </table>
      <style jsx>{`
        .Table__container {
          background-color: #273142;
          border: 1px solid #313D4F;
          overflow-x: auto;
          width: 100%;
          border-radius: 4px;
        }

        .Table__container table {
          background: #273142;
          width: 100%;
          border-collapse: collapse;
          border-spacing: 0;
        }

        .Table__container table thead th {
          font-size: 1.5rem;
          background: #313D4F;
          color: #fff;
          padding: 1rem 2.2rem;
          vertical-align: middle;
          text-align: left;
          font-weight: 400;
        }
      `}</style>
    </div>
  )
}

export default Table
