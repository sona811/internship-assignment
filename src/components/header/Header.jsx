import { Button } from '../button/Button';
import { BsFiles } from "react-icons/bs";
import { ImRedo2 } from "react-icons/im";
import { ImUndo2 } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { IoBanSharp } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import { AiOutlinePoweroff } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.orderDetailsContainer}>
                <div>
                    <label>ORDER id</label>
                    <label>TASK NAME</label>
                </div>
                <div>
                    <label>
                        description
                    </label>
                </div>
                <div>
                    <label>created by: Name</label>
                    <label>Due: Date</label>
                </div>
                <div>
                    <label>sent by: Name</label>
                    <label>send to</label>
                </div>
            </div>
            <div className={styles.profileContainer}>
                <div className={styles.profileContentContainer}>
                    <div className={styles.profileAvatar}>
                        <label>Workflow name</label>
                        <FaUser />
                    </div>
                    <div className={styles.infoContainer}>
                        <div>
                            <label>Welcome Mr. Das</label>
                            <a href="#">Logout <AiOutlinePoweroff /></a>
                        </div>
                        <div>
                            <label>Admin mode <MdOutlineAdminPanelSettings /></label>
                            <a href="#">Settings <AiTwotoneSetting /></a>
                        </div>
                    </div>
                </div>
                <div className={styles.actionContainer}>
                    <Button
                        label={'Files'}
                        icon={<BsFiles />}/>
                    <Button 
                        label={'Forward'}
                        icon={<ImRedo2 />}/>
                    <Button 
                        label={'Send back'}
                        icon={<ImUndo2 />}/>
                    <Button 
                        label={'Reject'}
                        icon={<IoBanSharp />}/>
                    <Button 
                        label={'Next Assessor'}
                        icon={<FaArrowAltCircleRight />}/>
                        
                        
                        
                </div>
            </div>
        </div>
    )
}