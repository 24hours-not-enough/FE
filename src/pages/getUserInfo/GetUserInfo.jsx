import AddUserInfo from '../../components/container/AddUserInfo';
import Navbar from '../../components/container/Navbar';
import LayoutWrapper from '../../components/presentation/LayoutWrapper';

function GetUserInfo() {
  return (
    <LayoutWrapper>
      <Navbar />
      <AddUserInfo />
    </LayoutWrapper>
  );
}

export default GetUserInfo;
