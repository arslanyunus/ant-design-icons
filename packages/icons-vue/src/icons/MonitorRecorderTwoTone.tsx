// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorRecorderTwoToneSvg from '@ant-design/icons-svg/lib/asn/MonitorRecorderTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorRecorderTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorRecorderTwoTone: MonitorRecorderTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorRecorderTwoToneSvg}></AntdIcon>;
};

MonitorRecorderTwoTone.displayName = 'MonitorRecorderTwoTone';
MonitorRecorderTwoTone.inheritAttrs = false;
export default MonitorRecorderTwoTone;