import React from 'react'
import PropTypes from 'prop-types'
import TitleWithIcon from '../titles/TitleWithIcon'
import TableRow from './components/TableRow'

const Table = ({ title, subTitle, icon, items, headings, excludes, onDelete, onEdit, onView }) => {
  console.log(items)
  return (
    <div className="Table__container">
      {(title || subTitle) && (
        <div className="Table__container__header">
          <TitleWithIcon title={title} subTitle={subTitle} icon={icon} />
        </div>
      )}
      <table>
        <thead>
          <tr>
            {headings.map((head, i) => (
              <th key={i}>{head}</th>
            ))}
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => {
            console.log(item)
            return (
              <TableRow
                key={i}
                item={item}
                excludes={excludes || []}
                onEdit={onEdit}
                onView={onView}
                onDelete={onDelete}
              />
            )
          })}
        </tbody>
      </table>
      <style jsx>{`
        .Table__container {
          background-color: #273142;
          border: 1px solid #313d4f;
          overflow-x: auto;
          width: 100%;
          border-radius: 4px;
        }

        .Table__container__header {
          padding: 0 2.2rem;
        }

        .Table__container table {
          background: #273142;
          width: 100%;
          border-collapse: collapse;
          border-spacing: 0;
        }

        .Table__container table thead th {
          font-size: 1.5rem;
          background: #313d4f;
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

Table.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  icon: PropTypes.string,
  items: PropTypes.array.isRequired,
  headings: PropTypes.array.isRequired,
  excludes: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onView: PropTypes.func
}

export default Table
