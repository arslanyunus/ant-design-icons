// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorRecorderBrokenSvg from '@ant-design/icons-svg/lib/asn/MonitorRecorderBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorRecorderBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorRecorderBroken: MonitorRecorderBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorRecorderBrokenSvg}></AntdIcon>;
};

MonitorRecorderBroken.displayName = 'MonitorRecorderBroken';
MonitorRecorderBroken.inheritAttrs = false;
export default MonitorRecorderBroken;