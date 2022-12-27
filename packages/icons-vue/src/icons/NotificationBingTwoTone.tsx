// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationBingTwoToneSvg from '@ant-design/icons-svg/lib/asn/NotificationBingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationBingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationBingTwoTone: NotificationBingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationBingTwoToneSvg}></AntdIcon>;
};

NotificationBingTwoTone.displayName = 'NotificationBingTwoTone';
NotificationBingTwoTone.inheritAttrs = false;
export default NotificationBingTwoTone;