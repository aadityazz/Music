import React, { useState, useEffect } from 'react';
import mysql from 'mysql2/promise';

const musics = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const connection = await mysql.createConnection({
                    host: 'localhost',
                    user: 'root',
                    password: '2002',
                    database: 'projectm'
                });

                const [rows] = await connection.execute('SELECT * FROM music');
                setItems(rows);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {items.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default musics;
