// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarRemoveBoldSvg from '@ant-design/icons-svg/lib/asn/CalendarRemoveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarRemoveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarRemoveBold: CalendarRemoveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarRemoveBoldSvg}></AntdIcon>;
};

CalendarRemoveBold.displayName = 'CalendarRemoveBold';
CalendarRemoveBold.inheritAttrs = false;
export default CalendarRemoveBold;