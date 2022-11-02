import Card from './Card'; 
import Info from './Info';

const CardList = ({ usersArr }) => {
  return (
    <div>
              {usersArr.map ((user)=> {
                return (
                 <Card 
                  key= {user.id} 
                  id={user.id} 
                  firstName= {user.firstName} 
                  lastName= {user.lastName}         
                  email= {user.email}
                  age= {user.age}
                  gender= {user.gender}
                  phone={user.phone}
                  />
                );
              })
            }
    </div>
  );
}

export default CardList; 
