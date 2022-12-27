// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClockTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClockTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClockTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClockTwoTone: ClockTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockTwoToneSvg}></AntdIcon>;
};

ClockTwoTone.displayName = 'ClockTwoTone';
ClockTwoTone.inheritAttrs = false;
export default ClockTwoTone;