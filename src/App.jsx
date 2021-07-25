import './index.css';
import './App.css';
import React from 'react';
import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import ComFilhos from './components/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao';
import Condicional from './components/Condicional';
import CondicionalComIf from './components/CondicionalComIf';

export default (props) => {
	return (
		<div className="App">
			<Card titulo="Primeiro componente">
				<Primeiro />
			</Card>
			<Card titulo="Componente com parametro">
				<ComParametro titulo="Titulo do componente com parametro" subtitulo="Subtitulo do componente com parametro"/>
			</Card>
			<Card titulo="Componente com filhos">
				<ComFilhos>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
						<li>4</li>
					</ul>
				</ComFilhos>
			</Card>
			<Card titulo="Componente com repetição">
				<Repeticao/>
			</Card>
			<Card>
				<Condicional number={10}/>
			</Card>
			<Card>
				<CondicionalComIf number={7}/>
			</Card>
		</div>
	);
}
