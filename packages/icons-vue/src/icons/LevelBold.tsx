// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LevelBoldSvg from '@ant-design/icons-svg/lib/asn/LevelBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LevelBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LevelBold: LevelBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LevelBoldSvg}></AntdIcon>;
};

LevelBold.displayName = 'LevelBold';
LevelBold.inheritAttrs = false;
export default LevelBold;