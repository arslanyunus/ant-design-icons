// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DevicesTwoToneSvg from '@ant-design/icons-svg/lib/asn/DevicesTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DevicesTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DevicesTwoTone: DevicesTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DevicesTwoToneSvg}></AntdIcon>;
};

DevicesTwoTone.displayName = 'DevicesTwoTone';
DevicesTwoTone.inheritAttrs = false;
export default DevicesTwoTone;