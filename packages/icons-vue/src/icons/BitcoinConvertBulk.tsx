// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinConvertBulkSvg from '@ant-design/icons-svg/lib/asn/BitcoinConvertBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinConvertBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinConvertBulk: BitcoinConvertBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinConvertBulkSvg}></AntdIcon>;
};

BitcoinConvertBulk.displayName = 'BitcoinConvertBulk';
BitcoinConvertBulk.inheritAttrs = false;
export default BitcoinConvertBulk;