// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorRecorderBulkSvg from '@ant-design/icons-svg/lib/asn/MonitorRecorderBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorRecorderBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorRecorderBulk: MonitorRecorderBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorRecorderBulkSvg}></AntdIcon>;
};

MonitorRecorderBulk.displayName = 'MonitorRecorderBulk';
MonitorRecorderBulk.inheritAttrs = false;
export default MonitorRecorderBulk;