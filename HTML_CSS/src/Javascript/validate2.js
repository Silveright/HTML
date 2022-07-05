function check() {
	var id = document.getElementById('id');
	if (id.value.trim() ==''){
		alert('ID를 입력하세요');
		id.focus();
		return false;
	}
	var pass = document.getElementById('pass');
	if (pass.value.trim() ==''){
		alert('비밀번호를 입력하세요');
		pass.focus();
		return false;
	}
	
	var jumin1 = document.getElementById('jumin1');
	if (jumin1.value.trim() ==''){
		alert('주민번호 앞자리를 입력하세요');
		jumin1.focus();
		return false;
	}

	if (jumin1.value.length !=6){
		alert('주민번호 앞자리 6자리를 입력하세요');
		jumin1.value='';
		jumin1.focus();
		return false;
	}

	var jumin2 = document.getElementById('jumin2');
	if (jumin2.value.trim() ==''){
		alert('주민번호 뒷자리를 입력하세요');
		jumin2.focus();
		return false;
	}

	if (jumin2.value.length !=7 ){
		alert('주민번호 뒷자리 7자리를 입력하세요');
		jumin2.value='';
		jumin2.focus();
		return false;
	}
	

	var email = document.getElementById('email');
	if (email.value.trim() ==''){
		alert('E-mail 아이디를 입력하세요');
		email.focus();
		return false;
	}
	
	var domain = document.getElementById('domain');
	if (domain.value.trim() ==''){
		alert('E-mail 도메인을 입력하세요');
		domain.focus();
		return false;
	}
											//라디오 버튼을 선택한 객체를 가져온다.
	var gender = document.querySelectorAll("input[type=radio]:checked");
	if(gender.length<1){
		//==0
		alert('남, 여 중에서 1개를 선택하세요')
		return false;
	}

	/*var gender1 = document.getElementById('gender1')
	var gender2 = document.getElementById('gender2')
		if(!gender1.checked && !gender2.checked){
			alert('남, 여 중에서 1개를 선택하세요')
			return false;
		}
*/		
											//체크박스를 선택한 객체를 가져온다.
	var hobby = document.querySelectorAll("input[type=checkbox]:checked");
	if(hobby.length<2){
		alert("2개이상 취미를 선택하세요");
		return false;
	}
	
	
	/*var cnt=0;
	var hobbys = document.getElementsByName('hobby');
	for(var i=0; i<hobbys.length;i++){
		if(hobbys[i].checked)
		cnt++;
	}
	
	if(cnt<2){
		alert("2개이상 취미를 선택하세요");
		return false;
	}*/

	var post = document.getElementById('post1');
	if (post.value.trim() ==''){
		alert('우편번호를 입력하세요');
		post.focus();
		return false;
	}

	var address = document.getElementById('address');
	if (address.value.trim() ==''){
		alert('주소를 입력하세요');
		address.focus();
		return false;
	}

	var intro = document.getElementById('intro');
	if (intro.value.trim() ==''){
		alert('자기소개를 입력하세요');
		intro.focus();
		return false;
	}
}

//아이디 중복검사 시  아이디 첫글자는 대문자, 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 한다.
function idcheck(){
	var id = document.getElementById('id');
	if (id.value.trim() == '') {
		alert('ID를 입력하세요');
		id.focus();
	} else {
		pattern = /^[A-Z][A-Za-z_0-9]{3,}$/;
		if (pattern.test(id.value)) {
			var ref = "idcheck.html?id=" + id.value;
			window.open(ref, '', 'width=300, height=250')

		} else {
			alert("첫글자는 대문자이고 두번째부터는 대소문자, 숫자, _로 총 4개 이상이어야 합니다.")
			id.value = '';
			id.focus();
		}
	}
}

function move(){
	var jumin1 = document.getElementById('jumin1');
	var jumin2 = document.getElementById('jumin2');
	
	
	if(jumin1.value.trim().length==6){
		reg1=/^[0-9]{2}(0[1-9]|1[012])(0[1-9]|1[0-9]|2[0-9]|3[01])$/;
		if (reg1.test(jumin1.value)) {
			jumin2.focus();
			}else {
				alert("주민번호 앞자리 형식에 맞지 않습니다.")
				jumin1.value = '';
				jumin1.focus();
		} 
		}
		
	if(jumin2.value.trim().length==7){
		reg2=/^[1234][0-9]{6}$/;
		if(reg2.test(jumin2.value)){
			//주민번호 뒷자리에 따라 남자 여자 성별 라디오버튼 자동선택
			var c = Number(jumin2.value.substring(0,1));
			var index=(c-1)%2; //c=1 또는 3이면 index=0 =>1 =>"gender1"
							   //c=2 또는 4이면 index=1 =>2 =>"gender2"
			var gender = document.getElementById('gender'+(index+1));
			gender.checked=true;
		} else{
			alert('주민번호 뒷자리 형식에 맞지 않습니다.');
			jumin2.value='';
			jumin2.focus();
		}
	}
	

}

function domain1(){
	var sel = document.getElementById('sel');
	var domain= document.getElementById('domain');
	if(sel.value==''){
		domain.readOnly = false;
		domain.value='';
		domain.focus();
	}else{
	domain.readOnly=true;	//수정 불가
	domain.value= sel.value;
	}
}

function post(){
	window.open( "post.html",'post', 'width=400, height=500');
}

