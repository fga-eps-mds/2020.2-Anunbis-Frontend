import renderer from 'react-test-renderer';
import mock from '../../mock';
import { validPost } from '../../mock/fixtures/stored_post';
import ProfessorHome from '../../views/ProfessorHome';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';


mock.onGet('post').reply(200,
  [validPost]
)

describe('Snapshot ProfessorHome view', () => {
  it('Assyncronous test for useEffect', async () => {
    render(<ProfessorHome />)

    const loadBox = screen.getByTestId('loading')

    await waitFor(() => {
      expect(loadBox).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(screen.getByText(`[${validPost.discipline.discipline_code}] ${validPost.discipline.name}`)).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(loadBox).not.toBeInTheDocument();
    })
   })
  it('Clicking on buttons and expecting changes', async () => {
    render(<ProfessorHome />)
    
    expect(screen.getByText('Avaliações sobre você')).toBeTruthy()

    fireEvent.click(screen.getByText('ESTATÍSTICAS'))

    await waitFor(() => {
      expect(screen.getByText('Estatísticas')).toBeTruthy()
    })

    fireEvent.click(screen.getByText('AVALIAÇÕES'))

    await waitFor(() => {
      expect(screen.getByText('Avaliações sobre você')).toBeTruthy()
    })

  })
 });