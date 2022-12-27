// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerBulkSvg from '@ant-design/icons-svg/lib/asn/TimerBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerBulk: TimerBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerBulkSvg}></AntdIcon>;
};

TimerBulk.displayName = 'TimerBulk';
TimerBulk.inheritAttrs = false;
export default TimerBulk;