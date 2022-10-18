import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { PokeCard } from '../components';
import { getPokeList } from '../services/api';

const MainPage = () => {
	const [list, setList] = useState([]);
	const fetchApi = async () => {
		getPokeList().then((response) => setList(response.data.results));
	};
	useEffect(() => {
		fetchApi();
		console.log(list);
	}, []);

	return (
		<Container flex="sm" className="pokecard">
			{list.map((item) => (
				<PokeCard key={item.id} name={item.name} url={item.url} />
			))}
		</Container>
	);
};

export default MainPage;
