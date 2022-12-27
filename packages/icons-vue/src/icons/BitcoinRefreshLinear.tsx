// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinRefreshLinearSvg from '@ant-design/icons-svg/lib/asn/BitcoinRefreshLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinRefreshLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinRefreshLinear: BitcoinRefreshLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinRefreshLinearSvg}></AntdIcon>;
};

BitcoinRefreshLinear.displayName = 'BitcoinRefreshLinear';
BitcoinRefreshLinear.inheritAttrs = false;
export default BitcoinRefreshLinear;