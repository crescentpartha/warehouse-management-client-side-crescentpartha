import React from 'react';
import js_node from '../../../../images/blogs-images/js-vs-node.png';

const JavascriptVsNode = () => {
    return (
        <div className='col-span-4 sm:col-span-5 h-auto mx-4 my-12 sm:m-16'>
            <img className='w-full border rounded ' src={js_node} alt="JavaScript Vs Nodejs" />
            <div className='text-start'>
                <h1 className='text-xl sm:text-3xl md:text-4xl py-4 font-semibold'>What is the difference between JavaScript and Nodejs?</h1>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>Introduction To JavaScript</h2>
                    <p className='text-justify text-gray-500 pb-2'>Javascript is a lightweight object-oriented programming language for creating dynamic HTML pages with interactive effects. The code can only be executed and run in a web browser because it is an interpreted scripting language. To execute and run the code outside of the browser, we may utilize Node.js.</p>
                    <p className='text-justify text-gray-500 pb-2'>It's also known as a browser's language and it's capable of client-side and server-side programming. It was invented by Netscape's Brendan Eich and was released in 1995. Before being renamed JavaScript, the language was known as LiveScript.</p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>Introduction To Node.Js</h2>
                    <p className='text-justify text-gray-500 pb-2'>Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run the JavaScript on the server. JavaScript code may now execute outside of the browser thanks to Node.js. Node.js has a vast number of modules and is mostly used for web development.</p>
                    <p className='text-justify text-gray-500 pb-2'>It may operate on a variety of operating systems, including Windows, Linux, and Mac OS. It provides a cross-platform runtime environment for developing extremely scalable server-side JavaScript applications with event-driven, non-blocking (asynchronous) I/O.</p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>JavaScript Vs Nodejs: The Key Differences</h2>
                    <div className='overflow-auto'>
                        <table className="border-collapse border border-slate-500 table-auto mx-auto w-full">
                            <thead>
                                <tr className='bg-gray-400'>
                                    <th className='border p-2 text-white'>JavaScript</th>
                                    <th className='border p-2 text-white'>Nodejs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='border p-2 align-top'>Javascript is a computer language that is used to write the website scripts.</td>
                                    <td className='border p-2 align-top'>Nodejs is a Javascript runtime environment.</td>
                                </tr>
                                <tr className='bg-gray-300'>
                                    <td className='border p-2 align-top'>Javascript runs only in the browsers.</td>
                                    <td className='border p-2 align-top'>With the help of Nodejs, we can run Javascript outside of the browser.</td>
                                </tr>
                                <tr>
                                    <td className='border p-2 align-top'>It is used on the client-side basically.</td>
                                    <td className='border p-2 align-top'>It is used on the server-side mostly.</td>
                                </tr>
                                <tr className='bg-gray-300'>
                                    <td className='border p-2 align-top'>Javascript has the ability to add HTML and play with DOM.</td>
                                    <td className='border p-2 align-top'>Nodejs is not capable to add HTML tags.</td>
                                </tr>
                                <tr>
                                    <td className='border p-2 align-top'>It is the ECMA  upgraded version and it uses the Chrome V8 engine written in C++. </td>
                                    <td className='border p-2 align-top'>It is written in C, C++, and Javascript.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <table className="border-collapse border border-slate-500 table-auto mx-auto w-full">
                        <thead>
                            <tr className='bg-gray-400'>
                                <th className='border p-2'>Song</th>
                                <th className='border p-2'>Artist</th>
                                <th className='border p-2'>Artist</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border p-2 align-top'>Bones</td>
                                <td className='border p-2 align-top'>Lockyer</td>
                                <td className='border p-2 align-top'>1961</td>
                            </tr>
                            <tr className='bg-gray-300'>
                                <td className='border p-2 align-top'>Witchy</td>
                                <td className='border p-2 align-top'>Eagles</td>
                                <td className='border p-2 align-top'>1972</td>
                            </tr>
                            <tr>
                                <td className='border p-2 align-top'>Shining</td>
                                <td className='border p-2 align-top'>Earth</td>
                                <td className='border p-2 align-top'>1975</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </div>
        </div>
    );
};

export default JavascriptVsNode;