import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header, PokeCard } from './components';
import { MainPage } from './pages';
import DetailPage from './pages/detail';

function App() {
	return (
		<>
			<Container flex="sm">
				<Header />

				<Routes>
					<Route path="/" element={<MainPage />} />

					<Route path="/:PokemonName" element={<DetailPage />} />
				</Routes>
				<img
					src="https://cdn-icons-png.flaticon.com/512/1752/1752776.png"
					alt="bg"
					style={{
						position: 'sticky',
						bottom: '25%',
						zIndex: '-9999',
						marginLeft: '30%',
						textAlign: 'center',
					}}
				/>
			</Container>
		</>
	);
}

export default App;
