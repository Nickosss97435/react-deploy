import React from 'react';

const Contact = () => {
    return (
        <main>
            <h3 className='font-extrabold mb-4 test-3xl'>Contact</h3>
            <p>Email: contact@mondistri.re</p>

            <form className='mt-5'>
                <label className='mr-3'>Sujet du mail</label>
                <input className='border' type='text' placeholder='Quel est le sujet ?'></input>
            </form>
        </main>
    );
};

export default Contact;