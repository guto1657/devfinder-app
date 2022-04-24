import React from 'react';
import { Logo } from '../Logo';
import { ToggleButton } from '../ThemeToggle';

export const Header = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Logo>devfinder</Logo>
      <ToggleButton />
    </div>
  );
};
