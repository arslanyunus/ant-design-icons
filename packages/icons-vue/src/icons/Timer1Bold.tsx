// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Timer1BoldSvg from '@ant-design/icons-svg/lib/asn/Timer1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Timer1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Timer1Bold: Timer1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Timer1BoldSvg}></AntdIcon>;
};

Timer1Bold.displayName = 'Timer1Bold';
Timer1Bold.inheritAttrs = false;
export default Timer1Bold;