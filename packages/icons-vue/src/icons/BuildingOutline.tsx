// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingOutlineSvg from '@ant-design/icons-svg/lib/asn/BuildingOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingOutline: BuildingOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingOutlineSvg}></AntdIcon>;
};

BuildingOutline.displayName = 'BuildingOutline';
BuildingOutline.inheritAttrs = false;
export default BuildingOutline;