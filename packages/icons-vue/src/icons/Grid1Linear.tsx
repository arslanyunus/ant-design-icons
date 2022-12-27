// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid1LinearSvg from '@ant-design/icons-svg/lib/asn/Grid1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid1Linear: Grid1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid1LinearSvg}></AntdIcon>;
};

Grid1Linear.displayName = 'Grid1Linear';
Grid1Linear.inheritAttrs = false;
export default Grid1Linear;