// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import NotificationLinearSvg from '@ant-design/icons-svg/lib/asn/NotificationLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface NotificationLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const NotificationLinear: NotificationLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NotificationLinearSvg}></AntdIcon>;
};

NotificationLinear.displayName = 'NotificationLinear';
NotificationLinear.inheritAttrs = false;
export default NotificationLinear;