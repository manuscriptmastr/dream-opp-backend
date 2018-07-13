export default async ({ User, Opp, Role, Tool, Team }) => {
  let josh = await User.create({
    username: 'manuscriptmaster',
    email: 'josh@email.com',
    firstName: 'Joshua',
    lastName: 'Martin'
  });

  let jon = await User.create({
    username: 'nybblr',
    email: 'jon@email.com',
    firstName: 'Jonathan',
    lastName: 'Martin'
  });

  let opp1 = await Opp.create({
    title: 'Opp 1',
    description: 'This is an opp.'
  });

  let opp2 = await Opp.create({
    title: 'Opp 2',
    description: 'This is another opp.'
  });

  let role1 = await Role.create({
    title: 'Role 1'
  });

  let role2 = await Role.create({
    title: 'Role 2'
  });

  let tool1 = await Tool.create({
    title: 'Tool 1'
  });

  let tool2 = await Tool.create({
    title: 'Tool 1'
  });

  let team1 = await Team.create({
    title: 'Team 1',
    url: 'https://google.com'
  });


  let team2 = await Team.create({
    title: 'Team 2',
    url: 'https://facebook.com'
  });

  await opp1.setUser(josh);
  await opp2.setUser(jon);
  await role1.setUser(josh);
  await role2.setUser(jon);
  await tool1.setUser(josh);
  await tool2.setUser(jon);
  await team1.setUser(josh);
  await team2.setUser(jon);

  await opp1.setRole(role1);
  await opp2.setRole(role2);

  await tool1.setOpp(opp1);
  await tool2.setOpp(opp2);

  await opp1.setTeam(team1);
  await opp2.setTeam(team2);
};