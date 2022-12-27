// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MusicCircleLinearSvg from '@ant-design/icons-svg/lib/asn/MusicCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MusicCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MusicCircleLinear: MusicCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MusicCircleLinearSvg}></AntdIcon>;
};

MusicCircleLinear.displayName = 'MusicCircleLinear';
MusicCircleLinear.inheritAttrs = false;
export default MusicCircleLinear;