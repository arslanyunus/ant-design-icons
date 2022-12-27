// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinCardBulkSvg from '@ant-design/icons-svg/lib/asn/BitcoinCardBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinCardBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinCardBulk: BitcoinCardBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinCardBulkSvg}></AntdIcon>;
};

BitcoinCardBulk.displayName = 'BitcoinCardBulk';
BitcoinCardBulk.inheritAttrs = false;
export default BitcoinCardBulk;