// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinRefreshTwoToneSvg from '@ant-design/icons-svg/lib/asn/BitcoinRefreshTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinRefreshTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinRefreshTwoTone: BitcoinRefreshTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinRefreshTwoToneSvg}></AntdIcon>;
};

BitcoinRefreshTwoTone.displayName = 'BitcoinRefreshTwoTone';
BitcoinRefreshTwoTone.inheritAttrs = false;
export default BitcoinRefreshTwoTone;