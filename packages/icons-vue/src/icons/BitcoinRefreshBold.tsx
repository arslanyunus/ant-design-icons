// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinRefreshBoldSvg from '@ant-design/icons-svg/lib/asn/BitcoinRefreshBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinRefreshBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinRefreshBold: BitcoinRefreshBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinRefreshBoldSvg}></AntdIcon>;
};

BitcoinRefreshBold.displayName = 'BitcoinRefreshBold';
BitcoinRefreshBold.inheritAttrs = false;
export default BitcoinRefreshBold;