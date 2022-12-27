// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MedalBoldSvg from '@ant-design/icons-svg/lib/asn/MedalBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MedalBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MedalBold: MedalBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MedalBoldSvg}></AntdIcon>;
};

MedalBold.displayName = 'MedalBold';
MedalBold.inheritAttrs = false;
export default MedalBold;