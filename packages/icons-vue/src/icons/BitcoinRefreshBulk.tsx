// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinRefreshBulkSvg from '@ant-design/icons-svg/lib/asn/BitcoinRefreshBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinRefreshBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinRefreshBulk: BitcoinRefreshBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinRefreshBulkSvg}></AntdIcon>;
};

BitcoinRefreshBulk.displayName = 'BitcoinRefreshBulk';
BitcoinRefreshBulk.inheritAttrs = false;
export default BitcoinRefreshBulk;