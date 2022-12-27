// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNotificationBoldSvg from '@ant-design/icons-svg/lib/asn/DirectNotificationBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNotificationBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNotificationBold: DirectNotificationBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNotificationBoldSvg}></AntdIcon>;
};

DirectNotificationBold.displayName = 'DirectNotificationBold';
DirectNotificationBold.inheritAttrs = false;
export default DirectNotificationBold;