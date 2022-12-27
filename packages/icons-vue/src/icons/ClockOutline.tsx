// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ClockOutlineSvg from '@ant-design/icons-svg/lib/asn/ClockOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ClockOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ClockOutline: ClockOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ClockOutlineSvg}></AntdIcon>;
};

ClockOutline.displayName = 'ClockOutline';
ClockOutline.inheritAttrs = false;
export default ClockOutline;