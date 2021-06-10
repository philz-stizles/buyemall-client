import React from 'react'

const TableRow = () => {
  return (
    <tr className="TableRow">
      <td>
        <p>New Dashboard</p>
        <p>Google</p>
      </td>
      <td>
        <p>17th Oct, 15</p>
        <p className="text-danger">Overdue</p>
      </td>
      <td className="member">
        <figure>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/people_8.png" />
        </figure>
        <div className="cell-info">
          <p>Myrtle Erickson</p>
          <p>UK Design Team</p>
        </div>
      </td>
      {/**<td>
        <p>$4,670</p>
        <p>Paid</p>
      </td> */}
      <td className="status">
        <span className="status-text status-orange">In progress</span>
      </td>
      <td>
        <i className="las la-trash-alt" />
        <i className="las la-eye" />
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
      `}</style>
    </tr>
  )
}

export default TableRow
