// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoinTwoToneSvg from '@ant-design/icons-svg/lib/asn/CoinTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoinTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoinTwoTone: CoinTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoinTwoToneSvg}></AntdIcon>;
};

CoinTwoTone.displayName = 'CoinTwoTone';
CoinTwoTone.inheritAttrs = false;
export default CoinTwoTone;