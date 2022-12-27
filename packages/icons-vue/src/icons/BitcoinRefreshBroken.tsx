// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinRefreshBrokenSvg from '@ant-design/icons-svg/lib/asn/BitcoinRefreshBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinRefreshBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinRefreshBroken: BitcoinRefreshBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinRefreshBrokenSvg}></AntdIcon>;
};

BitcoinRefreshBroken.displayName = 'BitcoinRefreshBroken';
BitcoinRefreshBroken.inheritAttrs = false;
export default BitcoinRefreshBroken;