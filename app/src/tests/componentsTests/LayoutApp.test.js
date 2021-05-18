import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import LayoutApp from '../../components/LayoutApp';
import '@testing-library/jest-dom';

describe('Test LayoutApp component', () => {
  it('Test of click on btnEdition and redirect', () => {
    render(<LayoutApp />);

    const btnEdition = screen.getByTestId('btn-layout-1');
    fireEvent.click(btnEdition);

    expect(screen.getByText('CONFIGURAR')).toBeInTheDocument();
    expect(screen.getByText('SOBRE')).toBeInTheDocument();
    expect(screen.getByText('SAIR')).toBeInTheDocument();
  });
  it('Test of serch professor', async () => {
    render(<LayoutApp />);

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText('Informe o nome do professor'),
      ).toBeInTheDocument();
    });

    fireEvent.change(
      screen.getByPlaceholderText('Informe o nome do professor'),
      { target: { value: 'test search' } },
    );
  });
});
