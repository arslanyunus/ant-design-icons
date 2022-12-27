// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarRemoveTwoTone: CalendarRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarRemoveTwoToneSvg}></AntdIcon>;
};

CalendarRemoveTwoTone.displayName = 'CalendarRemoveTwoTone';
CalendarRemoveTwoTone.inheritAttrs = false;
export default CalendarRemoveTwoTone;