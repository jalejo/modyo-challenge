import PropTypes from 'prop-types';

const Button = ({ onClick, label }) => {
    return (
        <button onClick={onClick} class="min-h-10 bg-blue-challenge hover:bg-blue-challenge-hover text-white font-regular py-2 px-6 rounded-full">
            {label}
        </button>
    )

}

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string.isRequired,
};

export default Button;