import React from 'react';

import AstronSDCCard from './AstronSDCCard'
import AstronApertifCard from './AstronApertifCard'
import AstronROCard from './AstronROCard'
import SAVECard from './SAVECard'
import GeopsCard from './GeopsCard'

export default function HistoryPage() {

    return (
        <div>
            <AstronSDCCard/>
            <AstronApertifCard/>
            <AstronROCard/>
            <SAVECard/>
            <GeopsCard/>
        </div>
    );
}