// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagOutlineSvg from '@ant-design/icons-svg/lib/asn/BagOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagOutline: BagOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagOutlineSvg}></AntdIcon>;
};

BagOutline.displayName = 'BagOutline';
BagOutline.inheritAttrs = false;
export default BagOutline;