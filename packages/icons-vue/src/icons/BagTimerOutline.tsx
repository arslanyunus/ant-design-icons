// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTimerOutlineSvg from '@ant-design/icons-svg/lib/asn/BagTimerOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTimerOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTimerOutline: BagTimerOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTimerOutlineSvg}></AntdIcon>;
};

BagTimerOutline.displayName = 'BagTimerOutline';
BagTimerOutline.inheritAttrs = false;
export default BagTimerOutline;