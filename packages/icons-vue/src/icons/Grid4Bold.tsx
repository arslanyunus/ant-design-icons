// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid4BoldSvg from '@ant-design/icons-svg/lib/asn/Grid4Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid4BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid4Bold: Grid4BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid4BoldSvg}></AntdIcon>;
};

Grid4Bold.displayName = 'Grid4Bold';
Grid4Bold.inheritAttrs = false;
export default Grid4Bold;