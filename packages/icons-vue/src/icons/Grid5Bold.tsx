// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid5BoldSvg from '@ant-design/icons-svg/lib/asn/Grid5Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid5BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid5Bold: Grid5BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid5BoldSvg}></AntdIcon>;
};

Grid5Bold.displayName = 'Grid5Bold';
Grid5Bold.inheritAttrs = false;
export default Grid5Bold;