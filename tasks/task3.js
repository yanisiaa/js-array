function findByName(people, name) 
{
  for (let i = 0; i < people.length; i++)
     {
    if (people[i].name === name) 
      {
      return people[i]; 
    }
  }
}
module.exports = findByName;