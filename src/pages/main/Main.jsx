import Navbar from '../../components/container/navbar/Navbar';
import LayoutWrapper from '../../components/presentation/LayoutWrapper';

export default function Main() {
  return (
    <LayoutWrapper>
      <Navbar />
      <div>검색창</div>
      <div>지도</div>
    </LayoutWrapper>
  );
}
