// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinConvertOutlineSvg from '@ant-design/icons-svg/lib/asn/BitcoinConvertOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinConvertOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinConvertOutline: BitcoinConvertOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinConvertOutlineSvg}></AntdIcon>;
};

BitcoinConvertOutline.displayName = 'BitcoinConvertOutline';
BitcoinConvertOutline.inheritAttrs = false;
export default BitcoinConvertOutline;