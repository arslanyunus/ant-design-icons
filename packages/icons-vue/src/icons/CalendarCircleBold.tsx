// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarCircleBoldSvg from '@ant-design/icons-svg/lib/asn/CalendarCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarCircleBold: CalendarCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarCircleBoldSvg}></AntdIcon>;
};

CalendarCircleBold.displayName = 'CalendarCircleBold';
CalendarCircleBold.inheritAttrs = false;
export default CalendarCircleBold;