import React from 'react'

function NameList() {
	const persons = [
						{
							id: 1,
							name: "Shimul",
							age: 27,
							skill: 'Engineer'
						},
						{
							id: 2,
							name: "Sajal",
							age: 30,
							skill: 'Doctor'
						},
						{
							id: 3,
							name: "Dipul",
							age: 25,
							skill: 'Mechanical Engineering Student'
						}
					]
	const personList = persons.map(person => <person person={person} />)	
	return(
		<div>{personList}</div>
	)
}

export default NameList