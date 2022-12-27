// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNotificationLinearSvg from '@ant-design/icons-svg/lib/asn/DirectNotificationLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNotificationLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNotificationLinear: DirectNotificationLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNotificationLinearSvg}></AntdIcon>;
};

DirectNotificationLinear.displayName = 'DirectNotificationLinear';
DirectNotificationLinear.inheritAttrs = false;
export default DirectNotificationLinear;