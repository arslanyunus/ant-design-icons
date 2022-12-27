// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerPauseBulkSvg from '@ant-design/icons-svg/lib/asn/TimerPauseBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerPauseBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerPauseBulk: TimerPauseBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerPauseBulkSvg}></AntdIcon>;
};

TimerPauseBulk.displayName = 'TimerPauseBulk';
TimerPauseBulk.inheritAttrs = false;
export default TimerPauseBulk;