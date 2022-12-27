// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerPauseOutlineSvg from '@ant-design/icons-svg/lib/asn/TimerPauseOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerPauseOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerPauseOutline: TimerPauseOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerPauseOutlineSvg}></AntdIcon>;
};

TimerPauseOutline.displayName = 'TimerPauseOutline';
TimerPauseOutline.inheritAttrs = false;
export default TimerPauseOutline;