// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid2OutlineSvg from '@ant-design/icons-svg/lib/asn/Grid2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid2Outline: Grid2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid2OutlineSvg}></AntdIcon>;
};

Grid2Outline.displayName = 'Grid2Outline';
Grid2Outline.inheritAttrs = false;
export default Grid2Outline;