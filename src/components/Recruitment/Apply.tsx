import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_jdkkgml',
            'template_jrzr3gj',
            form.current!,
            '0vDbr_MQNjCZWNO56'
        )
            .then((result) => {
                alert('Gửi thành công!');
                console.log(result.text);
            }, (error) => {
                alert('Lỗi khi gửi');
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
            <input type="text" name="user_name" placeholder="Tên của bạn" required />
            <input type="email" name="user_email" placeholder="Email của bạn" required />
            <textarea name="message" placeholder="Nội dung tin nhắn" required />
            <button type="submit">Gửi</button>
        </form>
    );
};

export default ContactForm;
