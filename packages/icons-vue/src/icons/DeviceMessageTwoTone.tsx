// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeviceMessageTwoToneSvg from '@ant-design/icons-svg/lib/asn/DeviceMessageTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeviceMessageTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeviceMessageTwoTone: DeviceMessageTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeviceMessageTwoToneSvg}></AntdIcon>;
};

DeviceMessageTwoTone.displayName = 'DeviceMessageTwoTone';
DeviceMessageTwoTone.inheritAttrs = false;
export default DeviceMessageTwoTone;