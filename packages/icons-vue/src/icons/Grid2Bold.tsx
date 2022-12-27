// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid2BoldSvg from '@ant-design/icons-svg/lib/asn/Grid2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid2Bold: Grid2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid2BoldSvg}></AntdIcon>;
};

Grid2Bold.displayName = 'Grid2Bold';
Grid2Bold.inheritAttrs = false;
export default Grid2Bold;