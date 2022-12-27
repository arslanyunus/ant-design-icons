// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoinBrokenSvg from '@ant-design/icons-svg/lib/asn/CoinBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoinBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoinBroken: CoinBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoinBrokenSvg}></AntdIcon>;
};

CoinBroken.displayName = 'CoinBroken';
CoinBroken.inheritAttrs = false;
export default CoinBroken;