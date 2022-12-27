// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CupLinearSvg from '@ant-design/icons-svg/lib/asn/CupLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CupLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CupLinear: CupLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CupLinearSvg}></AntdIcon>;
};

CupLinear.displayName = 'CupLinear';
CupLinear.inheritAttrs = false;
export default CupLinear;