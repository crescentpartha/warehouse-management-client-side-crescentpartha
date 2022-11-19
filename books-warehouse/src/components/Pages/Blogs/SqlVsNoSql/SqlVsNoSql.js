import React from 'react';
import sql_vs_noSql from '../../../../images/blogs-images/sql-nosql.png';

const SqlVsNoSql = () => {
    return (
        <div className='col-span-4 sm:col-span-5 h-auto mx-4 my-12 sm:m-16'>
            <img className='w-full border rounded ' src={sql_vs_noSql} alt="JavaScript Vs Nodejs" />
            <div className='text-start'>
                <h1 className='text-xl sm:text-3xl md:text-4xl py-4 font-semibold'>What is the difference between SQL and NoSQL?</h1>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>Introduction To SQL</h2>
                    <p className='text-justify text-gray-500 pb-2'>SQL databases use structured query language and have a pre-defined schema for defining and manipulating data. SQL is one of the most versatile and widely used query languages available, making it a safe choice for many use cases. It's perfect for complex queries.</p>
                    <p className='text-justify text-gray-500 pb-2'>However, SQL can be too restrictive. You have to use predefined schemas to determine your data structure before you can work with it. All of your data must follow the same structure. This process requires significant upfront preparation. If you ever wanted to change your data structure, it would be difficult and disruptive to your whole system.</p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>Introduction To NoSQL</h2>
                    <p className='text-justify text-gray-500 pb-2'>NoSQL databases have dynamic schemas for unstructured data, and the data is stored in many ways. You can use column-oriented, document-oriented, graph-based, or KeyValue store for your data. This flexibility means that: You can create documents without having to first define their structure; Each document can have its own unique structure; The syntax can vary from database to database; and You can add fields as you go.</p>
                </div>
                <div>
                    <h2 className='text-lg sm:text-2xl md:text-3xl py-4'>SQL and NoSQL: The Key Differences</h2>
                    <div className='overflow-auto'>
                        <table className="border-collapse border border-slate-500 table-auto mx-auto w-full">
                            <thead>
                                <tr className='bg-gray-400'>
                                    <th className='border p-2 text-white'>SQL</th>
                                    <th className='border p-2 text-white'>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='border p-2 align-top'>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                    <td className='border p-2 align-top'>Non-relational or distributed database system.</td>
                                </tr>
                                <tr className='bg-gray-300'>
                                    <td className='border p-2 align-top'>These databases have fixed or static or predefined schema</td>
                                    <td className='border p-2 align-top'>They have dynamic schema</td>
                                </tr>
                                <tr>
                                    <td className='border p-2 align-top'>These databases are not suited for hierarchical data storage</td>
                                    <td className='border p-2 align-top'>These databases are best suited for hierarchical data storage</td>
                                </tr>
                                <tr className='bg-gray-300'>
                                    <td className='border p-2 align-top'>These databases are best suited for complex queries</td>
                                    <td className='border p-2 align-top'>These databases are not so good for complex queries</td>
                                </tr>
                                <tr>
                                    <td className='border p-2 align-top'>Vertically Scalable</td>
                                    <td className='border p-2 align-top'>Horizontally scalable</td>
                                </tr>
                                <tr className='bg-gray-300'>
                                    <td className='border p-2 align-top'>Follows ACID property</td>
                                    <td className='border p-2 align-top'>Follows CAP(consistency, availability, partition tolerance)</td>
                                </tr>
                                <tr>
                                    <td className='border p-2 align-top'><span className='font-semibold'>Examples:</span> MySQL, PostgreSQL, Oracle, MS-SQL Server, etc</td>
                                    <td className='border p-2 align-top'><span className='font-semibold'>Examples:</span> MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SqlVsNoSql;