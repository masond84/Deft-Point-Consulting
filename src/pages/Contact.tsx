import React from 'react';

const Contact: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Contact Me</h1>
            <form>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;