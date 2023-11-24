import './button.css'

const showAlert = (message) => {
    alert(message);
}

const Button = (props) => {
    return (
        <button className='btn  btn-one' onClick={() => showAlert(props.alertMessage)}>
           <span>{props.label}</span>
        </button>
    );
}

Button.defaultProps = {
    label: 'Clique aqui',
    alertMessage: 'Olá '
};

export default Button