// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinConvertBrokenSvg from '@ant-design/icons-svg/lib/asn/BitcoinConvertBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinConvertBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinConvertBroken: BitcoinConvertBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinConvertBrokenSvg}></AntdIcon>;
};

BitcoinConvertBroken.displayName = 'BitcoinConvertBroken';
BitcoinConvertBroken.inheritAttrs = false;
export default BitcoinConvertBroken;