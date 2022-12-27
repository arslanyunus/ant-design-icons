// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BulidingBoldSvg from '@ant-design/icons-svg/lib/asn/BulidingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BulidingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BulidingBold: BulidingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BulidingBoldSvg}></AntdIcon>;
};

BulidingBold.displayName = 'BulidingBold';
BulidingBold.inheritAttrs = false;
export default BulidingBold;