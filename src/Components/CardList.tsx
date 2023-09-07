import React from 'react';
import CardName from './CardName';
import { usersArr } from '../model';

interface Props {
  usersArr: usersArr[];
}

const CardList: React.FC<Props> = ({ usersArr })=> {
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

export default CardList;












