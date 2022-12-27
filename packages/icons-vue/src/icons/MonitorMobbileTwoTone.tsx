// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorMobbileTwoToneSvg from '@ant-design/icons-svg/lib/asn/MonitorMobbileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorMobbileTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorMobbileTwoTone: MonitorMobbileTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorMobbileTwoToneSvg}></AntdIcon>;
};

MonitorMobbileTwoTone.displayName = 'MonitorMobbileTwoTone';
MonitorMobbileTwoTone.inheritAttrs = false;
export default MonitorMobbileTwoTone;