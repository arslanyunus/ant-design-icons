// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Candle2BrokenSvg from '@ant-design/icons-svg/lib/asn/Candle2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Candle2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Candle2Broken: Candle2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Candle2BrokenSvg}></AntdIcon>;
};

Candle2Broken.displayName = 'Candle2Broken';
Candle2Broken.inheritAttrs = false;
export default Candle2Broken;