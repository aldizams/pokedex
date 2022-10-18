import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { PokeCard } from '../components';
import { getPokeList } from '../services/api';

const MainPage = () => {
	const [list, setList] = useState([]);
	const [offset, setOffset] = useState(0);
	const [refresh, setRefresh] = useState(false);

	const fetchApi = async (offset) => {
		getPokeList(offset).then((response) => setList(response.data.results));
	};
	const next = (offset) => {
		if (offset < 1154) {
			setOffset((offset += 102));
			document.getElementById('prevBtn').disabled = false;
		} else {
			document.getElementById('nextBtn').disabled = true;
		}
	};

	const prev = (offset) => {
		if (offset > 0) {
			setOffset((offset -= 102));
			document.getElementById('nextBtn').disabled = false;
		} else {
			document.getElementById('prevBtn').disabled = true;
		}
	};

	useEffect(() => {
		fetchApi(offset);
		console.log(offset);
		console.log(refresh);
	}, [refresh]);

	return (
		<>
			<Container flex="sm" className="pokecard">
				{list.map((item) => (
					<PokeCard key={item.id} name={item.name} url={item.url} />
				))}
			</Container>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					marginTop: '100px',
				}}
			>
				<Button
					variant="danger"
					id="prevBtn"
					onClick={() => {
						prev(offset);
						setRefresh(!refresh);
					}}
				>
					Prev
				</Button>{' '}
				<Button
					variant="primary"
					id="nextBtn"
					onClick={() => {
						next(offset);
						setRefresh(!refresh);
					}}
				>
					Next
				</Button>{' '}
			</div>
		</>
	);
};

export default MainPage;
