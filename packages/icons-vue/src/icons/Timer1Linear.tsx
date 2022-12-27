// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Timer1LinearSvg from '@ant-design/icons-svg/lib/asn/Timer1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Timer1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Timer1Linear: Timer1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Timer1LinearSvg}></AntdIcon>;
};

Timer1Linear.displayName = 'Timer1Linear';
Timer1Linear.inheritAttrs = false;
export default Timer1Linear;