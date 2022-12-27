// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Candle2OutlineSvg from '@ant-design/icons-svg/lib/asn/Candle2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Candle2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Candle2Outline: Candle2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Candle2OutlineSvg}></AntdIcon>;
};

Candle2Outline.displayName = 'Candle2Outline';
Candle2Outline.inheritAttrs = false;
export default Candle2Outline;