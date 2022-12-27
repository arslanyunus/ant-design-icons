// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorRecorderLinearSvg from '@ant-design/icons-svg/lib/asn/MonitorRecorderLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorRecorderLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorRecorderLinear: MonitorRecorderLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorRecorderLinearSvg}></AntdIcon>;
};

MonitorRecorderLinear.displayName = 'MonitorRecorderLinear';
MonitorRecorderLinear.inheritAttrs = false;
export default MonitorRecorderLinear;