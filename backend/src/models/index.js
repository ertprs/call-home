const sequelize = require('./sequelize');
const { model: UserModel } = require('./User');
const ContactModel = require('./Contact');
const CallModel = require('./Call');

const User = UserModel(sequelize);
const Contact = ContactModel(sequelize);
const Call = CallModel(sequelize);

// User <-> Contact
User.belongsToMany(Contact, { through: 'userContacts' });
Contact.belongsToMany(User, { through: 'userContacts' });

// Call <-> Contact
Call.belongsToMany(Contact, { through: 'callContacts' });
Contact.belongsToMany(Call, { through: 'callContacts' });

// Call <-> User
Call.belongsToMany(User, { through: 'callUsers' });
User.belongsToMany(Call, { through: 'callUsers' });

module.exports = {
  sequelize,
  User,
  Contact,
  Call,
};
