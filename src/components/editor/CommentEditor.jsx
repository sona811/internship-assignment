import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, Modifier } from 'draft-js';
import { Button } from '../button/Button'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './CommentEditor.module.scss';

export const CommentEditor = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState) => setEditorState(editorState);

    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            editorClassName={styles.editorContainer}
            toolbarCustomButtons={[<Button label={'Comment'} className={styles.commentButton}/>]}/>
    )
}