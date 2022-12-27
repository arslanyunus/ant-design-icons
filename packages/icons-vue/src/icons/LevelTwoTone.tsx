// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LevelTwoToneSvg from '@ant-design/icons-svg/lib/asn/LevelTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LevelTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LevelTwoTone: LevelTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LevelTwoToneSvg}></AntdIcon>;
};

LevelTwoTone.displayName = 'LevelTwoTone';
LevelTwoTone.inheritAttrs = false;
export default LevelTwoTone;