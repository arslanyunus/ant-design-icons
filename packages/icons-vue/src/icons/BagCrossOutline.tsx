// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagCrossOutlineSvg from '@ant-design/icons-svg/lib/asn/BagCrossOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagCrossOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagCrossOutline: BagCrossOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagCrossOutlineSvg}></AntdIcon>;
};

BagCrossOutline.displayName = 'BagCrossOutline';
BagCrossOutline.inheritAttrs = false;
export default BagCrossOutline;