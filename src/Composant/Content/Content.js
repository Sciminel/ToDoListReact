import React from 'react';


function Content(){
    
    return (
        <div className='container px-3'>
            <h2 className='title mt-5'>Entrez vos tâches</h2>
            

            <form action="">

                <div className="field">

                    <div className="control">

                        <label htmlFor="tache" className='label'>Titre de la Tâche</label>
                        <input 
                        type="text" 
                        id='tache' 
                        placeholder='un titre' 
                        className='input'
                        />
                    </div>
                </div>

                <div className="field">

                    <div className="control">

                        <label htmlFor="text" className='label'>Contenu de la Tâche</label>
                        <textarea 
                        type="text" 
                        id='text' 
                        placeholder='Un contenu' 
                        className='textarea'
                        >
                        </textarea>
                    </div>
                </div>

                <div className="control">
                    <button className="button is-primary">Créer une tâche</button>

                </div>


            </form>

        </div>

    )
}

export default Content;