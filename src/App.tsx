//import Message from './Message'
import ListGroup from './components/ListGroup';
function App(){
    let items = ["NY", "SF", "TK"]
    return <div><ListGroup items={items} heading="Cities"/></div>;
}

export default App;
