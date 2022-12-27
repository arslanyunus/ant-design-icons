// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNotificationBrokenSvg from '@ant-design/icons-svg/lib/asn/DirectNotificationBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNotificationBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNotificationBroken: DirectNotificationBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNotificationBrokenSvg}></AntdIcon>;
};

DirectNotificationBroken.displayName = 'DirectNotificationBroken';
DirectNotificationBroken.inheritAttrs = false;
export default DirectNotificationBroken;