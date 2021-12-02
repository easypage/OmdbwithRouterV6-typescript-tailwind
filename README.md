# Study_OMDB

> 이 프로젝트는 새롭게 트렌드에 오른  **tailWindcss , Router V6 , TypeScript** 를 익히기 위해 만들어 진 **StudyProject**입니다.
* OMDB API 를 이용한 검색창과 추가 정보 제공 페이지로 이루어져 있습니다.
> 

## Site

![Untitled](Study_OMDB%20d1beb38f688a4d33a999ca4b754747b9/Untitled.png)

<aside>
💡 제작기간 : 2021/11/17 - 2021/11/27

</aside>

<aside>
⏩https://pensive-hopper-589e5b.netlify.app/

</aside>

---

## 사용기술

- **React-TypeScript(CRA)**
- **Redux(상태관리), thunk(상태관리 비동기 처리)**
- **RouterV6(페이지 연결)**
- **bootstrap(디자인)**
- **intersection-observer(무한스크롤)**

---

# 기능

## 검색
</br>
</br>


![Untitled](Study_OMDB%20d1beb38f688a4d33a999ca4b754747b9/Untitled%201.png)

<aside>
💡 기능 -  OMDB API를 이용하여 검색이 가능하면(**영문3글자이상**) 그 결과를 API의 poster형식으로 나열하여 보여줍니다.

</aside>
</br>
</br>

![Untitled](Study_OMDB%20d1beb38f688a4d33a999ca4b754747b9/Untitled%202.png)

<aside>
💡 기능 - 결과는 약 10개 정도를 기준으로 보여주며 추가 검색이 가능하면 스크롤시 자동 로드(Load) 됩니다.(무한스크롤,Loading)

</aside>
</br>
</br>

![Untitled](Study_OMDB%20d1beb38f688a4d33a999ca4b754747b9/Untitled%203.png)

<aside>
💡 **디자인** - 결과창과 검색창의 크기는 반응형으로 디자인 되었습니다.
</br>
</br>

</aside>
</br>
</br>

## INFO

![Untitled](Study_OMDB%20d1beb38f688a4d33a999ca4b754747b9/Untitled%204.png)

<aside>
💡 기능 - 윗 부분에 UX를 고려하여 검색창을 구현 하였으며 최대 5개정도의 검색결과를 확인할 수 있습니다.

</aside>

![Untitled](Study_OMDB%20d1beb38f688a4d33a999ca4b754747b9/Untitled%205.png)

![Untitled](Study_OMDB%20d1beb38f688a4d33a999ca4b754747b9/Untitled%206.png)

<aside>
💡 기능 - 데이터 로드중엔  로딩페이지가 보여집니다.

</aside>

![Untitled](Study_OMDB%20d1beb38f688a4d33a999ca4b754747b9/Untitled%207.png)

<aside>
💡 디자인 - 이 검색창을 클릭시 SearchMode가 되며 사용자가 지금 검색중이라는 느낌을 느낄수 있도록 설계하였습니다.

</aside>

<aside>
💡 디자인 - 검색 결과의 포스터를 이용하여 뒷배경을 구성하였습니다.

</aside>

<aside>
💡 디자인 - 반응 형 디자인을 적용하였습니다.

</aside>

</br>

# 후기

- **리덕스는** 파일이름이 달라도 같은 이름의 변수나 함수를 사용할 때 엉뚱한것을  업데이트를 하는 것을 보았습니다. 아마 리덕스는 객체로 관리가 되어서 이런 경우가 생긴거 같습니다.(꼭 리덕스를 작성할 때에는 모두 다른 이름을 사용 하세요!!)
- **라우터 V6**은 기본적으로 사용자 사용성을 많이 늘려준거 같습니다.(**`switch`→`rotes` 등**)
- **tailwind**는 확실히 css를 작성할 때 도움이 많이 되었습니다. 허나 디테일 적인 **`blur`** 효과나 **`after`** 등을 정의 할 때에는 일반적인 css가 더 좋은거 같습니다.
- 무한스크롤을 구현하기위해 **Intersection Observer** 를 사용하였는데 처음 쓰는거라 그런지 가장많은 시간이 들었던거 같습니다. 
특히 감지를 확인하는 **if문(**`entry.isIntersecting`)을 몰라서 한참을 문제를 찾는데 시간을 썼었네요.ㅜㅜ
- 확실히 **typeScript**를 적용하여서 **React**를 사용하니 문제를 수월하게 찾을수 있어서 좋습니다!!(오류찾는 시간이 체감상 70%는 줄어든거 같아요!)
- 디자인 능력이 많이 부족해서 그런지 프로젝트 내내 '무한스크롤을 할지 일반스크롤을 할지' 또는 '메인페이지에 헤더가 꼭 필요한 디자인인지 아닌지' 하면서 도중에 계속 디자인을 수정하고 구성하다 보니 시간이 좀 많이 걸렸습니다. **덕분에 컴포넌트를 독립적으로 만것이 중요하다는것을 다시 한번 느꼇었습니다 ^^**
- 마지막으로는 **info 검색기능**에 버튼을 추가하여 검색페이지로 이동하는 것을 더 만들지 못한것이 아쉬웠습니다.

 ****