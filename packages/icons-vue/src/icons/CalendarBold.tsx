// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarBoldSvg from '@ant-design/icons-svg/lib/asn/CalendarBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarBold: CalendarBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarBoldSvg}></AntdIcon>;
};

CalendarBold.displayName = 'CalendarBold';
CalendarBold.inheritAttrs = false;
export default CalendarBold;