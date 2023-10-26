const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "카페 션샤인",
      desc: "아메리카노의 깊은 향과 고소함이 제 입맛에 딱 맞아 행복한 시간을 보낼 수 있었어요. 카페의 분위기도 너무 좋아서 친구들과 나들이하기에도 좋을 것 같아요. 직원들도 매우 친절하게 응대해주어 더욱 만족스러운 경험이었습니다. 이 카페의 특별한 추천 메뉴는 치즈케이크입니다. 부드러운 치즈케이크의 맛이 정말 완벽해요. 꼭 다음에 또 방문해서 그 맛을 느껴보고 싶어졌습니다.",
      img: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    },
    {
      id: 2,
      title: "한옥정과",
      desc: "떡과 한정식을 재해석한 디저트 메뉴는 정말 독특하고 맛있습니다. 떡은 쫄깃하고 달큰한 소스와 함께 제공되어 입에서 살살 녹습니다. 또한, 한국 차를 활용한 디저트 메뉴도 다양하게 준비되어 있어 차를 좋아하는 사람에게는 정말로 기분 좋은 경험이 될 것입니다. 이곳의 분위기 또한 한국 전통적인 감성과 현대적인 디자인이 잘 어우러져 있습니다. 전통적인 한옥 카페에서부터 모던한 카페까지, 방문자들은 자신에게 맞는 분위기를 즐길 수 있습니다. 뿐만 아니라, 친절하고 유쾌한 스태프들이 여러분을 환대해줍니다. 서비스는 매우 훌륭하며, 직원들은 메뉴와 디저트에 대한 설명을 친절하게 해주어 처음 방문하시는 분들도 편안하게 주문할 수 있습니다. 한국의 디저트를 경험하고 싶다면, 이 곳을 꼭 추천드립니다. 이곳에서 맛있는 디저트와 한국의 감성을 만끽하세요!",
      img: "https://images.unsplash.com/photo-1605972082877-46c5f53df51d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
    {
      id: 3,
      title: "앨리스 커피",
      desc: "이 카페는 마치 동화 속 세계에 온 듯한 느낌을 선사합니다. 음료와 디저트는 역시 찬란합니다. 특별한 주제에 맞게 디자인된 음료와 디저트는 눈과 입을 모두 만족시켜줍니다. 일상에서 벗어나 특별한 경험을 즐기고 싶을 때 정말 완벽한 선택입니다. 매력적인 분위기와 맛있는 음식, 친절한 서비스로 기억에 남는 순간을 만들어줍니다. 더 이상 기다릴 필요 없이, 여기에서 동화 속 세계로 떠나보세요.",
      img: "https://images.unsplash.com/photo-1483648969698-5e7dcaa3444f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 4,
      title: "카페 옷깃",
      desc: "우리 동네에 이런 아늑하고 편안한 카페가 있다는 건 정말 행운이에요. 이곳은 바로 집 근처에 있어서 언제든지 들러 차분한 시간을 보낼 수 있어서 기분이 좋아졌어요. 문을 열자마자 커피 향기가 퍼져나오고, 작은 소품들로 꾸며진 공간은 마치 내 집에 온 듯한 편안함을 주었습니다. 커피는 정말 부드럽고 맛있었고, 특히 직접 만든 케이크는 정말 맛있었어요. 또한, 이곳은 동네 주민들과의 소소한 소통의 장이기도 해요. 이웃들과 커피 한 잔 하며 이야기를 나눌 수 있는 이런 공간은 동네 사람들과 더 가까워질 수 있게 해준답니다. 마지막으로, 가격대도 매우 합리적이에요. 훌륭한 커피와 디저트를 이렇게 저렴한 가격에 즐길 수 있다니, 정말 감사한 마음이 듭니다.",
      img: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
  ];

  return (
    <div className="menu">
      <h1>당신에게 추천하는 글</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
