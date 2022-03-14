import MyTriplanList from '../../components/container/MyTriplanList';
import Navbar from '../../components/container/Navbar';
import LayoutWrapper from '../../components/presentation/LayoutWrapper';

function MyTriplan() {
  return (
    <LayoutWrapper>
      <Navbar />
      <MyTriplanList />
    </LayoutWrapper>
  );
}

export default MyTriplan;
