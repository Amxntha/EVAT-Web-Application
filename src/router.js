import App from "./components/index";
import Index from "./page/home";
import CreateAccount from "./page/createAccount";
import AddCard from "./page/addCard";


const router = [
    
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Index",
    element: <Index />,
  },
  {
    path: "/CreateAccount",
    element: <CreateAccount />,
  },
  {
    path: "/AddCard",
    element: <AddCard />,
  }
  

  
];

export default router;
