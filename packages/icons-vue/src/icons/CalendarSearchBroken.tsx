// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarSearchBrokenSvg from '@ant-design/icons-svg/lib/asn/CalendarSearchBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarSearchBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarSearchBroken: CalendarSearchBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarSearchBrokenSvg}></AntdIcon>;
};

CalendarSearchBroken.displayName = 'CalendarSearchBroken';
CalendarSearchBroken.inheritAttrs = false;
export default CalendarSearchBroken;