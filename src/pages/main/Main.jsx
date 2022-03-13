import Navbar from '../../components/container/Navbar';
import LayoutWrapper from '../../components/presentation/LayoutWrapper';
import Button from '../../components/elements/button';

export default function Main() {
  return (
    <LayoutWrapper>
      <Navbar />
      {/* 버튼 사용 예제 */}
      <div className="flex justify-center mx-auto">
        <Button
          size="large"
          type="none"
          propsClassName="w-96"
        >
          버튼

        </Button>
      </div>
    </LayoutWrapper>
  );
}
