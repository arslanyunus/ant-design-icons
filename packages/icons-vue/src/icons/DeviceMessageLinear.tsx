// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeviceMessageLinearSvg from '@ant-design/icons-svg/lib/asn/DeviceMessageLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeviceMessageLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeviceMessageLinear: DeviceMessageLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeviceMessageLinearSvg}></AntdIcon>;
};

DeviceMessageLinear.displayName = 'DeviceMessageLinear';
DeviceMessageLinear.inheritAttrs = false;
export default DeviceMessageLinear;