// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinConvertBoldSvg from '@ant-design/icons-svg/lib/asn/BitcoinConvertBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinConvertBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinConvertBold: BitcoinConvertBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinConvertBoldSvg}></AntdIcon>;
};

BitcoinConvertBold.displayName = 'BitcoinConvertBold';
BitcoinConvertBold.inheritAttrs = false;
export default BitcoinConvertBold;