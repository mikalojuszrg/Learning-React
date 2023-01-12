import "./App.css";
import CustomButton from "./components/CustomButton/CustomButton";
import ProductList from "./components/ProductList/ProductList";
import StarRating from "./components/StarRating/StarRating";

function App() {
  return (
    <div className="App">
      <ProductList>Text</ProductList>
      <CustomButton variant="text">Text</CustomButton>
      <CustomButton variant="outlined">Outlined</CustomButton>
      <CustomButton>Contained</CustomButton>
    </div>
  );
}

export default App;
