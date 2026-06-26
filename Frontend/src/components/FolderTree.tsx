import React, { useState } from 'react'
import { ChevronDown, Folder, File } from 'lucide-react'

type Node = { name: string, children?: Node[] }

const sample: Node = { name: 'root', children: [{ name: 'src', children: [{ name: 'components' }, { name: 'pages' }, { name: 'utils' }] }, { name: 'package.json' }, { name: 'README.md' }] }

function TreeNode({ node, depth = 0 }: { node: Node, depth?: number }) {
    const [open, setOpen] = useState(true)
    const isFolder = !!node.children

    return (
        <div>
            <div
                className="flex items-center gap-2 cursor-pointer px-2 py-1.5 hover:bg-white/[0.04] rounded-md transition-all duration-200 group"
                onClick={() => setOpen(!open)}
            >
                {isFolder ? (
                    <>
                        <ChevronDown className={`w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 transition-all duration-200 ${open ? 'rotate-0' : '-rotate-90'}`} />
                        <Folder className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" />
                    </>
                ) : (
                    <>
                        <div className="w-3.5" />
                        <File className="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
                    </>
                )}
                <span className={`text-sm ${isFolder ? 'font-medium text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-300'} transition-colors`}>
                    {node.name}
                </span>
            </div>
            {open && isFolder && (
                <div className="border-l border-white/[0.06] ml-[9px]">
                    {node.children!.map((c, i) => (
                        <div key={i} className="ml-3">
                            <TreeNode node={c} depth={depth + 1} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default function FolderTree() {
    return (
        <div className="glass-card p-4 rounded-xl font-mono">
            <div className="mb-4 px-2 font-semibold text-white text-sm font-sans">Folder Structure</div>
            <TreeNode node={sample} />
        </div>
    )
}
