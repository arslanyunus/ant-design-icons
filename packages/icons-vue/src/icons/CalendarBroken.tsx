// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarBrokenSvg from '@ant-design/icons-svg/lib/asn/CalendarBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarBroken: CalendarBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarBrokenSvg}></AntdIcon>;
};

CalendarBroken.displayName = 'CalendarBroken';
CalendarBroken.inheritAttrs = false;
export default CalendarBroken;