// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTimerBoldSvg from '@ant-design/icons-svg/lib/asn/BagTimerBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTimerBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTimerBold: BagTimerBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTimerBoldSvg}></AntdIcon>;
};

BagTimerBold.displayName = 'BagTimerBold';
BagTimerBold.inheritAttrs = false;
export default BagTimerBold;