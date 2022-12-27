// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTimerOutlineSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTimerOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTimerOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTimerOutline: BrifecaseTimerOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTimerOutlineSvg}></AntdIcon>;
};

BrifecaseTimerOutline.displayName = 'BrifecaseTimerOutline';
BrifecaseTimerOutline.inheritAttrs = false;
export default BrifecaseTimerOutline;