/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

// cspell:words joebob

import React from 'react';
// Carbon and package components we use.
import { Code16 as Code, Copy16 as Copy } from '@carbon/icons-react';
import { action } from '@storybook/addon-actions';
import { Navigation } from './preview-components';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { WebTerminal } from '.';
import { WebTerminalContentWrapper } from './WebTerminalContentWrapper';
import mdx from './WebTerminal.mdx';
import { documentationLinks } from './preview-components/documentationLinks';
import { WebTerminalProvider } from './hooks';

import styles from './_storybook-styles.scss';

const actions = [
  {
    renderIcon: Code,
    onClick: action('clicked on action'),
    iconDescription: 'Create new deployment',
  },
  {
    renderIcon: Copy,
    onClick: action('clicked on action'),
    iconDescription: 'Copy logs',
  },
];

const Template = (args) => {
  return (
    <WebTerminalProvider>
      <Navigation />

      <WebTerminalContentWrapper>
        This is where you would put content
      </WebTerminalContentWrapper>

      <WebTerminal closeIconDescription="Close terminal" {...args}>
        <div className="example-terminal">
          <p>Connection successful.</p>
          <p>
            DISCLAIMER: This is not a real terminal, you would pass your own
            terminal component into the children of the WebTerminal component.
          </p>

          <p>Please see the docs of this component for more information.</p>
          <p>joebob:~$</p>
        </div>
      </WebTerminal>
    </WebTerminalProvider>
  );
};

export const Default = prepareStory(Template, {
  args: { documentationLinks, actions },
});

export const WithDocumentationLinks = prepareStory(Template, {
  args: { documentationLinks },
});

export const WithActions = prepareStory(Template, {
  args: {
    actions,
  },
});

export default {
  title: getStoryTitle(WebTerminal.displayName),
  parameters: {
    styles,
    docs: {
      page: mdx,
    },
  },
};
