import { User, Opp } from './model';

let seed = async () => {
  await User.create({
    username: 'manuscriptmaster',
    email: 'the.manuscriptmaster@gmail.com',
    firstName: 'Joshua',
    lastName: 'Martin'
  });
  
  await User.create({
    username: 'nybblr',
    email: 'the.nybblr@gmail.com',
    firstName: 'Jonathan',
    lastName: 'Martin'
  });

  await Opp.create({
    title: 'Opp 1',
    description: 'This is an opp.',
  });

  await Opp.create({
    title: 'Opp 2',
    description: 'This is another opp.'
  });
  
  console.log('Seeded database with test data.');
}

export default seed;