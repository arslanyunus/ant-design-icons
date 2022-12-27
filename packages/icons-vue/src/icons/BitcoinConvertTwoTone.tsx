// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinConvertTwoToneSvg from '@ant-design/icons-svg/lib/asn/BitcoinConvertTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinConvertTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinConvertTwoTone: BitcoinConvertTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinConvertTwoToneSvg}></AntdIcon>;
};

BitcoinConvertTwoTone.displayName = 'BitcoinConvertTwoTone';
BitcoinConvertTwoTone.inheritAttrs = false;
export default BitcoinConvertTwoTone;