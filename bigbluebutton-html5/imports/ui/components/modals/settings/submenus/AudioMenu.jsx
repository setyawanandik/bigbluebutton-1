import React from 'react';
import Modal from 'react-modal';
import Icon from '/imports/ui/components/icon/component';
import Button from '/imports/ui/components/button/component';
import BaseMenu from './BaseMenu';
import {joinListenOnly, joinMicrophone, exitAudio} from '/imports/api/phone';

export default class AudioMenu extends BaseMenu {
  constructor(props) {
    super(props);
  }

  getContent() {
    return (
      <div>
        <p>inside audio menu</p>
      </div>
    );
  }
};
