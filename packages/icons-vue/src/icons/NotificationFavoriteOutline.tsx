// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationFavoriteOutlineSvg from '@ant-design/icons-svg/lib/asn/NotificationFavoriteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationFavoriteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationFavoriteOutline: NotificationFavoriteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationFavoriteOutlineSvg}></AntdIcon>;
};

NotificationFavoriteOutline.displayName = 'NotificationFavoriteOutline';
NotificationFavoriteOutline.inheritAttrs = false;
export default NotificationFavoriteOutline;