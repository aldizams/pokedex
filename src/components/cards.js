import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getPokeColor, getPokeDetail } from '../services/api';

const PokeCard = (props) => {
	const [Species, setSpecies] = useState([]);
	const [Types, setTypes] = useState([]);
	const [Color, setColor] = useState('');
	const [Sprites, setSprites] = useState('');
	const fetchApi = () => {
		getPokeDetail(props.url).then((response) => {
			setSpecies(response.data.species);
			setSprites(response.data.sprites);
			setTypes(response.data.types);
		});
		getPokeColor(Species.url).then((response) => {
			setColor(response.data.color);
		});
	};
	function Capital(t) {
		return t.toUpperCase()[0] + t.slice(1);
	}

	useEffect(() => {
		fetchApi();
	}, [Types]);

	return (
		<Card
			className="namePoke"
			style={{
				width: '20rem',
				height: '10rem',
				backgroundColor: `${Color.name}`,
			}}
			as={Link}
			to={`/${props.name}`}
		>
			<Row>
				<Col>
					<Card.Img variant="top" src={Sprites.front_default} />
				</Col>
				<Col>
					<Card.Body>
						<Card.Title>{Capital(props.name)}</Card.Title>

						{Types.map((item) => (
							<div>
								<Badge
									bg="light"
									text="dark"
									className="m-1"
									style={{
										border: '1px solid #212529',
									}}
								>
									{Capital(item.type.name)}
								</Badge>
							</div>
						))}
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
};

export default PokeCard;
