// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinCardTwoToneSvg from '@ant-design/icons-svg/lib/asn/BitcoinCardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinCardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinCardTwoTone: BitcoinCardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinCardTwoToneSvg}></AntdIcon>;
};

BitcoinCardTwoTone.displayName = 'BitcoinCardTwoTone';
BitcoinCardTwoTone.inheritAttrs = false;
export default BitcoinCardTwoTone;