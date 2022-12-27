// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingsLinearSvg from '@ant-design/icons-svg/lib/asn/BuildingsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingsLinear: BuildingsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingsLinearSvg}></AntdIcon>;
};

BuildingsLinear.displayName = 'BuildingsLinear';
BuildingsLinear.inheritAttrs = false;
export default BuildingsLinear;