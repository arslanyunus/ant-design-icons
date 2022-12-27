// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorOutlineSvg from '@ant-design/icons-svg/lib/asn/MonitorOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorOutline: MonitorOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorOutlineSvg}></AntdIcon>;
};

MonitorOutline.displayName = 'MonitorOutline';
MonitorOutline.inheritAttrs = false;
export default MonitorOutline;