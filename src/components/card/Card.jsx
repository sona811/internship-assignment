import styles from './Card.module.scss';

export const Card = ({ orderId, time, taskName, icon, taskDescription }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <label>Order {orderId}</label>
                <label>{time}</label>
            </div>

            <div className={styles.cardContent}>
                <label>{taskName}</label>
                {icon}
            </div>
            
            <label className={styles.cardFooter}>
                {taskDescription}
            </label>
        </div>
    )
}