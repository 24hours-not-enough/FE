import AddNewTriplan from '../../components/container/AddNewTriplan';
import Navbar from '../../components/container/Navbar';
import LayoutWrapper from '../../components/presentation/LayoutWrapper';

function AddTriplan() {
  return (
    <LayoutWrapper>
      <Navbar />
      <AddNewTriplan />
    </LayoutWrapper>
  );
}

export default AddTriplan;
