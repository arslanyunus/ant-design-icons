// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid6BoldSvg from '@ant-design/icons-svg/lib/asn/Grid6Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid6BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid6Bold: Grid6BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid6BoldSvg}></AntdIcon>;
};

Grid6Bold.displayName = 'Grid6Bold';
Grid6Bold.inheritAttrs = false;
export default Grid6Bold;