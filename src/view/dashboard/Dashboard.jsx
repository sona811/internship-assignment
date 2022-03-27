import styles from './Dashboard.module.scss';
import { Sidebar } from '../../components/sidebar/Sidebar'
import { Header } from "../../components/header/Header";
import { PdfViewer } from '../../components/pdf-viewer/PDFViewer';
import { CommentEditor } from '../../components/editor/CommentEditor';

export const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <Sidebar />
            <div className={styles.contentContainer}>
                <Header />
                <PdfViewer />
                <CommentEditor />
            </div>
        </div>
    )
}