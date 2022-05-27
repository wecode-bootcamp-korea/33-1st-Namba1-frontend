import React from 'react';
import './UserFileImg.scss';

const UserFileImg = ({ onRemove }) => {
  const userImg = [
    {
      id: 1,
      img: '/images/review/food5.jpg',
    },
  ];

  return (
    <>
      {userImg.map(({ id, img }) => (
        <div key={id} className="userfileimg">
          <button className="delete" onClick={onRemove}>
            삭제
          </button>
          <img src={img} alt="임시 사진" />
        </div>
      ))}
    </>
  );
};

export default UserFileImg;
