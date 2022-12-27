// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuyCryptoLinearSvg from '@ant-design/icons-svg/lib/asn/BuyCryptoLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuyCryptoLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuyCryptoLinear: BuyCryptoLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuyCryptoLinearSvg}></AntdIcon>;
};

BuyCryptoLinear.displayName = 'BuyCryptoLinear';
BuyCryptoLinear.inheritAttrs = false;
export default BuyCryptoLinear;