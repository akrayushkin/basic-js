module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const secretName = [];
  members.forEach(item => {
  	if (typeof item === 'string') secretName.push(item.trim()[0].toUpperCase());
  });

  return secretName.sort().join('');
};
