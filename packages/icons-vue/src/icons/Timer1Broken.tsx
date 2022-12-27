// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Timer1BrokenSvg from '@ant-design/icons-svg/lib/asn/Timer1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Timer1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Timer1Broken: Timer1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Timer1BrokenSvg}></AntdIcon>;
};

Timer1Broken.displayName = 'Timer1Broken';
Timer1Broken.inheritAttrs = false;
export default Timer1Broken;