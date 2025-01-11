import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Spinner = () => (
    <div className="loader">
        <FontAwesomeIcon icon={faSpinner} />
    </div>
);

export default Spinner;