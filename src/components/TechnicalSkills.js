import React from 'react';
import { techSkillsData } from '../data';

export class TechnicalSkills extends React.Component {
  render() {
    var total =[];

    for (const header in techSkillsData) {
      total.push(<p key={header.toString()}><strong>{header}:</strong> {techSkillsData[header]}</p>);
    }

    return (
      <div>
        {total}
      </div>
    );
  }
}
