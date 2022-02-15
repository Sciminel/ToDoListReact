import React from 'react';


function Content(props){
    
    function createCard(e){
        e.preventDefault();
        const nvTab = [...props.monState, {tache : props.tache, text: props.text}];
        props.setMonState(nvTab);
        console.log(nvTab);
        
    }


    return (
        <div className='container px-3'>
            <h2 className='title mt-5'>Entrez vos tâches</h2>
            
            <form onSubmit={createCard}>

                <div className="field">

                    <div className="control">

                        <label htmlFor="tache" className='label'>Titre de la Tâche</label>
                        <input 
                        type="text" 
                        id='tache' 
                        placeholder='un titre' 
                        className='input'
                        onChange={e => props.setTache(e.target.value)}
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
                        onChange={e => props.setText(e.target.value)}
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