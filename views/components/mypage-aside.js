const asideTab = document.querySelector('.aside-tab');
asideTab.innerHTML = `
<div class="side-section">
<div class="title">
  <span>마이페이지</span>
</div>
  <ul>
    <div>
      <span class="bold">쇼핑정보</span>
    </div>
    <li><a href="/purchase">- 구매내역</a></li>
    <ul>
      <div>
        <span class="bold">회원 정보</span>
      </div>
      <li>
        <a href="/mypage/modify-info">- 사용자 정보 변경</a>
      </li>
      <li><a href="/mypage/modify-password">- 비밀번호 변경</a></li>
      <li><a href="/mypage/delete-user">- 회원 탈퇴</a></li>
    </ul>
  </ul>
</div>`;
const title = document.querySelector('.title');
title.addEventListener('click', function () {
  window.location.href = '/mypage';
});
