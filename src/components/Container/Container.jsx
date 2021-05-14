import React from 'react'
import styles from './Container.module.scss'
export const Container = ({ border = '', children }) => {
	return (
		<div className={border === 'aqua' ? styles.inputContainer1 : styles.inputContainer}>
			{children}
		</div>
	)
}
