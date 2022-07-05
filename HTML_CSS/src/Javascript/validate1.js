//회원가입 버튼 클릭할 경우
function check() {
	//ID 공백 유효성 검사
	var id = document.getElementById('id');
	if (id.value.trim() ==''){
		alert('ID를 입력하세요');
		id.focus();
		return false;
	}
	//비밀번호 공백 유효성 검사
	var pass = document.getElementById('pass');
	if (pass.value.trim() ==''){
		alert('비밀번호를 입력하세요');
		pass.focus();
		return false;
	}
	
	//주민번호 앞자리 공백 유효성 검사
	var jumin1 = document.getElementById('jumin1');
	if (jumin1.value.trim() ==''){
		alert('주민번호 앞자리를 입력하세요');
		jumin1.focus();
		return false;
	}
	//주민번호 앞자리 6자리 유효성 검사
	if (jumin1.value.length !=6){
		alert('주민번호 앞자리 6자리를 입력하세요');
		jumin1.value='';
		jumin1.focus();
		return false;
	}
	
	//주민번호 뒷자리 공백 유효성 검사
	var jumin2 = document.getElementById('jumin2');
	if (jumin2.value.trim() ==''){
		alert('주민번호 뒷자리를 입력하세요');
		jumin2.focus();
		return false;
	}

	//주민번호 뒷자리 7자리 유효성 검사
	if (jumin2.value.length !=7 ){
		alert('주민번호 뒷자리 7자리를 입력하세요');
		jumin2.value='';
		jumin2.focus();
		return false;
	}

	//email 공백 유효성 검사
	var email = document.getElementById('email');
	if (email.value.trim() ==''){
		alert('E-mail 아이디를 입력하세요');
		email.focus();
		return false;
	}
	
	//email 도메인 공백 유효성 검사
	var domain = document.getElementById('domain');
	if (domain.value.trim() ==''){
		alert('E-mail 도메인을 입력하세요');
		domain.focus();
		return false;
	}
	
	//라디오 버튼 선택 유효성 검사
	var gender1 = document.getElementById('gender1')
	var gender2 = document.getElementById('gender2')
		if(!gender1.checked && !gender2.checked){
			alert('남, 여 중에서 1개를 선택하세요')
			return false;
		}
	
	//취미를 2개 이상 체크하도록 하는 유효성 검사
	var cnt=0;
	var hobbys = document.getElementsByName('hobby');
	for(var i=0; i<hobbys.length;i++){
		if(hobbys[i].checked)
		cnt++;
	}
	
	if(cnt<2){
		alert("2개이상 취미를 선택하세요");
		return false;
	}

	//우편번호 공백 유효성 검사
	var post = document.getElementById('post1');
	if (post.value.trim() ==''){
		alert('우편번호를 입력하세요');
		post.focus();
		return false;
	}
	
	//주소 공백 유효성 검사
	var address = document.getElementById('address');
	if (address.value.trim() ==''){
		alert('주소를 입력하세요');
		address.focus();
		return false;
	}
	
	//자기소개 공백 유효성 검사
	var intro = document.getElementById('intro');
	if (intro.value.trim() ==''){
		alert('자기소개를 입력하세요');
		intro.focus();
		return false;
	}
}

//ID 중복 검사부분
function idcheck(){
	var id = document.getElementById('id');
	if (id.value.trim() ==''){//ID 입력하지 않은 경우
		alert('ID를 입력하세요');
		id.focus();
	}else{//ID 입력한 경우
		//사용자가 입력한 방식을 get방식으로 넘긴다.
		var ref ="idcheck.html?id=" + id.value;//?쿼리스트링( 사용자가 입력한 데이터를 전달하는 방법)
/*	1. '?' 물음표는 쿼리 스트링의 시작을 의미한다.
	2. 파라미터는 key=value의 형식을 같으며, '=' 문자열로 한 쌍을 이룬다.
	3. 파라미터 개수가 여러개일 경우 '&' 문자열로 이어붙여 작성할 수 있다.
file:///C:/Users/Home/git/HTML/HTML_CSS/src/Javascript/idcheck.html?id=D0d_
	
*/		//팝업창을 이용해 자료를 넘김
		window.open(ref,'','width=300, height=250')
	}	
}

function move(){
	var jumin1 = document.getElementById('jumin1');
	var jumin2 = document.getElementById('jumin2');
	
	//주민번호 앞자리 6자리 입력된 경우
	if(jumin1.value.trim().length==6){
		if(!isNaN(jumin1.value)){//6자리가 숫자인지 확인
			jumin2.focus();
		} else {//숫자가 아닌 경우
			alert('숫자로 입력해주세요');
			jumin1.value='';//입력한 앞자리 주민번호 초기화
			jumin1.focus();//앞자리에 포커스
		}
	}

	//주민번호 뒷자리 7자리 입력된 경우
	if(jumin2.value.trim().length==7){
		if(isNaN(jumin2.value)){
			alert('숫자로 입력해주세요');
			jumin2.value='';
			jumin2.focus();
		}
	}
}

//select 태그에서 선택한 도메인 설정
function domain1(){
	var sel = document.getElementById('sel');
	var domain= document.getElementById('domain');
	if(sel.value==''){//직접 입력 선택된 경우
		domain.readOnly = false;
		domain.value='';
		domain.focus();
	}else{//option 중 선택한 경우
	domain.readOnly=true;	//수정 불가
	domain.value= sel.value;
	}
}

function post(){
	window.open( "post.html",'post', 'width=400, height=500');
}

