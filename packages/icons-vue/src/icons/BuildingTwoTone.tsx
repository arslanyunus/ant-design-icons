// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingTwoToneSvg from '@ant-design/icons-svg/lib/asn/BuildingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingTwoTone: BuildingTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingTwoToneSvg}></AntdIcon>;
};

BuildingTwoTone.displayName = 'BuildingTwoTone';
BuildingTwoTone.inheritAttrs = false;
export default BuildingTwoTone;