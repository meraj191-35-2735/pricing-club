import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefits = (props) => {
    const {benefit} = props;
    return (
        <div>
             <p className="flex">
              <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2"></CheckCircleIcon>
              <span className="font-bold font-mono mt-0 pt-0">{benefit}</span>
            </p>
        </div>
    );
};

export default Benefits;