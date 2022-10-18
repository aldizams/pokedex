import React, { useState, useEffect } from 'react';
import { Accordion, Badge, Col, Nav, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getPokeColor, getPokeDetail } from '../services/api';

const DetailPage = () => {
	const params = useParams();
	console.log(params);
	const [Species, setSpecies] = useState([]);
	const [Types, setTypes] = useState([]);
	const [Color, setColor] = useState('');
	const [Spc, setSpc] = useState([]);
	const [Image, setImage] = useState('');

	const fetchApi = () => {
		getPokeDetail(
			`https://pokeapi.co/api/v2/pokemon/${params.PokemonName}`
		).then((response) => {
			console.log(response.data);
			setSpecies(response.data?.species);
			setImage(response.data?.sprites?.other?.dream_world?.front_default);
			setTypes(response.data?.types);
		});
		getPokeColor(Species.url).then((response) => {
			console.log(response.data);
			setColor(response.data?.color?.name);
			setSpc(response.data);
		});
	};
	const Capital = (t) => {
		return t.toUpperCase()[0] + t.slice(1);
	};

	useEffect(() => {
		fetchApi();
		console.log(Color);
	}, [Species]);
	return (
		<div
			style={{ backgroundColor: `${Color}`, borderRadius: '20px 20px 0px 0' }}
		>
			<Row
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Col
					sm="7"
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h1>{Capital(params.PokemonName)}</h1>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<img src={Image} width="300em" alt="Pokemon" />
					</div>
				</Col>
				<Col sm="5">
					{Types.map((item) => (
						<div>
							<Badge
								text="dark"
								bg="light"
								className="m-1"
								style={{
									border: '1px solid #212529',
									width: '50%',
								}}
							>
								{Capital(item.type?.name)}
							</Badge>
						</div>
					))}
				</Col>
			</Row>
			<Accordion defaultActiveKey="0">
				<Accordion.Item eventKey="0">
					<Accordion.Header>About </Accordion.Header>
					<Accordion.Body>
						<div>
							Name :{' '}
							{params?.PokemonName.toUpperCase()[0] +
								params?.PokemonName.slice(1)}
						</div>
						<div>Color : {Color.toUpperCase()[0] + Color.slice(1)}</div>
						<div>Happiness : {Spc?.base_happiness} </div>
						<div>
							Habitat :{' '}
							{Spc?.habitat?.name.toUpperCase()[0] +
								Spc?.habitat?.name.slice(1)}
						</div>
						<div>
							Shape :{' '}
							{Spc?.shape?.name.toUpperCase()[0] + Spc?.shape?.name.slice(1)}
						</div>
						<div>Capture Rate : {Spc?.capture_rate}</div>
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header>Move</Accordion.Header>
					<Accordion.Body>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
};
export default DetailPage;
