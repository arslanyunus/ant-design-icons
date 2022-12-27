// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeviceMessageBoldSvg from '@ant-design/icons-svg/lib/asn/DeviceMessageBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeviceMessageBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeviceMessageBold: DeviceMessageBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeviceMessageBoldSvg}></AntdIcon>;
};

DeviceMessageBold.displayName = 'DeviceMessageBold';
DeviceMessageBold.inheritAttrs = false;
export default DeviceMessageBold;