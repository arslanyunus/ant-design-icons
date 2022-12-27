// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeviceMessageOutlineSvg from '@ant-design/icons-svg/lib/asn/DeviceMessageOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeviceMessageOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeviceMessageOutline: DeviceMessageOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeviceMessageOutlineSvg}></AntdIcon>;
};

DeviceMessageOutline.displayName = 'DeviceMessageOutline';
DeviceMessageOutline.inheritAttrs = false;
export default DeviceMessageOutline;