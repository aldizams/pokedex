import axios from 'axios';
const BASE_URL = 'https://pokeapi.co/api/v2';

const getPokeList = (offset) => {
	return axios.get(`${BASE_URL}/pokemon?limit=102&offset=${offset}`);
};
const getPokeDetail = (api) => {
	return axios.get(api);
};
const getPokeColor = (api) => {
	return axios.get(api);
};
const getPokeSpirites = (api) => {
	return axios.get(api);
};
const getPokeEvo = (api) => {
	return axios.get(api);
};

export {
	getPokeList,
	getPokeDetail,
	getPokeColor,
	getPokeSpirites,
	getPokeEvo,
};
