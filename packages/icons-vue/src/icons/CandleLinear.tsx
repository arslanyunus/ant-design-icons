// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CandleLinearSvg from '@ant-design/icons-svg/lib/asn/CandleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CandleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CandleLinear: CandleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CandleLinearSvg}></AntdIcon>;
};

CandleLinear.displayName = 'CandleLinear';
CandleLinear.inheritAttrs = false;
export default CandleLinear;