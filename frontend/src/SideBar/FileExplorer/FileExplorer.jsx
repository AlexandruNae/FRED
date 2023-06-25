import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import styles from './FileExplorer.module.scss'
import TreeView from '../TreeView/TreeView'

export default function FileExplorer() {
	const [selected, setSelected] = React.useState('')
	const [breadcrumbs, setBreadcrumbs] = React.useState([])
	const [selectedFiles, setSelectedFiles] = React.useState([])
	const [data, setData] = React.useState([
		{
			name: 'Folder',
			type: 'folder',
			children: [
				{
					name: 'Folder1',
					type: 'folder',
					children: [
						{ name: 'File1.1', type: 'file' },
						{ name: 'File1.2', type: 'file' }
					]
				},
				{
					name: 'Folder2',
					type: 'folder',
					children: [
						{
							name: 'File2.1',
							type: 'file'
						},
						{
							name: 'Folder2.2',
							type: 'folder',
							children: [
								{ name: 'File2.2.1', type: 'file' },
								{ name: 'File2.2.2', type: 'file' }
							]
						}
					]
				}
			]
		}
	])

    const isObject = obj => {
        return Object.prototype.toString.call(obj) === '[object Object]'
    }
    
    const toggleNode = (data, nodeToFind) => {
        return JSON.parse(
            JSON.stringify(data, function(key, node) {
                if (isObject(node) && node.name === nodeToFind) {
                    return {
                        ...node,
                        isOpen: !node.isOpen
                    }
                }
                return node
            })
        )
    }

	const onToggle = (node) => {
		const mutated = toggleNode(data, node)
		setData(mutated)
	}

	const onSelection = (node) => {
		if (node.type === 'folder') onToggle(node.name)
		setSelected(node.name)
		setBreadcrumbs((breadcrumbs) => [...breadcrumbs, node.name])
	}

	// React.useEffect(() => {
	// 	try {
	// 		async function getFiles() {
	// 			const {
	// 				data
	// 			} = await axios.post(
	// 				'http://localhost:3000/dev/jupyter-saas/listFiles',
	// 				{ root_dir: 'user1' }
	// 			)
	// 			setData(data.data)
	// 		}
	// 		getFiles()
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }, [])

	return (
		<div className={styles.wrapper}>
			<div className={styles.sidebar}>
				<main>
					<TreeView
						data={data}
						onSelection={onSelection}
						onToggle={onToggle}
					/>
				</main>
			</div>
			<div className={styles.section}>
				Selected: {selected ? selected : 'Select a folder or a file!'}
				<ul>
					{selectedFiles.length > 0 &&
						selectedFiles.map((file, idx) => {
							return <li key={idx}>{file}</li>
						})}
				</ul>
			</div>
		</div>
	)
}

ReactDOM.render(<FileExplorer />, document.getElementById('root'))
