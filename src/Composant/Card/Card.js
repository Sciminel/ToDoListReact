import React from 'react'

export default function Card({tache, text, deleteC, index}) {

  return (
    <div className=' has-background-primary container my-4'>
        <div className="card-content ">
            <div className="content">
                <h3 className="px-4">{tache}</h3>
                <p className="is-size-4 px-4">
                    {text}
                </p>
                <button onClick={() => deleteC(index)} className="delete is-large btn-top">X</button>
            </div>
        </div>
    </div>
  )
}
