import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Sweet Delights Café</h1>
        <p>
          진정한 디저트 파라다이스입니다. 나는 항상 이곳을 방문할 때마다
          신선하고 매혹적인 디저트로 가득 찬 카페 경험을 즐깁니다. 우선, 그들의
          초콜릿 무스 케이크는 정말 믿을 수 없을 정도로 부드럽고 진한
          맛이었습니다. 먹을 때마다 녹아드는 듯한 식감은 최고였고, 초콜릿을
          사랑하는 사람으로서 만족스러웠습니다. 카페 자체의 분위기도
          매력적입니다. 아늑한 커피 향과 부드러운 재즈 음악이 함께 어우러져,
          이곳에서 휴식을 취하면 마치 세상의 모든 스트레스가 사라지는 듯한
          느낌이 들었습니다. 특히 창가에 앉아 디저트를 즐기면 주변의 도시 경치와
          함께 로맨틱한 순간을 만끽할 수 있어 좋았습니다. 서비스도 매우 친절하고
          신속합니다. 직원들은 항상 웃으면서 주문을 받고, 메뉴에 대한 설명도
          친절하게 해주어 처음 방문하는 사람들에게도 좋은 느낌을 주었습니다. 단
          한 가지 아쉬운 점은 가끔 사람이 많아서 자리를 얻기가 어려울 수 있다는
          점입니다. 하지만 그만큼 인기 있는 곳이라는 것을 의미하기도 합니다.
          맛있는 디저트와 아름다운 분위기를 원한다면, Sweet Delights Café를
          강력히 추천합니다!
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
