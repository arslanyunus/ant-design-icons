// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BuildingsTwoToneSvg from '@ant-design/icons-svg/lib/asn/BuildingsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BuildingsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BuildingsTwoTone: BuildingsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BuildingsTwoToneSvg}></AntdIcon>;
};

BuildingsTwoTone.displayName = 'BuildingsTwoTone';
BuildingsTwoTone.inheritAttrs = false;
export default BuildingsTwoTone;