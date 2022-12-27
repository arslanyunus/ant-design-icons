// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid2TwoToneSvg from '@ant-design/icons-svg/lib/asn/Grid2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid2TwoTone: Grid2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid2TwoToneSvg}></AntdIcon>;
};

Grid2TwoTone.displayName = 'Grid2TwoTone';
Grid2TwoTone.inheritAttrs = false;
export default Grid2TwoTone;