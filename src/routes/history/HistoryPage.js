import React from 'react';

import AstronSDCCard from './AstronSDCCard'
import AstronApertifCard from './AstronApertifCard'
import AstronROCard from './AstronROCard'

export default function HistoryPage() {

    return (
        <div>
            <AstronSDCCard/>
            <AstronApertifCard/>
            <AstronROCard/>
        </div>
    );
}