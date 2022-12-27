// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinRefreshOutlineSvg from '@ant-design/icons-svg/lib/asn/BitcoinRefreshOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinRefreshOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinRefreshOutline: BitcoinRefreshOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinRefreshOutlineSvg}></AntdIcon>;
};

BitcoinRefreshOutline.displayName = 'BitcoinRefreshOutline';
BitcoinRefreshOutline.inheritAttrs = false;
export default BitcoinRefreshOutline;