// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarAddTwoTone: CalendarAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarAddTwoToneSvg}></AntdIcon>;
};

CalendarAddTwoTone.displayName = 'CalendarAddTwoTone';
CalendarAddTwoTone.inheritAttrs = false;
export default CalendarAddTwoTone;