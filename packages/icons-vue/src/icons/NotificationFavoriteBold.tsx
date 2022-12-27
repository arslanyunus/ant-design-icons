// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationFavoriteBoldSvg from '@ant-design/icons-svg/lib/asn/NotificationFavoriteBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationFavoriteBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationFavoriteBold: NotificationFavoriteBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationFavoriteBoldSvg}></AntdIcon>;
};

NotificationFavoriteBold.displayName = 'NotificationFavoriteBold';
NotificationFavoriteBold.inheritAttrs = false;
export default NotificationFavoriteBold;