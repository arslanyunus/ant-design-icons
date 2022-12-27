// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TimerStartBulkSvg from '@ant-design/icons-svg/lib/asn/TimerStartBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TimerStartBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TimerStartBulk: TimerStartBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TimerStartBulkSvg}></AntdIcon>;
};

TimerStartBulk.displayName = 'TimerStartBulk';
TimerStartBulk.inheritAttrs = false;
export default TimerStartBulk;