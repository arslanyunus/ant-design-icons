// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarTickBrokenSvg from '@ant-design/icons-svg/lib/asn/CalendarTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarTickBroken: CalendarTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarTickBrokenSvg}></AntdIcon>;
};

CalendarTickBroken.displayName = 'CalendarTickBroken';
CalendarTickBroken.inheritAttrs = false;
export default CalendarTickBroken;