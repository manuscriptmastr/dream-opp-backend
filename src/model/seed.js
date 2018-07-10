export default async ({ User, Opp, Role, Tool, Team }) => {
  let josh = await User.create({
    username: 'manuscriptmaster',
    email: 'the.manuscriptmaster@gmail.com',
    firstName: 'Joshua',
    lastName: 'Martin'
  });

  let jon = await User.create({
    username: 'nybblr',
    email: 'the.nybblr@gmail.com',
    firstName: 'Jonathan',
    lastName: 'Martin'
  });

  let opp1 = await Opp.create({
    title: 'Opp 1',
    description: 'This is an opp.'
  });
  await opp1.setUser(josh);

  let opp2 = await Opp.create({
    title: 'Opp 2',
    description: 'This is another opp.'
  });
  await opp2.setUser(jon);

  let role1 = await Role.create({
    title: 'Role 1'
  });
  await role1.setUser(josh);

  let role2 = await Role.create({
    title: 'Role 2'
  });
  await role2.setUser(jon);

  let tool1 = await Tool.create({
    title: 'Tool 1'
  });
  await tool1.setUser(josh);

  let tool2 = await Tool.create({
    title: 'Tool 1'
  });
  await tool2.setUser(jon);

  let team1 = await Team.create({
    title: 'Team 1',
    url: 'https://google.com'
  });
  await team1.setUser(josh);


  let team2 = await Team.create({
    title: 'Team 2',
    url: 'https://facebook.com'
  });
  await team2.setUser(jon);
};