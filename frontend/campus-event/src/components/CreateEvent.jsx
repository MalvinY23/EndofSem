import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateEvent = () => {
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
            title: '',
            description: '',
            date: '',
            time: '',
            location: '',
            capacity: '',
            category: '',
            imageUrl: ''
        });
        const [error, setError] = useState('');

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };

        const handleSubmit = async(e) => {
            e.preventDefault();
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post('http://localhost:5000/api/events', formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.status === 201) {
                    navigate('/events');
                }
            } catch (err) {
                setError(err.response ? .data ? .message || 'Failed to create event');
            }
        };

        return ( <
            div className = "create-event-container" >
            <
            div className = "page-header" >
            <
            h1 > Create New Event < /h1> <
            p > Fill in the details to create a new campus event < /p> <
            /div>

            <
            div className = "form-container" > {
                error && < div className = "error-message" > { error } < /div>}

                <
                form onSubmit = { handleSubmit } >
                <
                div className = "form-grid" >
                <
                div className = "form-group" >
                <
                label htmlFor = "title" > Event Title < /label> <
                input
                type = "text"
                id = "title"
                name = "title"
                value = { formData.title }
                onChange = { handleChange }
                required /
                >
                <
                /div>

                <
                div className = "form-group" >
                <
                label htmlFor = "date" > Date < /label> <
                input
                type = "date"
                id = "date"
                name = "date"
                value = { formData.date }
                onChange = { handleChange }
                required /
                >
                <
                /div>

                <
                div className = "form-group" >
                <
                label htmlFor = "time" > Time < /label> <
                input
                type = "time"
                id = "time"
                name = "time"
                value = { formData.time }
                onChange = { handleChange }
                required /
                >
                <
                /div>

                <
                div className = "form-group" >
                <
                label htmlFor = "location" > Location < /label> <
                input
                type = "text"
                id = "location"
                name = "location"
                value = { formData.location }
                onChange = { handleChange }
                required /
                >
                <
                /div>

                <
                div className = "form-group" >
                <
                label htmlFor = "capacity" > Capacity < /label> <
                input
                type = "number"
                id = "capacity"
                name = "capacity"
                value = { formData.capacity }
                onChange = { handleChange }
                required
                min = "1" /
                >
                <
                /div>

                <
                div className = "form-group" >
                <
                label htmlFor = "category" > Category < /label> <
                select
                id = "category"
                name = "category"
                value = { formData.category }
                onChange = { handleChange }
                required >
                <
                option value = "" > Select a category < /option> <
                option value = "academic" > Academic < /option> <
                option value = "social" > Social < /option> <
                option value = "sports" > Sports < /option> <
                option value = "cultural" > Cultural < /option> <
                option value = "other" > Other < /option> <
                /select> <
                /div>

                <
                div className = "form-group" >
                <
                label htmlFor = "imageUrl" > Image URL < /label> <
                input
                type = "url"
                id = "imageUrl"
                name = "imageUrl"
                value = { formData.imageUrl }
                onChange = { handleChange }
                placeholder = "https://example.com/image.jpg" /
                >
                <
                /div> <
                /div>

                <
                div className = "form-group" >
                <
                label htmlFor = "description" > Description < /label> <
                textarea
                id = "description"
                name = "description"
                value = { formData.description }
                onChange = { handleChange }
                required
                rows = "4" >
                < /textarea> <
                /div>

                <
                div className = "button-group" >
                <
                button type = "button"
                className = "btn secondary"
                onClick = {
                    () => navigate('/events') } >
                Cancel <
                /button> <
                button type = "submit"
                className = "btn primary" >
                Create Event <
                /button> <
                /div> <
                /form> <
                /div> <
                /div>
            );
        };

        export default CreateEvent;