import fetchUser from './profile/gateway.js';
import { printProfile } from './profile/index.js';

fetchUser('velmyk')
    .then(userData => printProfile({
        name: userData.name,
        company: userData.location,
    }));