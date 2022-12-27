// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorTwoToneSvg from '@ant-design/icons-svg/lib/asn/MonitorTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorTwoTone: MonitorTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorTwoToneSvg}></AntdIcon>;
};

MonitorTwoTone.displayName = 'MonitorTwoTone';
MonitorTwoTone.inheritAttrs = false;
export default MonitorTwoTone;