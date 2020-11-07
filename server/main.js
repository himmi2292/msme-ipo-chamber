import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const SEED_USERNAME = 'maitenanceAdmin';
const SEED_PASSWORD = 'maintenance@Aarohan';

const ADMIN_USERNAME = 'Admin';
const ADMIN_PASSWORD = 'Admin';

const SEED_MEMBER_USERNAME = 'maitenanceMember';
const SEED_MEMBER_PASSWORD = 'maintenance@Aarohan';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
    Accounts.createUser({
      username: ADMIN_USERNAME,
      password: ADMIN_PASSWORD,
    });
    Accounts.createUser({
      username: SEED_MEMBER_USERNAME,
      password: SEED_MEMBER_PASSWORD,
    });
  }

  
  
});
