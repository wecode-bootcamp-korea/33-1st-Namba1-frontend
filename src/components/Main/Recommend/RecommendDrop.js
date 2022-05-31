import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './RecommendDrop.scss';

const RecommendDrop = () => {
  const dropdownRef = useRef(null);
  const [tasteOption, setTasteOption] = useState('매콤한맛');
  const [isActive, setIsActive] = useState(false);
  const activateDropdown = () => setIsActive(!isActive);

  return (
    <div className="recommendDrop">
      <button onClick={activateDropdown} className="recommendDropTrigger">
        <span>{tasteOption}</span>
        <span>
          <FontAwesomeIcon icon={faAngleDown} />
        </span>
      </button>
      <nav
        ref={dropdownRef}
        className={`recommendNav ${isActive ? 'active' : 'inactive'}`}
      >
        <ul>
          {TASTE.map(({ id, taste }) => {
            return (
              <li
                key={id}
                onClick={() => {
                  setTasteOption(taste);
                  activateDropdown();
                }}
              >
                {taste}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const TASTE = [
  { id: 1, taste: '매콤한맛' },
  { id: 2, taste: '짭짤한맛' },
  { id: 3, taste: '새콤한맛' },
  { id: 4, taste: '담백한맛' },
  { id: 5, taste: '이국적인맛' },
  { id: 6, taste: '얼큰한맛' },
];

export default RecommendDrop;
