// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Candle2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Candle2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Candle2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Candle2TwoTone: Candle2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Candle2TwoToneSvg}></AntdIcon>;
};

Candle2TwoTone.displayName = 'Candle2TwoTone';
Candle2TwoTone.inheritAttrs = false;
export default Candle2TwoTone;