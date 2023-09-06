import React from 'react';
import CardName from './CardName';

export default function CardList({ usersArr }) {

  return (
    <div className='flex flex-wrap justify-between'>
      {usersArr.map((user) => {
        return (
          <div key={user.id}>
            <CardName
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              age={user.age}
              gender={user.gender}
              phone={user.phone}
            />
          </div>
        );
      })}
    </div>
  );
}













