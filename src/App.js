import logo from './logo.svg'
import styles from './App.module.scss'

const InputContainer = (props) => {
	return <div className={styles.inputContainer}>{props.children}</div>
}

function App() {
	return (
		<div className={styles.container}>
			<InputContainer>
				<h2>Range of TODOS to fetch</h2>
				<div className={styles.inputRow}>
					<input
						className={styles.inputBox}
						type='text'
						name='name'
						placeholder='e.g 1-5'
					/>
					<button onclick='activateLasers()'>Fetch</button>
				</div>
			</InputContainer>
			<InputContainer />
			<InputContainer>
				<h3>Current Status</h3>
				<p>Procesing</p>
			</InputContainer>
		</div>
	)
}

export default App
