// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingsBrokenSvg from '@ant-design/icons-svg/lib/asn/BuildingsBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingsBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingsBroken: BuildingsBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingsBrokenSvg}></AntdIcon>;
};

BuildingsBroken.displayName = 'BuildingsBroken';
BuildingsBroken.inheritAttrs = false;
export default BuildingsBroken;