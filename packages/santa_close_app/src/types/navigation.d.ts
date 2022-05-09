// FIXME: 썻는데 왜 안썻다고 에러가 날까요?
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TabParamList} from '../TabNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabParamList {}
  }
}
