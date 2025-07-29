import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const templateParams = {
            name,
            email,
            message,
            reply_to: email,
        };

        emailjs.send('service_hsx69mi', 'template_ec4yiyh', templateParams, 'zFtFqpBpQuHsEmvYz')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setPopupMessage('Email sent successfully!');
                setShowPopup(true);
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.error('Failed to send email:', error);
                setPopupMessage('Error sending email. Please try again later.');
                setShowPopup(true);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="flex justify-center mt-28 mb-10" id='contact'>
                <div className="w-5/6 h-0.5 bg-slate-300 opacity-50"></div>
            </div>

            {/* Container for form and description */}
            <div className="flex flex-col md:flex-row justify-around items-start w-full gap-10 md:gap-40 py-10 px-6 md:px-32">
                
                {/* Description section */}
                <div className="flex flex-col w-full md:w-1/2 gap-5 md:gap-10">
                    <h1 className="font-outfit text-3xl md:text-4xl">Let's work together</h1>
                    <p className="w-full md:w-4/5">
                        As a front-end developer, I’m passionate about transforming your ideas into engaging, user-friendly web experiences. I work closely with clients to create responsive designs that captivate users and drive engagement. Let’s collaborate to build a stunning online presence that showcases your brand and achieves your business goals.
                    </p>

                    {/* Social media logos */}
                    <ul className="flex mt-5 space-x-5">
                        <li>
                            <a 
                                href='https://www.facebook.com/erickson.guhilde.50'
                                target='_blank'
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400  cursor-pointer"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-8 h-8 md:w-10 md:h-10"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a 
                                href='https://www.instagram.com/_notakemi/'
                                target='_blank'
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400  cursor-pointer"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-8 h-8 md:w-10 md:h-10"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://github.com/riXoon"
                                target="_blank"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400  cursor-pointer"
                            >
                                <svg 
                                    aria-hidden="true" 
                                    viewBox="0 0 16 16" 
                                    fill="currentColor" 
                                    className="w-8 h-8 md:w-10 md:h-10"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.34c-2.23.48-2.7-1.08-2.7-1.08-.36-.92-.88-1.17-.88-1.17-.72-.49.06-.48.06-.48.79.06 1.21.81 1.21.81.71 1.21 1.86.86 2.31.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82a7.68 7.68 0 012.01-.27c.68 0 1.36.09 2.01.27 1.53-1.03 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/erickson-guhilde"
                                target="_blank"
                                className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400 cursor-pointer"
                                >
                                <svg 
                                    aria-hidden="true" 
                                    viewBox="0 0 16 16" 
                                    fill="currentColor" 
                                    className="w-8 h-8 md:w-10 md:h-10"
                                >
                                    <path d="M1.146 1.146C.413 1.879.413 3.121 1.146 3.854c.733.733 1.975.733 2.708 0 .733-.733.733-1.975 0-2.708C3.121.413 1.879.413 1.146 1.146zM.5 5.5h3v10h-3v-10zm5 0h2.837v1.364h.04c.396-.751 1.364-1.54 2.812-1.54 3.01 0 3.57 1.98 3.57 4.554v5.622h-3v-5.004c0-1.194-.022-2.73-1.664-2.73-1.666 0-1.92 1.302-1.92 2.645v5.089h-3v-10z"/>
                                </svg>
                                </a>

                        </li>
                    </ul>
                </div>

                {/* Form section */}
                <form 
                    className="w-full md:w-1/2 flex flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    <h2 className="font-outfit text-3xl md:text-4xl">Send a Message</h2>

                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 outline-none transition-all duration-200 ease-in-out w-full"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 outline-none transition-all duration-200 ease-in-out w-full"
                        required
                    />

                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 outline-none transition-all duration-200 ease-in-out w-full h-40 resize-none"
                        required
                    />

                    <button
                        type="submit"
                        className="p-4 rounded-lg bg-violet-500 text-white hover:bg-violet-600 transition-all duration-200 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed w-full"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p>{popupMessage}</p>
                        <button
                            className="mt-4 px-6 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
                            onClick={closePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Contact;
