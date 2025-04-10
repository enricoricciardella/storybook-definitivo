import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs } from '../Style/Tabs';

export default {
  title: 'Design System/Tabs',
  component: Tabs,
} as Meta;

const Template: Story = (args) => <Tabs {...args} />;

export const ThreeTabs = Template.bind({});
ThreeTabs.args = {
  tabs: [
    {
      label: 'Tab 1',
      content: <div>Content for Tab 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>,
    },
    {
      label: 'Tab 3',
      content: <div>Content for Tab 3</div>,
    },
  ],
  defaultActive: 0,
};

export const ThreeTabsDark = Template.bind({});
ThreeTabsDark.args = {
  tabs: [
    {
      label: 'Tab 1',
      content: (
        <div style={{ padding: '16px' }}>
          {/* Contenuto aggiornato: tabella rimossa */}
          <p>Contenuto per Tab 1 senza tabella</p>
        </div>
      ),
    },
    {
      label: 'Tab 2',
      content: (
        <div style={{ padding: '16px' }}>
          {/* Contenuto aggiornato: tabella rimossa */}
          <p>Contenuto per Tab 2 senza tabella</p>
        </div>
      ),
    },
    {
      label: 'Tab 3',
      content: (
        <div style={{ padding: '16px' }}>
          {/* Contenuto aggiornato: tabella rimossa */}
          <p>Contenuto per Tab 3 senza tabella</p>
        </div>
      ),
    },
  ],
  defaultActive: 0,
};

ThreeTabsDark.decorators = [
  (Story) => (
    <div style={{ backgroundColor: '#222', padding: '16px', borderRadius: '8px', color: '#fff' }}>
      <Story />
      <style>
        {`
          /* Nasconde l'elemento hr se presente */
          .tab-buttons hr {
            display: none !important;
          }
          
          /* Stili base per il pulsante */
          .tab-button {
            background: #333 !important;
            color: #ccc !important;
            border: none !important;
            box-shadow: none !important; /* Rimuove l'ombra */
          }
          
          /* Stili per il pulsante attivo */
          .tab-button.active {
            border-bottom: none !important; /* Rimuove il bordo inferiore, se era un hr stilizzato */
            box-shadow: none !important;      /* Rimuove l'ombra bianca */
            color: #fff !important;
          }
          
          .tab-button:hover {
            background: #444 !important;
          }
          
          .tab-content {
            background: #333 !important;
            color: #fff !important;
            border: 1px solid #555 !important;
            padding: 1rem !important;
          }
        `}
      </style>
    </div>
  ),
];