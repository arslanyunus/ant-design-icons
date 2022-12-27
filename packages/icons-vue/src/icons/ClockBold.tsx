// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClockBoldSvg from '@ant-design/icons-svg/lib/asn/ClockBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClockBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClockBold: ClockBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockBoldSvg}></AntdIcon>;
};

ClockBold.displayName = 'ClockBold';
ClockBold.inheritAttrs = false;
export default ClockBold;