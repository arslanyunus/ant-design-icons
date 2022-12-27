// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar2BoldSvg from '@ant-design/icons-svg/lib/asn/Calendar2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar2Bold: Calendar2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar2BoldSvg}></AntdIcon>;
};

Calendar2Bold.displayName = 'Calendar2Bold';
Calendar2Bold.inheritAttrs = false;
export default Calendar2Bold;