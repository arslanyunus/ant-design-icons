// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinCardBoldSvg from '@ant-design/icons-svg/lib/asn/BitcoinCardBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinCardBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinCardBold: BitcoinCardBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinCardBoldSvg}></AntdIcon>;
};

BitcoinCardBold.displayName = 'BitcoinCardBold';
BitcoinCardBold.inheritAttrs = false;
export default BitcoinCardBold;