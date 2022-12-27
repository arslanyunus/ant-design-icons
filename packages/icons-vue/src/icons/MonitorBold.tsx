// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorBoldSvg from '@ant-design/icons-svg/lib/asn/MonitorBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorBold: MonitorBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorBoldSvg}></AntdIcon>;
};

MonitorBold.displayName = 'MonitorBold';
MonitorBold.inheritAttrs = false;
export default MonitorBold;