import { useLocation } from 'react-router-dom';
import AddUserInfo from '../../components/container/AddUserInfo';
import Navbar from '../../components/container/Navbar';
import LayoutWrapper from '../../components/presentation/LayoutWrapper';

function GetUserInfo() {
  const location = useLocation();

  return (
    <LayoutWrapper>
      <Navbar />
      <AddUserInfo code={location.state} />
    </LayoutWrapper>
  );
}

export default GetUserInfo;
