// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingBrokenSvg from '@ant-design/icons-svg/lib/asn/BuildingBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingBroken: BuildingBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingBrokenSvg}></AntdIcon>;
};

BuildingBroken.displayName = 'BuildingBroken';
BuildingBroken.inheritAttrs = false;
export default BuildingBroken;