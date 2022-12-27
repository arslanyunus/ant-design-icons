// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinCardBrokenSvg from '@ant-design/icons-svg/lib/asn/BitcoinCardBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinCardBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinCardBroken: BitcoinCardBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinCardBrokenSvg}></AntdIcon>;
};

BitcoinCardBroken.displayName = 'BitcoinCardBroken';
BitcoinCardBroken.inheritAttrs = false;
export default BitcoinCardBroken;