import PropTypes from 'prop-types';

export default function CourseListRow(props) {
  const { isHeader, textFirstCell, textSecondCell } = props;
  return (
    <tr>
      {isHeader ? (
        !textSecondCell ? (
          <th colSpan='2'>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};
