// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorMobbileLinearSvg from '@ant-design/icons-svg/lib/asn/MonitorMobbileLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorMobbileLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorMobbileLinear: MonitorMobbileLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorMobbileLinearSvg}></AntdIcon>;
};

MonitorMobbileLinear.displayName = 'MonitorMobbileLinear';
MonitorMobbileLinear.inheritAttrs = false;
export default MonitorMobbileLinear;