// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarSearchBoldSvg from '@ant-design/icons-svg/lib/asn/CalendarSearchBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarSearchBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarSearchBold: CalendarSearchBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarSearchBoldSvg}></AntdIcon>;
};

CalendarSearchBold.displayName = 'CalendarSearchBold';
CalendarSearchBold.inheritAttrs = false;
export default CalendarSearchBold;