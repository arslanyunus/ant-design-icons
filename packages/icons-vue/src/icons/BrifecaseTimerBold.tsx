// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseTimerBoldSvg from '@ant-design/icons-svg/lib/asn/BrifecaseTimerBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseTimerBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseTimerBold: BrifecaseTimerBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseTimerBoldSvg}></AntdIcon>;
};

BrifecaseTimerBold.displayName = 'BrifecaseTimerBold';
BrifecaseTimerBold.inheritAttrs = false;
export default BrifecaseTimerBold;