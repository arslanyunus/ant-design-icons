// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DriverBulkSvg from '@ant-design/icons-svg/lib/asn/DriverBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DriverBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DriverBulk: DriverBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriverBulkSvg}></AntdIcon>;
};

DriverBulk.displayName = 'DriverBulk';
DriverBulk.inheritAttrs = false;
export default DriverBulk;