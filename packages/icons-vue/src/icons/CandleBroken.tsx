// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CandleBrokenSvg from '@ant-design/icons-svg/lib/asn/CandleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CandleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CandleBroken: CandleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CandleBrokenSvg}></AntdIcon>;
};

CandleBroken.displayName = 'CandleBroken';
CandleBroken.inheritAttrs = false;
export default CandleBroken;