import React from 'react';
import jwt from '../../../../images/blogs-images/jwt.jpg';

const Jwt = () => {
    return (
        <div className='col-span-4 sm:col-span-5 h-auto mx-4 my-12 sm:m-16'>
            <img className='w-full border rounded ' src={jwt} alt="JavaScript Vs Nodejs" />
            <div className='text-start'>
                <h1 className='text-xl sm:text-3xl md:text-4xl py-4 font-semibold'>What is the purpose of JWT and how does it works?</h1>
                <p className='text-justify text-gray-500 pb-2'>One of the most sort of the word within the web developer community JWT, everyone has either implemented or is willing to implement this in their projects specifically on their API Layer. Here I will discuss the basics of JWT briefly that will allow the developer to understand "What, How, Where and Why" about these tokens.</p>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>Introduction to JWT</h2>
                    <p className='text-justify text-gray-500 pb-2'>A technical jargon that everyone is talking about, if we go with the acronym <a className='text-blue-400' href='https://ansibytecode.com/jwt-peek-into-the-jargon-java-web-token/'>JWT</a> it stands for JSON Web Token. Its a JSON object that's outlined in under the RFS standard as <span className='font-semibold'>RFC 7519</span> as a secure way to represent a group of information between two parties.</p>
                    <p className='text-justify text-gray-500 pb-2'></p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>Construct of Java Web Token</h2>
                    <p className='text-justify text-gray-500 pb-2'>The token constructed as a group of a header, a payload, and a signature component with below format</p>
                    <p className='text-justify text-gray-500 pb-2 font-semibold'>header.payload.signature</p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>HEADER</h2>
                    <p className='text-justify text-gray-500 pb-2'>The header element of the token contains information about how the signature should be computed.</p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>PAYLOAD</h2>
                    <p className='text-justify text-gray-500 pb-2'>The payload element of the token is that the records that's hold on within token.</p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>SIGNATURE</h2>
                    <p className='text-justify text-gray-500 pb-2'>Signature is calculated by concatenating the header and payload with a period as a separator after these two values are encoded using Base64url Encoding.</p>
                    <p className='text-justify text-gray-500 pb-2'>The concatenated string is then encrypted using the cryptographic algorithm specified in the header.</p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>JWT COMPONENTS TOGETHER</h2>
                    <p className='text-justify text-gray-500 pb-2'>The three parts are encoded separately using Base64url Encoding, and concatenated using periods to produce the JWT</p>
                    <p className='text-justify text-gray-500 pb-2'>Final Token is as follows</p>
                    <p className='text-justify text-gray-500 pb-2 font-semibold'>const token = base64urlEncoding(header) + '.' + base64urlEncoding(payload) + '.' +  base64urlEncoding(signature)</p>
                </div>

            </div>
        </div>
    );
};

export default Jwt;