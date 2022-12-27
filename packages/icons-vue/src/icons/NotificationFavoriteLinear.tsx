// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationFavoriteLinearSvg from '@ant-design/icons-svg/lib/asn/NotificationFavoriteLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationFavoriteLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationFavoriteLinear: NotificationFavoriteLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationFavoriteLinearSvg}></AntdIcon>;
};

NotificationFavoriteLinear.displayName = 'NotificationFavoriteLinear';
NotificationFavoriteLinear.inheritAttrs = false;
export default NotificationFavoriteLinear;