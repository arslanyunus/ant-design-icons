// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BitcoinConvertLinearSvg from '@ant-design/icons-svg/lib/asn/BitcoinConvertLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BitcoinConvertLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BitcoinConvertLinear: BitcoinConvertLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BitcoinConvertLinearSvg}></AntdIcon>;
};

BitcoinConvertLinear.displayName = 'BitcoinConvertLinear';
BitcoinConvertLinear.inheritAttrs = false;
export default BitcoinConvertLinear;