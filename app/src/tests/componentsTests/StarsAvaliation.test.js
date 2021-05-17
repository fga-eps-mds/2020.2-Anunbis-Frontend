import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import StarsAvaliation from '../../components/StarsAvaliation';

describe('Snapshot StarsAvaliation component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<StarsAvaliation />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Testing the stars checkboxes changings', () => {
  it('Should show up the star when clicked', () => {
    render(<StarsAvaliation />);

    const star = screen.getByTestId('input-stars-1');
    const star2 = screen.getByTestId('input-stars-2');
    const star3 = screen.getByTestId('input-stars-3');
    const star4 = screen.getByTestId('input-stars-4');
    const star5 = screen.getByTestId('input-stars-5');

    userEvent.click(star);
    expect(star.checked).toBe(true);

    userEvent.click(star2);
    expect(star2.checked).toBe(true);

    userEvent.click(star3);
    expect(star3.checked).toBe(true);

    userEvent.click(star4);
    expect(star4.checked).toBe(true);

    userEvent.click(star5);
    expect(star5.checked).toBe(true);
  });

  it('Should clean the star when clicked twice', () => {
    render(<StarsAvaliation />);

    const star = screen.getByTestId('input-stars-1');
    const star2 = screen.getByTestId('input-stars-2');
    const star3 = screen.getByTestId('input-stars-3');
    const star4 = screen.getByTestId('input-stars-4');
    const star5 = screen.getByTestId('input-stars-5');

    userEvent.click(star);
    userEvent.click(star);
    expect(star.checked).toBe(false);

    userEvent.click(star2);
    userEvent.click(star2);
    expect(star2.checked).toBe(false);

    userEvent.click(star3);
    userEvent.click(star3);
    expect(star3.checked).toBe(false);

    userEvent.click(star4);
    userEvent.click(star4);
    expect(star4.checked).toBe(false);

    userEvent.click(star5);
    userEvent.click(star5);
    expect(star5.checked).toBe(false);
  });
});
