import React from 'react';
import ConfirmBox from '../index';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ConfirmBox tests', () => {
  it('should be render', () => {
    render(<ConfirmBox resolver={() => {}} message={'Are you sure?'} />);
  });

  it('should be render give message', () => {
    render(<ConfirmBox resolver={() => {}} message={'Are you sure?'} />);

    expect(screen.getByText('Are you sure?')).toBeTruthy();
  });

  it('should return true then click the confirmable button', () => {
    const mockResolver = jest.fn();
    render(<ConfirmBox resolver={mockResolver} message={'Are you sure?'} />);

    fireEvent.click(screen.getByText('Yes'));

    expect(mockResolver.mock.calls.length).toBe(1);
    expect(mockResolver.mock.calls).toEqual([[true]]);
  });

  it('should return false then click the cancelable button', () => {
    const mockResolver = jest.fn();
    render(<ConfirmBox resolver={mockResolver} message={'Are you sure?'} />);

    fireEvent.click(screen.getByText('No'));

    expect(mockResolver.mock.calls.length).toBe(1);
    expect(mockResolver.mock.calls).toEqual([[false]]);
  });

  it('should replace default button labels', () => {
    const options = {
      labels: {
        confirmable: 'Confirm',
        cancellable: 'Cancel',
      },
    };
    render(
      <ConfirmBox resolver={() => {}} message={'Are you sure?'} options={options} />,
    );

    expect(screen.getByRole('confirmable-button')).toHaveTextContent('Confirm');
    expect(screen.getByRole('cancellable-button')).toHaveTextContent('Cancel');
  });

  it('should replace the content by given component', () => {
    const options = {
      render: (message: string): any => (
        <p role="placeholder">Replaced with {message}</p>
      ),
    };
    render(
      <ConfirmBox resolver={() => {}} message={'Are you sure?'} options={options} />,
    );

    expect(screen.getByRole('placeholder')).toHaveTextContent(
      'Replaced with Are you sure?',
    );
  });
});
