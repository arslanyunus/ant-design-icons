// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/CalendarCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarCircleBroken: CalendarCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarCircleBrokenSvg}></AntdIcon>;
};

CalendarCircleBroken.displayName = 'CalendarCircleBroken';
CalendarCircleBroken.inheritAttrs = false;
export default CalendarCircleBroken;