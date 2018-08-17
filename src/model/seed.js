export default async ({ User, Opp, Role, Tool, Team }) => {
  
  let josh = await User.create({
    username: 'manuscriptmaster',
    email: 'josh@email.com',
    password: '12345',
    firstName: 'Joshua',
    lastName: 'Martin'
  });

  let jon = await User.create({
    username: 'nybblr',
    email: 'jon@email.com',
    password: 'abcdefg',
    firstName: 'Jonathan',
    lastName: 'Martin'
  });

  let opp1 = await Opp.create({
    description: 'At Dragon Army, our team is the most important part of our company. Our values are what help us make sure we bring in the right team members. They are: Team First, Think Positively, Celebrate Diversity, Do Good and Have Fun. If this sounds like your kind of company, keep reading.'
  });

  let opp2 = await Opp.create({
    description: 'Do writing and reading great code make you smile? Do you want to collaborate with people that continuously push each other to be better in a friendly, non-egotistical environment? Would you like to make a huge impact by solving challenges for some of the world’s largest and best-known companies and brands?'
  });

  let role1 = await Role.create({
    title: 'Front End Developer'
  });

  let role2 = await Role.create({
    title: 'JavaScript Developer'
  });

  let tool1 = await Tool.create({
    title: 'JavaScript'
  });

  let tool2 = await Tool.create({
    title: 'Ruby'
  });

  let team1 = await Team.create({
    title: 'Dragon Army',
    url: 'http://www.dragonarmy.com/',
    imgUrl: 'https://assets.agencyspotter.com/uploads/agency_image/image/24931/resized_drag.png'
  });


  let team2 = await Team.create({
    title: 'WillowTree Apps',
    url: 'https://willowtreeapps.com/',
    imgUrl: 'https://willowtreeapps.com/img/logo-black.png'
  });

  await opp1.setUser(josh);
  await opp2.setUser(josh);
  await role1.setUser(josh);
  await role2.setUser(josh);
  await tool1.setUser(josh);
  await tool2.setUser(josh);
  await team1.setUser(josh);
  await team2.setUser(josh);

  await opp1.setRole(role1);
  await opp2.setRole(role2);

  await tool1.setOpp(opp1);
  await tool2.setOpp(opp2);

  await opp1.setTeam(team1);
  await opp2.setTeam(team2);
};