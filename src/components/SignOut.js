import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <button class="button"
    type="button"
    onClick={auth.doSignOut}
  >
    Logi välja
  </button>

export default SignOutButton;