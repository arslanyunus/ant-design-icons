// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DriverRefreshBulkSvg from '@ant-design/icons-svg/lib/asn/DriverRefreshBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DriverRefreshBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DriverRefreshBulk: DriverRefreshBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DriverRefreshBulkSvg}></AntdIcon>;
};

DriverRefreshBulk.displayName = 'DriverRefreshBulk';
DriverRefreshBulk.inheritAttrs = false;
export default DriverRefreshBulk;