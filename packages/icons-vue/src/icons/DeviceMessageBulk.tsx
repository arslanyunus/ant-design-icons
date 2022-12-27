// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DeviceMessageBulkSvg from '@ant-design/icons-svg/lib/asn/DeviceMessageBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DeviceMessageBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DeviceMessageBulk: DeviceMessageBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DeviceMessageBulkSvg}></AntdIcon>;
};

DeviceMessageBulk.displayName = 'DeviceMessageBulk';
DeviceMessageBulk.inheritAttrs = false;
export default DeviceMessageBulk;