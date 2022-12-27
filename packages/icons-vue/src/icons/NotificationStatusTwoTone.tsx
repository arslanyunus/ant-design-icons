// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationStatusTwoToneSvg from '@ant-design/icons-svg/lib/asn/NotificationStatusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationStatusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationStatusTwoTone: NotificationStatusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationStatusTwoToneSvg}></AntdIcon>;
};

NotificationStatusTwoTone.displayName = 'NotificationStatusTwoTone';
NotificationStatusTwoTone.inheritAttrs = false;
export default NotificationStatusTwoTone;