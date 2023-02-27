let news = [];
let page = 1;
let totalPage = 0;
let menus = document.querySelectorAll(".menus button");
menus.forEach((menu) =>
	menu.addEventListener("click", (event) => {
		getNewsByTopic(event);
	})
);
let searchBtn = document.getElementById("search_button");
let url = "";
// 각 함수에서 필요하 url를 만든다
//api 호출 함수를 부른다.
const getNews = async () => {
	try {
		let header = new Headers({
			"x-api-key": "Y3R_FXYOdJXjdS-OQxiE4znImXChBDSjpYohwqGYcC8",
		});
		url.searchParams.set("page", page); // & page
		// console.log("url은" ,url);
		let response = await fetch(url, { headers: header }); //ajax, ftch
		let data = await response.json();
		if (response.status == 200) {
			if (data.total_hits == 0) {
				throw new Error("검색된 결과값이 없습니다.");
			}
			console.log("받는 데이터", data);
			news = data.articles;
			totalPage = data.total_pages;
			page = data.page;
			render();
			PageNation();
		} else {
			throw new Error(data.message);
		}
	} catch (error) {
		errorRender(error.message);
	}
};
const getlatestNews = async () => {
	url = new URL(
		"https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=sport&page_size=10"
	);
	getNews();
};

const getNewsByTopic = async (event) => {
	console.log("클릭됨", event.target.textContent);
	let topic = event.target.textContent.toLowerCase();
	url = new URL(
		`https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=${topic}&page_size=10`
	);
	getNews();
};
const getNewsBykeyword = async () => {
	//1검색키워드 읽어오기
	//2. url에 검색 키워 부치기
	//3. 헤더 준비
	//url 부르기
	//5. 데이터 가져오기
	//6 데이터 보여주기
	let keyword = document.getElementById("search_input").value;
	url = new URL(
		`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`
	);
	getNews();
};

const render = () => {
	let newsHTML = "";
	newsHTML = news.map((item) => {
		return `<div class="row news">
        <div class="col-lg-4">
            <img  class="news_img "src="${item.media}{" alt="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
            <div>
            ${item.rights} ,  ${item.published_date}
            </div>
        </div>
    </div>`;
	});
	document.getElementById("news_board").innerHTML = newsHTML;
};

const errorRender = (message) => {
	let errorHTML = `<div class="alert alert-danger" role="alert">${message}</div>`;
	document.getElementById("news_board").innerHTML = errorHTML;
};
const PageNation = () => {
	let pagenationHTML = `
	<li class="page-item">
	<a class="page-link" href="#" aria-label="Previous" onclick = "moveToPage(1)>
	  <span aria-hidden="true">&laquo;</span>
	</a>
  </li>
	<li class="page-item">
    <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(${
		page - 1
	})">
      <span aria-hidden="true">&lt;</span>
    </a>
    </li>`;
	// total page 3 일 경우 3개의 페이지만 프린트 하는 법 last, first
	if(totalPage < 3 ){
		let page_group = Math.ceil(page / 5);
	//last
	let last = page_group * 3;
	console.log(page_group);
	//first
	let first = last - 2;

	// << >> 이버튼 만들어 주기 맨 처음, 맨끝으로 가는 버튼 만들기
	//내가 그룹 일때  << 이 버튼이 없다.
	//내가 마지막 그룹일때 >>  이 버튼이 없다.

	for (let i = first; i <= last; i++) {
		pagenationHTML += `<li class="page-item ${
			page == i ? "active" : ""
		}"><a class="page-link" href="#" onclick = "moveToPage(${i})">${i}</a></li>`;
	}
	pagenationHTML += `<li class="page-item">
    <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${
		page + 1
	})">
      <span aria-hidden="true">&gt;</span>
    </a>
  </li>
  <li class="page-item">
  <a class="page-link" href="#" aria-label="Next">
	<span aria-hidden="true">&raquo;</span>
  </a>
</li>`;
	document.querySelector(".pagination").innerHTML = pagenationHTML;
	} else{
		let page_group = Math.ceil(page / 5);
	//last
	let last = page_group * 5;
	console.log(page_group);
	//first
	let first = last - 4;

	// << >> 이버튼 만들어 주기 맨 처음, 맨끝으로 가는 버튼 만들기
	//내가 그룹 일때  << 이 버튼이 없다.
	//내가 마지막 그룹일때 >>  이 버튼이 없다.

	for (let i = first; i <= last; i++) {
		pagenationHTML += `<li class="page-item ${
			page == i ? "active" : ""
		}"><a class="page-link" href="#" onclick = "moveToPage(${i})">${i}</a></li>`;
	}
	pagenationHTML += `<li class="page-item">
    <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${
		page + 1
	})">
      <span aria-hidden="true">&gt;</span>
    </a>
  </li>
  <li class="page-item">
  <a class="page-link" href="#" aria-label="Next" onclick = "moveToPage(${totalPage})>
	<span aria-hidden="true">&raquo;</span>
  </a>
</li>`;
	document.querySelector(".pagination").innerHTML = pagenationHTML;
	}	
};
console.log("총페이지는",totalPage);
const moveToPage = (pageNumber) => {
	// 1. 이동하고 싶은 페이지를 알아야겠지
	page = pageNumber;
	console.log(page);
	//2. 이동하고 싶은 페이지를  가지고 api를 다시 호출해주자
	getNews();
};

searchBtn.addEventListener("click", getNewsBykeyword);
getlatestNews();
