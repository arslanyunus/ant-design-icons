// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar2OutlineSvg from '@ant-design/icons-svg/lib/asn/Calendar2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar2Outline: Calendar2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar2OutlineSvg}></AntdIcon>;
};

Calendar2Outline.displayName = 'Calendar2Outline';
Calendar2Outline.inheritAttrs = false;
export default Calendar2Outline;