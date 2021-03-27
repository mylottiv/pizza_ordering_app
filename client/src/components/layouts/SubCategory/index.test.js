import React from 'react';
import { render, screen } from '@testing-library/react';
import SubCategoryLayout from './';

it('given test props, renders with passed strings', () => {
  render(<SubCategoryLayout name={'Test Name!'} children={'Test Description!'}/>);
  expect(screen.getByText('Test Name!')).toBeInTheDocument();
  expect(screen.getByText('Test Description!')).toBeInTheDocument();
  expect(screen.getByTestId("not-modal-display"))
});

it('given true for modal prop, renders with the modal display', () => {
  render(<SubCategoryLayout modal={true}/>);
  expect(screen.getByTestId("modal-display"))
})