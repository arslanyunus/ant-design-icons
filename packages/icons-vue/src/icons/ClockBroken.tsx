// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClockBrokenSvg from '@ant-design/icons-svg/lib/asn/ClockBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClockBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClockBroken: ClockBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockBrokenSvg}></AntdIcon>;
};

ClockBroken.displayName = 'ClockBroken';
ClockBroken.inheritAttrs = false;
export default ClockBroken;