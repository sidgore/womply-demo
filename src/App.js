// import logo from './logo.svg'
import styles from './App.module.scss'
import { InputContainer } from './components/InputContainer/InputContainer'
import { BatchesContainer } from './components/BatchesContainer/BatchesContainer'
import { ProcessingContainer } from './components/ProcessingContainer/ProcessingContainer'
import { Container } from './components/Container/Container'

function App() {
	return (
		<div className={styles.container}>
			<Container>
				<InputContainer />
			</Container>
			<Container border='aqua'>
				<BatchesContainer />
			</Container>
			<Container>
				<ProcessingContainer />
			</Container>
		</div>
	)
}

export default App
