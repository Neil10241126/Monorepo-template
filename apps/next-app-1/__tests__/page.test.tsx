import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

test('Page', () => {
  render(<Page />);
  
  // 測試 h1 標題是否存在且內容為 "Home"
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
  
  // 測試 Link 元件是否存在且 href 正確
  const link = screen.getByRole('link', { name: 'About' });
  expect(link).toBeDefined();
  expect(link.getAttribute('href')).toBe('/about');
});
