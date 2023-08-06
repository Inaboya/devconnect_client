import React from 'react'
import { EducationFormData } from '../utils/typings';

interface EducationProps {
  education: EducationFormData[]
}

const Education: React.FC<EducationProps> = () => {
  return (
    <div>Education</div>
  )
}

export default Education