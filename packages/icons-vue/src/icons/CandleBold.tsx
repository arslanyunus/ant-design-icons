// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CandleBoldSvg from '@ant-design/icons-svg/lib/asn/CandleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CandleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CandleBold: CandleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CandleBoldSvg}></AntdIcon>;
};

CandleBold.displayName = 'CandleBold';
CandleBold.inheritAttrs = false;
export default CandleBold;