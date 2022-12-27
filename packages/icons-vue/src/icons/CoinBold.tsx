// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoinBoldSvg from '@ant-design/icons-svg/lib/asn/CoinBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoinBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoinBold: CoinBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoinBoldSvg}></AntdIcon>;
};

CoinBold.displayName = 'CoinBold';
CoinBold.inheritAttrs = false;
export default CoinBold;