import './App.css';
import ClientSection from "./components/ClientSection/ClientSection"
import Form from "./components/Form/Form"
import CreationButtons from "./components/CreationButtons/CreationButtons"
import GridKey from "./components/GridKey/GridKey"

function App() {
  return (
    <div className="gridContainer">
      <Form key="form1"></Form>
      <CreationButtons key="buttons1"></CreationButtons>
      <GridKey key="gridKey1"></GridKey>
      <ClientSection key="clientSection1"></ClientSection>
    </div>
  );
}

export default App;
