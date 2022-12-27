// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingsBoldSvg from '@ant-design/icons-svg/lib/asn/BuildingsBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingsBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingsBold: BuildingsBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingsBoldSvg}></AntdIcon>;
};

BuildingsBold.displayName = 'BuildingsBold';
BuildingsBold.inheritAttrs = false;
export default BuildingsBold;