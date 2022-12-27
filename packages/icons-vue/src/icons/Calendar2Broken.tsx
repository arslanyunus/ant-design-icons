// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Calendar2BrokenSvg from '@ant-design/icons-svg/lib/asn/Calendar2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Calendar2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Calendar2Broken: Calendar2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Calendar2BrokenSvg}></AntdIcon>;
};

Calendar2Broken.displayName = 'Calendar2Broken';
Calendar2Broken.inheritAttrs = false;
export default Calendar2Broken;