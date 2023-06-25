import React from 'react'

import { ArrowUp, ArrowDown } from '../icons'

import { Parent, Node, Children, Icon } from './styles'

export default function TreeView({ data, onSelection, onToggle }) {
	const onDragStart = (evt) => {
		let element = evt.currentTarget
		element.classList.add('dragged')
		evt.dataTransfer.setData('text/plain', evt.currentTarget.id)
		evt.dataTransfer.effectAllowed = 'move'
	}
	const onDragEnd = (evt) => {
		evt.currentTarget.classList.remove('dragged')
	}

	if (data.length === 0) {
		return <div>No Folders!</div>
	}
	return data.map((node) => {
		return (
			node.name && (
				<Parent key={node.name}>
					<Node
						isOpen={node.isOpen}
						onClick={() => onSelection(node)}
					>
						<span
							id={node.name}
							draggable
							onDragStart={(e) => onDragStart(e)}
							onDragEnd={(e) => onDragEnd(e)}
						>
							{node.name}
						</span>
						{node.children && node.children.length > 0 && (
							<Icon
								isOpen={node.isOpen}
								onClick={(e) => {
									e.stopPropagation()
									onToggle(node.name)
								}}
							>
								{node.isOpen ? <ArrowUp /> : <ArrowDown />}
							</Icon>
						)}
					</Node>
					{node.isOpen && (
						<Children>
							{node.children.length > 0 && (
								<TreeView
									data={node.children}
									onSelection={onSelection}
									onToggle={onToggle}
								/>
							)}
						</Children>
					)}
				</Parent>
			)
		)
	})
}

