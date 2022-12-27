// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationFavoriteTwoToneSvg from '@ant-design/icons-svg/lib/asn/NotificationFavoriteTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationFavoriteTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationFavoriteTwoTone: NotificationFavoriteTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationFavoriteTwoToneSvg}></AntdIcon>;
};

NotificationFavoriteTwoTone.displayName = 'NotificationFavoriteTwoTone';
NotificationFavoriteTwoTone.inheritAttrs = false;
export default NotificationFavoriteTwoTone;