import React from 'react';
import type { Preview } from '@storybook/react'
import { TodoListContextProvider } from '../src/contexts/TodoList';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <TodoListContextProvider>
        <BrowserRouter>
          <Story {...context} />
        </BrowserRouter>
      </TodoListContextProvider>
    ),
  ],
};

export default preview;