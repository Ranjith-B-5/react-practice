import Header from './Header';
import Footer from './Footer';
import note_array from './notecon.js';
import Notes from './Notes';
// import Note from './create_note.js';


function App()
{
    return (
        <div>
            <Header/>
            {note_array.map((props) =>(
        <Notes name ={props.name}/>)
)}
        <Footer/>
        </div>
    );
    
}

export default App;