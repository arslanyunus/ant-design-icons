// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarAddBrokenSvg from '@ant-design/icons-svg/lib/asn/CalendarAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarAddBroken: CalendarAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarAddBrokenSvg}></AntdIcon>;
};

CalendarAddBroken.displayName = 'CalendarAddBroken';
CalendarAddBroken.inheritAttrs = false;
export default CalendarAddBroken;