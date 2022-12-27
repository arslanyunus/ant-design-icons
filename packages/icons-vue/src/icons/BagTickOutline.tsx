// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BagTickOutlineSvg from '@ant-design/icons-svg/lib/asn/BagTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BagTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BagTickOutline: BagTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BagTickOutlineSvg}></AntdIcon>;
};

BagTickOutline.displayName = 'BagTickOutline';
BagTickOutline.inheritAttrs = false;
export default BagTickOutline;