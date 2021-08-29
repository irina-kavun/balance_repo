import PropTypes from 'prop-types';

const Transaction = ({ transaction }) => (
    <div>
        <p>Label: {transaction.label}</p>
        <p>Value: {transaction.value}</p> 
    </div>
)

Transaction.propTypes = {
    transaction: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
    }),
}

Transaction.defaultProps = {
    transaction: {
        label: '',
        value: ''
    }
}
 
export default Transaction;