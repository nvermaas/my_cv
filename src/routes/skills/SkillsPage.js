import React from 'react';

import SkillsCard from './SkillsCard'
import OlderSkillsCard from './OlderSkillsCard'
import AncientSkillsCard from './AncientSkillsCard'

export default function SkillsPage() {

    return (
        <div>
            <SkillsCard/>
            <OlderSkillsCard/>
            <AncientSkillsCard/>
        </div>
    );
}