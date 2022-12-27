// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorMobbileOutlineSvg from '@ant-design/icons-svg/lib/asn/MonitorMobbileOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorMobbileOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorMobbileOutline: MonitorMobbileOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorMobbileOutlineSvg}></AntdIcon>;
};

MonitorMobbileOutline.displayName = 'MonitorMobbileOutline';
MonitorMobbileOutline.inheritAttrs = false;
export default MonitorMobbileOutline;