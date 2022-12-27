// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid2BrokenSvg from '@ant-design/icons-svg/lib/asn/Grid2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid2Broken: Grid2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid2BrokenSvg}></AntdIcon>;
};

Grid2Broken.displayName = 'Grid2Broken';
Grid2Broken.inheritAttrs = false;
export default Grid2Broken;