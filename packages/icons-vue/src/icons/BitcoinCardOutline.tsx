// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinCardOutlineSvg from '@ant-design/icons-svg/lib/asn/BitcoinCardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinCardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinCardOutline: BitcoinCardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinCardOutlineSvg}></AntdIcon>;
};

BitcoinCardOutline.displayName = 'BitcoinCardOutline';
BitcoinCardOutline.inheritAttrs = false;
export default BitcoinCardOutline;