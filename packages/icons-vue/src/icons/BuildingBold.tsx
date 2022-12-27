// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingBoldSvg from '@ant-design/icons-svg/lib/asn/BuildingBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingBold: BuildingBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingBoldSvg}></AntdIcon>;
};

BuildingBold.displayName = 'BuildingBold';
BuildingBold.inheritAttrs = false;
export default BuildingBold;