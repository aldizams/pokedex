import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	const expand = 'sm';
	return (
		<Navbar key={expand} expand={expand} className="mb-5">
			<Container fluid>
				<Navbar.Brand
					as={Link}
					to="/"
					style={{
						color: 'red',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/189/189009.png"
						width={'10%'}
						alt="logo"
					/>
					<h3>PokeDex</h3>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
			</Container>
		</Navbar>
	);
};

export default Header;
