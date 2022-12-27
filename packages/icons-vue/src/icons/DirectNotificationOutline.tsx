// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNotificationOutlineSvg from '@ant-design/icons-svg/lib/asn/DirectNotificationOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNotificationOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNotificationOutline: DirectNotificationOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNotificationOutlineSvg}></AntdIcon>;
};

DirectNotificationOutline.displayName = 'DirectNotificationOutline';
DirectNotificationOutline.inheritAttrs = false;
export default DirectNotificationOutline;