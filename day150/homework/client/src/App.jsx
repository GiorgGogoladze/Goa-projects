import React from 'react';
import { Link } from 'react-router-dom';
import { getPhoneModels } from '../services/api';

const PhoneList = () => {
  const phones = getPhoneModels();

  return (
    <div>
      <h1>Old Phone Models</h1>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            <Link to={`/phone/${phone.id}`}>{phone.name} ({phone.year})</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhoneList;
