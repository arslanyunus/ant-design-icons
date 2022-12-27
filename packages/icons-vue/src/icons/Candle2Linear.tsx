// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Candle2LinearSvg from '@ant-design/icons-svg/lib/asn/Candle2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Candle2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Candle2Linear: Candle2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Candle2LinearSvg}></AntdIcon>;
};

Candle2Linear.displayName = 'Candle2Linear';
Candle2Linear.inheritAttrs = false;
export default Candle2Linear;