# Project Description

지도를 기반으로 등산한 산과 산 주변의 맛집을 공유하는 앱입니다.

# Features

- Lerna + Yarn workspace를 사용한 모노레포 방식의 패키지 관리
- Webpack Module Federation(MFE)를 사용한 마이크로 프론트엔드 아키텍쳐

# Packages

- santa_close_app
- santa_close_common
- santa_close_frame
- santa_close_map
- santa_close_design-system

# Getting Started

> graphql 스키마 validation 필요시 [GraphQL extension](https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql) 설치 & 백엔드 서버 띄운채로 작업

```shell
# dependency 설치
$ yarn

# dev:watch & dev:map & dev:frame 스크립트 병렬 실행
# argument: map
$ yarn dev:web map
```
