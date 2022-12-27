// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid3TwoToneSvg from '@ant-design/icons-svg/lib/asn/Grid3TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid3TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid3TwoTone: Grid3TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid3TwoToneSvg}></AntdIcon>;
};

Grid3TwoTone.displayName = 'Grid3TwoTone';
Grid3TwoTone.inheritAttrs = false;
export default Grid3TwoTone;