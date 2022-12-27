// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinCardLinearSvg from '@ant-design/icons-svg/lib/asn/BitcoinCardLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinCardLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinCardLinear: BitcoinCardLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinCardLinearSvg}></AntdIcon>;
};

BitcoinCardLinear.displayName = 'BitcoinCardLinear';
BitcoinCardLinear.inheritAttrs = false;
export default BitcoinCardLinear;