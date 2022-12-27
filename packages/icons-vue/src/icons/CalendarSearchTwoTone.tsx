// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarSearchTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarSearchTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarSearchTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarSearchTwoTone: CalendarSearchTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarSearchTwoToneSvg}></AntdIcon>;
};

CalendarSearchTwoTone.displayName = 'CalendarSearchTwoTone';
CalendarSearchTwoTone.inheritAttrs = false;
export default CalendarSearchTwoTone;