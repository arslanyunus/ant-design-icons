// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/NotificationCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationCircleTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationCircleTwoTone: NotificationCircleTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationCircleTwoToneSvg}></AntdIcon>;
};

NotificationCircleTwoTone.displayName = 'NotificationCircleTwoTone';
NotificationCircleTwoTone.inheritAttrs = false;
export default NotificationCircleTwoTone;