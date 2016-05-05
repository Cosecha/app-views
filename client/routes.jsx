import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components

import Home from '../imports/ui/layouts/Home.jsx';

FlowRouter.route("/", {
  action() {
    mount(Home, {

    });
  }
});
