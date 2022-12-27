// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DevicesBoldSvg from '@ant-design/icons-svg/lib/asn/DevicesBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DevicesBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DevicesBold: DevicesBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DevicesBoldSvg}></AntdIcon>;
};

DevicesBold.displayName = 'DevicesBold';
DevicesBold.inheritAttrs = false;
export default DevicesBold;