// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CalendarRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/CalendarRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CalendarRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CalendarRemoveBulk: CalendarRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CalendarRemoveBulkSvg}></AntdIcon>;
};

CalendarRemoveBulk.displayName = 'CalendarRemoveBulk';
CalendarRemoveBulk.inheritAttrs = false;
export default CalendarRemoveBulk;