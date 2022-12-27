// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MonitorRecorderOutlineSvg from '@ant-design/icons-svg/lib/asn/MonitorRecorderOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MonitorRecorderOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MonitorRecorderOutline: MonitorRecorderOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MonitorRecorderOutlineSvg}></AntdIcon>;
};

MonitorRecorderOutline.displayName = 'MonitorRecorderOutline';
MonitorRecorderOutline.inheritAttrs = false;
export default MonitorRecorderOutline;