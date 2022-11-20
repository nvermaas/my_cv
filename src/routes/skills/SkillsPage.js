import React from 'react';

import SkillsCard from './SkillsCard'
import PreviousSkillsCard from './PreviousSkillsCard'
import AncientSkillsCard from './AncientSkillsCard'

export default function SkillsPage() {

    return (
        <div>
            <SkillsCard/>
            <PreviousSkillsCard/>
            <AncientSkillsCard/>
        </div>
    );
}