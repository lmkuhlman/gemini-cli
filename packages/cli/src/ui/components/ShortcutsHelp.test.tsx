/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect, afterEach, vi } from 'vitest';
import { renderWithProviders } from '../../test-utils/render.js';
import { ShortcutsHelp } from './ShortcutsHelp.js';

describe('ShortcutsHelp', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it.each([
    { name: 'wide', width: 100 },
    { name: 'narrow', width: 40 },
  ])('renders correctly in $name mode', ({ width }) => {
    const { lastFrame } = renderWithProviders(<ShortcutsHelp />, {
      width,
    });
    expect(lastFrame()).toContain('shell mode');
    expect(lastFrame()).toMatchSnapshot();
  });
});
