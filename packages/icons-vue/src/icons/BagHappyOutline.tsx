// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagHappyOutlineSvg from '@ant-design/icons-svg/lib/asn/BagHappyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagHappyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagHappyOutline: BagHappyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagHappyOutlineSvg}></AntdIcon>;
};

BagHappyOutline.displayName = 'BagHappyOutline';
BagHappyOutline.inheritAttrs = false;
export default BagHappyOutline;