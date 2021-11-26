import React, { useState, useEffect } from 'react';
import addSong from './cosa';

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addSong(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input name="title" type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
            <input name="add song" type="submit" value="add song"/>
        </form>
    );
}
export default NewSongForm;