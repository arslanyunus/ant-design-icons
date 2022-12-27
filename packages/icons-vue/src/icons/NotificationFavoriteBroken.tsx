// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationFavoriteBrokenSvg from '@ant-design/icons-svg/lib/asn/NotificationFavoriteBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationFavoriteBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationFavoriteBroken: NotificationFavoriteBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationFavoriteBrokenSvg}></AntdIcon>;
};

NotificationFavoriteBroken.displayName = 'NotificationFavoriteBroken';
NotificationFavoriteBroken.inheritAttrs = false;
export default NotificationFavoriteBroken;