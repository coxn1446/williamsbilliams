import './App.css';
import ClientSection from "./components/ClientSection/ClientSection"
import Form from "./components/Form/Form"

function App() {
  return (
    <div className="gridContainer">
      <h1>William's Bill-(iam)s</h1>
      <Form key="form1"></Form>
      <ClientSection key="clientSection1"></ClientSection>
    </div>
  );
}

export default App;
