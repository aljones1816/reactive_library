
import {Library} from "./Library";
import { useAuthContext } from "./hookDrawer/useAuthContext";




function App() {
  const { authIsReady} = useAuthContext();
  const { user } =useAuthContext();

  return (
    
    <>
    {authIsReady && (
      <Library user={user}/>
      )}
    </>

  );
}

export default App;
