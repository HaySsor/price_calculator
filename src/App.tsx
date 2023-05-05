import styled from './App.module.scss';
import {AppWindow} from './components/app-window/app-window.component';
import {UserChoiceProvider} from './context/UserChoiceContext';

const App = () => {
  return (
    <div className={styled.wrapper}>
      <UserChoiceProvider>
        <AppWindow />
      </UserChoiceProvider>
    </div>
  );
};

export default App;
