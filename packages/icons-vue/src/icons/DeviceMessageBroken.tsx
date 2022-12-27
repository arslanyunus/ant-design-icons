// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeviceMessageBrokenSvg from '@ant-design/icons-svg/lib/asn/DeviceMessageBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeviceMessageBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeviceMessageBroken: DeviceMessageBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeviceMessageBrokenSvg}></AntdIcon>;
};

DeviceMessageBroken.displayName = 'DeviceMessageBroken';
DeviceMessageBroken.inheritAttrs = false;
export default DeviceMessageBroken;