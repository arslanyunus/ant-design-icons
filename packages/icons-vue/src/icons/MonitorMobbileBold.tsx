// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorMobbileBoldSvg from '@ant-design/icons-svg/lib/asn/MonitorMobbileBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorMobbileBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorMobbileBold: MonitorMobbileBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorMobbileBoldSvg}></AntdIcon>;
};

MonitorMobbileBold.displayName = 'MonitorMobbileBold';
MonitorMobbileBold.inheritAttrs = false;
export default MonitorMobbileBold;