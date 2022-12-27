// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DevicesBulkSvg from '@ant-design/icons-svg/lib/asn/DevicesBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DevicesBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DevicesBulk: DevicesBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DevicesBulkSvg}></AntdIcon>;
};

DevicesBulk.displayName = 'DevicesBulk';
DevicesBulk.inheritAttrs = false;
export default DevicesBulk;