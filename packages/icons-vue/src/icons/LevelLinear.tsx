// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LevelLinearSvg from '@ant-design/icons-svg/lib/asn/LevelLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LevelLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LevelLinear: LevelLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LevelLinearSvg}></AntdIcon>;
};

LevelLinear.displayName = 'LevelLinear';
LevelLinear.inheritAttrs = false;
export default LevelLinear;