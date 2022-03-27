import styles from './Button.module.scss';

export const Button = ({ label, icon, onClick, className }) => {
    return (
        <button onClick={onClick} className={className}>
            <label>
                {label}
            </label>
            {icon && icon}
        </button>
    )
}