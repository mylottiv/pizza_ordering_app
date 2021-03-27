import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import StoreItemLayout from './';

it('given test props, renders with passed strings', () => {
  render(<StoreItemLayout name={'Test Name!'} image={'Test Image!'} children={'Test Description!'}/>);
  expect(screen.getByText('Test Name!')).toBeInTheDocument();
  expect(screen.getByText('Test Description!')).toBeInTheDocument();
  expect(screen.getByAltText('Product Image')).toBeInTheDocument();
});

it('given mock onClick prop, successfully fire click event and function', () => {
  const mockOnClick = jest.fn()
  render(<StoreItemLayout onClick={mockOnClick} />);
  fireEvent.click(screen.getByText('Order'));
  expect(mockOnClick).toHaveBeenCalledTimes(1)
})