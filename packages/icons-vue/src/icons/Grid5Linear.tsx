// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid5LinearSvg from '@ant-design/icons-svg/lib/asn/Grid5Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid5LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid5Linear: Grid5LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid5LinearSvg}></AntdIcon>;
};

Grid5Linear.displayName = 'Grid5Linear';
Grid5Linear.inheritAttrs = false;
export default Grid5Linear;