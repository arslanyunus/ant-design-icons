// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid9LinearSvg from '@ant-design/icons-svg/lib/asn/Grid9Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid9LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid9Linear: Grid9LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid9LinearSvg}></AntdIcon>;
};

Grid9Linear.displayName = 'Grid9Linear';
Grid9Linear.inheritAttrs = false;
export default Grid9Linear;