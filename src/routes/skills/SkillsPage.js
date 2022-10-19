import React from 'react';

import SkillsCard from '../../components/SkillsCard'
import OlderSkillsCard from '../../components/OlderSkillsCard'
import AncientSkillsCard from '../../components/AncientSkillsCard'

export default function SkillsPage() {

    return (
        <div>
            <SkillsCard/>
            <OlderSkillsCard/>
            <AncientSkillsCard/>
        </div>
    );
}