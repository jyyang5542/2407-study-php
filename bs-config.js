module.exports = {
  proxy: 'localhost',
  serveStatic: ['./dev'],
  files: ['dev/assets/css/*.css', 'dev/**/*.php', 'dev/assets/js/*.js'],
  watchOptions: {
    usePolling: true,
  },
  reloadDelay: 0,
  open: true, // 브라우저를 자동으로 엽니다
  notify: false, // 브라우저 우측 상단에 Browsersync 메시지 표시를 비활성화
  startPath: '/dev/index.php', // 기본적으로 /dev/index.php 경로로 이동
};
