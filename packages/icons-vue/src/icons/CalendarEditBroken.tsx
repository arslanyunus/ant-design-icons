// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarEditBrokenSvg from '@ant-design/icons-svg/lib/asn/CalendarEditBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarEditBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarEditBroken: CalendarEditBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarEditBrokenSvg}></AntdIcon>;
};

CalendarEditBroken.displayName = 'CalendarEditBroken';
CalendarEditBroken.inheritAttrs = false;
export default CalendarEditBroken;