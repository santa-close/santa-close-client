# santa-close-app 실행 방법
- ios: cd packages/santa_close_app/ios && pod install && cd ../../../ && yarn dev:ios
- and: yarn dev:and

## m1 맥 유의 사항
- pod install 명령어 사용시 arch -x86_64 pod install 사용 (pod rosetta 환경에서 설치 필요)
- ios build시 xcode에서 빌드필요 (santa_close_app.xcworkspace 파일 오픈)
- android 빌드시 안드로이드 스튜디오 설치 & (시뮬레이터 생성필요 || (adb 설정 && 실기기 연결))