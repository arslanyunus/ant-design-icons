// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorMobbileBrokenSvg from '@ant-design/icons-svg/lib/asn/MonitorMobbileBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorMobbileBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorMobbileBroken: MonitorMobbileBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorMobbileBrokenSvg}></AntdIcon>;
};

MonitorMobbileBroken.displayName = 'MonitorMobbileBroken';
MonitorMobbileBroken.inheritAttrs = false;
export default MonitorMobbileBroken;