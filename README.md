# PHP 프로젝트 설정 및 XAMPP를 사용한 로컬 서버 실행 가이드

이 문서는 PHP를 설치하고 Visual Studio Code (VS Code)와 XAMPP를 사용하여 PHP 프로젝트를 로컬 서버에서 실행하는 방법을 설명합니다.

## 1. Visual Studio Code 설치

1. [VS Code 공식 사이트](https://code.visualstudio.com/)에서 VS Code를 다운로드하고 설치합니다.

## 2. PHP 설치

### Windows

1. [PHP for Windows](https://windows.php.net/download) 페이지에서 `Thread Safe` 버전의 zip 패키지를 다운로드합니다.
2. 다운로드한 zip 파일의 압축을 `C:\php` 폴더에 해제합니다.
3. 시스템 환경 변수를 설정합니다:
   - `시작` 메뉴에서 "환경 변수"를 검색하고 "시스템 환경 변수 편집"을 선택합니다.
   - "시스템 속성" 창에서 `고급` 탭으로 이동하여 `환경 변수` 버튼을 클릭합니다.
   - `시스템 변수` 섹션에서 `Path`를 선택하고 `편집` 버튼을 클릭합니다.
   - `새로 만들기` 버튼을 클릭하고 `C:\php` 경로를 추가합니다.
   - 모든 창을 `확인` 버튼으로 닫습니다.
4. 명령 프롬프트를 열고 `php -v`를 입력하여 PHP 버전을 확인합니다.

### macOS

1. 터미널을 열고 Homebrew를 설치합니다:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Homebrew를 사용하여 PHP를 설치합니다:

```bash
brew install php
```

3. 터미널에서 php -v를 입력하여 PHP 버전을 확인합니다.

## 3. XAMPP 설치 및 설정

XAMPP 공식 사이트에서 XAMPP를 다운로드하고 설치합니다.
설치가 완료되면 XAMPP Control Panel을 실행합니다.
`Apache` 모듈 옆의 `Start` 버튼을 클릭하여 Apache 서버를 시작합니다.

## 4. 프로젝트 위치 설정

### 프로젝트 위치: C:\Users\bstones\Desktop\jyyang\03_study\2407-study-php

### 방법 1: 프로젝트를 htdocs로 복사

1. 프로젝트 폴더를 `C:\xampp\htdocs` 폴더로 복사합니다.
2. 브라우저에서 `http://localhost/`를 입력하여 프로젝트가 작동하는지 확인합니다.

### 방법 2: 심볼릭 링크 생성

1. `cmd`를 관리자 권한으로 실행합니다.
2. 아래 명령어를 입력하여 심볼릭 링크를 생성합니다:

```cmd
mklink /D C:\xampp\htdocs\dev C:\Users\bstones\Desktop\jyyang\03_study\2407-study-php\dev
```

3. 브라우저에서 `http://localhost/`를 입력하여 프로젝트가 작동하는지 확인합니다.

## 5. VS Code 설정

1. VS Code에서 PHP 개발을 돕기 위한 확장 프로그램을 설치합니다:
   - PHP Intelephense
   - PHP Debug

## 6. PHP 디버깅 설정

1. VS Code에서 `Run and Debug` 뷰로 이동합니다.
2. `create a launch.json file`을 클릭하고 PHP를 선택합니다.
3. `launch.json` 파일에 다음 설정을 추가합니다:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Listen for XDebug",
      "type": "php",
      "request": "launch",
      "port": 9003
    }
  ]
}
```

4. XAMPP에서 XDebug를 활성화하고 포트를 맞추어 설정합니다.

## 7. 별도 build:js 스크립트 작성

```bash
chmod +x build-js.sh
```

## 브라우저에서 확인

웹 브라우저를 열고 `http://localhost/`를 입력하여 PHP 프로젝트가 정상적으로 작동하는지 확인합니다.

이제 PHP 프로젝트를 VS Code와 XAMPP를 사용하여 로컬 서버에서 실행할 수 있습니다.
