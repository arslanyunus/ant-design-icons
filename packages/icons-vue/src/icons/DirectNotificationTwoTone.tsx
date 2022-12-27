// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectNotificationTwoToneSvg from '@ant-design/icons-svg/lib/asn/DirectNotificationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectNotificationTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectNotificationTwoTone: DirectNotificationTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectNotificationTwoToneSvg}></AntdIcon>;
};

DirectNotificationTwoTone.displayName = 'DirectNotificationTwoTone';
DirectNotificationTwoTone.inheritAttrs = false;
export default DirectNotificationTwoTone;