import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import EditIcon from '../../../icons/EditIcon'
import TrashIcon from '../../../icons/TrashIcon'
import EyeIcon from '../../../icons/EyeIcon'

const TableRow = ({ identifier, item, excludes, onDelete, onEdit, onView }) => {
  return (
    <tr className="TableRow">
      {Object.keys(item)
        .filter((key) => !excludes.includes(key))
        .map((key, i) => (
          <td key={i}>
            <p>
              {key === 'createdAt'
                ? moment(item[key]).format('MMMM D yyyy')
                : key === 'creator'
                ? item[key].email
                : key === 'category'
                ? item[key].name
                : item[key]}
            </p>
          </td>
        ))}
      <td className="actions">
        <span onClick={() => onView(item)} aria-hidden="true">
          <EyeIcon />
        </span>
        <span onClick={() => onEdit(item)} aria-hidden="true">
          <EditIcon />
        </span>
        <span onClick={() => onDelete(item)} aria-hidden="true">
          <TrashIcon />
        </span>
      </td>
      <style jsx>{`
        .TableRow {
          border-bottom: 1px solid #313d4f;
        }

        .TableRow img {
          border-radius: 50%;
          height: 3.2rem;
          width: 3.2rem;
        }

        .TableRow td {
          color: white;
          padding: 10px 22px;
          vertical-align: middle;
        }

        .TableRow i {
          font-size: 2rem;
          margin-right: 1rem;
        }

        .TableRow td p {
          font-size: 1.4rem;
        }

        .TableRow td p:last-of-type {
          color: #738297;
          font-size: 1.3rem;
        }

        .TableRow td figure,
        .TableRow td .cell-info {
          display: inline-block;
          vertical-align: top;
        }

        .TableRow td .cell-info {
          margin-left: 1rem;
        }

        .TableRow td .status-text {
          display: inline-block;
          font-size: 12px;
          margin: 11px 0;
          padding-left: 20px;
          position: relative;
        }

        .TableRow td .status-text.status-orange:before {
          border-color: #da932c;
        }

        .TableRow td .status-text:before {
          border: 3px solid;
          border-radius: 50%;
          content: '';
          height: 0.7rem;
          left: 0;
          position: absolute;
          top: 1px;
          width: 0.7rem;
        }

        .TableRow .actions {
          display: flex;
          align-items: center;
        }

        .TableRow .actions span {
          display: inline-block;
          width: 1.6rem;
          height: 1.6rem;
          margin-right: 1rem;
          cursor: pointer;
        }
      `}</style>
    </tr>
  )
}

TableRow.propTypes = {
  item: PropTypes.object,
  excludes: PropTypes.array,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onView: PropTypes.func
}

export default TableRow
