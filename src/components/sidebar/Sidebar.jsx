import { Button } from "../button/Button"
import { MdFormatListNumberedRtl } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Card } from "../card/Card";
import { AiOutlineStar } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebarHeader}>
                <Button
                    label={'Collapse Inbox'} 
                    icon={<MdFormatListNumberedRtl />} />
                <Button
                    label={'Create New Task'} 
                    icon={<FiEdit />} />
                <div className={styles.searchContainer}>
                    <input type='text' name='search' />
                    <BsSearch className={styles.searchIcon} />
                    <ImCancelCircle />
                </div>
            </div>

            <div className={styles.sidebarContent}>
                <Card
                    orderId={'1234'}
                    time={'13:27'}
                    taskName={'Distribute Medicine'}
                    icon={<AiOutlineStar />}
                    taskDescription={'Task description'}/>
                <Card
                    orderId={'1234'}
                    time={'13:27'}
                    taskName={'Distribute Medicine'}
                    icon={<AiFillStar />}
                    taskDescription={'Task description'}/>
                <Card
                    orderId={'1234'}
                    time={'13:27'}
                    taskName={'Distribute Medicine'}
                    icon={<AiOutlineStar />}
                    taskDescription={'Task description'}/>
                <Card
                    orderId={'1234'}
                    time={'13:27'}
                    taskName={'Distribute Medicine'}
                    icon={<AiFillStar />}
                    taskDescription={'Task description'}/>
            </div>
        </div>
    )
}