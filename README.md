# Project Description

지도를 기반으로 등산한 산과 산 주변의 맛집을 공유하는 앱입니다.

# Features

- Lerna + Yarn workspace를 사용한 모노레포 방식의 패키지 관리
- Webpack Module Federation(MFE)를 사용한 마이크로 프론트엔드 아키텍쳐

# Packages

- santa_close_app
- santa_close_frame
- santa_close_map
- santa_close_design-system

# Getting Started

```shell
# root
yarn install

# map_app 빌드 및 개발서버 시작(localhost:3001)
yarn dev:map

# frame_app 빌드 및 개발서버 시작(localhost:3000)
yarn dev:frame
```
