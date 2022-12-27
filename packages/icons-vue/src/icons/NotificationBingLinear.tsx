// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationBingLinearSvg from '@ant-design/icons-svg/lib/asn/NotificationBingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationBingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationBingLinear: NotificationBingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationBingLinearSvg}></AntdIcon>;
};

NotificationBingLinear.displayName = 'NotificationBingLinear';
NotificationBingLinear.inheritAttrs = false;
export default NotificationBingLinear;