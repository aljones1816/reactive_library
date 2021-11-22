
import {Library} from "./Library";
import { useAuthContext } from "./hookDrawer/useAuthContext";



function App() {
  const { authIsReady } = useAuthContext();

  return (
    
    <>
    {authIsReady && (
      <Library />
      )}
    </>

  );
}

export default App;
