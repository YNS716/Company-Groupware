function showSection(sectionName) {
    // 모든 섹션 숨기기
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('hidden'));
    
    // 선택된 섹션 보이기
    document.getElementById(sectionName).classList.remove('hidden');
    
    // 네비게이션 활성화 상태 변경
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // 클릭된 메뉴 활성화
    event.target.classList.add('active');
}

// 페이지 로드시 대시보드 표시
document.addEventListener('DOMContentLoaded', function() {
    showSection('dashboard');
});
