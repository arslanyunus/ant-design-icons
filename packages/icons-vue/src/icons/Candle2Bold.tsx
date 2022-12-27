// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Candle2BoldSvg from '@ant-design/icons-svg/lib/asn/Candle2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Candle2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Candle2Bold: Candle2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Candle2BoldSvg}></AntdIcon>;
};

Candle2Bold.displayName = 'Candle2Bold';
Candle2Bold.inheritAttrs = false;
export default Candle2Bold;