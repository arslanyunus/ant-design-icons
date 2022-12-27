// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LevelBrokenSvg from '@ant-design/icons-svg/lib/asn/LevelBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LevelBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LevelBroken: LevelBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LevelBrokenSvg}></AntdIcon>;
};

LevelBroken.displayName = 'LevelBroken';
LevelBroken.inheritAttrs = false;
export default LevelBroken;