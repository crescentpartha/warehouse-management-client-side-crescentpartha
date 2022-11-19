import React from 'react';
import node_mongo from '../../../../images/blogs-images/node-mongo.png';

const NodeVsMongo = () => {
    return (
        <div className='col-span-4 sm:col-span-5 h-auto mx-4 my-12 sm:m-16'>
            <img className='w-full border rounded ' src={node_mongo} alt="JavaScript Vs Nodejs" />
            <div className='text-start'>
                <h1 className='text-xl sm:text-3xl md:text-4xl py-4 font-semibold'>When should you use Nodejs and when should you use MongoDB?</h1>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>Introduction to Nodejs</h2>
                    <p className='text-justify text-gray-500 pb-2'>Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run the JavaScript on the server. JavaScript code may now execute outside of the browser thanks to Node.js. Node.js has a vast number of modules and is mostly used for web development.</p>
                    <p className='text-justify text-gray-500 pb-2'>It may operate on a variety of operating systems, including Windows, Linux, and Mac OS. It provides a cross-platform runtime environment for developing extremely scalable server-side JavaScript applications with event-driven, non-blocking (asynchronous) I/O.</p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>Introduction to MongoDB</h2>
                    <p className='text-justify text-gray-500 pb-2'>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
                    <p className='text-justify text-gray-500 pb-2'>MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc.</p>
                    <p className='text-justify text-gray-500 pb-2'>These two technologies are for different parts of a typical web server system. You don't substitute one for the other. Instead, you can use them together.</p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>When should we use Nodejs?</h2>
                    <p className='text-justify text-gray-500 pb-2'>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc.</p>
                    <p className='text-justify text-gray-500 pb-2'>So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>When should we use MongoDB?</h2>
                    <p className='text-justify text-gray-500 pb-2'>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.</p>
                </div>
            </div>
        </div>
    );
};

export default NodeVsMongo;