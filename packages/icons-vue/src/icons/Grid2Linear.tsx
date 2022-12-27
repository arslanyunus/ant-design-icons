// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid2LinearSvg from '@ant-design/icons-svg/lib/asn/Grid2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid2Linear: Grid2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid2LinearSvg}></AntdIcon>;
};

Grid2Linear.displayName = 'Grid2Linear';
Grid2Linear.inheritAttrs = false;
export default Grid2Linear;