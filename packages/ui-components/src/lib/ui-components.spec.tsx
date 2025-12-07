import { render } from '@testing-library/react';

import MyOrgUiComponents from './ui-components';

describe('MyOrgUiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyOrgUiComponents />);
    expect(baseElement).toBeTruthy();
  });
});
