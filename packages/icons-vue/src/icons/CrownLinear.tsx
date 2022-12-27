// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CrownLinearSvg from '@ant-design/icons-svg/lib/asn/CrownLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CrownLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CrownLinear: CrownLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CrownLinearSvg}></AntdIcon>;
};

CrownLinear.displayName = 'CrownLinear';
CrownLinear.inheritAttrs = false;
export default CrownLinear;