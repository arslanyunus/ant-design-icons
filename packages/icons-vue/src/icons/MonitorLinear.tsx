// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorLinearSvg from '@ant-design/icons-svg/lib/asn/MonitorLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorLinear: MonitorLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorLinearSvg}></AntdIcon>;
};

MonitorLinear.displayName = 'MonitorLinear';
MonitorLinear.inheritAttrs = false;
export default MonitorLinear;