// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorBrokenSvg from '@ant-design/icons-svg/lib/asn/MonitorBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorBroken: MonitorBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorBrokenSvg}></AntdIcon>;
};

MonitorBroken.displayName = 'MonitorBroken';
MonitorBroken.inheritAttrs = false;
export default MonitorBroken;