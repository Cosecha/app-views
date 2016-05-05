import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components

import App from '../imports/ui/App.jsx';

FlowRouter.route("/", {
  action() {
    mount(App, {

    });
  }
});
