// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuyCryptoTwoToneSvg from '@ant-design/icons-svg/lib/asn/BuyCryptoTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuyCryptoTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuyCryptoTwoTone: BuyCryptoTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuyCryptoTwoToneSvg}></AntdIcon>;
};

BuyCryptoTwoTone.displayName = 'BuyCryptoTwoTone';
BuyCryptoTwoTone.inheritAttrs = false;
export default BuyCryptoTwoTone;