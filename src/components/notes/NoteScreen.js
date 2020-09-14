import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {NotesAppBar} from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const {active: note} = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] = useForm(note);
    const {body, title, id} = formValues;

    const activeId = useRef(note.Id);

    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}));
    }, [formValues, dispatch]);

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    autoComplete="off"
                    className="notes__title-input"
                    name="title"
                    onChange={handleInputChange}
                    placeholder="Some awesome title"
                    type="text"
                    value={title}
                />
                <textarea
                    className="notes__textarea"
                    name="body"
                    onChange={handleInputChange}
                    placeholder="What happened today"
                    value={body}
                ></textarea>
                {
                    (note.url)&&
                    (
                        <div className="notes__image">
                            <img src={note.url} style={{height: '150px'}} alt="add"/>
                        </div>
                    )
                }
            </div>
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
    )
}
