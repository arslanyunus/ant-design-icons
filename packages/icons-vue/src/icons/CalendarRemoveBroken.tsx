// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/CalendarRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarRemoveBroken: CalendarRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarRemoveBrokenSvg}></AntdIcon>;
};

CalendarRemoveBroken.displayName = 'CalendarRemoveBroken';
CalendarRemoveBroken.inheritAttrs = false;
export default CalendarRemoveBroken;