// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Timer1OutlineSvg from '@ant-design/icons-svg/lib/asn/Timer1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Timer1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Timer1Outline: Timer1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Timer1OutlineSvg}></AntdIcon>;
};

Timer1Outline.displayName = 'Timer1Outline';
Timer1Outline.inheritAttrs = false;
export default Timer1Outline;