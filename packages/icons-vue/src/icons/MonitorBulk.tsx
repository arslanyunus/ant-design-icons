// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorBulkSvg from '@ant-design/icons-svg/lib/asn/MonitorBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorBulk: MonitorBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorBulkSvg}></AntdIcon>;
};

MonitorBulk.displayName = 'MonitorBulk';
MonitorBulk.inheritAttrs = false;
export default MonitorBulk;