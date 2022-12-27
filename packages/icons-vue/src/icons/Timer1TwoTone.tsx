// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Timer1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Timer1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Timer1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Timer1TwoTone: Timer1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Timer1TwoToneSvg}></AntdIcon>;
};

Timer1TwoTone.displayName = 'Timer1TwoTone';
Timer1TwoTone.inheritAttrs = false;
export default Timer1TwoTone;