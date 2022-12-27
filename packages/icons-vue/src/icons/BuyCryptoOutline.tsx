// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuyCryptoOutlineSvg from '@ant-design/icons-svg/lib/asn/BuyCryptoOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuyCryptoOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuyCryptoOutline: BuyCryptoOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuyCryptoOutlineSvg}></AntdIcon>;
};

BuyCryptoOutline.displayName = 'BuyCryptoOutline';
BuyCryptoOutline.inheritAttrs = false;
export default BuyCryptoOutline;