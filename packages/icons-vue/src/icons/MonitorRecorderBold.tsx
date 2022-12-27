// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorRecorderBoldSvg from '@ant-design/icons-svg/lib/asn/MonitorRecorderBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorRecorderBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorRecorderBold: MonitorRecorderBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorRecorderBoldSvg}></AntdIcon>;
};

MonitorRecorderBold.displayName = 'MonitorRecorderBold';
MonitorRecorderBold.inheritAttrs = false;
export default MonitorRecorderBold;