// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CoinOutlineSvg from '@ant-design/icons-svg/lib/asn/CoinOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CoinOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CoinOutline: CoinOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CoinOutlineSvg}></AntdIcon>;
};

CoinOutline.displayName = 'CoinOutline';
CoinOutline.inheritAttrs = false;
export default CoinOutline;