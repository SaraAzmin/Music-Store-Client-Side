import React, { useEffect, useState } from 'react';

const AllInstruments = () => {

    const [instruments, setInstruments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instruments')
            .then(res => res.json())
            .then(data => setInstruments(data));
    }, []);

    return (
        <div>
            <h1>{instruments.length}</h1>
        </div >
    );
};

export default AllInstruments;