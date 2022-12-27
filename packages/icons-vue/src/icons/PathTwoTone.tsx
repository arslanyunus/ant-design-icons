// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PathTwoToneSvg from '@ant-design/icons-svg/lib/asn/PathTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PathTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PathTwoTone: PathTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PathTwoToneSvg}></AntdIcon>;
};

PathTwoTone.displayName = 'PathTwoTone';
PathTwoTone.inheritAttrs = false;
export default PathTwoTone;