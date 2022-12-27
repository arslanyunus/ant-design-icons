// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoinLinearSvg from '@ant-design/icons-svg/lib/asn/CoinLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoinLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoinLinear: CoinLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoinLinearSvg}></AntdIcon>;
};

CoinLinear.displayName = 'CoinLinear';
CoinLinear.inheritAttrs = false;
export default CoinLinear;