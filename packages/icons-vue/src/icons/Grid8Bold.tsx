// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid8BoldSvg from '@ant-design/icons-svg/lib/asn/Grid8Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid8BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid8Bold: Grid8BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid8BoldSvg}></AntdIcon>;
};

Grid8Bold.displayName = 'Grid8Bold';
Grid8Bold.inheritAttrs = false;
export default Grid8Bold;