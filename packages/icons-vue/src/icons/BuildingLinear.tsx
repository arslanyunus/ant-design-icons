// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingLinearSvg from '@ant-design/icons-svg/lib/asn/BuildingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingLinear: BuildingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingLinearSvg}></AntdIcon>;
};

BuildingLinear.displayName = 'BuildingLinear';
BuildingLinear.inheritAttrs = false;
export default BuildingLinear;